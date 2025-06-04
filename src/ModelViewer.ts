import ModelRenderer from "./ModelRenderer";
import FileLoader from "./FileLoader";

export default class ModelViewer {
  private loader: FileLoader;
  private renderer: ModelRenderer;

  constructor(container: HTMLElement, fileLoader: FileLoader) {
    this.loader = fileLoader;
    this.renderer = new ModelRenderer(container, this.loader);
  }

  async loadModel(modelId: string): Promise<void> {
    try {
      const model = await this.loader.loadModel(modelId);
      if (this.renderer.modelMeshes.has(modelId)) {
        return;
      }

      this.renderer.addModel(modelId, model);
    } catch (error) {
      console.error(`Failed to load model '${modelId}': ${error}`);
      throw error;
    }
  }

  getRenderer(): ModelRenderer {
    return this.renderer;
  }
}
