import AnimBase from "./AnimBase";
import AnimFrame from "./AnimFrame";
import Model from "./Model";
import FileLoader from "./FileLoader";
import ModelViewer from "./ModelViewer";

const LocShapeSuffixMap = {
  _1: 0,
  _2: 1,
  _3: 2,
  _4: 3,
  _q: 4,
  _w: 5,
  _r: 6,
  _e: 7,
  _t: 8,
  _5: 9,
  _8: 10,
  _9: 11,
  _a: 12,
  _s: 13,
  _d: 14,
  _f: 15,
  _g: 16,
  _h: 17,
  _z: 18,
  _x: 19,
  _c: 20,
  _v: 21,
  _0: 22,
};

const orderedLocShapeSuffixStrings: string[] = [];
const tempSuffixMapForOrdering: { [key: number]: string } = {};
for (const key in LocShapeSuffixMap) {
  tempSuffixMapForOrdering[
    LocShapeSuffixMap[key as keyof typeof LocShapeSuffixMap]
  ] = key;
}
for (let i = 0; i <= 22; i++) {
  if (tempSuffixMapForOrdering[i]) {
    orderedLocShapeSuffixStrings.push(tempSuffixMapForOrdering[i]);
  }
}

function applyFilterToList(
  listElement: HTMLElement,
  searchTerm: string,
  itemSelector: string,
  initialEmptyListHTML: string,
  noResultsText: string
) {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const items = listElement.querySelectorAll(itemSelector);
  let visibleCount = 0;

  items.forEach((item) => {
    const textContent = item.textContent || "";
    if (textContent.toLowerCase().includes(lowerSearchTerm)) {
      (item as HTMLElement).style.display = "";
      visibleCount++;
    } else {
      (item as HTMLElement).style.display = "none";
    }
  });

  let messageElement = listElement.querySelector(
    ".list-message"
  ) as HTMLElement;

  if (!messageElement) {
    messageElement = document.createElement("div");
    messageElement.className = itemSelector.startsWith(".model-item")
      ? "model-item list-message"
      : "label-item list-message";

    const firstDataItem = listElement.querySelector(itemSelector);
    if (firstDataItem) {
      listElement.insertBefore(messageElement, firstDataItem);
    } else {
      listElement.appendChild(messageElement);
    }
  }

  messageElement.style.display = "block";

  if (items.length === 0) {
    messageElement.innerHTML = initialEmptyListHTML;
  } else if (visibleCount === 0 && searchTerm) {
    messageElement.innerHTML = `<span>${noResultsText} for "${searchTerm}"</span>`;
  } else if (visibleCount === 0 && !searchTerm && items.length > 0) {
    messageElement.innerHTML = initialEmptyListHTML;
  } else {
    messageElement.style.display = "none";
  }
}

export default class App {
  container: HTMLElement | null;
  loader: FileLoader;
  viewer: ModelViewer;
  currentAnimation: {
    modelRef: any;
    seqId: string | null;
    seqData: any;
    frameIndex: number;
    timerId: NodeJS.Timeout | null;
  };
  activeTransformEditor: {
    element: HTMLElement | null;
    animFrame: any;
    transformIndex: number;
    parentElement: HTMLElement | null;
  };
  activeNewTransformForm: {
    baseGroupSelect: HTMLSelectElement | null;
    xInput: HTMLInputElement | null;
    yInput: HTMLInputElement | null;
    zInput: HTMLInputElement | null;
    affectedInfoDiv: HTMLElement | null;
  };
  currentSelectedAnimFrameInstance: any;
  loopSequenceCheckbox: HTMLInputElement | null;
  modelSearchInput: HTMLInputElement;
  seqSearchInput: HTMLInputElement;
  exportModelButton: HTMLButtonElement | null;
  changeFaceLabels: HTMLInputElement | null;
  changeVertexLabels: HTMLInputElement | null;

  constructor() {
    this.container = document.getElementById("container");
    this.loader = new FileLoader();
    this.viewer = new ModelViewer(this.container!, this.loader);
    this.currentAnimation = {
      modelRef: null,
      seqId: null,
      seqData: null,
      frameIndex: 0,
      timerId: null,
    };
    this.activeTransformEditor = {
      element: null,
      animFrame: null,
      transformIndex: -1,
      parentElement: null,
    };
    this.activeNewTransformForm = {
      baseGroupSelect: null,
      xInput: null,
      yInput: null,
      zInput: null,
      affectedInfoDiv: null,
    };
    this.currentSelectedAnimFrameInstance = null;
    this.loopSequenceCheckbox = null;
    this.changeFaceLabels = null;
    this.changeVertexLabels = null;
    this.modelSearchInput = document.getElementById(
      "model-search"
    ) as HTMLInputElement;
    this.seqSearchInput = document.getElementById(
      "seq-search"
    ) as HTMLInputElement;
    this.exportModelButton = null;
    this.setupUI();
    this.setupFaceLabelUI();
    this.setupVertexLabelUI();
    this.initializeFaceLabelPanel();
    this.initializeVertexLabelPanel();
    this.initializeSeqListPanel();
    this.initializeAnimFrameListPanel();
    this.initializeAnimFrameDetailsPanel();
    this.setupSeqAndAnimFrameEventHandlers();
    this.modelSearchInput.addEventListener("input", () =>
      this.filterModelList()
    );
    this.seqSearchInput.addEventListener("input", () => this.filterSeqList());
  }

  filterModelList() {
    const modelList = document.getElementById("model-list")!;
    const searchTerm = this.modelSearchInput.value;
    const viewModeSelect = document.getElementById(
      "view-mode-select"
    ) as HTMLSelectElement;
    const selectedMode = viewModeSelect.value;

    let noItemsMsgHTML = `<span>No .ob2 models loaded</span>`;
    if (selectedMode === "npcs") {
      noItemsMsgHTML = `<span>No NPCs loaded</span>`;
    } else if (selectedMode === "objects") {
      noItemsMsgHTML = `<span>No Objects (.obj) loaded</span>`;
    } else if (selectedMode === "locations") {
      noItemsMsgHTML = `<span>No Locations (.loc) loaded</span>`;
    }

    applyFilterToList(
      modelList,
      searchTerm,
      ".model-item:not(.list-message)",
      noItemsMsgHTML,
      selectedMode === "models"
        ? "No models found"
        : selectedMode === "npcs"
        ? "No NPCs found"
        : selectedMode === "objects"
        ? "No Objects found"
        : selectedMode === "locations"
        ? "No Locations found"
        : "No items found"
    );
  }

  filterSeqList() {
    const list = document.getElementById("seq-list")!;
    const searchTerm = this.seqSearchInput.value;
    applyFilterToList(
      list,
      searchTerm,
      ".label-item:not(.list-message)",
      `<span>No SEQs available</span>`,
      "No sequences found"
    );
  }

  initializeAnimFrameDetailsPanel() {
    const panel = document.getElementById("animframe-details-panel")!;
    const clearDetailsBtn = document.getElementById(
      "clear-details"
    ) as HTMLButtonElement;
    const detailsContent = document.getElementById(
      "animframe-details-content"
    )!;
    const addTransformBtn = document.getElementById(
      "add-new-transform-btn"
    ) as HTMLButtonElement;
    const deleteTransformBtn = document.getElementById(
      "delete-transform-btn"
    ) as HTMLButtonElement;

    panel.style.display = "block";

    detailsContent.innerHTML =
      '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select an animation frame to view details.</span></div>';
    clearDetailsBtn.disabled = true;
    addTransformBtn.disabled = true;
    deleteTransformBtn.disabled = true;

    clearDetailsBtn.addEventListener("click", () => {
      if (clearDetailsBtn.disabled) return;
      this.hideNewTransformForm();
      this.clearTransformEditor();

      const renderer = this.viewer.getRenderer();
      if (renderer) {
        renderer.clearSpecificVertexHighlights();
        renderer.clearSpecificFaceHighlights();
      }

      this.currentSelectedAnimFrameInstance = null;
      this.updateExportFrameButtonState();
      clearDetailsBtn.disabled = true;
      const addTransformBtn = document.getElementById(
        "add-new-transform-btn"
      ) as HTMLButtonElement;
      if (addTransformBtn) addTransformBtn.disabled = true;

      const detailsContent = document.getElementById(
        "animframe-details-content"
      )!;
      detailsContent.querySelectorAll(".transform-group").forEach((el) => {
        (el as HTMLElement).style.backgroundColor = "#2a2a2a";
      });
    });

    addTransformBtn.addEventListener("click", () => {
      if (addTransformBtn.disabled) return;
      this.showNewTransformForm();
    });

    deleteTransformBtn.addEventListener("click", () => {
      if (deleteTransformBtn.disabled) return;
      this.handleDeleteSelectedTransform();
    });
  }

  clearTransformEditor() {
    if (this.activeTransformEditor.element) {
      this.activeTransformEditor.element.remove();
    }
    this.activeTransformEditor = {
      element: null,
      animFrame: null,
      transformIndex: -1,
      parentElement: null,
    };

    const deleteTransformBtn = document.getElementById(
      "delete-transform-btn"
    ) as HTMLButtonElement;
    deleteTransformBtn.disabled = true;
  }

