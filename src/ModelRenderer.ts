import * as THREE from "three";
import Model from "./Model";
import FileLoader from "./FileLoader";
import Pix3D from "./Pix3D";
import ColorConversion from "./ColorConversion";

export default class ModelRenderer {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  modelMeshes: Map<string, THREE.Mesh | THREE.Mesh[]>;
  vertexLabels: Map<string, THREE.Sprite[]>;
  vertexSpheres: Map<string, THREE.Mesh[]>;
  raycaster: THREE.Raycaster | null;
  mouse: THREE.Vector2 | null;
  selectedModel: string | null;
  currentMesh: THREE.Mesh | THREE.Mesh[] | null;
  showVertexNumbers: boolean;
  editMode: boolean;
  isDragging: boolean;
  selectedVertex: any;
  dragPlane: THREE.Mesh | null;
  originalVertexPosition: THREE.Vector3 | null;
  cameraControls: boolean;

  keys: { w: boolean; a: boolean; s: boolean; d: boolean };
  cameraMoveSpeed: number;
  cameraTarget: THREE.Vector3;

  highlightedFaces: Set<number>;
  originalFaceColors: Map<string, any>;
  showingFaceLabels: boolean;

  highlightedVertexLabelInfo: {
    id: number | null;
    originalSphereColors: Map<THREE.Mesh, number>;
  };

  specificHighlightedVerticesInfo: {
    originalSphereColors: Map<THREE.Mesh, { color: number; visible: boolean }>;
    spheresWereTemporarilyMadeVisible: boolean;
  };

  specificHighlightedFacesInfo: {
    originalFaceColors: Map<number, { r: number; g: number; b: number }>;
    highlightedFacesSet: Set<number>;
  };

  fileLoader: FileLoader;
  textureCache: Map<number, THREE.Texture>;

  mouseDown: boolean;
  mouseX: number;
  mouseY: number;

  constructor(container: HTMLElement, fileLoader: FileLoader) {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.modelMeshes = new Map();
    this.vertexLabels = new Map();
    this.vertexSpheres = new Map();
    this.raycaster = null;
    this.mouse = null;
    this.selectedModel = null;
    this.currentMesh = null;
    this.showVertexNumbers = false;
    this.editMode = false;
    this.isDragging = false;
    this.selectedVertex = null;
    this.dragPlane = null;
    this.originalVertexPosition = null;
    this.cameraControls = true;

    this.keys = { w: false, a: false, s: false, d: false };
    this.cameraMoveSpeed = 5.0;
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    this.highlightedFaces = new Set();
    this.originalFaceColors = new Map();
    this.showingFaceLabels = false;

    this.highlightedVertexLabelInfo = {
      id: null,
      originalSphereColors: new Map(),
    };

    this.specificHighlightedVerticesInfo = {
      originalSphereColors: new Map(),
      spheresWereTemporarilyMadeVisible: false,
    };

    this.specificHighlightedFacesInfo = {
      originalFaceColors: new Map(),
      highlightedFacesSet: new Set(),
    };

    this.fileLoader = fileLoader;
    this.textureCache = new Map();

    this.mouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;

    this.initThreeJS(container);
    this.setupControls();
    this.setupInteraction();
    this.animate();
  }

  async loadTexture(textureId: number): Promise<THREE.Texture | null> {
    if (this.textureCache.has(textureId)) {
      return this.textureCache.get(textureId)!;
    }

    if (this.fileLoader && this.fileLoader.availableTextures.has(textureId)) {
      const file = this.fileLoader.availableTextures.get(textureId);
      if (!file) {
        console.warn(
          `Texture file for ID ${textureId} not found in fileLoader.availableTextures.`
        );
        return null;
      }

      try {
        const processedImageData = await this.processMagentaTransparency(file);

        const textureLoader = new THREE.TextureLoader();
        const texture = await textureLoader.loadAsync(processedImageData.url);

        texture.flipY = false;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.format = THREE.RGBAFormat;
        texture.premultiplyAlpha = false;

        this.textureCache.set(textureId, texture);

        URL.revokeObjectURL(processedImageData.url);

        return texture;
      } catch (err) {
        console.error(
          `Failed to load texture ID ${textureId} from ${file.name}:`,
          err
        );
        return null;
      }
    } else {
      return null;
    }
  }