  showTransformEditor(
    animFrame: any,
    transformIndex: number,
    parentElement: HTMLElement
  ) {
    this.clearTransformEditor();
    const deleteTransformBtn = document.getElementById(
      "delete-transform-btn"
    ) as HTMLButtonElement;
    const editorDiv = document.createElement("div");
    editorDiv.className = "transform-editor";

    const animBase = animFrame.base;
    let transformTypeName = `Unknown: ${transformIndex}`;
    let transformType = -1;

    if (
      animBase &&
      animBase.animTypes &&
      animFrame.bases &&
      transformIndex < animFrame.bases.length &&
      animFrame.bases[transformIndex] < animBase.animTypes.length
    ) {
      const baseIndexForThisTransform = animFrame.bases[transformIndex];
      transformType = animBase.animTypes[baseIndexForThisTransform];
      transformTypeName = this.getTransformTypeName(transformType);
    }

    editorDiv.innerHTML = `<h4>Edit Transform ${
      transformIndex + 1
    } (${transformTypeName})</h4>`;

    const currentValues = {
      x:
        animFrame.x && transformIndex < animFrame.x.length
          ? animFrame.x[transformIndex]
          : 0,
      y:
        animFrame.y && transformIndex < animFrame.y.length
          ? animFrame.y[transformIndex]
          : 0,
      z:
        animFrame.z && transformIndex < animFrame.z.length
          ? animFrame.z[transformIndex]
          : 0,
    };

    let axesToCreateInputsFor = ["x", "y", "z"];
    if (transformType === 5) {
      axesToCreateInputsFor = ["x"];
    }

    axesToCreateInputsFor.forEach((axis) => {
      const axisDiv = document.createElement("div");
      const label = document.createElement("label");
      label.htmlFor = `transform-edit-${axis}-${transformIndex}`;

      if (transformType === 5 && axis === "x") {
        label.textContent = `Alpha:`;
      } else {
        label.textContent = `${axis.toUpperCase()}:`;
      }

      let inputElement: HTMLInputElement;
      let valueDisplaySpan: HTMLSpanElement | undefined;

      if (transformType === 2 || (transformType === 5 && axis === "x")) {
        inputElement = document.createElement("input");
        inputElement.type = "range";
        inputElement.min = "0";
        inputElement.max = "255";
        inputElement.className = "transform-slider";

        valueDisplaySpan = document.createElement("span");
        valueDisplaySpan.className = "slider-value-display";
        valueDisplaySpan.textContent =
          currentValues[axis as keyof typeof currentValues].toString();

        inputElement.id = `transform-edit-${axis}-${transformIndex}`;
        inputElement.dataset.axis = axis;
        inputElement.value =
          currentValues[axis as keyof typeof currentValues].toString();

        inputElement.addEventListener("input", (event) => {
          const newValue = parseInt(
            (event.target as HTMLInputElement).value,
            10
          );
          if (!isNaN(newValue)) {
            if (animFrame[axis] && transformIndex < animFrame[axis].length) {
              animFrame[axis][transformIndex] = newValue;
            } else {
              console.warn(
                `Attempted to update transform out of bounds: axis ${axis}, index ${transformIndex}`
              );
            }
            valueDisplaySpan!.textContent = newValue.toString();
            this.refreshActiveAnimFrameDisplay();
          }
        });
      } else {
        inputElement = document.createElement("input");
        inputElement.type = "number";
        inputElement.id = `transform-edit-${axis}-${transformIndex}`;
        inputElement.dataset.axis = axis;
        inputElement.value =
          currentValues[axis as keyof typeof currentValues].toString();

        inputElement.addEventListener("input", (event) => {
          const newValue = parseFloat((event.target as HTMLInputElement).value);
          if (!isNaN(newValue)) {
            if (animFrame[axis] && transformIndex < animFrame[axis].length) {
              animFrame[axis][transformIndex] = newValue;
            } else {
              console.warn(
                `Attempted to update transform out of bounds: axis ${axis}, index ${transformIndex}`
              );
            }
            this.refreshActiveAnimFrameDisplay();
          }
        });
      }

      axisDiv.appendChild(label);
      axisDiv.appendChild(inputElement);
      if (valueDisplaySpan) {
        axisDiv.appendChild(valueDisplaySpan);
      }
      editorDiv.appendChild(axisDiv);
    });

    this.activeTransformEditor = {
      element: editorDiv,
      animFrame: animFrame,
      transformIndex: transformIndex,
      parentElement: parentElement,
    };

    parentElement.parentNode!.insertBefore(
      editorDiv,
      parentElement.nextSibling
    );

    deleteTransformBtn.disabled = false;
  }

  refreshActiveAnimFrameDisplay() {
    if (
      this.currentSelectedAnimFrameInstance &&
      this.currentSelectedAnimFrameInstance.id !== undefined
    ) {
      this.displaySingleAnimFrame(this.currentSelectedAnimFrameInstance.id);
    }
  }

  initializeSeqListPanel() {
    const seqListPanel = document.getElementById("seq-list-panel")!;
    this.loopSequenceCheckbox = document.getElementById(
      "loop-sequence-checkbox"
    ) as HTMLInputElement;

    seqListPanel.style.display = "block";
    this.filterSeqList();

    (document.getElementById("start-seq") as HTMLButtonElement).disabled = true;
    (document.getElementById("clear-seq") as HTMLButtonElement).disabled = true;
    this.loopSequenceCheckbox.disabled = true;
  }

  getTransformTypeName(type: number) {
    switch (type) {
      case 0:
        return "Set Pivot";
      case 1:
        return "Translate";
      case 2:
        return "Rotate";
      case 3:
        return "Scale";
      case 5:
        return "Alpha (Faces)";
      default:
        return `Unknown (${type})`;
    }
  }

  initializeAnimFrameListPanel() {
    const animFrameListPanel = document.getElementById("animframe-list-panel")!;
    const animFrameList = document.getElementById("animframe-list")!;
    const clearFramesBtn = document.getElementById(
      "clear-frames"
    ) as HTMLButtonElement;
    const exportFramesBtn = document.getElementById(
      "export-frame-btn"
    ) as HTMLButtonElement;

    animFrameListPanel.style.display = "block";
    animFrameList.innerHTML =
      '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select a SEQ to view frames</span></div>';

    exportFramesBtn.disabled = true;
    clearFramesBtn.disabled = true;

    clearFramesBtn.addEventListener("click", () => {
      if (clearFramesBtn.disabled) return;

      const renderer = this.viewer.getRenderer();
      const selectedModelId = renderer.selectedModel;

      if (selectedModelId) {
        const modelMeshes = renderer.modelMeshes.get(selectedModelId);
        if (modelMeshes) {
          const meshArray = Array.isArray(modelMeshes)
            ? modelMeshes
            : [modelMeshes];
          let modelToReset = null;

          for (const mesh of meshArray) {
            if (mesh && mesh.userData && mesh.userData.originalModel) {
              modelToReset = mesh.userData.originalModel;
              break;
            }
          }

          if (modelToReset) {
            modelToReset.resetToOriginal();
            renderer.updateMeshGeometry();
            renderer.updateVertexVisuals(selectedModelId);
          }
        }
      }
      this.currentSelectedAnimFrameInstance = null;
      this.updateAnimFrameDetailsUI(null);
      document
        .querySelectorAll("#animframe-list .label-item.selected")
        .forEach((el) => el.classList.remove("selected"));
    });

    exportFramesBtn.addEventListener("click", () => {
      if (exportFramesBtn.disabled) return;
      this.handleExportAnimFrame();
    });
  }

  setupSeqAndAnimFrameEventHandlers() {
    const startSeqBtn = document.getElementById(
      "start-seq"
    ) as HTMLButtonElement;
    const clearSeqBtn = document.getElementById(
      "clear-seq"
    ) as HTMLButtonElement;

    startSeqBtn.addEventListener("click", () => this.handleStartSequence());
    clearSeqBtn.addEventListener("click", () => this.handleClearSequence());
  }

  setupUI() {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    const status = document.getElementById("status")!;
    const vertexToggle = document.getElementById(
      "vertex-toggle"
    ) as HTMLButtonElement;
    const wireframeToggle = document.getElementById(
      "wireframe-toggle"
    ) as HTMLButtonElement;
    const editToggle = document.getElementById(
      "edit-toggle"
    ) as HTMLButtonElement;
    const viewModeSelect = document.getElementById(
      "view-mode-select"
    ) as HTMLSelectElement;
    this.exportModelButton = document.getElementById(
      "export-model-button"
    ) as HTMLButtonElement;

    fileInput.addEventListener("change", async (e) => {
      const target = e.target as HTMLInputElement;
      if (!target.files || target.files.length === 0) return;

      const loading = document.getElementById("loading")!;
      loading.style.display = "block";

      try {
        await this.loader.loadContentFiles(target.files);
        this.updateModelListUI();
        this.updateSeqListUI();
        status.textContent = `Found ${
          this.loader.getAvailableModels().length
        } .ob2 files`;
      } catch (error: any) {
        console.error("Error processing files:", error);
        status.textContent = `Error: ${error.message}`;
      } finally {
        loading.style.display = "none";
      }
    });

    vertexToggle.addEventListener("click", () => {
      const isActive = this.viewer.getRenderer().toggleVertexNumbers();
      vertexToggle.textContent = isActive
        ? "Hide Vertex Numbers"
        : "Show Vertex Numbers";
      vertexToggle.classList.toggle("active", isActive);
    });

    wireframeToggle.addEventListener("click", () => {
      const isActive = this.viewer.getRenderer().toggleWireframe();
      wireframeToggle.textContent = isActive
        ? "Hide Wireframe"
        : "Show Wireframe";
      wireframeToggle.classList.toggle("active", isActive);
    });

    editToggle.addEventListener("click", () => {
      const isActive = this.viewer.getRenderer().toggleEditMode();
      editToggle.textContent = isActive
        ? "Disable Vertex Editing"
        : "Enable Vertex Editing";
      editToggle.classList.toggle("active", isActive);
      this.updateVertexLabelUIState();
    });

    viewModeSelect.addEventListener("change", () => {
      this.updateModelListUI();
      this.updateExportButtonState();
    });

    this.exportModelButton.addEventListener("click", () =>
      this.handleExportModel()
    );
    this.updateExportButtonState();
  }

  updateExportButtonState() {
    if (this.exportModelButton) {
      const renderer = this.viewer.getRenderer();
      const selectedModelId = renderer.selectedModel;
      let modelInstanceExists = false;

      if (selectedModelId) {
        const modelMeshes = renderer.modelMeshes.get(selectedModelId);
        if (modelMeshes) {
          const meshArray = Array.isArray(modelMeshes)
            ? modelMeshes
            : [modelMeshes];
          modelInstanceExists =
            meshArray.length > 0 &&
            meshArray[0] &&
            meshArray[0].userData &&
            meshArray[0].userData.originalModel;
        }
      }

      this.exportModelButton.disabled = !modelInstanceExists;
    }
  }

  initializeFaceLabelPanel() {
    const labelPanel = document.getElementById("label-panel")!;
    const labelList = document.getElementById("label-list")!;
    labelPanel.style.display = "block";
    labelList.innerHTML =
      '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No model loaded</span></div>';
    (document.getElementById("clear-labels") as HTMLButtonElement).disabled =
      true;
    this.changeFaceLabels = document.getElementById(
        "change-face-labels"
    ) as HTMLInputElement;
    this.changeFaceLabels?.addEventListener("change", () => {
    const selectedModel = this.viewer.getRenderer().selectedModel;
    if (selectedModel) {
      this.updateFaceLabelUI(selectedModel);
    }})
  }

  initializeVertexLabelPanel() {
    const panel = document.getElementById("vertex-label-panel")!;
    const list = document.getElementById("vertex-label-list")!;
    panel.style.display = "block";
    list.innerHTML =
      '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No model loaded</span></div>';
    (
      document.getElementById("clear-vertex-labels") as HTMLButtonElement
    ).disabled = true;
    this.changeVertexLabels = document.getElementById(
        "change-vertex-labels"
    ) as HTMLInputElement;
    this.changeVertexLabels?.addEventListener("change", () => {
    const selectedModel = this.viewer.getRenderer().selectedModel;
    if (selectedModel) {
      this.updateVertexLabelUI(selectedModel);
    }})
  }

  async updateModelListUI() {
    const modelList = document.getElementById("model-list")!;
    const viewModeSelect = document.getElementById(
      "view-mode-select"
    ) as HTMLSelectElement;
    const selectedMode = viewModeSelect.value;

    modelList.innerHTML = "";
    this.handleClearSequence();

    if (selectedMode === "models") {
      const availableModels = this.loader.getAvailableModels();
      let first = true;
      for (const modelId of availableModels) {
        const item = document.createElement("div");
        item.className = "model-item";
        item.textContent = modelId;
        item.addEventListener("click", async () => {
          item.classList.add("loading");
          item.textContent = `${modelId} (loading...)`;
          try {
            await this.viewer.loadModel(modelId);
            document.querySelectorAll(".model-item").forEach((el) => {
              el.classList.remove("selected", "loading");
              const originalId = el
                .textContent!.replace(" (loading...)", "")
                .replace(" (error)", "");
              el.textContent = originalId;
            });
            item.classList.add("selected");
            item.textContent = modelId;
            this.viewer.getRenderer().showModel(modelId);
            this.updateFaceLabelUI(modelId);
            this.updateVertexLabelUI(modelId);
            this.handleClearSequence();
            this.updateAnimationButtonStates();
            this.updateExportButtonState();
          } catch (error) {
            item.classList.remove("loading");
            item.textContent = `${modelId} (error)`;
            item.classList.add("error");
            setTimeout(() => {
              item.classList.remove("error");
              item.textContent = modelId;
            }, 3000);
            this.updateExportButtonState();
          }
        });
        modelList.appendChild(item);
        if (first && availableModels.length > 0) {
          setTimeout(async () => {
            try {
              await this.viewer.loadModel(modelId);
              item.classList.add("selected");
              this.viewer.getRenderer().showModel(modelId);
              this.updateFaceLabelUI(modelId);
              this.updateVertexLabelUI(modelId);
              this.handleClearSequence();
              this.updateAnimationButtonStates();
              this.updateExportButtonState();
            } catch (error) {
              console.error(`Auto-load failed for ${modelId}: ${error}`);
            }
          }, 100);
          first = false;
        }
      }
    } else if (selectedMode === "npcs") {
      const availableNpcs = this.loader.getAllNpcs();
      for (const npcId of availableNpcs) {
        const npcData = this.loader.getNpcData(npcId);
        const item = document.createElement("div");
        item.className = "model-item npc-item";
        const displayName = npcData?.name || npcId;
        item.innerHTML = `<div class="npc-name">${displayName}</div><div class="npc-id">${npcId}</div>${
          npcData?.models
            ? `<div class="npc-models">${npcData.models.length} model(s)</div>`
            : ""
        }`;
        item.addEventListener("click", async () => {
          item.classList.add("loading");
          const originalContent = item.innerHTML;
          item.innerHTML = `${originalContent} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`;
          try {
            const combinedModel = await this.loader.loadNpcModels(npcId);
            const npcModelId = `npc_${npcId}`;
            this.viewer.getRenderer().addModel(npcModelId, combinedModel);
            document
              .querySelectorAll(".model-item")
              .forEach((el) => el.classList.remove("selected", "loading"));
            item.classList.add("selected");
            item.innerHTML = originalContent;
            this.viewer.getRenderer().showModel(npcModelId);
            this.updateFaceLabelUI(npcModelId);
            this.updateVertexLabelUI(npcModelId);
            this.handleClearSequence();
            this.updateAnimationButtonStates();
            this.updateExportButtonState();
          } catch (error: any) {
            console.error(`Error loading object ${npcId}:`, error);
            item.classList.remove("loading");
            item.innerHTML = `${originalContent} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${error.message.substring(
              0,
              30
            )}...</div>`;
            item.classList.add("error");
            setTimeout(() => {
              item.classList.remove("error");
              item.innerHTML = originalContent;
            }, 5000);
            this.updateExportButtonState();
          }
        });
        modelList.appendChild(item);
      }
    } else if (selectedMode === "objects") {
      const availableObjs = this.loader.getAllObjs();
      for (const objId of availableObjs) {
        const objData = this.loader.getObjData(objId);
        const item = document.createElement("div");
        item.className = "model-item obj-item";
        const displayName = objData?.name || objId;
        item.innerHTML = `<div class="obj-name">${displayName}</div><div class="obj-id">${objId}</div>${
          objData?.model
            ? `<div class="obj-model-name">Model: ${objData.model}</div>`
            : ""
        }`;

        item.addEventListener("click", async () => {
          item.classList.add("loading");
          const originalContent = item.innerHTML;
          item.innerHTML = `${originalContent} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`;

          if (!objData?.model) {
            item.classList.remove("loading");
            item.innerHTML = `${originalContent} <div style="color: #ffcc00; font-size: 10px; margin-top: 2px;">No model defined</div>`;
            setTimeout(() => {
              item.innerHTML = originalContent;
            }, 3000);
            this.updateExportButtonState();
            return;
          }

          try {
            const baseModelName = objData.model;
            let foundModelId = null;

            for (const [fullPathKey] of this.loader.availableFiles.entries()) {
              const parts = fullPathKey.split("/");
              const actualModelNamePart = parts[parts.length - 1];
              if (actualModelNamePart === baseModelName) {
                foundModelId = fullPathKey;
                break;
              }
            }

            if (!foundModelId) {
              throw new Error(
                `Model file not found for object: ${baseModelName}`
              );
            }

            const model = await this.loader.loadModel(foundModelId);
            const clonedModel = model.clone();

            if (objData.recols) {
              for (const key in objData.recols) {
                const [source, dest] = objData.recols[key];
                clonedModel.recolor(source, dest);
              }
            }

            clonedModel.processTextureCoordinates();
            clonedModel.createLabelReferences();
            clonedModel.calculateNormals(64, 850, -30, -50, -30, true);
            clonedModel.saveCurrentVerticesAsOriginal();

            const objectModelId = `obj_${objId}_${foundModelId.replace(
              /\//g,
              "_"
            )}`;
            this.viewer.getRenderer().addModel(objectModelId, clonedModel);

            document
              .querySelectorAll(".model-item")
              .forEach((el) => el.classList.remove("selected", "loading"));
            item.classList.add("selected");
            item.innerHTML = originalContent;
            this.viewer.getRenderer().showModel(objectModelId);
            this.updateFaceLabelUI(objectModelId);
            this.updateVertexLabelUI(objectModelId);
            this.handleClearSequence();
            this.updateAnimationButtonStates();
            this.updateExportButtonState();
          } catch (error: any) {
            console.error(`Error loading object ${objId}:`, error);
            item.classList.remove("loading");
            item.innerHTML = `${originalContent} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${error.message.substring(
              0,
              30
            )}...</div>`;
            item.classList.add("error");
            setTimeout(() => {
              item.classList.remove("error");
              item.innerHTML = originalContent;
            }, 5000);
            this.updateExportButtonState();
          }
        });
        modelList.appendChild(item);
      }
    } else if (selectedMode === "locations") {
      const availableLocs = this.loader.getAllLocs();
      for (const locId of availableLocs) {
        const locData = this.loader.getLocData(locId);
        const item = document.createElement("div");
        item.className = "model-item loc-item";
        const displayName = locData?.name || locId;
        item.innerHTML = `<div class="loc-name">${displayName}</div><div class="loc-id">${locId}</div>${
          locData?.model
            ? `<div class="loc-model-name">Model: ${locData.model}</div>`
            : ""
        }`;

        item.addEventListener("click", async () => {
          item.classList.add("loading");
          const originalContent = item.innerHTML;
          item.innerHTML = `${originalContent} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`;

          if (!locData?.model) {
            item.classList.remove("loading");
            item.innerHTML = `${originalContent} <div style="color: #ffcc00; font-size: 10px; margin-top: 2px;">No model defined</div>`;
            setTimeout(() => {
              item.innerHTML = originalContent;
            }, 3000);
            this.updateExportButtonState();
            return;
          }

          try {
            const baseNameFromConfig = locData.model;
            let foundModelId = null;
            let triedNamesForErrorMsg: string[] = [];

            const attemptLoadStrategy = async (nameToTry: string) => {
              triedNamesForErrorMsg.push(nameToTry);
              for (const [
                fullPathKey,
              ] of this.loader.availableFiles.entries()) {
                const parts = fullPathKey.split("/");
                const actualModelNamePart = parts[parts.length - 1];
                if (actualModelNamePart === nameToTry) {
                  return fullPathKey;
                }
              }
              return null;
            };

            let actualBaseName = baseNameFromConfig;
            const knownSuffixKeys = Object.keys(LocShapeSuffixMap);
            for (const knownSuffix of knownSuffixKeys) {
              if (baseNameFromConfig.endsWith(knownSuffix)) {
                actualBaseName = baseNameFromConfig.substring(
                  0,
                  baseNameFromConfig.length - knownSuffix.length
                );
                break;
              }
            }

            foundModelId = await attemptLoadStrategy(baseNameFromConfig);

            if (!foundModelId) {
              const nameWith_8 = actualBaseName + "_8";
              if (
                baseNameFromConfig !== nameWith_8 ||
                actualBaseName === baseNameFromConfig
              ) {
                if (!triedNamesForErrorMsg.includes(nameWith_8)) {
                  foundModelId = await attemptLoadStrategy(nameWith_8);
                }
              }
            }

            if (!foundModelId) {
              for (const suffix of orderedLocShapeSuffixStrings) {
                const nameWithSuffix = actualBaseName + suffix;
                if (!triedNamesForErrorMsg.includes(nameWithSuffix)) {
                  foundModelId = await attemptLoadStrategy(nameWithSuffix);
                  if (foundModelId) break;
                }
              }
            }

            if (!foundModelId) {
              let errorIntro = `No suitable model variant found for location base '${baseNameFromConfig}'`;
              if (actualBaseName !== baseNameFromConfig) {
                errorIntro += ` (derived base: '${actualBaseName}')`;
              }
              throw new Error(
                `${errorIntro}. Tried: ${[
                  ...new Set(triedNamesForErrorMsg),
                ].join(", ")}.`
              );
            }

            const model = await this.loader.loadModel(foundModelId);
            const clonedModel = model.clone();

            if (locData.recols) {
              for (const key in locData.recols) {
                const [source, dest] = locData.recols[key];
                clonedModel.recolor(source, dest);
              }
            }
            if (locData.retexs) {
              for (const key in locData.retexs) {
                const [sourceTexName, destTexName] = locData.retexs[key];
                if (sourceTexName && destTexName) {
                  const sourceTexId =
                    this.loader.getTextureIdByName(sourceTexName);
                  const destTexId = this.loader.getTextureIdByName(destTexName);
                  if (sourceTexId && destTexId) {
                    clonedModel.recolor(sourceTexId, destTexId);
                  }
                }
              }
            }

            if (
              locData.resizex !== 128 ||
              locData.resizey !== 128 ||
              locData.resizez !== 128
            ) {
              clonedModel.scale(
                locData.resizex,
                locData.resizey,
                locData.resizez
              );
            }

            clonedModel.processTextureCoordinates();
            clonedModel.createLabelReferences();
            clonedModel.calculateNormals(
              locData.ambient + 64,
              locData.contrast * 5 + 768,
              -50,
              -10,
              -50,
              !locData.sharelight
            );
            clonedModel.saveCurrentVerticesAsOriginal();
            const locationModelId = `loc_${locId}_${foundModelId.replace(
              /\//g,
              "_"
            )}`;
            this.viewer.getRenderer().addModel(locationModelId, clonedModel);
            document
              .querySelectorAll(".model-item")
              .forEach((el) => el.classList.remove("selected", "loading"));
            item.classList.add("selected");
            item.innerHTML = originalContent;
            this.viewer.getRenderer().showModel(locationModelId);
            this.updateFaceLabelUI(locationModelId);
            this.updateVertexLabelUI(locationModelId);
            this.handleClearSequence();
            this.updateAnimationButtonStates();
            this.updateExportButtonState();
          } catch (error: any) {
            console.error(`Error loading location ${locId}:`, error);
            item.classList.remove("loading");
            item.innerHTML = `${originalContent} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${error.message.substring(
              0,
              30
            )}...</div>`;
            item.classList.add("error");
            setTimeout(() => {
              item.classList.remove("error");
              item.innerHTML = originalContent;
            }, 5000);
            this.updateExportButtonState();
          }
        });
        modelList.appendChild(item);
      }
    }
    this.filterModelList();
    this.updateAnimationButtonStates();
    this.updateExportButtonState();
  }