  async processMagentaTransparency(
    file: File
  ): Promise<{ url: string; blob: Blob }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const fileUrl = URL.createObjectURL(file);

      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            throw new Error("Failed to get 2D context from canvas");
          }

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            if (r >= 250 && g <= 5 && b >= 250) {
              data[i + 3] = 0;
            }
          }
          ctx.putImageData(imageData, 0, 0);

          canvas.toBlob((blob) => {
            if (blob) {
              const processedUrl = URL.createObjectURL(blob);
              resolve({ url: processedUrl, blob });
            } else {
              reject(new Error("Failed to create blob from processed image"));
            }
          }, "image/png");
        } catch (error) {
          reject(error);
        } finally {
          URL.revokeObjectURL(fileUrl);
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(fileUrl);
        reject(new Error("Failed to load image for processing"));
      };

      img.src = fileUrl;
    });
  }

  getModel(modelId: string): THREE.Mesh | THREE.Mesh[] | undefined {
    return this.modelMeshes.get(modelId);
  }

  updateVertexVisuals(modelId: string): void {
    if (!this.currentMesh || !modelId) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];

    let targetMesh = null;
    for (const mesh of meshes) {
      if (mesh && mesh.userData && mesh.userData.modelId === modelId) {
        targetMesh = mesh;
        break;
      }
    }

    if (!targetMesh || !targetMesh.userData.originalModel) return;

    const model = targetMesh.userData.originalModel;

    const spheres = this.vertexSpheres.get(modelId);
    if (spheres) {
      for (let i = 0; i < model.vertexCount; i++) {
        if (spheres[i]) {
          spheres[i].position.set(
            model.vertexX[i],
            -model.vertexY[i],
            model.vertexZ[i]
          );
        }
      }
    }

    const labels = this.vertexLabels.get(modelId);
    if (labels && this.showVertexNumbers) {
      for (let i = 0; i < model.vertexCount; i++) {
        if (labels[i]) {
          labels[i].position.set(
            model.vertexX[i],
            -model.vertexY[i],
            model.vertexZ[i]
          );
        }
      }
    }
  }

  highlightSpecificFaces(faceIndicesArray: number[]): void {
    if (!this.currentMesh || !this.selectedModel) return;

    this.clearSpecificFaceHighlights();
    this.clearFaceHighlights();

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];
    if (meshes.length === 0) return;

    let model = null;
    for (const mesh of meshes) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel;
        break;
      }
    }

    if (!model) {
      console.warn("No model found in current meshes for highlighting");
      return;
    }

    const highlightColor = { r: 0.0, g: 1.0, b: 1.0 };

    if (!this.specificHighlightedFacesInfo.originalFaceColors.size) {
      for (let i = 0; i < model.faceCount; i++) {
        let originalColor;
        if (model.faceColor?.[i] !== undefined)
          originalColor = this.parseColor(Pix3D.hslPal[model.faceColor[i]]);
        else if (model.faceColorA?.[i] !== undefined)
          originalColor = this.parseColor(Pix3D.hslPal[model.faceColorA[i]]);
        else originalColor = { r: 0.7, g: 0.7, b: 0.7 };
        this.specificHighlightedFacesInfo.originalFaceColors.set(
          i,
          originalColor
        );
      }
    }

    meshes.forEach((mesh) => {
      if (!mesh || !mesh.geometry) return;

      const geometry = mesh.geometry;
      const colorAttribute = geometry.getAttribute(
        "color"
      ) as THREE.BufferAttribute;

      if (!colorAttribute) return;

      if (geometry.userData.faceIndexMapping) {
        const faceMapping = geometry.userData.faceIndexMapping;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex = faceMapping[bufferFaceIdx];

          if (
            originalFaceIndex !== undefined &&
            faceIndicesArray.includes(originalFaceIndex)
          ) {
            this.specificHighlightedFacesInfo.highlightedFacesSet.add(
              originalFaceIndex
            );
            const vertexOffset = bufferFaceIdx * 3;
            for (let j = 0; j < 3; j++) {
              colorAttribute.setXYZ(
                vertexOffset + j,
                highlightColor.r,
                highlightColor.g,
                highlightColor.b
              );
            }
          }
        }
      } else {
        const map = geometry.userData.renderedToOriginalFaceIndexMap;
        const usedPriorities = geometry.userData.usedPriorities;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex =
            usedPriorities && map ? map[bufferFaceIdx] : bufferFaceIdx;

          if (
            originalFaceIndex !== undefined &&
            faceIndicesArray.includes(originalFaceIndex)
          ) {
            this.specificHighlightedFacesInfo.highlightedFacesSet.add(
              originalFaceIndex
            );
            const vertexOffset = bufferFaceIdx * 3;
            for (let j = 0; j < 3; j++) {
              colorAttribute.setXYZ(
                vertexOffset + j,
                highlightColor.r,
                highlightColor.g,
                highlightColor.b
              );
            }
          }
        }
      }
      colorAttribute.needsUpdate = true;
    });
  }

  clearSpecificFaceHighlights(): void {
    if (
      !this.currentMesh ||
      !this.selectedModel ||
      this.specificHighlightedFacesInfo.highlightedFacesSet.size === 0
    )
      return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];

    meshes.forEach((mesh) => {
      if (!mesh || !mesh.geometry) return;

      const geometry = mesh.geometry;
      const colorAttribute = geometry.getAttribute(
        "color"
      ) as THREE.BufferAttribute;

      if (!colorAttribute) return;

      if (geometry.userData.faceIndexMapping) {
        const faceMapping = geometry.userData.faceIndexMapping;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex = faceMapping[bufferFaceIdx];

          if (
            originalFaceIndex !== undefined &&
            this.specificHighlightedFacesInfo.highlightedFacesSet.has(
              originalFaceIndex
            )
          ) {
            const originalColor =
              this.specificHighlightedFacesInfo.originalFaceColors.get(
                originalFaceIndex
              );
            if (originalColor) {
              const vertexOffset = bufferFaceIdx * 3;
              for (let j = 0; j < 3; j++) {
                colorAttribute.setXYZ(
                  vertexOffset + j,
                  originalColor.r,
                  originalColor.g,
                  originalColor.b
                );
              }
            }
          }
        }
      } else {
        const map = geometry.userData.renderedToOriginalFaceIndexMap;
        const usedPriorities = geometry.userData.usedPriorities;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex =
            usedPriorities && map ? map[bufferFaceIdx] : bufferFaceIdx;

          if (
            originalFaceIndex !== undefined &&
            this.specificHighlightedFacesInfo.highlightedFacesSet.has(
              originalFaceIndex
            )
          ) {
            const originalColor =
              this.specificHighlightedFacesInfo.originalFaceColors.get(
                originalFaceIndex
              );
            if (originalColor) {
              const vertexOffset = bufferFaceIdx * 3;
              for (let j = 0; j < 3; j++) {
                colorAttribute.setXYZ(
                  vertexOffset + j,
                  originalColor.r,
                  originalColor.g,
                  originalColor.b
                );
              }
            }
          }
        }
      }
      colorAttribute.needsUpdate = true;
    });

    this.specificHighlightedFacesInfo.highlightedFacesSet.clear();
  }

  getModelVertexLabels(
    modelId: string
  ): { id: number; vertexCount: number; vertices: Int32Array }[] | null {
    const meshes = this.modelMeshes.get(modelId);
    if (!meshes) return null;

    const meshArray = Array.isArray(meshes) ? meshes : [meshes];
    let model = null;

    for (const mesh of meshArray) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel;
        break;
      }
    }

    if (!model || !model.labelVertices) return null;

    const labels = [];
    for (let i = 0; i < model.labelVertices.length; i++) {
      if (model.labelVertices[i] && model.labelVertices[i].length > 0) {
        labels.push({
          id: i,
          vertexCount: model.labelVertices[i].length,
          vertices: model.labelVertices[i],
        });
      }
    }
    return labels.length > 0 ? labels : null;
  }

  highlightFaceLabel(labelId: number): void {
    if (!this.currentMesh || !this.selectedModel) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];
    if (meshes.length === 0) return;

    let model = null;
    for (const mesh of meshes) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel;
        break;
      }
    }

    if (!model || !model.labelFaces || !model.labelFaces[labelId]) return;

    this.clearFaceHighlights();
    this.clearVertexHighlights();

    if (!this.originalFaceColors.has(this.selectedModel)) {
      this.storeOriginalFaceColors();
    }

    const facesToHighlight = model.labelFaces[labelId];

    meshes.forEach((mesh) => {
      if (!mesh || !mesh.geometry) return;

      const geometry = mesh.geometry;
      const colorAttribute = geometry.getAttribute(
        "color"
      ) as THREE.BufferAttribute;

      if (!colorAttribute) return;

      if (geometry.userData.faceIndexMapping) {
        const faceMapping = geometry.userData.faceIndexMapping;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex = faceMapping[bufferFaceIdx];

          if (
            originalFaceIndex !== undefined &&
            facesToHighlight.includes(originalFaceIndex)
          ) {
            this.highlightedFaces.add(originalFaceIndex);
            const vertexOffset = bufferFaceIdx * 3;
            for (let j = 0; j < 3; j++) {
              colorAttribute.setXYZ(vertexOffset + j, 1.0, 0.4, 0.0);
            }
          }
        }
      } else {
        const map = geometry.userData.renderedToOriginalFaceIndexMap;
        const usedPriorities = geometry.userData.usedPriorities;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex =
            usedPriorities && map ? map[bufferFaceIdx] : bufferFaceIdx;

          if (
            originalFaceIndex !== undefined &&
            facesToHighlight.includes(originalFaceIndex)
          ) {
            this.highlightedFaces.add(originalFaceIndex);
            const vertexOffset = bufferFaceIdx * 3;
            for (let j = 0; j < 3; j++) {
              colorAttribute.setXYZ(vertexOffset + j, 1.0, 0.4, 0.0);
            }
          }
        }
      }
      colorAttribute.needsUpdate = true;
    });

    this.showingFaceLabels = true;
  }

  clearFaceHighlights(): void {
    if (!this.currentMesh || !this.selectedModel || !this.showingFaceLabels)
      return;

    const originalColorsMap = this.originalFaceColors.get(this.selectedModel);
    if (!originalColorsMap) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];

    meshes.forEach((mesh) => {
      if (!mesh || !mesh.geometry) return;

      const geometry = mesh.geometry;
      const colorAttribute = geometry.getAttribute(
        "color"
      ) as THREE.BufferAttribute;

      if (!colorAttribute) return;

      if (geometry.userData.faceIndexMapping) {
        const faceMapping = geometry.userData.faceIndexMapping;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex = faceMapping[bufferFaceIdx];

          if (
            originalFaceIndex !== undefined &&
            this.highlightedFaces.has(originalFaceIndex)
          ) {
            const origColor = originalColorsMap[originalFaceIndex];
            if (origColor) {
              const vertexOffset = bufferFaceIdx * 3;
              for (let j = 0; j < 3; j++) {
                colorAttribute.setXYZ(
                  vertexOffset + j,
                  origColor.r,
                  origColor.g,
                  origColor.b
                );
              }
            }
          }
        }
      } else {
        const map = geometry.userData.renderedToOriginalFaceIndexMap;
        const usedPriorities = geometry.userData.usedPriorities;
        const numRenderedFaces = colorAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex =
            usedPriorities && map ? map[bufferFaceIdx] : bufferFaceIdx;

          if (
            originalFaceIndex !== undefined &&
            this.highlightedFaces.has(originalFaceIndex)
          ) {
            const origColor = originalColorsMap[originalFaceIndex];
            if (origColor) {
              const vertexOffset = bufferFaceIdx * 3;
              for (let j = 0; j < 3; j++) {
                colorAttribute.setXYZ(
                  vertexOffset + j,
                  origColor.r,
                  origColor.g,
                  origColor.b
                );
              }
            }
          }
        }
      }
      colorAttribute.needsUpdate = true;
    });

    this.highlightedFaces.clear();
    this.showingFaceLabels = false;
    this.clearSpecificFaceHighlights();
  }

  storeOriginalFaceColors(): void {
    if (!this.currentMesh || !this.selectedModel) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];
    if (meshes.length === 0) return;

    let model = null;
    for (const mesh of meshes) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel;
        break;
      }
    }

    if (!model) return;

    const originalColors: any = {};
    for (let i = 0; i < model.faceCount; i++) {
      let color;
      if (model.faceColor != null && model.faceColor[i] !== undefined) {
        color = this.parseColor(Pix3D.hslPal[model.faceColor[i]]);
      } else if (model.faceColorA && model.faceColorA[i] !== undefined) {
        color = this.parseColor(Pix3D.hslPal[model.faceColorA[i]]);
      } else {
        color = { r: 0.7, g: 0.7, b: 0.7 };
      }
      originalColors[i] = color;
    }
    this.originalFaceColors.set(this.selectedModel, originalColors);
  }

  initThreeJS(container: HTMLElement): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x888888);

    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      10000
    );
    this.camera.position.set(50, 50, 50);
    this.cameraTarget.set(0, 0, 0);
    this.camera.lookAt(this.cameraTarget);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = false;
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    if (THREE.ColorManagement) {
      THREE.ColorManagement.enabled = false;
    }
    this.renderer
      .getContext()
      .enable(this.renderer.getContext().POLYGON_OFFSET_FILL);

    this.renderer.sortObjects = true;

    container.appendChild(this.renderer.domElement);

    this.renderer.domElement.parentElement!.classList.add("canvas-container");

    const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      depthTest: false,
      visible: false,
    });
    this.dragPlane = new THREE.Mesh(planeGeometry, planeMaterial);
    this.scene.add(this.dragPlane);

    window.addEventListener("resize", () => this.onWindowResize(container));
  }

  setupControls(): void {
    this.mouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;

    this.renderer!.domElement.addEventListener("mousedown", (e) => {
      this.mouseDown = true;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      if (this.editMode) {
        this.onVertexMouseDown(e);
      }
    });

    this.renderer!.domElement.addEventListener("mousemove", (e) => {
      if (this.editMode && this.isDragging && this.selectedVertex) {
        this.onVertexDrag(e);
      } else if (this.mouseDown && this.cameraControls) {
        const deltaX = e.clientX - this.mouseX;
        const deltaY = e.clientY - this.mouseY;

        const offset = new THREE.Vector3().subVectors(
          this.camera!.position,
          this.cameraTarget
        );
        const spherical = new THREE.Spherical().setFromVector3(offset);

        spherical.theta -= deltaX * 0.01;
        spherical.phi += deltaY * 0.01;

        spherical.phi = Math.max(0.01, Math.min(Math.PI - 0.01, spherical.phi));

        offset.setFromSpherical(spherical);
        this.camera!.position.copy(this.cameraTarget).add(offset);
        this.camera!.lookAt(this.cameraTarget);

        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      }
    });

    this.renderer!.domElement.addEventListener("mouseup", () => {
      this.mouseDown = false;

      if (this.editMode && this.isDragging) {
        this.onVertexMouseUp();
      }
    });

    this.renderer!.domElement.addEventListener("wheel", (e) => {
      if (!this.editMode || !this.isDragging) {
        const offset = new THREE.Vector3().subVectors(
          this.camera!.position,
          this.cameraTarget
        );
        const distance = offset.length();
        const newDistance = distance + e.deltaY * 0.3;
        offset.normalize().multiplyScalar(Math.max(5, newDistance));
        this.camera!.position.copy(this.cameraTarget).add(offset);
      }
    });

    document.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();

      const activeElement = document.activeElement;
      const isTypingInInput =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          (activeElement instanceof HTMLElement &&
            activeElement.isContentEditable));

      if (
        Object.prototype.hasOwnProperty.call(this.keys, key) &&
        !isTypingInInput
      ) {
        this.keys[key as keyof typeof this.keys] = true;

        if (["w", "a", "s", "d"].includes(key)) {
          e.preventDefault();
        }
      }
    });

    document.addEventListener("keyup", (e) => {
      const key = e.key.toLowerCase();

      const activeElement = document.activeElement;
      const isTypingInInput =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          (activeElement instanceof HTMLElement &&
            activeElement.isContentEditable));

      if (
        Object.prototype.hasOwnProperty.call(this.keys, key) &&
        !isTypingInInput
      ) {
        this.keys[key as keyof typeof this.keys] = false;
      }
    });
  }

  setupInteraction(): void {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.renderer!.domElement.addEventListener("click", (event) => {
      if (!this.isDragging && !this.editMode) {
        this.onMouseClick(event);
      }
    });
  }

  getModelFaceLabels(
    modelId: string
  ): { id: number; faceCount: number; faces: Int32Array }[] | null {
    const meshes = this.modelMeshes.get(modelId);
    if (!meshes) return null;

    const meshArray = Array.isArray(meshes) ? meshes : [meshes];
    let model = null;

    for (const mesh of meshArray) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel;
        break;
      }
    }

    if (!model || !model.labelFaces) return null;

    const labels = [];
    for (let i = 0; i < model.labelFaces.length; i++) {
      if (model.labelFaces[i] && model.labelFaces[i].length > 0) {
        labels.push({
          id: i,
          faceCount: model.labelFaces[i].length,
          faces: model.labelFaces[i],
        });
      }
    }
    return labels.length > 0 ? labels : null;
  }

  highlightSpecificVertices(vertexIndicesArray: number[]): void {
    if (!this.selectedModel || !this.currentMesh) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];

    let model = null;
    for (const mesh of meshes) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel;
        break;
      }
    }

    if (!model) return;

    let spheres = this.vertexSpheres.get(this.selectedModel);

    this.clearSpecificVertexHighlights(false);
    this.clearVertexHighlights();

    if (!spheres || spheres.length === 0) {
      this.createVertexSpheres(this.selectedModel, model);
      this.addVertexSpheresToScene(this.selectedModel);
      spheres = this.vertexSpheres.get(this.selectedModel);
      if (!spheres || spheres.length === 0) {
        console.warn("Failed to create vertex spheres for highlighting");
        return;
      }
    }

    spheres.forEach((sphere) => {
      if (!sphere.parent) {
        this.scene!.add(sphere);
      }
    });

    this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible =
      true;

    const highlightColor = 0x00ffff;

    vertexIndicesArray.forEach((vertexIndex) => {
      if (vertexIndex < spheres!.length && vertexIndex >= 0) {
        const sphere = spheres![vertexIndex];
        if (sphere && sphere.material) {
          if (
            !this.specificHighlightedVerticesInfo.originalSphereColors.has(
              sphere
            )
          ) {
            this.specificHighlightedVerticesInfo.originalSphereColors.set(
              sphere,
              {
                color: (
                  sphere.material as THREE.MeshBasicMaterial
                ).color.getHex(),
                visible: sphere.visible,
              }
            );
          }

          (sphere.material as THREE.MeshBasicMaterial).color.setHex(
            highlightColor
          );
          sphere.visible = true;

          const material = sphere.material as THREE.MeshBasicMaterial;
          material.transparent = false;
          material.opacity = 1.0;
          material.depthTest = false;
          material.needsUpdate = true;
        }
      }
    });
  }

  clearSpecificVertexHighlights(
    hideTemporarilyVisibleSpheres: boolean = true
  ): void {
    if (!this.selectedModel) return;

    const spheres = this.vertexSpheres.get(this.selectedModel);
    if (spheres) {
      this.specificHighlightedVerticesInfo.originalSphereColors.forEach(
        (originalState, sphere) => {
          if (sphere && sphere.material) {
            (sphere.material as THREE.MeshBasicMaterial).color.setHex(
              originalState.color
            );
            if (
              this.specificHighlightedVerticesInfo
                .spheresWereTemporarilyMadeVisible &&
              hideTemporarilyVisibleSpheres &&
              !this.editMode
            ) {
              sphere.visible = false;
            } else if (this.editMode) {
              sphere.visible = true;
            } else {
              sphere.visible = originalState.visible;
            }
          }
        }
      );
    }
    this.specificHighlightedVerticesInfo.originalSphereColors.clear();
    if (hideTemporarilyVisibleSpheres) {
      this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible =
        false;
    }
  }

  updateMeshGeometry(): void {
    if (!this.currentMesh) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];

    meshes.forEach((mesh) => {
      const model = mesh.userData.originalModel;
      const geometry = mesh.geometry;
      const positionAttribute = geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      const colorAttribute = geometry.getAttribute(
        "color"
      ) as THREE.BufferAttribute;
      const hasPriorityOrdering = geometry.userData.faceIndexMapping;

      if (hasPriorityOrdering) {
        const faceMapping = geometry.userData.faceIndexMapping;
        const numRenderedFaces = positionAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex = faceMapping[bufferFaceIdx];

          if (
            originalFaceIndex === undefined ||
            originalFaceIndex >= model.faceCount
          ) {
            continue;
          }

          const vA = model.faceVertexA[originalFaceIndex];
          const vB = model.faceVertexB[originalFaceIndex];
          const vC = model.faceVertexC[originalFaceIndex];

          if (
            vA >= model.vertexCount ||
            vB >= model.vertexCount ||
            vC >= model.vertexCount
          ) {
            continue;
          }

          const vertexOffsetInBuffer = bufferFaceIdx * 3;

          positionAttribute.setXYZ(
            vertexOffsetInBuffer,
            model.vertexX[vA],
            -model.vertexY[vA],
            model.vertexZ[vA]
          );
          positionAttribute.setXYZ(
            vertexOffsetInBuffer + 1,
            model.vertexX[vB],
            -model.vertexY[vB],
            model.vertexZ[vB]
          );
          positionAttribute.setXYZ(
            vertexOffsetInBuffer + 2,
            model.vertexX[vC],
            -model.vertexY[vC],
            model.vertexZ[vC]
          );

          if (colorAttribute && !mesh.userData.meshType.includes("textured-")) {
            let parsedColor;
            if (model.faceColor?.[originalFaceIndex] !== undefined) {
              const hslColor = model.faceColor[originalFaceIndex];
              const rgbColor = Pix3D.hslPal[hslColor];
              parsedColor = this.parseColor(rgbColor);
            } else if (model.faceColorA?.[originalFaceIndex] !== undefined) {
              const hslColor = model.faceColorA[originalFaceIndex];
              const rgbColor = Pix3D.hslPal[hslColor];
              parsedColor = this.parseColor(rgbColor);
            } else {
              parsedColor = { r: 0.7, g: 0.7, b: 0.7 };
            }

            let faceVertexAlpha = 1.0;
            if (
              model.faceAlpha &&
              model.faceAlpha[originalFaceIndex] !== undefined
            ) {
              faceVertexAlpha =
                (255 - model.faceAlpha[originalFaceIndex]) / 255.0;
              faceVertexAlpha = Math.max(0, Math.min(1, faceVertexAlpha));
            }

            for (let j = 0; j < 3; j++) {
              colorAttribute.setXYZW(
                vertexOffsetInBuffer + j,
                parsedColor.r,
                parsedColor.g,
                parsedColor.b,
                faceVertexAlpha
              );
            }
          }
        }
      } else {
        const map = geometry.userData.renderedToOriginalFaceIndexMap;
        const usedPriorities = geometry.userData.usedPriorities;
        const numRenderedFaces = positionAttribute.count / 3;

        for (
          let bufferFaceIdx = 0;
          bufferFaceIdx < numRenderedFaces;
          bufferFaceIdx++
        ) {
          const originalFaceIndex =
            usedPriorities && map ? map[bufferFaceIdx] : bufferFaceIdx;

          if (
            originalFaceIndex === undefined ||
            originalFaceIndex >= model.faceCount
          ) {
            continue;
          }

          const vA = model.faceVertexA[originalFaceIndex];
          const vB = model.faceVertexB[originalFaceIndex];
          const vC = model.faceVertexC[originalFaceIndex];

          if (
            vA >= model.vertexCount ||
            vB >= model.vertexCount ||
            vC >= model.vertexCount
          ) {
            continue;
          }

          const vertexOffsetInBuffer = bufferFaceIdx * 3;

          positionAttribute.setXYZ(
            vertexOffsetInBuffer,
            model.vertexX[vA],
            -model.vertexY[vA],
            model.vertexZ[vA]
          );
          positionAttribute.setXYZ(
            vertexOffsetInBuffer + 1,
            model.vertexX[vB],
            -model.vertexY[vB],
            model.vertexZ[vB]
          );
          positionAttribute.setXYZ(
            vertexOffsetInBuffer + 2,
            model.vertexX[vC],
            -model.vertexY[vC],
            model.vertexZ[vC]
          );
        }
      }

      positionAttribute.needsUpdate = true;
      if (colorAttribute) {
        colorAttribute.needsUpdate = true;
      }
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
    });

    this.updateModelAlpha(this.selectedModel!);
  }

  updateModelAlpha(modelId: string): void {
    const meshes = this.modelMeshes.get(modelId);
    if (!meshes) return;

    const meshArray = Array.isArray(meshes) ? meshes : [meshes];

    meshArray.forEach((mesh) => {
      const model = mesh.userData.originalModel;
      const geometry = mesh.geometry;
      const colorAttribute = geometry.getAttribute(
        "color"
      ) as THREE.BufferAttribute;

      if (model.faceAlpha && model.faceAlpha.length > 0 && colorAttribute) {
        let vertexWChanged = false;

        if (geometry.userData.faceIndexMapping) {
          const faceMapping = geometry.userData.faceIndexMapping;
          const numRenderedFaces = colorAttribute.count / 3;

          for (
            let bufferFaceIdx = 0;
            bufferFaceIdx < numRenderedFaces;
            bufferFaceIdx++
          ) {
            const originalFaceIndex = faceMapping[bufferFaceIdx];
            if (
              originalFaceIndex === undefined ||
              originalFaceIndex >= model.faceCount
            )
              continue;

            let threeJsAlpha = 1.0;
            if (model.faceAlpha[originalFaceIndex] !== undefined) {
              threeJsAlpha = (255 - model.faceAlpha[originalFaceIndex]) / 255.0;
              threeJsAlpha = Math.max(0, Math.min(1, threeJsAlpha));
            }

            const vtxIdx1 = bufferFaceIdx * 3;
            const vtxIdx2 = bufferFaceIdx * 3 + 1;
            const vtxIdx3 = bufferFaceIdx * 3 + 2;

            if (colorAttribute.getW(vtxIdx1) !== threeJsAlpha) {
              colorAttribute.setW(vtxIdx1, threeJsAlpha);
              vertexWChanged = true;
            }
            if (colorAttribute.getW(vtxIdx2) !== threeJsAlpha) {
              colorAttribute.setW(vtxIdx2, threeJsAlpha);
              vertexWChanged = true;
            }
            if (colorAttribute.getW(vtxIdx3) !== threeJsAlpha) {
              colorAttribute.setW(vtxIdx3, threeJsAlpha);
              vertexWChanged = true;
            }
          }
        } else {
          const map = geometry.userData.renderedToOriginalFaceIndexMap;
          const usedPriorities = geometry.userData.usedPriorities;
          const numRenderedFaces = colorAttribute.count / 3;

          for (
            let bufferFaceIdx = 0;
            bufferFaceIdx < numRenderedFaces;
            bufferFaceIdx++
          ) {
            const originalFaceIndex =
              usedPriorities && map ? map[bufferFaceIdx] : bufferFaceIdx;
            if (
              originalFaceIndex === undefined ||
              originalFaceIndex >= model.faceCount
            )
              continue;

            let threeJsAlpha = 1.0;
            if (model.faceAlpha[originalFaceIndex] !== undefined) {
              threeJsAlpha = (255 - model.faceAlpha[originalFaceIndex]) / 255.0;
              threeJsAlpha = Math.max(0, Math.min(1, threeJsAlpha));
            }

            const vtxIdx1 = bufferFaceIdx * 3;
            const vtxIdx2 = bufferFaceIdx * 3 + 1;
            const vtxIdx3 = bufferFaceIdx * 3 + 2;

            if (colorAttribute.getW(vtxIdx1) !== threeJsAlpha) {
              colorAttribute.setW(vtxIdx1, threeJsAlpha);
              vertexWChanged = true;
            }
            if (colorAttribute.getW(vtxIdx2) !== threeJsAlpha) {
              colorAttribute.setW(vtxIdx2, threeJsAlpha);
              vertexWChanged = true;
            }
            if (colorAttribute.getW(vtxIdx3) !== threeJsAlpha) {
              colorAttribute.setW(vtxIdx3, threeJsAlpha);
              vertexWChanged = true;
            }
          }
        }

        if (vertexWChanged) {
          colorAttribute.needsUpdate = true;
        }
      }
    });
  }

  addModel(modelId: string, model: Model): THREE.Mesh[] {
    model.calculateBoundsCylinder();

    const geometriesByGroup = this.createSeparateGeometriesByPriority(model);
    const meshes: THREE.Mesh[] = [];

    let renderOrder = 0;
    const RENDER_ORDER_SPACING = 100;

    for (const [groupKey, geometry] of geometriesByGroup) {
      if (!geometry || geometry.getAttribute("position").count === 0) continue;

      const isTransparent = groupKey.includes("transparent");
      const isTextured = groupKey.includes("textured-");

      let textureId = null;
      if (isTextured) {
        const match = groupKey.match(/textured-(\d+)/);
        if (match) {
          textureId = parseInt(match[1]);
        }
      }

      const meshType = isTransparent ? "transparent" : "opaque";
      const material = this.createMaterialFromModel(geometry, meshType);

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = {
        modelId,
        originalModel: model,
        meshType: groupKey,
        textureId: textureId,
      };

      if (isTransparent) {
        mesh.renderOrder = 10000 + renderOrder * RENDER_ORDER_SPACING;
        (mesh.material as THREE.MeshBasicMaterial).transparent = true;
        (mesh.material as THREE.MeshBasicMaterial).depthWrite = false;
        (mesh.material as THREE.MeshBasicMaterial).polygonOffsetFactor =
          -10 - renderOrder;
        (mesh.material as THREE.MeshBasicMaterial).polygonOffsetUnits =
          -10 - renderOrder;
      } else {
        mesh.renderOrder = renderOrder * RENDER_ORDER_SPACING;
        (mesh.material as THREE.MeshBasicMaterial).transparent = false;
        (mesh.material as THREE.MeshBasicMaterial).depthWrite = true;
        (mesh.material as THREE.MeshBasicMaterial).polygonOffsetFactor =
          -1 - renderOrder * 0.1;
        (mesh.material as THREE.MeshBasicMaterial).polygonOffsetUnits =
          -1 - renderOrder * 0.1;
      }
      renderOrder++;

      meshes.push(mesh);
    }

    this.modelMeshes.set(modelId, meshes);

    for (const mesh of meshes) {
      if (mesh.userData.textureId !== null) {
        this.loadAndApplySpecificTexture(mesh, mesh.userData.textureId).catch(
          (err) => {
            console.error(
              `Failed to load texture ${mesh.userData.textureId} for model ${modelId}:`,
              err
            );
          }
        );
      }
    }

    this.createVertexLabels(modelId, model);
    this.createVertexSpheres(modelId, model);
    this.addVertexSpheresToScene(modelId);

    return meshes;
  }

  async loadAndApplySpecificTexture(
    mesh: THREE.Mesh,
    textureId: number
  ): Promise<boolean> {
    try {
      const texture = await this.loadTexture(textureId);
      if (texture) {
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        materials.forEach((mat) => {
          (mat as THREE.MeshBasicMaterial).map = texture;
          (mat as THREE.MeshBasicMaterial).transparent = true;
          (mat as THREE.MeshBasicMaterial).alphaTest = 0.1;
          (mat as THREE.MeshBasicMaterial).vertexColors = true;
          mat.needsUpdate = true;
        });

        return true;
      } else {
        console.warn(
          `Failed to load texture ${textureId} - texture is null/undefined`
        );
      }
    } catch (error) {
      console.error(`Error loading texture ${textureId}:`, error);
    }
    return false;
  }

  groupFacesByTexture(
    model: Model,
    orderedFaceIndices: number[],
    geometriesByGroup: Map<string, THREE.BufferGeometry>
  ): void {
    const faceGroups = new Map();

    faceGroups.set("opaque-untextured", []);
    faceGroups.set("transparent-untextured", []);

    for (const faceIndex of orderedFaceIndices) {
      const isTransparent = this.isFaceTransparent(model, faceIndex);
      const textureId =
        model.faceTextures &&
        model.faceTextures[faceIndex] !== -1 &&
        model.faceTextures[faceIndex] !== undefined
          ? model.faceTextures[faceIndex]
          : null;

      let groupKey;
      if (textureId !== null) {
        groupKey = isTransparent
          ? `transparent-textured-${textureId}`
          : `opaque-textured-${textureId}`;
      } else {
        groupKey = isTransparent
          ? "transparent-untextured"
          : "opaque-untextured";
      }

      if (!faceGroups.has(groupKey)) {
        faceGroups.set(groupKey, []);
      }
      faceGroups.get(groupKey).push(faceIndex);
    }

    for (const [groupKey, faceIndices] of faceGroups) {
      if (faceIndices.length > 0) {
        const geometry = this.createGeometryForFaces(
          model,
          faceIndices,
          groupKey
        );
        geometriesByGroup.set(groupKey, geometry);
      }
    }
  }

  createSeparateGeometriesByPriority(
    model: Model
  ): Map<string, THREE.BufferGeometry> {
    const MAX_PRIORITIES = 12;
    const MAX_DEPTH = 1500;

    const tmpDepthFaceCount = new Int32Array(MAX_DEPTH);
    const tmpDepthFaces = [];
    for (let i = 0; i < MAX_DEPTH; i++) {
      tmpDepthFaces[i] = new Int32Array(512);
    }

    const tmpPriorityFaceCount = new Int32Array(MAX_PRIORITIES);
    const tmpPriorityFaces = [];
    const tmpPriorityDepthSum = new Int32Array(MAX_PRIORITIES);
    const tmpPriority10FaceDepth = new Int32Array(2000);
    const tmpPriority11FaceDepth = new Int32Array(2000);

    for (let i = 0; i < MAX_PRIORITIES; i++) {
      tmpPriorityFaces[i] = new Int32Array(2000);
    }

    tmpDepthFaceCount.fill(0);
    tmpPriorityFaceCount.fill(0);
    tmpPriorityDepthSum.fill(0);

    for (let f = 0; f < model.faceCount; f++) {
      if (model.faceInfo && model.faceInfo[f] === -1) {
        continue;
      }

      const vA = model.faceVertexA[f];
      const vB = model.faceVertexB[f];
      const vC = model.faceVertexC[f];

      const zA = model.vertexZ[vA];
      const zB = model.vertexZ[vB];
      const zC = model.vertexZ[vC];

      const depthAverage = Math.floor((zA + zB + zC) / 3) + model.minDepth;
      const clampedDepth = Math.max(0, Math.min(MAX_DEPTH - 1, depthAverage));

      if (tmpDepthFaceCount[clampedDepth] < 512) {
        tmpDepthFaces[clampedDepth][tmpDepthFaceCount[clampedDepth]++] = f;
      }
    }

    if (!model.facePriority) {
      const faceIndices = [];
      for (let depth = MAX_DEPTH - 1; depth >= 0; depth--) {
        const count = tmpDepthFaceCount[depth];
        for (let f = 0; f < count; f++) {
          faceIndices.push(tmpDepthFaces[depth][f]);
        }
      }

      const geometriesByGroup = new Map();
      this.groupFacesByTexture(model, faceIndices, geometriesByGroup);
      return geometriesByGroup;
    }

    for (let depth = MAX_DEPTH - 1; depth >= 0; depth--) {
      const faceCount = tmpDepthFaceCount[depth];
      if (faceCount > 0) {
        const faces = tmpDepthFaces[depth];
        for (let i = 0; i < faceCount; i++) {
          const faceIndex = faces[i];
          const priority = model.facePriority[faceIndex] || 0;
          const clampedPriority = Math.max(
            0,
            Math.min(MAX_PRIORITIES - 1, priority)
          );

          if (tmpPriorityFaceCount[clampedPriority] < 2000) {
            const priorityFaceCount = tmpPriorityFaceCount[clampedPriority]++;
            tmpPriorityFaces[clampedPriority][priorityFaceCount] = faceIndex;

            if (clampedPriority < 10) {
              tmpPriorityDepthSum[clampedPriority] += depth;
            } else if (clampedPriority === 10 && priorityFaceCount < 2000) {
              tmpPriority10FaceDepth[priorityFaceCount] = depth;
            } else if (clampedPriority === 11 && priorityFaceCount < 2000) {
              tmpPriority11FaceDepth[priorityFaceCount] = depth;
            }
          }
        }
      }
    }

    const averagePriorityDepthSum1_2 =
      tmpPriorityFaceCount[1] > 0 || tmpPriorityFaceCount[2] > 0
        ? Math.floor(
            (tmpPriorityDepthSum[1] + tmpPriorityDepthSum[2]) /
              (tmpPriorityFaceCount[1] + tmpPriorityFaceCount[2])
          )
        : 0;

    const averagePriorityDepthSum3_4 =
      tmpPriorityFaceCount[3] > 0 || tmpPriorityFaceCount[4] > 0
        ? Math.floor(
            (tmpPriorityDepthSum[3] + tmpPriorityDepthSum[4]) /
              (tmpPriorityFaceCount[3] + tmpPriorityFaceCount[4])
          )
        : 0;

    const averagePriorityDepthSum6_8 =
      tmpPriorityFaceCount[6] > 0 || tmpPriorityFaceCount[8] > 0
        ? Math.floor(
            (tmpPriorityDepthSum[6] + tmpPriorityDepthSum[8]) /
              (tmpPriorityFaceCount[6] + tmpPriorityFaceCount[8])
          )
        : 0;

    const orderedFaceIndices = [];

    let priorityFace = 0;
    let priorityFaceCount = tmpPriorityFaceCount[10];
    let priorityFaces = tmpPriorityFaces[10];
    let priorityFaceDepths = tmpPriority10FaceDepth;

    if (priorityFace === priorityFaceCount) {
      priorityFace = 0;
      priorityFaceCount = tmpPriorityFaceCount[11];
      priorityFaces = tmpPriorityFaces[11];
      priorityFaceDepths = tmpPriority11FaceDepth;
    }

    let priorityDepth =
      priorityFace < priorityFaceCount && priorityFaceDepths
        ? priorityFaceDepths[priorityFace]
        : -1000;

    for (let priority = 0; priority < 10; priority++) {
      while (priority === 0 && priorityDepth > averagePriorityDepthSum1_2) {
        orderedFaceIndices.push(priorityFaces[priorityFace++]);
        if (
          priorityFace === priorityFaceCount &&
          priorityFaces !== tmpPriorityFaces[11]
        ) {
          priorityFace = 0;
          priorityFaceCount = tmpPriorityFaceCount[11];
          priorityFaces = tmpPriorityFaces[11];
          priorityFaceDepths = tmpPriority11FaceDepth;
        }
        priorityDepth =
          priorityFace < priorityFaceCount && priorityFaceDepths
            ? priorityFaceDepths[priorityFace]
            : -1000;
      }

      while (priority === 3 && priorityDepth > averagePriorityDepthSum3_4) {
        orderedFaceIndices.push(priorityFaces[priorityFace++]);
        if (
          priorityFace === priorityFaceCount &&
          priorityFaces !== tmpPriorityFaces[11]
        ) {
          priorityFace = 0;
          priorityFaceCount = tmpPriorityFaceCount[11];
          priorityFaces = tmpPriorityFaces[11];
          priorityFaceDepths = tmpPriority11FaceDepth;
        }
        priorityDepth =
          priorityFace < priorityFaceCount && priorityFaceDepths
            ? priorityFaceDepths[priorityFace]
            : -1000;
      }

      while (priority === 5 && priorityDepth > averagePriorityDepthSum6_8) {
        orderedFaceIndices.push(priorityFaces[priorityFace++]);
        if (
          priorityFace === priorityFaceCount &&
          priorityFaces !== tmpPriorityFaces[11]
        ) {
          priorityFace = 0;
          priorityFaceCount = tmpPriorityFaceCount[11];
          priorityFaces = tmpPriorityFaces[11];
          priorityFaceDepths = tmpPriority11FaceDepth;
        }
        priorityDepth =
          priorityFace < priorityFaceCount && priorityFaceDepths
            ? priorityFaceDepths[priorityFace]
            : -1000;
      }

      const count = tmpPriorityFaceCount[priority];
      const faces = tmpPriorityFaces[priority];
      for (let i = 0; i < count; i++) {
        orderedFaceIndices.push(faces[i]);
      }
    }

    while (priorityDepth !== -1000) {
      orderedFaceIndices.push(priorityFaces[priorityFace++]);
      if (
        priorityFace === priorityFaceCount &&
        priorityFaces !== tmpPriorityFaces[11]
      ) {
        priorityFace = 0;
        priorityFaces = tmpPriorityFaces[11];
        priorityFaceCount = tmpPriorityFaceCount[11];
        priorityFaceDepths = tmpPriority11FaceDepth;
      }
      priorityDepth =
        priorityFace < priorityFaceCount && priorityFaceDepths
          ? priorityFaceDepths[priorityFace]
          : -1000;
    }

    const geometriesByGroup = new Map();
    this.groupFacesByTexture(model, orderedFaceIndices, geometriesByGroup);
    return geometriesByGroup;
  }

  isFaceTransparent(model: Model, faceIndex: number): boolean {
    const hasAlpha =
      model.faceAlpha &&
      model.faceAlpha[faceIndex] !== undefined &&
      model.faceAlpha[faceIndex] > 0;

    return !!hasAlpha;
  }

  createGeometryForFaces(
    model: Model,
    faceIndices: number[],
    meshType: string
  ): THREE.BufferGeometry {
    if (faceIndices.length === 0) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute([], 3)
      );
      geometry.setAttribute("color", new THREE.Float32BufferAttribute([], 4));
      geometry.setAttribute("uv", new THREE.Float32BufferAttribute([], 2));
      return geometry;
    }

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const uvs = [];

    const faceIndexMapping = [];
    let renderedFaceCount = 0;

    const isTexturedMesh =
      meshType.startsWith("opaque-textured-") ||
      meshType.startsWith("transparent-textured-");

    for (const originalIndex of faceIndices) {
      const vA = model.faceVertexA[originalIndex];
      const vB = model.faceVertexB[originalIndex];
      const vC = model.faceVertexC[originalIndex];

      if (
        vA === undefined ||
        vB === undefined ||
        vC === undefined ||
        vA >= model.vertexCount ||
        vB >= model.vertexCount ||
        vC >= model.vertexCount
      ) {
        continue;
      }

      faceIndexMapping[renderedFaceCount] = originalIndex;

      vertices.push(
        model.vertexX[vA],
        -model.vertexY[vA],
        model.vertexZ[vA],
        model.vertexX[vB],
        -model.vertexY[vB],
        model.vertexZ[vB],
        model.vertexX[vC],
        -model.vertexY[vC],
        model.vertexZ[vC]
      );

      let r, g, b;

      if (isTexturedMesh) {
        r = 1.0;
        g = 1.0;
        b = 1.0;

        if (
          model.uvCoords &&
          model.uvCoords[originalIndex] &&
          model.uvCoords[originalIndex].length === 6
        ) {
          const faceUvData = model.uvCoords[originalIndex];
          uvs.push(
            faceUvData[0],
            faceUvData[1],
            faceUvData[2],
            faceUvData[3],
            faceUvData[4],
            faceUvData[5]
          );
        } else {
          uvs.push(0, 0, 1, 0, 0.5, 1);
        }
      } else {
        uvs.push(0, 0, 0, 0, 0, 0);

        let parsedColor;
        if (model.faceColor?.[originalIndex] !== undefined) {
          const hslColor = model.faceColor[originalIndex];
          const rgbColor = Pix3D.hslPal[hslColor];
          parsedColor = this.parseColor(rgbColor);
        } else if (model.faceColorA?.[originalIndex] !== undefined) {
          const hslColor = model.faceColorA[originalIndex];
          const rgbColor = Pix3D.hslPal[hslColor];
          parsedColor = this.parseColor(rgbColor);
        } else {
          parsedColor = { r: 0.7, g: 0.7, b: 0.7 };
        }
        r = parsedColor.r;
        g = parsedColor.g;
        b = parsedColor.b;
      }

      let faceVertexAlpha = 1.0;
      if (model.faceAlpha && model.faceAlpha[originalIndex] !== undefined) {
        faceVertexAlpha = (255 - model.faceAlpha[originalIndex]) / 255.0;
        faceVertexAlpha = Math.max(0, Math.min(1, faceVertexAlpha));
      }

      for (let j = 0; j < 3; j++) {
        colors.push(r, g, b, faceVertexAlpha);
      }

      renderedFaceCount++;
    }

    geometry.userData.faceIndexMapping = faceIndexMapping;

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 4));
    if (vertices.length > 0 && uvs.length === (vertices.length / 3) * 2) {
      geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    }

    return geometry;
  }

  createMaterialFromModel(
    geometry: THREE.BufferGeometry,
    meshType: string
  ): THREE.MeshBasicMaterial | THREE.MeshBasicMaterial[] {
    const isTransparent = meshType.includes("transparent");
    const isTextured = meshType.includes("textured-");

    const baseMaterialProperties: any = {
      vertexColors: true,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending,
      wireframe: false,
    };

    if (isTextured) {
      baseMaterialProperties.vertexColors = true;
    }

    if (isTransparent) {
      baseMaterialProperties.transparent = true;
      baseMaterialProperties.depthWrite = false;
      baseMaterialProperties.alphaTest = 0.01;
    } else {
      baseMaterialProperties.transparent = false;
      baseMaterialProperties.depthWrite = true;
      baseMaterialProperties.alphaTest = 0;
    }

    if (
      geometry.userData.usedPriorities &&
      geometry.userData.uniquePriorities
    ) {
      const materials = [];
      const uniquePriorities = geometry.userData.uniquePriorities;
      for (const priorityValue of uniquePriorities) {
        const mat = new THREE.MeshBasicMaterial({
          ...baseMaterialProperties,
          polygonOffset: true,
          polygonOffsetFactor: -priorityValue * 2,
          polygonOffsetUnits: -priorityValue * 1,
        });
        materials.push(mat);
      }
      return materials;
    } else {
      return new THREE.MeshBasicMaterial(baseMaterialProperties);
    }
  }

  parseColor(colorValue: number): { r: number; g: number; b: number } {
    if (colorValue === undefined || colorValue === null) {
      return { r: 0.7, g: 0.7, b: 0.7 };
    }

    const r = ((colorValue >> 16) & 0xff) / 255;
    const g = ((colorValue >> 8) & 0xff) / 255;
    const b = (colorValue & 0xff) / 255;
    return { r, g, b };
  }

  removeModel(modelId: string): void {
    const meshes = this.modelMeshes.get(modelId);
    if (meshes) {
      const meshArray = Array.isArray(meshes) ? meshes : [meshes];
      meshArray.forEach((mesh) => {
        this.scene!.remove(mesh);
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => mat.dispose());
        } else {
          mesh.material.dispose();
        }
      });
      this.modelMeshes.delete(modelId);
    }
  }

  showModel(modelId: string): void {
    if (this.currentMesh) {
      if (Array.isArray(this.currentMesh)) {
        this.currentMesh.forEach((mesh) => this.scene!.remove(mesh));
      } else {
        this.scene!.remove(this.currentMesh);
      }
    }

    if (this.selectedModel) {
      const oldLabels = this.vertexLabels.get(this.selectedModel);
      if (oldLabels) oldLabels.forEach((label) => this.scene!.remove(label));
      this.clearVertexHighlights();
      this.hideVertexSpheres();
      this.clearSpecificVertexHighlights();
      this.clearSpecificFaceHighlights();
      this.specificHighlightedFacesInfo.originalFaceColors.clear();
    }
    this.hideFaceInfo();
    this.clearFaceHighlights();

    const meshes = this.modelMeshes.get(modelId);
    if (!meshes) {
      console.warn(
        `Meshes for modelId ${modelId} not found in cache when trying to show.`
      );
      return;
    }

    (meshes as THREE.Mesh[]).forEach((mesh) => this.scene!.add(mesh));
    this.currentMesh = meshes;
    this.selectedModel = modelId;

    this.updateModelAlpha(modelId);
    this.storeOriginalFaceColors();

    if (this.showVertexNumbers) {
      const labels = this.vertexLabels.get(modelId);
      if (labels) labels.forEach((label) => this.scene!.add(label));
    }
    if (this.editMode) {
      this.showVertexSpheres();
    }

    const firstMesh = Array.isArray(meshes) ? meshes[0] : meshes;
    const box = new THREE.Box3().setFromObject(firstMesh);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const distance = maxDim * 2.5;

    this.cameraTarget.copy(center);
    this.cameraTarget.y += maxDim * 0.5;

    this.camera!.position.set(
      this.cameraTarget.x + distance * 0.7,
      this.cameraTarget.y + distance * 0.7,
      this.cameraTarget.z + distance * 0.7
    );
    this.camera!.lookAt(this.cameraTarget);
  }

  onVertexMouseDown(event: MouseEvent): void {
    if (!this.currentMesh || !this.selectedModel) return;

    const rect = this.renderer!.domElement.getBoundingClientRect();
    this.mouse!.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse!.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster!.setFromCamera(this.mouse!, this.camera!);

    const vertexSpheres = this.vertexSpheres.get(this.selectedModel);
    if (vertexSpheres) {
      const intersects = this.raycaster!.intersectObjects(vertexSpheres, false);
      if (intersects.length > 0) {
        const intersectedSphere = intersects[0].object as THREE.Mesh;
        const vertexIndex = intersectedSphere.userData.vertexIndex;

        this.selectedVertex = {
          index: vertexIndex,
          sphere: intersectedSphere,
          originalPosition: intersectedSphere.position.clone(),
        };

        this.isDragging = true;
        this.cameraControls = false;

        const cameraDirection = new THREE.Vector3();
        this.camera!.getWorldDirection(cameraDirection);
        this.dragPlane!.position.copy(intersectedSphere.position);
        this.dragPlane!.lookAt(
          this.dragPlane!.position.clone().add(cameraDirection)
        );

        this.renderer!.domElement.parentElement!.classList.add("dragging");

        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  onVertexDrag(event: MouseEvent): void {
    if (!this.selectedVertex || !this.currentMesh) return;

    const rect = this.renderer!.domElement.getBoundingClientRect();
    this.mouse!.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse!.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster!.setFromCamera(this.mouse!, this.camera!);

    const intersects = this.raycaster!.intersectObject(this.dragPlane!, false);
    if (intersects.length > 0) {
      const newPosition = intersects[0].point;

      this.selectedVertex.sphere.position.copy(newPosition);

      const meshes = Array.isArray(this.currentMesh)
        ? this.currentMesh
        : [this.currentMesh];
      let model = null;

      for (const mesh of meshes) {
        if (mesh && mesh.userData && mesh.userData.originalModel) {
          model = mesh.userData.originalModel;
          break;
        }
      }

      if (!model) return;

      const vertexIndex = this.selectedVertex.index;

      model.updateVertex(
        vertexIndex,
        newPosition.x,
        -newPosition.y,
        newPosition.z
      );

      if (this.showVertexNumbers) {
        const labels = this.vertexLabels.get(this.selectedModel!);
        if (labels && labels[vertexIndex]) {
          labels[vertexIndex].position.copy(newPosition);
        }
      }

      this.updateMeshGeometry();
    }
  }

  onVertexMouseUp(): void {
    if (this.selectedVertex) {
      this.selectedVertex = null;
      this.isDragging = false;
      this.cameraControls = true;
      this.renderer!.domElement.parentElement!.classList.remove("dragging");
    }
  }

  highlightVertexLabel(labelId: number): void {
    this.clearFaceHighlights();
    this.clearVertexHighlights();

    if (!this.editMode || !this.currentMesh || !this.selectedModel) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];

    let model: Model | null = null;
    for (const mesh of meshes) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel as Model;
        break;
      }
    }

    if (!model || !model.labelVertices || !model.labelVertices[labelId]) return;

    const spheres = this.vertexSpheres.get(this.selectedModel);
    if (!spheres) return;

    this.highlightedVertexLabelInfo.id = labelId;
    const verticesToHighlight = model.labelVertices[labelId];

    verticesToHighlight.forEach((vertexIndex: number) => {
      if (vertexIndex < spheres.length && vertexIndex >= 0) {
        const sphere = spheres[vertexIndex];
        if (sphere && sphere.material) {
          if (
            !this.highlightedVertexLabelInfo.originalSphereColors.has(sphere)
          ) {
            this.highlightedVertexLabelInfo.originalSphereColors.set(
              sphere,
              (sphere.material as THREE.MeshBasicMaterial).color.getHex()
            );
          }
          (sphere.material as THREE.MeshBasicMaterial).color.setHex(0x00ff00);
        }
      }
    });
  }

  clearVertexHighlights(): void {
    if (!this.selectedModel) return;

    const spheres = this.vertexSpheres.get(this.selectedModel);
    if (spheres) {
      spheres.forEach((sphere) => {
        if (sphere && sphere.material) {
          (sphere.material as THREE.MeshBasicMaterial).color.setHex(0xff0000);
        }
      });
    }
    this.highlightedVertexLabelInfo.id = null;
    this.highlightedVertexLabelInfo.originalSphereColors.clear();
    this.clearSpecificVertexHighlights(false);
  }

  createVertexSpheres(modelId: string, model: Model): void {
    const spheres = [];
    const sphereGeometry = new THREE.SphereGeometry(1, 6, 4);

    for (let i = 0; i < model.vertexCount; i++) {
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: false,
        depthTest: true,
        opacity: 1.0,
      });

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        model.vertexX[i],
        -model.vertexY[i],
        model.vertexZ[i]
      );
      sphere.userData.vertexIndex = i;
      sphere.visible = false;

      sphere.userData.originalScale = 1.0;
      spheres.push(sphere);
    }
    this.vertexSpheres.set(modelId, spheres);
  }

  addVertexSpheresToScene(modelId: string): void {
    const spheres = this.vertexSpheres.get(modelId);
    if (spheres) {
      spheres.forEach((sphere) => {
        if (!sphere.parent) {
          this.scene!.add(sphere);
        }
      });
    }
  }

  createVertexLabels(modelId: string, model: Model): void {
    const labels = [];

    for (let i = 0; i < model.vertexCount; i++) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d")!;
      canvas.width = 64;
      canvas.height = 32;

      context.font = "14px Arial";
      context.fillStyle = "yellow";
      context.strokeStyle = "black";
      context.lineWidth = 2;
      context.textAlign = "center";
      context.textBaseline = "middle";

      const text = i.toString();
      context.strokeText(text, 32, 16);
      context.fillText(text, 32, 16);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: false,
      });

      const sprite = new THREE.Sprite(material);
      sprite.position.set(
        model.vertexX[i],
        -model.vertexY[i],
        model.vertexZ[i]
      );

      sprite.scale.set(8, 4, 1);

      labels.push(sprite);
    }

    this.vertexLabels.set(modelId, labels);
  }

  toggleVertexNumbers(): boolean {
    this.showVertexNumbers = !this.showVertexNumbers;

    if (this.selectedModel) {
      const labels = this.vertexLabels.get(this.selectedModel);
      if (labels) {
        if (this.showVertexNumbers) {
          labels.forEach((label) => this.scene!.add(label));
        } else {
          labels.forEach((label) => this.scene!.remove(label));
        }
      }
    }

    return this.showVertexNumbers;
  }

  onWindowResize(container: HTMLElement): void {
    this.camera!.aspect = container.clientWidth / container.clientHeight;
    this.camera!.updateProjectionMatrix();
    this.renderer!.setSize(container.clientWidth, container.clientHeight);
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer!.render(this.scene!, this.camera!);

    if (this.cameraControls) {
      const moveSpeed = this.cameraMoveSpeed;
      let didMove = false;

      const deltaMovement = new THREE.Vector3();

      const cameraDirection = new THREE.Vector3();
      const cameraRight = new THREE.Vector3();
      const cameraUp = new THREE.Vector3();

      this.camera!.getWorldDirection(cameraDirection);

      cameraRight.crossVectors(cameraDirection, this.camera!.up).normalize();

      cameraUp.crossVectors(cameraRight, cameraDirection).normalize();

      if (this.keys.w) {
        deltaMovement.addScaledVector(cameraUp, moveSpeed);
        didMove = true;
      }
      if (this.keys.s) {
        deltaMovement.addScaledVector(cameraUp, -moveSpeed);
        didMove = true;
      }
      if (this.keys.a) {
        deltaMovement.addScaledVector(cameraRight, -moveSpeed);
        didMove = true;
      }
      if (this.keys.d) {
        deltaMovement.addScaledVector(cameraRight, moveSpeed);
        didMove = true;
      }

      if (didMove) {
        this.camera!.position.add(deltaMovement);
        this.cameraTarget.add(deltaMovement);
        this.camera!.lookAt(this.cameraTarget);
      }
    }
  }

  toggleWireframe(): boolean {
    if (this.currentMesh) {
      const meshes = Array.isArray(this.currentMesh)
        ? this.currentMesh
        : [this.currentMesh];
      let newWireframeState = false;

      meshes.forEach((mesh, meshIndex) => {
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        materials.forEach((mat, matIndex) => {
          (mat as THREE.MeshBasicMaterial).wireframe = !(
            mat as THREE.MeshBasicMaterial
          ).wireframe;
          if (meshIndex === 0 && matIndex === 0) {
            newWireframeState = (mat as THREE.MeshBasicMaterial).wireframe;
          }
        });
      });

      return newWireframeState;
    }
    return false;
  }

  toggleEditMode(): boolean {
    this.editMode = !this.editMode;
    const container = this.renderer!.domElement.parentElement!;

    this.clearSpecificVertexHighlights();

    if (this.editMode) {
      container.classList.add("vertex-edit");
      this.showVertexSpheres();
    } else {
      container.classList.remove("vertex-edit");
      this.hideVertexSpheres();
      this.clearVertexHighlights();

      this.selectedVertex = null;
      this.isDragging = false;
      this.cameraControls = true;
      container.classList.remove("dragging");
    }
    return this.editMode;
  }

  showVertexSpheres(): void {
    if (!this.selectedModel) return;
    const spheres = this.vertexSpheres.get(this.selectedModel);
    if (spheres) {
      spheres.forEach((sphere) => (sphere.visible = true));
    }
  }

  hideVertexSpheres(): void {
    if (!this.selectedModel) return;
    const spheres = this.vertexSpheres.get(this.selectedModel);
    if (spheres) {
      spheres.forEach((sphere) => (sphere.visible = false));
    }

    this.clearSpecificVertexHighlights();
  }

  onMouseClick(event: MouseEvent): void {
    if (this.editMode) return;
    if (
      !this.renderer ||
      !this.raycaster ||
      !this.mouse ||
      !this.camera ||
      !this.currentMesh
    ) {
      console.warn("Raycasting prerequisites not met.");
      return;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    let objectsToIntersect: THREE.Object3D[] = [];
    if (Array.isArray(this.currentMesh)) {
      objectsToIntersect = this.currentMesh.filter(
        (mesh) => mesh !== null
      ) as THREE.Mesh[];
    } else if (this.currentMesh !== null) {
      objectsToIntersect = [this.currentMesh];
    }

    if (objectsToIntersect.length === 0) {
      this.hideFaceInfo();
      return;
    }

    const intersects = this.raycaster.intersectObjects(objectsToIntersect);

    if (intersects.length > 0) {
      const firstIntersection = intersects[0];
      const intersectedObject = firstIntersection.object;

      if (!(intersectedObject instanceof THREE.Mesh)) {
        this.hideFaceInfo();
        return;
      }

      const geometry = intersectedObject.geometry as THREE.BufferGeometry;
      let intersectionToProcess = firstIntersection;

      if (intersects.length > 1) {
        const closestDistance = firstIntersection.distance;
        const equalDistanceIntersections = intersects.filter(
          (int) => Math.abs(int.distance - closestDistance) < 0.001
        );

        if (equalDistanceIntersections.length > 1) {
          intersectionToProcess = equalDistanceIntersections.reduce(
            (prev, current) => {
              const prevFaceIndex = prev.faceIndex;
              const currentFaceIndex = current.faceIndex;

              if (currentFaceIndex === null || currentFaceIndex === undefined) {
                return prev;
              }
              if (prevFaceIndex === null || prevFaceIndex === undefined) {
                return current;
              }
              return currentFaceIndex > prevFaceIndex ? current : prev;
            }
          );
        }
      }

      if (
        intersectionToProcess.faceIndex === null ||
        intersectionToProcess.faceIndex === undefined
      ) {
        this.hideFaceInfo();
        console.warn("Intersection found, but no valid faceIndex determined.");
        return;
      }

      let faceIndex: number = intersectionToProcess.faceIndex;

      const faceIndexMapping = geometry.userData.faceIndexMapping as
        | number[]
        | undefined;
      const renderedToOriginalMap = geometry.userData
        .renderedToOriginalFaceIndexMap as Record<number, number> | undefined;

      if (faceIndexMapping) {
        const originalFaceIndex = faceIndexMapping[faceIndex];
        if (originalFaceIndex !== undefined) {
          faceIndex = originalFaceIndex;
        } else {
          console.warn(`faceIndex ${faceIndex} not found in faceIndexMapping.`);
          this.hideFaceInfo();
          return;
        }
      } else if (geometry.userData.usedPriorities && renderedToOriginalMap) {
        const originalFaceIndex = renderedToOriginalMap[faceIndex];
        if (originalFaceIndex !== undefined) {
          faceIndex = originalFaceIndex;
        } else {
          console.warn(
            `faceIndex ${faceIndex} not found in renderedToOriginalFaceIndexMap.`
          );
          this.hideFaceInfo();
          return;
        }
      }
      this.displayFaceInfo(faceIndex);
    } else {
      this.hideFaceInfo();
    }
  }

  displayFaceInfo(faceIndex: number): void {
    if (!this.selectedModel || !this.currentMesh) return;

    const meshes = Array.isArray(this.currentMesh)
      ? this.currentMesh
      : [this.currentMesh];
    if (meshes.length === 0) return;

    let model: Model | null = null;
    for (const mesh of meshes) {
      if (mesh && mesh.userData && mesh.userData.originalModel) {
        model = mesh.userData.originalModel as Model;
        break;
      }
    }

    if (!model) return;

    if (
      !model.faceVertexA ||
      !model.faceVertexB ||
      !model.faceVertexC ||
      !model.vertexX ||
      !model.vertexY ||
      !model.vertexZ
    ) {
      console.error("Model is missing required vertex or face data.");
      return;
    }

    const faceInfoPanel = document.getElementById("face-info");
    const faceDetails = document.getElementById("face-details");

    if (!faceInfoPanel || !faceDetails) {
      console.warn("Face info panel elements not found in the DOM.");
      return;
    }

    const vA = model.faceVertexA[faceIndex];
    const vB = model.faceVertexB[faceIndex];
    const vC = model.faceVertexC[faceIndex];

    if (vA === undefined || vB === undefined || vC === undefined) {
      console.warn(`Vertex indices for face ${faceIndex} are undefined.`);
      return;
    }

    let colorOrTextureInfo = "";

    const textureId = model.faceTextures?.[faceIndex];

    if (textureId !== undefined && textureId !== -1) {
      let textureDisplayName = `ID: ${textureId}`;
      if (this.fileLoader && this.fileLoader.availableTextures) {
        const textureFile = this.fileLoader.availableTextures.get(textureId);
        if (textureFile && textureFile.name) {
          textureDisplayName =
            textureFile.name.substring(0, textureFile.name.lastIndexOf(".")) ||
            textureFile.name;
        } else {
          textureDisplayName += " (Name not found)";
        }
      } else {
        textureDisplayName += " (Texture map unavailable)";
      }
      colorOrTextureInfo = `<div class="face-detail"><strong>Texture:</strong> ${textureDisplayName}</div>`;
    } else {
      let colorValue: number | undefined = undefined;
      let colorHex = "#ffffff";

      if (model.faceColor && model.faceColor[faceIndex] !== undefined) {
        colorValue = model.faceColor[faceIndex];
      }

      if (
        colorValue !== undefined &&
        Pix3D.hslPal &&
        Pix3D.hslPal[colorValue] !== undefined
      ) {
        const paletteColor = Pix3D.hslPal[colorValue];
        const colorRgb = {
          r: (paletteColor >> 16) & 0xff,
          g: (paletteColor >> 8) & 0xff,
          b: paletteColor & 0xff,
        };
        colorHex = `#${colorRgb.r.toString(16).padStart(2, "0")}${colorRgb.g
          .toString(16)
          .padStart(2, "0")}${colorRgb.b.toString(16).padStart(2, "0")}`;

        const faceColorForHsl = model.faceColor?.[faceIndex];
        if (faceColorForHsl !== undefined) {
          colorOrTextureInfo = `
                        <div class="face-detail">
                            <strong>Face Color:</strong> ${
                              ColorConversion.reverseHsl(faceColorForHsl)[0]
                            }
                            <span class="color-swatch" style="background-color: ${colorHex}"></span>
                        </div>`;
        } else {
          colorOrTextureInfo = `<div class="face-detail"><strong>Face Color:</strong> N/A (Invalid index for HSL)</div>`;
        }
      } else {
        colorOrTextureInfo = `<div class="face-detail"><strong>Face Color:</strong> N/A</div>`;
      }
    }

    const posXA = model.vertexX[vA];
    const posYA = model.vertexY[vA];
    const posZA = model.vertexZ[vA];
    const posXB = model.vertexX[vB];
    const posYB = model.vertexY[vB];
    const posZB = model.vertexZ[vB];
    const posXC = model.vertexX[vC];
    const posYC = model.vertexY[vC];
    const posZC = model.vertexZ[vC];

    if (
      posXA === undefined ||
      posYA === undefined ||
      posZA === undefined ||
      posXB === undefined ||
      posYB === undefined ||
      posZB === undefined ||
      posXC === undefined ||
      posYC === undefined ||
      posZC === undefined
    ) {
      console.warn(`Vertex coordinates for face ${faceIndex} are incomplete.`);
      faceDetails.innerHTML = `<div class="face-detail"><strong>Error:</strong> Incomplete vertex data for face ${faceIndex}.</div>`;
      faceInfoPanel.style.display = "block";
      return;
    }

    const positions = [
      { x: posXA, y: posYA, z: posZA },
      { x: posXB, y: posYB, z: posZB },
      { x: posXC, y: posYC, z: posZC },
    ];

    faceDetails.innerHTML = `
            <div class="face-detail"><strong>Face Index:</strong> ${faceIndex}</div>
            <div class="face-detail"><strong>Vertices:</strong> [${vA}, ${vB}, ${vC}]</div>
            <div class="face-detail">
                <strong>Vertex A (${vA}):</strong> (${positions[0].x.toFixed(
      2
    )}, ${positions[0].y.toFixed(2)}, ${positions[0].z.toFixed(2)})
            </div>
            <div class="face-detail">
                <strong>Vertex B (${vB}):</strong> (${positions[1].x.toFixed(
      2
    )}, ${positions[1].y.toFixed(2)}, ${positions[1].z.toFixed(2)})
            </div>
            <div class="face-detail">
                <strong>Vertex C (${vC}):</strong> (${positions[2].x.toFixed(
      2
    )}, ${positions[2].y.toFixed(2)}, ${positions[2].z.toFixed(2)})
            </div>
            ${colorOrTextureInfo}
        `;

    faceInfoPanel.style.display = "block";
  }

  hideFaceInfo(): void {
    const faceInfoPanel = document.getElementById("face-info");
    if (faceInfoPanel) {
      faceInfoPanel.style.display = "none";
    } else {
      console.warn(
        "Face info panel element not found in the DOM when trying to hide."
      );
    }
  }
}