  updateExportFrameButtonState() {
    const exportBtn = document.getElementById(
      "export-frame-btn"
    ) as HTMLButtonElement;
    if (exportBtn) {
      exportBtn.disabled =
        !this.currentSelectedAnimFrameInstance ||
        this.currentSelectedAnimFrameInstance.id === undefined;
    }
  }

  buildRemappedFaceArray(model: Model, map: Record<number, number>): Int32Array {
    const out = new Int32Array(model.faceCount).fill(0);

    if (model.labelFaces) {
      model.labelFaces.forEach((faces, grp) => {
        if (!faces) return;
        const target = map[grp] ?? grp;
        for (let i = 0; i < faces.length; i++) out[faces[i]] = target;
      });
    }

    return out;
  }

  buildRemappedVertexArray(model: Model, map: Record<number, number>): Int32Array {
    const out = new Int32Array(model.vertexCount).fill(0);

    if (model.labelVertices) {
      model.labelVertices.forEach((verts, grp) => {
        if (!verts) return;
        const target = map[grp] ?? grp;
        for (let i = 0; i < verts.length; i++) out[verts[i]] = target;
      });
    }

    return out;
  }

  applyCustomFaceLabels(model: Model) {
    const mapping: Record<number, number> = {};
    const labelItems = document.querySelectorAll("#label-list .label-item");

    labelItems.forEach((item) => {
      const labelText = item.querySelector("span")?.textContent;
      const input = item.querySelector("input") as HTMLInputElement;

      if (!labelText || !input) return;

      const match = labelText.match(/Label\s+(\d+)/);
      if (!match) return;

      const originalId = parseInt(match[1]);
      const newId = parseInt(input.value);

      if (!isNaN(newId) && newId !== originalId) {
        mapping[originalId] = newId;
      }
    });

    model.faceLabelForExport = this.buildRemappedFaceArray(model, mapping);
    model.hadOriginalFaceLabels = true;
}


  applyCustomVertexLabels(model: Model) {
    const mapping: Record<number, number> = {};
    const labelItems = document.querySelectorAll("#vertex-label-list .label-item");

    labelItems.forEach((item) => {
      const labelText = item.querySelector("span")?.textContent;
      const input = item.querySelector("input") as HTMLInputElement;

      if (!labelText || !input) return;

      const match = labelText.match(/Label\s+(\d+)/);
      if (!match) return;

      const originalId = parseInt(match[1]);
      const newId = parseInt(input.value);

      if (!isNaN(newId) && newId !== originalId) {
        mapping[originalId] = newId;
      }
    });

    model.vertexLabelForExport = this.buildRemappedVertexArray(model, mapping);
    model.hadOriginalVertexLabels = true;
}

  async handleExportAnimFrame() {
    if (
      !this.currentSelectedAnimFrameInstance ||
      this.currentSelectedAnimFrameInstance.id === undefined
    ) {
      alert(
        "No animation frame selected to export, or the selected frame is invalid."
      );
      this.updateExportFrameButtonState();
      return;
    }

    const animFrameInstance = this.currentSelectedAnimFrameInstance;

    try {
      const frameDataBytes = animFrameInstance.exportToFrame();

      if (!frameDataBytes) {
        console.error(
          `AnimFrame ${animFrameInstance.id}: exportToFrame() returned null. This might happen if animFrame.base is missing or other critical data is unavailable.`
        );
        alert(
          `Failed to export frame ${animFrameInstance.id}: Frame data could not be generated. Check console for details.`
        );
        this.updateExportFrameButtonState();
        return;
      }

      const blob = new Blob([frameDataBytes], {
        type: "application/octet-stream",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);

      let filename;
      if (animFrameInstance.originalFileName) {
        filename = animFrameInstance.originalFileName;
      } else if (animFrameInstance.originalPath) {
        const pathParts = animFrameInstance.originalPath.split("/");
        filename = pathParts[pathParts.length - 1];
      } else {
        filename = `animframe_${animFrameInstance.id}.frame`;
      }

      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      const status = document.getElementById("status")!;
      if (status) {
        status.textContent = `Frame "${filename}" exported successfully.`;
        setTimeout(() => {
          const numModels = this.loader.getAvailableModels()?.length || 0;
          status.textContent = `Found ${numModels} .ob2 files`;
        }, 3000);
      }
    } catch (error: any) {
      console.error(
        `Error exporting AnimFrame ${animFrameInstance.id}:`,
        error
      );
      alert(`Failed to export frame ${animFrameInstance.id}: ${error.message}`);
    }
    this.updateExportFrameButtonState();
  }

  async handleExportModel() {
    const renderer = this.viewer.getRenderer();
    const currentSelectedModel = renderer.selectedModel;

    if (!this.viewer || !currentSelectedModel) {
      alert("No model selected to export.");
      this.updateExportButtonState();
      return;
    }

    const modelMeshes = renderer.modelMeshes.get(currentSelectedModel);

    if (!modelMeshes) {
      alert("Selected model data not found.");
      this.updateExportButtonState();
      return;
    }

    const meshArray = Array.isArray(modelMeshes) ? modelMeshes : [modelMeshes];
    let modelInstance: Model | null = null;

    for (const mesh of meshArray) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        modelInstance = mesh.userData.originalModel as Model;
        break;
      }
    }

    if (!modelInstance) {
      alert("Selected model instance not found.");
      this.updateExportButtonState();
      return;
    }

    if (this.changeFaceLabels?.checked && modelInstance) {
      this.applyCustomFaceLabels(modelInstance);
    }
    if (this.changeVertexLabels?.checked && modelInstance) {
      this.applyCustomVertexLabels(modelInstance);
    }

    try {
      modelInstance.saveCurrentVerticesAsOriginal();
      if (modelInstance.partMapping && modelInstance.partMapping.isNpcModel) {
        const partExports = modelInstance.exportNpcParts();

        if (partExports && partExports.size > 0) {
          let exportCount = 0;
          for (const [partIndex, partData] of partExports) {
            const part = modelInstance.partMapping.parts[partIndex];
            const filename = `${part.originalModelName}.ob2`;

            const blob = new Blob([partData], {
              type: "application/octet-stream",
            });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            exportCount++;
          }

          const status = document.getElementById("status")!;
          if (status) {
            const selectedItem = document.querySelector(
              "#model-list .model-item.selected"
            );
            let npcName = "NPC";
            if (selectedItem && selectedItem.classList.contains("npc-item")) {
              const npcIdElement = selectedItem.querySelector(".npc-id");
              if (npcIdElement) {
                npcName = `NPC ${npcIdElement.textContent}`;
              }
            }
            status.textContent = `${npcName} exported as ${exportCount} parts with original names.`;
            setTimeout(() => {
              const numModels = this.loader.getAvailableModels()?.length || 0;
              status.textContent = `Found ${numModels} .ob2 files`;
            }, 3000);
          }
        } else {
          throw new Error(
            "Failed to export NPC parts - no part data available"
          );
        }
      } else {
        const ob2Data = modelInstance.exportToOb2();

        const blob = new Blob([ob2Data], { type: "application/octet-stream" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);

        let filename = "exported_model.ob2";
        const selectedItem = document.querySelector(
          "#model-list .model-item.selected"
        );
        if (selectedItem) {
          if (selectedItem.classList.contains("obj-item")) {
            const objModelElement =
              selectedItem.querySelector(".obj-model-name");
            if (objModelElement && objModelElement.textContent) {
              const modelText = objModelElement.textContent;
              const modelName = modelText.replace("Model: ", "");
              filename = `${modelName}.ob2`;
            }
          } else if (selectedItem.classList.contains("loc-item")) {
            const locModelElement =
              selectedItem.querySelector(".loc-model-name");
            if (locModelElement && locModelElement.textContent) {
              const modelText = locModelElement.textContent;
              const modelName = modelText.replace("Model: ", "");
              filename = `${modelName}.ob2`;
            }
          } else if (currentSelectedModel) {
            const originalFile =
              this.loader.availableFiles.get(currentSelectedModel);
            if (originalFile && originalFile.name) {
              filename = originalFile.name;
            } else {
              filename = `${
                currentSelectedModel.split("/").pop() || "exported_model"
              }.ob2`;
            }
          }
        }

        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        const status = document.getElementById("status")!;
        if (status) {
          status.textContent = `Model "${filename}" exported.`;
          setTimeout(() => {
            const numModels = this.loader.getAvailableModels()?.length || 0;
            status.textContent = `Found ${numModels} .ob2 files`;
          }, 3000);
        }
      }
    } catch (error: any) {
      console.error("Error exporting model:", error);
      alert("Failed to export model: " + error.message);
    }
    this.updateExportButtonState();
  }

  updateAnimationButtonStates() {
    const startSeqBtn = document.getElementById(
      "start-seq"
    ) as HTMLButtonElement;
    const clearSeqBtn = document.getElementById(
      "clear-seq"
    ) as HTMLButtonElement;

    const renderer = this.viewer.getRenderer();
    const selectedModelId = renderer.selectedModel;
    let modelInstanceExists = false;

    if (selectedModelId) {
      const selectedModelMeshes = renderer.modelMeshes.get(selectedModelId);
      if (selectedModelMeshes) {
        const meshArray = Array.isArray(selectedModelMeshes)
          ? selectedModelMeshes
          : [selectedModelMeshes];
        modelInstanceExists =
          meshArray.length > 0 &&
          meshArray[0] &&
          meshArray[0].userData &&
          meshArray[0].userData.originalModel;
      }
    }

    const selectedSeqItem = document.querySelector(
      "#seq-list .label-item.selected"
    );
    const canStart =
      modelInstanceExists && selectedSeqItem && !this.currentAnimation.timerId;
    const isPlaying = !!this.currentAnimation.timerId;

    if (startSeqBtn) startSeqBtn.disabled = !canStart;
    if (clearSeqBtn) clearSeqBtn.disabled = !isPlaying;
    if (this.loopSequenceCheckbox)
      this.loopSequenceCheckbox.disabled =
        !modelInstanceExists || !selectedSeqItem;
  }

  handleStartSequence() {
    if (this.currentAnimation.timerId) {
      this.handleClearSequence();
    }

    const renderer = this.viewer.getRenderer();
    const selectedModelId = renderer.selectedModel;
    if (!selectedModelId) {
      this.updateAnimationButtonStates();
      return;
    }

    const modelMeshes = renderer.modelMeshes.get(selectedModelId);
    if (!modelMeshes) {
      this.updateAnimationButtonStates();
      return;
    }

    const meshArray = Array.isArray(modelMeshes) ? modelMeshes : [modelMeshes];
    let modelToAnimate = null;

    for (const mesh of meshArray) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        modelToAnimate = mesh.userData.originalModel;
        break;
      }
    }

    if (!modelToAnimate) {
      this.updateAnimationButtonStates();
      return;
    }

    const selectedSeqItem = document.querySelector(
      "#seq-list .label-item.selected"
    );
    if (!selectedSeqItem) {
      this.updateAnimationButtonStates();
      return;
    }

    const seqId = selectedSeqItem.textContent!;
    const seqData = this.loader.getSeqData(seqId);

    if (!seqData || !seqData.frameIds || seqData.frameIds.length === 0) {
      this.updateAnimationButtonStates();
      return;
    }

    this.currentAnimation.modelRef = modelToAnimate;
    this.currentAnimation.seqId = seqId;
    this.currentAnimation.seqData = seqData;
    this.currentAnimation.frameIndex = 0;

    this.animateNextFrame();
    this.updateAnimationButtonStates();
  }

  animateNextFrame() {
    if (!this.currentAnimation.modelRef || !this.currentAnimation.seqData) {
      this.handleClearSequence();
      return;
    }

    const model = this.currentAnimation.modelRef;
    const seq = this.currentAnimation.seqData;
    let frameIndex = this.currentAnimation.frameIndex;

    const frameIds = seq.frameIds || [];
    const totalFrames = frameIds.length;

    if (totalFrames === 0) {
      this.handleClearSequence();
      return;
    }

    if (frameIndex >= totalFrames) {
      const loopCheckbox = this.loopSequenceCheckbox;
      if (loopCheckbox && loopCheckbox.checked) {
        frameIndex = 0;
      } else if (
        seq.replayoff !== undefined &&
        seq.replayoff !== -1 &&
        frameIndex >= seq.replayoff
      ) {
        this.handleClearSequence();
        return;
      } else if (seq.replayoff === undefined || seq.replayoff === -1) {
        if (seq.replayoff !== -1) {
          this.handleClearSequence();
          return;
        }
        frameIndex = 0;
      } else {
        frameIndex = 0;
      }
    }

    const frameName = frameIds[frameIndex];
    let numericFrameId = -1;

    if (frameName !== undefined && frameName !== null) {
      const parts = String(frameName).split("_");
      const numericIdStr =
        parts.length > 1 ? parts[parts.length - 1] : parts[0];
      numericFrameId = parseInt(numericIdStr, 10);
      if (isNaN(numericFrameId)) numericFrameId = -1;
    }

    if (numericFrameId !== -1) {
      model.resetToOriginal();
      model.applyTransform(numericFrameId);
      this.viewer.getRenderer().updateMeshGeometry();

      const currentSelectedModelId = this.viewer.getRenderer().selectedModel;
      if (currentSelectedModelId) {
        this.viewer.getRenderer().updateVertexVisuals(currentSelectedModelId);
      }
    }

    this.currentAnimation.frameIndex = frameIndex + 1;

    let finalDelayTicks = 2;
    const delayValues = seq.delayValues || [];
    if (delayValues[frameIndex] !== undefined) {
      if (delayValues[frameIndex] === 0) {
        if (
          numericFrameId !== -1 &&
          AnimFrame.instances &&
          AnimFrame.instances[numericFrameId]
        ) {
          const animFrameForDefaultDelay = AnimFrame.instances[numericFrameId];
          if (
            animFrameForDefaultDelay &&
            animFrameForDefaultDelay.frameDelay > 0
          ) {
            finalDelayTicks = animFrameForDefaultDelay.frameDelay;
          } else {
            finalDelayTicks = 1;
          }
        } else {
          finalDelayTicks = 1;
        }
      } else {
        finalDelayTicks = delayValues[frameIndex];
      }
    } else if (
      numericFrameId !== -1 &&
      AnimFrame.instances &&
      AnimFrame.instances[numericFrameId]
    ) {
      const animFrameForDefaultDelay = AnimFrame.instances[numericFrameId];
      if (animFrameForDefaultDelay && animFrameForDefaultDelay.frameDelay > 0) {
        finalDelayTicks = animFrameForDefaultDelay.frameDelay;
      } else if (
        animFrameForDefaultDelay &&
        animFrameForDefaultDelay.frameDelay === 0
      ) {
        finalDelayTicks = 1;
      }
    }

    this.currentAnimation.timerId = setTimeout(
      () => this.animateNextFrame(),
      finalDelayTicks * 20
    );
  }

  handleClearSequence() {
    if (this.currentAnimation.timerId) {
      clearTimeout(this.currentAnimation.timerId);
    }
    if (this.currentAnimation.modelRef) {
      this.currentAnimation.modelRef.resetToOriginal();
      this.viewer.getRenderer().updateMeshGeometry();

      const currentSelectedModelId = this.viewer.getRenderer().selectedModel;
      if (currentSelectedModelId) {
        this.viewer.getRenderer().updateVertexVisuals(currentSelectedModelId);
      }
    }

    this.currentAnimation = {
      modelRef: null,
      seqId: null,
      seqData: null,
      frameIndex: 0,
      timerId: null,
    };

    document
      .querySelectorAll("#seq-list .label-item.selected")
      .forEach((el) => el.classList.remove("selected"));
    this.updateAnimFrameListUI(null);
    this.updateAnimationButtonStates();
  }

  updateSeqListUI() {
    const seqList = document.getElementById("seq-list")!;
    seqList.innerHTML = "";

    const availableSeqs = this.loader.getAllSeqs();

    availableSeqs.forEach((seqId) => {
      const item = document.createElement("div");
      item.className = "label-item";
      item.textContent = seqId;
      item.addEventListener("click", () => {
        if (this.currentAnimation.timerId) {
          clearTimeout(this.currentAnimation.timerId);
        }
        if (this.currentAnimation.modelRef) {
          if (this.currentAnimation.timerId) {
            this.currentAnimation.modelRef.resetToOriginal();
            this.viewer.getRenderer().updateMeshGeometry();
            const currentSelectedModelId =
              this.viewer.getRenderer().selectedModel;
            if (currentSelectedModelId) {
              this.viewer
                .getRenderer()
                .updateVertexVisuals(currentSelectedModelId);
            }
          }
        }
        this.currentAnimation = {
          modelRef: null,
          seqId: null,
          seqData: null,
          frameIndex: 0,
          timerId: null,
        };

        document
          .querySelectorAll("#seq-list .label-item")
          .forEach((el) => el.classList.remove("selected"));
        item.classList.add("selected");

        this.updateAnimFrameListUI(seqId);

        this.updateAnimationButtonStates();
      });
      seqList.appendChild(item);
    });
    this.filterSeqList();
    this.updateAnimationButtonStates();
  }

  updateAnimFrameListUI(seqId: string | null) {
    const animFrameList = document.getElementById("animframe-list")!;
    animFrameList.innerHTML = "";
    this.currentSelectedAnimFrameInstance = null;
    this.clearTransformEditor();
    this.updateAnimFrameDetailsUI(null);

    if (!seqId) {
      animFrameList.innerHTML =
        '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select a SEQ to view frames</span></div>';
      (document.getElementById("clear-frames") as HTMLButtonElement).disabled =
        true;
      (
        document.getElementById("export-frame-btn") as HTMLButtonElement
      ).disabled = true;
      return;
    }

    const seqData = this.loader.getSeqData(seqId);
    if (!seqData || (!seqData.frameIds && !seqData.iframeIds)) {
      animFrameList.innerHTML = `<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No frame data for ${seqId}</span></div>`;
      return;
    }

    const frameIds = seqData.frameIds || [];
    const iframeIds = seqData.iframeIds || [];
    const delayValues = seqData.delayValues || [];
    const maxLength = Math.max(
      frameIds.length,
      iframeIds.length,
      delayValues.length
    );

    if (maxLength === 0) {
      animFrameList.innerHTML = `<div class="label-item no-labels"><span style="color: #888; font-style: italic;">SEQ ${seqId} has no frames defined</span></div>`;
      return;
    }
    (document.getElementById("clear-frames") as HTMLButtonElement).disabled =
      false;
    (
      document.getElementById("export-frame-btn") as HTMLButtonElement
    ).disabled = true;

    for (let i = 0; i < maxLength; i++) {
      const frameName = frameIds[i];
      const iframeName = iframeIds[i];
      const delay = delayValues[i];

      const processFrame = (name: any, type: string) => {
        if (name !== undefined && name !== null) {
          const item = document.createElement("div");
          item.className = "label-item";
          let contentText = `${i + 1}: ${name}`;
          if (delay !== undefined && type === "Frame") {
            contentText += ` (Delay: ${delay})`;
          } else if (delay !== undefined && type === "iFrame" && !frameName) {
            contentText += ` (Delay: ${delay})`;
          }
          item.textContent = contentText;

          let animFrameInstance = null;
          let numericId = null;
          try {
            const parts = String(name).split("_");
            const numericIdStr =
              parts.length > 1 ? parts[parts.length - 1] : parts[0];
            numericId = parseInt(numericIdStr, 10);

            if (
              !isNaN(numericId) &&
              AnimFrame.instances &&
              AnimFrame.instances[numericId]
            ) {
              animFrameInstance = AnimFrame.instances[numericId];

              if (animFrameInstance.id === undefined)
                animFrameInstance.id = numericId;
            }
          } catch (e) {
            console.warn(`Could not parse or find AnimFrame for: ${name}`, e);
          }

          if (animFrameInstance) {
            item.addEventListener("click", () => {
              const clickedItem = item;

              document
                .querySelectorAll("#animframe-list .label-item")
                .forEach((el) => el.classList.remove("selected"));

              clickedItem.classList.add("selected");

              this.currentSelectedAnimFrameInstance = animFrameInstance;

              this.updateAnimFrameDetailsUI(animFrameInstance);

              if (animFrameInstance && animFrameInstance.id !== undefined) {
                this.displaySingleAnimFrame(animFrameInstance.id);

                document
                  .querySelectorAll("#animframe-list .label-item")
                  .forEach((el) => el.classList.remove("selected"));
                clickedItem.classList.add("selected");
              }
            });
          } else {
            item.style.cursor = "not-allowed";
            item.title = "Animation frame data not found";
          }
          animFrameList.appendChild(item);
        }
      };

      processFrame(frameName, "Frame");
      processFrame(iframeName, "iFrame");

      if (
        (frameName === undefined || frameName === null) &&
        (iframeName === undefined || iframeName === null) &&
        delay !== undefined
      ) {
        const item = document.createElement("div");
        item.className = "label-item";
        item.innerHTML = `Step ${i + 1}: (Empty) (Delay: ${delay})`;
        animFrameList.appendChild(item);
      }
    }
    if (animFrameList.children.length === 0) {
      animFrameList.innerHTML = `<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No displayable frames in ${seqId}</span></div>`;
      (document.getElementById("clear-frames") as HTMLButtonElement).disabled =
        true;
      (
        document.getElementById("export-frame-btn") as HTMLButtonElement
      ).disabled = true;
    }
  }

  displaySingleAnimFrame(frameNumericId: number) {
    if (frameNumericId === -1 || isNaN(frameNumericId)) {
      console.warn("Invalid frame ID provided for single frame display.");
      this.updateAnimationButtonStates();
      return;
    }

    if (this.currentAnimation.timerId) {
      clearTimeout(this.currentAnimation.timerId);
    }

    this.currentAnimation = {
      modelRef: this.currentAnimation.modelRef,
      seqId: null,
      seqData: null,
      frameIndex: 0,
      timerId: null,
    };

    const renderer = this.viewer.getRenderer();
    const selectedModelId = renderer.selectedModel;
    if (!selectedModelId) {
      this.updateAnimationButtonStates();
      return;
    }

    const modelMeshes = renderer.modelMeshes.get(selectedModelId);
    if (!modelMeshes) {
      this.updateAnimationButtonStates();
      return;
    }

    const meshArray = Array.isArray(modelMeshes) ? modelMeshes : [modelMeshes];
    let modelToAnimate: Model | null = null;
    for (const mesh of meshArray) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        modelToAnimate = mesh.userData.originalModel as Model;
        break;
      }
    }
    if (!modelToAnimate) {
      this.updateAnimationButtonStates();
      return;
    }

    this.currentAnimation.modelRef = modelToAnimate;

    modelToAnimate.resetToOriginal();
    modelToAnimate.applyTransform(frameNumericId);
    renderer.updateMeshGeometry();
    renderer.updateVertexVisuals(selectedModelId);
    this.updateAnimationButtonStates();
  }

  handleTransformOperationClick(
    animFrame: AnimFrame,
    transformIndexInFrame: number
  ) {
    const renderer = this.viewer.getRenderer();
    const selectedModelId = renderer.selectedModel;
    if (!selectedModelId) return;

    const modelMeshes = renderer.modelMeshes.get(selectedModelId);
    if (!modelMeshes) return;

    const meshArray = Array.isArray(modelMeshes) ? modelMeshes : [modelMeshes];
    let modelInstance: Model | null = null;
    for (const mesh of meshArray) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        modelInstance = mesh.userData.originalModel as Model;
        break;
      }
    }
    if (!modelInstance) return;

    const animBase = animFrame.base;
    if (
      !animBase ||
      !animFrame.bases ||
      !animBase.animLabels ||
      !animBase.animTypes ||
      transformIndexInFrame >= animFrame.bases.length
    ) {
      console.warn(
        "Cannot highlight: AnimFrame or AnimBase data incomplete or index out of bounds."
      );
      renderer.clearSpecificVertexHighlights();
      renderer.clearSpecificFaceHighlights();
      return;
    }

    const baseGroupIndex = animFrame.bases[transformIndexInFrame];
    if (
      baseGroupIndex === undefined ||
      baseGroupIndex >= animBase.animTypes.length ||
      baseGroupIndex >= animBase.animLabels.length
    ) {
      console.warn(
        `Invalid baseGroupIndex (${baseGroupIndex}) for transform. AnimBase might not have this group defined.`
      );
      renderer.clearSpecificVertexHighlights();
      renderer.clearSpecificFaceHighlights();
      return;
    }

    const transformType = animBase.animTypes[baseGroupIndex];
    const affectedModelLabels = animBase.animLabels[baseGroupIndex];

    renderer.clearSpecificVertexHighlights();
    renderer.clearSpecificFaceHighlights();

    if (!affectedModelLabels || affectedModelLabels.length === 0) {
      return;
    }

    if (transformType === 5) {
      const allFaceIndicesToHighlight = new Set<number>();
      if (modelInstance.labelFaces) {
        for (let i = 0; i < affectedModelLabels.length; i++) {
          const faceGroupLabel = affectedModelLabels[i];
          if (modelInstance.labelFaces[faceGroupLabel]) {
            const facesInGroup = modelInstance.labelFaces[faceGroupLabel];
            for (let j = 0; j < facesInGroup.length; j++) {
              allFaceIndicesToHighlight.add(facesInGroup[j]);
            }
          }
        }
      }
      if (allFaceIndicesToHighlight.size > 0) {
        renderer.highlightSpecificFaces(Array.from(allFaceIndicesToHighlight));
      }
    } else {
      const allVertexIndicesToHighlight = new Set<number>();
      if (modelInstance.labelVertices) {
        for (let i = 0; i < affectedModelLabels.length; i++) {
          const vertexGroupLabel = affectedModelLabels[i];
          if (modelInstance.labelVertices[vertexGroupLabel]) {
            const verticesInGroup =
              modelInstance.labelVertices[vertexGroupLabel];
            for (let j = 0; j < verticesInGroup.length; j++) {
              allVertexIndicesToHighlight.add(verticesInGroup[j]);
            }
          }
        }
      }
      if (allVertexIndicesToHighlight.size > 0) {
        renderer.highlightSpecificVertices(
          Array.from(allVertexIndicesToHighlight)
        );
      }
    }
  }

  updateAnimFrameDetailsUI(animFrame: AnimFrame | null) {
    const detailsContent = document.getElementById(
      "animframe-details-content"
    )!;
    const clearDetailsBtn = document.getElementById(
      "clear-details"
    ) as HTMLButtonElement;
    const addTransformBtn = document.getElementById(
      "add-new-transform-btn"
    ) as HTMLButtonElement;

    const renderer = this.viewer.getRenderer();
    if (renderer) {
      renderer.clearSpecificVertexHighlights();
      renderer.clearSpecificFaceHighlights();
    }
    this.clearTransformEditor();
    this.updateExportFrameButtonState();

    if (
      animFrame &&
      animFrame.base &&
      animFrame.base.animTypes &&
      animFrame.base.animLabels
    ) {
      if (addTransformBtn) addTransformBtn.disabled = false;
    } else {
      if (addTransformBtn) addTransformBtn.disabled = true;
      this.hideNewTransformForm();
    }

    if (!animFrame) {
      detailsContent.innerHTML =
        '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select an animation frame or frame data missing.</span></div>';
      if (clearDetailsBtn) clearDetailsBtn.disabled = true;
      return;
    }
    if (clearDetailsBtn) clearDetailsBtn.disabled = false;

    let html = `<div class="detail-item"><span class="detail-label">Frame ID:</span> ${
      animFrame.id !== undefined ? animFrame.id : "N/A"
    }</div>`;
    html += `<div class="detail-item"><span class="detail-label">Frame Delay:</span> ${animFrame.frameDelay} ticks</div>`;
    const animBase = animFrame.base;

    if (animBase) {
      html += `<div class="detail-item"><span class="detail-label">Base Anim Groups:</span> ${animBase.animLength}</div>`;
    } else {
      html += `<div class="detail-item"><span class="detail-label">Base Info:</span> AnimBase object not found on this frame.</div>`;
    }

    const transformCount = animFrame.frameLength;
    html += `<div class="detail-item"><span class="detail-label">Transforms in this Frame:</span> ${transformCount}</div>`;

    if (
      transformCount > 0 &&
      animBase &&
      animFrame.bases &&
      animFrame.x &&
      animFrame.y &&
      animFrame.z &&
      animBase.animTypes &&
      animBase.animLabels
    ) {
      html += `<div class="detail-item" style="margin-top: 8px;"><span class="detail-label">Frame Transforms List:</span></div>`;
      for (let i = 0; i < transformCount; i++) {
        if (
          i >= animFrame.bases.length ||
          i >= animFrame.x.length ||
          i >= animFrame.y.length ||
          i >= animFrame.z.length
        ) {
          console.warn(
            `Data inconsistency in AnimFrame ${animFrame.id} at transform index ${i}. frameLength: ${transformCount}, but array lengths differ.`
          );
          continue;
        }
        const baseIndexForThisTransform = animFrame.bases[i];
        if (
          baseIndexForThisTransform === undefined ||
          baseIndexForThisTransform >= animBase.animTypes.length ||
          baseIndexForThisTransform >= animBase.animLabels.length
        ) {
          console.warn(
            `Invalid baseIndexForThisTransform (${baseIndexForThisTransform}) in AnimFrame ${
              animFrame.id
            } at transform index ${i}. Max base group index: ${
              animBase.animTypes.length - 1
            }`
          );
          html += `<div class="transform-group" data-transform-index="${i}" style="padding: 6px; margin-bottom: 6px; border: 1px solid #cc0000; border-radius: 4px; background-color: #4a2a2a;">`;
          html += `<div style="font-weight: bold; color: #ffaaaa;">${
            i + 1
          }: Error - Invalid Base Group Index ${baseIndexForThisTransform}</div>`;
          html += `</div>`;
          continue;
        }

        const transformType = animBase.animTypes[baseIndexForThisTransform];
        const transformTypeName = this.getTransformTypeName(transformType);
        const tX = animFrame.x[i];
        const tY = animFrame.y[i];
        const tZ = animFrame.z[i];

        html += `<div class="transform-group" data-transform-index="${i}"
                             style="cursor: pointer; padding: 6px; margin-bottom: 6px; border: 1px solid #444; border-radius: 4px; background-color: #2a2a2a;">`;
        html += `<div style="font-weight: bold;">${
          i + 1
        } (targets Base Group ${baseIndexForThisTransform}): ${transformTypeName}</div>`;
        html += `<div>Values: (X: ${tX}, Y: ${tY}, Z: ${tZ})</div>`;

        const affectedModelGroupLabels =
          animBase.animLabels[baseIndexForThisTransform];
        if (affectedModelGroupLabels && affectedModelGroupLabels.length > 0) {
          html += `<div>Affects Model ${
            transformType === 5 ? "Face" : "Vertex"
          } Labels: <ul>`;
          for (let j = 0; j < affectedModelGroupLabels.length; j++) {
            html += `<li>Label ${affectedModelGroupLabels[j]}</li>`;
          }
          html += `</ul></div>`;
        } else {
          html += `<div>Affects Model ${
            transformType === 5 ? "Face" : "Vertex"
          } Labels: None specified for Base Group ${baseIndexForThisTransform}</div>`;
        }
        html += `</div>`;
      }
    } else if (transformCount > 0) {
      html += `<div class="detail-item"><span class="detail-label">Transforms:</span> (Data for individual transforms might be incomplete or AnimBase info missing)</div>`;
    }

    detailsContent.innerHTML = html;

    detailsContent.querySelectorAll(".transform-group").forEach((el) => {
      el.addEventListener("click", (event) => {
        const clickedElement = event.currentTarget as HTMLElement;
        if (clickedElement.style.borderColor === "rgb(204, 0, 0)") {
          console.warn(
            "Clicked on an error-state transform group. Editor not shown."
          );
          return;
        }

        detailsContent
          .querySelectorAll(".transform-group")
          .forEach(
            (tg) => ((tg as HTMLElement).style.backgroundColor = "#2a2a2a")
          );

        clickedElement.style.backgroundColor = "#0055A4";

        const transformIndex = parseInt(
          clickedElement.dataset.transformIndex!,
          10
        );
        if (!isNaN(transformIndex)) {
          const renderer = this.viewer.getRenderer();
          if (renderer) {
            renderer.clearSpecificVertexHighlights();
            renderer.clearSpecificFaceHighlights();
          }

          this.handleTransformOperationClick(animFrame, transformIndex);
          this.showTransformEditor(animFrame, transformIndex, clickedElement);

          const deleteTransformBtn = document.getElementById(
            "delete-transform-btn"
          ) as HTMLButtonElement;
          deleteTransformBtn.disabled = false;
          clearDetailsBtn.disabled = false;
        }
      });
    });
  }

  showNewTransformForm() {
    const formContainer = document.getElementById(
      "new-transform-form-container"
    )!;
    if (
      !this.currentSelectedAnimFrameInstance ||
      !this.currentSelectedAnimFrameInstance.base
    ) {
      console.warn(
        "Cannot show new Transform form: No valid AnimFrame or AnimBase selected."
      );
      this.hideNewTransformForm();
      return;
    }

    const animFrame = this.currentSelectedAnimFrameInstance;
    const animBase = animFrame.base;

    formContainer.innerHTML = `
            <h4>Add New Transform</h4>
            <div>
                <label for="new-transform-base-group-select">Target AnimBase Group:</label>
                <select id="new-transform-base-group-select"></select>
                <div id="affected-labels-info" style="font-size: 10px; color: #aaa; margin-top: 4px;">Select a base group to see affected model labels.</div>
            </div>
            <div>
                <label for="new-transform-x">X Value:</label>
                <input type="number" id="new-transform-x" value="0">
            </div>
            <div>
                <label for="new-transform-y">Y Value:</label>
                <input type="number" id="new-transform-y" value="0">
            </div>
            <div>
                <label for="new-transform-z">Z Value:</label>
                <input type="number" id="new-transform-z" value="0">
            </div>
            <div class="form-action-buttons" style="margin-top: 10px;">
                <button id="cancel-add-transform-btn" class="label-control-btn">Cancel</button>
                <button id="confirm-add-transform-btn" class="label-control-btn active" style="background-color: #0066cc; margin-left: 5px;">Confirm Add</button>
            </div>
        `;

    this.activeNewTransformForm.baseGroupSelect = document.getElementById(
      "new-transform-base-group-select"
    ) as HTMLSelectElement;
    this.activeNewTransformForm.xInput = document.getElementById(
      "new-transform-x"
    ) as HTMLInputElement;
    this.activeNewTransformForm.yInput = document.getElementById(
      "new-transform-y"
    ) as HTMLInputElement;
    this.activeNewTransformForm.zInput = document.getElementById(
      "new-transform-z"
    ) as HTMLInputElement;
    this.activeNewTransformForm.affectedInfoDiv = document.getElementById(
      "affected-labels-info"
    ) as HTMLElement;

    if (
      animBase.animLength > 0 &&
      animBase.animTypes &&
      this.activeNewTransformForm.baseGroupSelect
    ) {
      for (let i = 0; i < animBase.animLength; i++) {
        const option = document.createElement("option");
        option.value = i.toString();
        option.textContent = `Group ${i}: ${this.getTransformTypeName(
          animBase.animTypes[i]
        )}`;
        this.activeNewTransformForm.baseGroupSelect.appendChild(option);
      }
    } else if (this.activeNewTransformForm.affectedInfoDiv) {
      this.activeNewTransformForm.affectedInfoDiv.textContent =
        "AnimBase has no defined groups.";
    }

    if (this.activeNewTransformForm.baseGroupSelect) {
      this.activeNewTransformForm.baseGroupSelect.addEventListener(
        "change",
        (e) => {
          const selectedGroupIndex = parseInt(
            (e.target as HTMLSelectElement).value,
            10
          );
          this.updateAffectedLabelsInfo(animBase, selectedGroupIndex);
          this.highlightAffectedModelParts(animBase, selectedGroupIndex);

          const transformType = animBase.animTypes[selectedGroupIndex];
          if (
            this.activeNewTransformForm.xInput &&
            this.activeNewTransformForm.yInput &&
            this.activeNewTransformForm.zInput
          ) {
            if (transformType === 3) {
              this.activeNewTransformForm.xInput.value = "128";
              this.activeNewTransformForm.yInput.value = "128";
              this.activeNewTransformForm.zInput.value = "128";
            } else {
              this.activeNewTransformForm.xInput.value = "0";
              this.activeNewTransformForm.yInput.value = "0";
              this.activeNewTransformForm.zInput.value = "0";
            }
          }
        }
      );

      if (this.activeNewTransformForm.baseGroupSelect.options.length > 0) {
        this.activeNewTransformForm.baseGroupSelect.dispatchEvent(
          new Event("change")
        );
      }
    }

    (
      document.getElementById("confirm-add-transform-btn") as HTMLButtonElement
    ).addEventListener("click", () => this.handleConfirmAddNewTransform());
    (
      document.getElementById("cancel-add-transform-btn") as HTMLButtonElement
    ).addEventListener("click", () => this.hideNewTransformForm());

    formContainer.style.display = "block";
  }

  hideNewTransformForm() {
    const formContainer = document.getElementById(
      "new-transform-form-container"
    )!;
    formContainer.style.display = "none";
    formContainer.innerHTML = "";
    const renderer = this.viewer.getRenderer();
    if (renderer) {
      renderer.clearSpecificVertexHighlights();
      renderer.clearSpecificFaceHighlights();
    }
    this.activeNewTransformForm = {
      baseGroupSelect: null,
      xInput: null,
      yInput: null,
      zInput: null,
      affectedInfoDiv: null,
    };
  }

  handleDeleteSelectedTransform() {
    if (
      !this.activeTransformEditor ||
      !this.activeTransformEditor.animFrame ||
      this.activeTransformEditor.transformIndex === -1
    ) {
      console.warn("No transform selected for deletion, or editor not active.");
      alert("No transform is currently selected for deletion.");
      return;
    }

    const animFrame = this.activeTransformEditor.animFrame;
    const transformIndex = this.activeTransformEditor.transformIndex;

    if (
      !confirm(
        `Are you sure you want to delete Transform ${
          transformIndex + 1
        } (from list) from frame ${animFrame.id}?`
      )
    ) {
      return;
    }

    const success = animFrame.deleteTransform(transformIndex);

    if (success) {
      this.clearTransformEditor();
      this.updateAnimFrameDetailsUI(animFrame);

      if (animFrame.id !== undefined) {
        this.displaySingleAnimFrame(animFrame.id);
      } else {
        console.warn(
          "AnimFrame ID is undefined, cannot refresh 3D model view after deletion. Resetting model."
        );
        const renderer = this.viewer.getRenderer();
        const selectedModelId = renderer.selectedModel;
        if (selectedModelId) {
          const modelMeshes = renderer.modelMeshes.get(selectedModelId);
          if (modelMeshes) {
            const meshArray = Array.isArray(modelMeshes)
              ? modelMeshes
              : [modelMeshes];
            if (meshArray[0] && meshArray[0].userData.originalModel) {
              (meshArray[0].userData.originalModel as Model).resetToOriginal();
              renderer.updateMeshGeometry();
              renderer.updateVertexVisuals(selectedModelId);
            }
          }
        }
      }
    } else {
      alert(
        `Failed to delete transform ${
          transformIndex + 1
        }. Check console for errors or data inconsistencies.`
      );
    }
  }

  updateAffectedLabelsInfo(animBase: AnimBase, baseGroupIndex: number) {
    if (
      !animBase ||
      !animBase.animLabels ||
      !animBase.animTypes ||
      !this.activeNewTransformForm.affectedInfoDiv ||
      baseGroupIndex >= animBase.animLabels.length ||
      baseGroupIndex >= animBase.animTypes.length
    )
      return;

    const affectedModelGroupLabels = animBase.animLabels[baseGroupIndex];
    const transformType = animBase.animTypes[baseGroupIndex];
    let infoText = `Affects Model ${
      transformType === 5 ? "Face" : "Vertex"
    } Label(s): `;

    if (affectedModelGroupLabels && affectedModelGroupLabels.length > 0) {
      infoText += Array.from(affectedModelGroupLabels).join(", ");
    } else {
      infoText += `None specified for Base Group ${baseGroupIndex}.`;
    }
    this.activeNewTransformForm.affectedInfoDiv.textContent = infoText;
  }

  highlightAffectedModelParts(animBase: AnimBase, baseGroupIndex: number) {
    const renderer = this.viewer.getRenderer();
    const selectedModelId = renderer.selectedModel;
    if (!selectedModelId) return;

    const modelMeshes = renderer.modelMeshes.get(selectedModelId);
    if (!modelMeshes) return;

    const meshArray = Array.isArray(modelMeshes) ? modelMeshes : [modelMeshes];
    let modelInstance: Model | null = null;
    for (const mesh of meshArray) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        modelInstance = mesh.userData.originalModel as Model;
        break;
      }
    }
    if (!modelInstance) return;

    if (
      !animBase ||
      !animBase.animLabels ||
      !animBase.animTypes ||
      baseGroupIndex >= animBase.animLabels.length ||
      baseGroupIndex >= animBase.animTypes.length
    ) {
      console.warn(
        "Cannot highlight: AnimBase data incomplete or index out of bounds for highlighting."
      );
      renderer.clearSpecificVertexHighlights();
      renderer.clearSpecificFaceHighlights();
      return;
    }

    const transformType = animBase.animTypes[baseGroupIndex];
    const affectedModelLabels = animBase.animLabels[baseGroupIndex];

    renderer.clearSpecificVertexHighlights();
    renderer.clearSpecificFaceHighlights();

    if (!affectedModelLabels || affectedModelLabels.length === 0) {
      return;
    }

    if (transformType === 5) {
      const allFaceIndicesToHighlight = new Set<number>();
      if (modelInstance.labelFaces) {
        for (let i = 0; i < affectedModelLabels.length; i++) {
          const faceGroupLabel = affectedModelLabels[i];
          if (modelInstance.labelFaces[faceGroupLabel]) {
            const facesInGroup = modelInstance.labelFaces[faceGroupLabel];
            for (let j = 0; j < facesInGroup.length; j++) {
              allFaceIndicesToHighlight.add(facesInGroup[j]);
            }
          }
        }
      }
      if (allFaceIndicesToHighlight.size > 0) {
        renderer.highlightSpecificFaces(Array.from(allFaceIndicesToHighlight));
      }
    } else {
      const allVertexIndicesToHighlight = new Set<number>();
      if (modelInstance.labelVertices) {
        for (let i = 0; i < affectedModelLabels.length; i++) {
          const vertexGroupLabel = affectedModelLabels[i];
          if (modelInstance.labelVertices[vertexGroupLabel]) {
            const verticesInGroup =
              modelInstance.labelVertices[vertexGroupLabel];
            for (let j = 0; j < verticesInGroup.length; j++) {
              allVertexIndicesToHighlight.add(verticesInGroup[j]);
            }
          }
        }
      }
      if (allVertexIndicesToHighlight.size > 0) {
        renderer.highlightSpecificVertices(
          Array.from(allVertexIndicesToHighlight)
        );
      }
    }
  }

  handleConfirmAddNewTransform() {
    if (
      !this.currentSelectedAnimFrameInstance ||
      !this.activeNewTransformForm.baseGroupSelect ||
      !this.activeNewTransformForm.xInput ||
      !this.activeNewTransformForm.yInput ||
      !this.activeNewTransformForm.zInput
    ) {
      console.error("Cannot add Transform: Form or AnimFrame not ready.");
      return;
    }

    const animFrame = this.currentSelectedAnimFrameInstance;
    const baseGroupIndex = parseInt(
      this.activeNewTransformForm.baseGroupSelect.value,
      10
    );
    const transformX = parseInt(this.activeNewTransformForm.xInput.value, 10);
    const transformY = parseInt(this.activeNewTransformForm.yInput.value, 10);
    const transformZ = parseInt(this.activeNewTransformForm.zInput.value, 10);

    if (
      isNaN(baseGroupIndex) ||
      isNaN(transformX) ||
      isNaN(transformY) ||
      isNaN(transformZ)
    ) {
      alert(
        "Invalid input values for the new Transform. Ensure all are numbers."
      );
      return;
    }

    animFrame.addTransform(baseGroupIndex, transformX, transformY, transformZ);

    this.hideNewTransformForm();
    this.updateAnimFrameDetailsUI(animFrame);
    if (animFrame.id !== undefined) {
      this.displaySingleAnimFrame(animFrame.id);
    }
  }

  updateFaceLabelUI(modelId: string) {
    const labelList = document.getElementById("label-list")!;
    labelList.innerHTML = "";
    const labels = this.viewer.getRenderer().getModelFaceLabels(modelId);
    const clearBtn = document.getElementById(
      "clear-labels"
    ) as HTMLButtonElement;

    const modelIsLoaded = !!modelId;
    if (clearBtn) clearBtn.disabled = !modelIsLoaded;

    if (!labels || labels.length === 0) {
      labelList.innerHTML =
        '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No face labels available</span></div>';
      return;
    }

    labels.forEach((label) => {
      const item = document.createElement("div");
      item.className = "label-item";

      const labelSpan = document.createElement("span");
      labelSpan.textContent = `Label ${label.id}`;

      const input = document.createElement("input");
      input.type = "text";
      input.value = label.id.toString(); // or leave blank if editable name
      input.className = "label-edit-input";
      input.style.marginLeft = "8px";
      input.style.width = "40px";
      input.disabled = !this.changeFaceLabels?.checked

      const countSpan = document.createElement("span");
      countSpan.className = "label-count";
      countSpan.textContent = `${label.faceCount} faces`;

      item.appendChild(labelSpan);
      item.appendChild(input);
      item.appendChild(countSpan);

      item.addEventListener("click", () => {
        document
          .querySelectorAll("#label-list .label-item")
          .forEach((el) => el.classList.remove("selected", "highlighted-face"));
        item.classList.add("highlighted-face");
        this.viewer.getRenderer().highlightFaceLabel(label.id);
      });
      labelList.appendChild(item);
    });
  }

  updateVertexLabelUI(modelId: string) {
    const list = document.getElementById("vertex-label-list") as HTMLElement;
    list.innerHTML = "";
    const labels = this.viewer.getRenderer().getModelVertexLabels(modelId);

    if (!labels || labels.length === 0) {
      list.innerHTML =
        '<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No vertex labels available</span></div>';
      this.updateVertexLabelUIState();
      return;
    }
    this.updateVertexLabelUIState();

    labels.forEach((label) => {
      const item = document.createElement("div");
      item.className = "label-item";

      const labelSpan = document.createElement("span");
      labelSpan.textContent = `Label ${label.id}`;

      const input = document.createElement("input");
      input.type = "text";
      input.value = label.id.toString();
      input.className = "label-edit-input";
      input.style.marginLeft = "8px";
      input.style.width = "40px";
      input.disabled = !this.changeVertexLabels?.checked;

      const countSpan = document.createElement("span");
      countSpan.className = "label-count";
      countSpan.textContent = `${label.vertexCount} vertices`;

      item.appendChild(labelSpan);
      item.appendChild(input);
      item.appendChild(countSpan);

      item.addEventListener("click", () => {
        if (!this.viewer.getRenderer().editMode) {
          alert("Enable Vertex Editing mode to highlight vertex labels.");
          return;
        }
        document
          .querySelectorAll("#vertex-label-list .label-item")
          .forEach((el) => el.classList.remove("selected", "highlighted-vertex"));
        item.classList.add("highlighted-vertex");
        this.viewer.getRenderer().highlightVertexLabel(label.id);
      });

      list.appendChild(item);
    });

  }

  updateVertexLabelUIState() {
    const clearBtn = document.getElementById(
      "clear-vertex-labels"
    ) as HTMLButtonElement;
    const modelLoaded = !!this.viewer.getRenderer().selectedModel;
    const editModeActive = this.viewer.getRenderer().editMode;

    clearBtn.disabled = !modelLoaded || !editModeActive;
  }

  setupFaceLabelUI() {
    const clearLabelsBtn = document.getElementById(
      "clear-labels"
    ) as HTMLButtonElement;

    clearLabelsBtn.addEventListener("click", () => {
      if (clearLabelsBtn.disabled) return;
      this.viewer.getRenderer().clearFaceHighlights();
      document
        .querySelectorAll("#label-list .label-item")
        .forEach((el) => el.classList.remove("selected", "highlighted-face"));
      document
        .querySelectorAll("#label-panel .label-control-btn")
        .forEach((el) => el.classList.remove("active"));
    });
  }

  setupVertexLabelUI() {
    const clearBtn = document.getElementById(
      "clear-vertex-labels"
    ) as HTMLButtonElement;

    clearBtn.addEventListener("click", () => {
      if (clearBtn.disabled) return;
      this.viewer.getRenderer().clearVertexHighlights();
      document
        .querySelectorAll("#vertex-label-list .label-item")
        .forEach((el) => el.classList.remove("selected", "highlighted-vertex"));
      document
        .querySelectorAll("#vertex-label-panel .label-control-btn")
        .forEach((el) => el.classList.remove("active"));
    });
  }
}
