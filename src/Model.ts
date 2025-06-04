import AnimBase from "./AnimBase";
import AnimFrame from "./AnimFrame";
import Pix3D from "./Pix3D";
import Packet from "./Packet";

import { Float32Array2d, Int32Array2d, TypedArray1d } from "./Arrays";

export interface ModelPart {
  partIndex: number;
  originalModel: Model;
  originalModelName: string;
  vertexOffset: number;
  vertexCount: number;
  faceOffset: number;
  faceCount: number;
  texturedFaceOffset: number;
  texturedFaceCount: number;
  vertexMapping: Map<number, number>;
}

export interface ModelPartMapping {
  parts: ModelPart[];
  isNpcModel: boolean;
  npcId?: string;
}

class Metadata {
  vertexCount: number = 0;
  faceCount: number = 0;
  texturedFaceCount: number = 0;

  vertexFlagsOffset: number = -1;
  vertexXOffset: number = -1;
  vertexYOffset: number = -1;
  vertexZOffset: number = -1;
  vertexLabelsOffset: number = -1;
  faceVerticesOffset: number = -1;
  faceOrientationsOffset: number = -1;
  faceColorsOffset: number = -1;
  faceInfosOffset: number = -1;
  facePrioritiesOffset: number = 0;
  faceAlphasOffset: number = -1;
  faceLabelsOffset: number = -1;
  faceTextureAxisOffset: number = -1;

  data: Uint8Array | null = null;
}

export class VertexNormal {
  x: number = 0;
  y: number = 0;
  z: number = 0;
  w: number = 0;
}

type ModelType = {
  vertexCount: number;
  vertexX: Int32Array;
  vertexY: Int32Array;
  vertexZ: Int32Array;
  faceCount: number;
  faceVertexA: Int32Array;
  faceVertexB: Int32Array;
  faceVertexC: Int32Array;
  faceColorA: Int32Array | null;
  faceColorB: Int32Array | null;
  faceColorC: Int32Array | null;
  faceInfo: Int32Array | null;
  facePriority: Int32Array | null;
  faceAlpha: Int32Array | null;
  faceColor: Int32Array | null;
  priorityVal: number;
  texturedFaceCount: number;
  texturedVertexA: Int32Array;
  texturedVertexB: Int32Array;
  texturedVertexC: Int32Array;
  minX?: number;
  maxX?: number;
  minZ?: number;
  maxZ?: number;
  radius?: number;
  minY?: number;
  maxY?: number;
  maxDepth?: number;
  minDepth?: number;
  vertexLabel?: Int32Array | null;
  faceLabel?: Int32Array | null;
  labelVertices?: (Int32Array | null)[] | null;
  labelFaces?: (Int32Array | null)[] | null;
  vertexNormal?: (VertexNormal | null)[] | null;
  vertexNormalOriginal?: (VertexNormal | null)[] | null;
};

export default class Model {
  static modelMeta: (Metadata | null)[] | null = null;

  static faceClippedX: boolean[] | null = new TypedArray1d(4096, false);
  static faceNearClipped: boolean[] | null = new TypedArray1d(4096, false);

  static vertexScreenX: Int32Array | null = new Int32Array(4096);
  static vertexScreenY: Int32Array | null = new Int32Array(4096);
  static vertexScreenZ: Int32Array | null = new Int32Array(4096);
  static vertexViewSpaceX: Int32Array | null = new Int32Array(4096);
  static vertexViewSpaceY: Int32Array | null = new Int32Array(4096);
  static vertexViewSpaceZ: Int32Array | null = new Int32Array(4096);

  static tmpDepthFaceCount: Int32Array | null = new Int32Array(1500);
  static tmpDepthFaces: Int32Array[] | null = new Int32Array2d(1500, 512);
  static tmpPriorityFaceCount: Int32Array | null = new Int32Array(12);
  static tmpPriorityFaces: Int32Array[] | null = new Int32Array2d(12, 2000);
  static tmpPriority10FaceDepth: Int32Array | null = new Int32Array(2000);
  static tmpPriority11FaceDepth: Int32Array | null = new Int32Array(2000);
  static tmpPriorityDepthSum: Int32Array | null = new Int32Array(12);

  static clippedX: Int32Array = new Int32Array(10);
  static clippedY: Int32Array = new Int32Array(10);
  static clippedColor: Int32Array = new Int32Array(10);

  static baseX: number = 0;
  static baseY: number = 0;
  static baseZ: number = 0;

  static checkHover: boolean = false;
  static mouseX: number = 0;
  static mouseY: number = 0;
  static pickedCount: number = 0;
  static picked: Int32Array = new Int32Array(1000);
  static checkHoverFace: boolean = false;

  vertexCount: number;
  vertexX: Int32Array;
  vertexY: Int32Array;
  vertexZ: Int32Array;

  faceCount: number;
  faceVertexA: Int32Array;
  faceVertexB: Int32Array;
  faceVertexC: Int32Array;
  faceColorA: Int32Array | null;
  faceColorB: Int32Array | null;
  faceColorC: Int32Array | null;
  faceInfo: Int32Array | null;
  facePriority: Int32Array | null;
  faceAlpha: Int32Array | null;
  faceColor: Int32Array | null;

  priorityVal: number;

  texturedFaceCount: number;
  texturedVertexA: Int32Array;
  texturedVertexB: Int32Array;
  texturedVertexC: Int32Array;

  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  radius: number;
  minY: number;
  maxY: number;
  maxDepth: number;
  minDepth: number;

  vertexLabel: Int32Array | null;
  faceLabel: Int32Array | null;
  labelVertices: (Int32Array | null)[] | null;
  labelFaces: (Int32Array | null)[] | null;

  vertexNormal: (VertexNormal | null)[] | null;
  vertexNormalOriginal: (VertexNormal | null)[] | null;

  objRaise: number = 0;
  pickable: boolean = false;
  pickedFace: number = -1;
  pickedFaceDepth: number = -1;

  private originalVertexX: Int32Array;
  private originalVertexY: Int32Array;
  private originalVertexZ: Int32Array;

  private originalFaceColor: Int32Array | null = null;

  faceTextures: Int32Array;
  textureCoords: Int32Array;
  uvCoords: Float32Array2d;

  private hadOriginalFaceLabels: boolean = false;
  private hadOriginalVertexLabels: boolean = false;
  private hadOriginalFacePriorities: boolean = false;
  private hadOriginalFaceAlphas: boolean = false;
  private hadOriginalFaceInfos: boolean = false;

  partMapping: ModelPartMapping | null = null;

  private currentScaleX: number = 128;
  private currentScaleY: number = 128;
  private currentScaleZ: number = 128;
  private baseScaleX: number = 128;
  private baseScaleY: number = 128;
  private baseScaleZ: number = 128;

  constructor(type: ModelType) {
    this.vertexCount = type.vertexCount;
    this.vertexX = type.vertexX;
    this.vertexY = type.vertexY;
    this.vertexZ = type.vertexZ;
    this.faceCount = type.faceCount;
    this.faceVertexA = type.faceVertexA;
    this.faceVertexB = type.faceVertexB;
    this.faceVertexC = type.faceVertexC;
    this.faceColorA = type.faceColorA;
    this.faceColorB = type.faceColorB;
    this.faceColorC = type.faceColorC;
    this.faceInfo = type.faceInfo;
    this.facePriority = type.facePriority;
    this.faceAlpha = type.faceAlpha;
    this.faceColor = type.faceColor;
    this.priorityVal = type.priorityVal;
    this.texturedFaceCount = type.texturedFaceCount;
    this.texturedVertexA = type.texturedVertexA;
    this.texturedVertexB = type.texturedVertexB;
    this.texturedVertexC = type.texturedVertexC;
    this.minX = type.minX ?? 0;
    this.maxX = type.maxX ?? 0;
    this.minZ = type.minZ ?? 0;
    this.maxZ = type.maxZ ?? 0;
    this.radius = type.radius ?? 0;
    this.minY = type.minY ?? 0;
    this.maxY = type.maxY ?? 0;
    this.maxDepth = type.maxDepth ?? 0;
    this.minDepth = type.minDepth ?? 0;
    this.vertexLabel = type.vertexLabel ?? null;
    this.faceLabel = type.faceLabel ?? null;
    this.labelVertices = type.labelVertices ?? null;
    this.labelFaces = type.labelFaces ?? null;
    this.vertexNormal = type.vertexNormal ?? null;
    this.vertexNormalOriginal = type.vertexNormalOriginal ?? null;
    this.originalVertexX = new Int32Array(this.vertexX);
    this.originalVertexY = new Int32Array(this.vertexY);
    this.originalVertexZ = new Int32Array(this.vertexZ);
    this.faceTextures = new Int32Array(this.faceCount);
    this.faceTextures.fill(-1);
    this.textureCoords = new Int32Array(this.faceCount);
    this.uvCoords = new Float32Array2d(this.faceCount, 6);
    this.priorityVal = type.priorityVal;
    this.currentScaleX = 128;
    this.currentScaleY = 128;
    this.currentScaleZ = 128;
    this.baseScaleX = 128;
    this.baseScaleY = 128;
    this.baseScaleZ = 128;
  }

  private static encodeVertices(
    vertexX: Int32Array,
    vertexY: Int32Array,
    vertexZ: Int32Array,
    vertexCount: number
  ): {
    flags: Uint8Array;
    xData: Uint8Array;
    yData: Uint8Array;
    zData: Uint8Array;
  } {
    const flagsPacket = new Packet(new Uint8Array(vertexCount));
    const xPacket = new Packet(new Uint8Array(vertexCount * 2));
    const yPacket = new Packet(new Uint8Array(vertexCount * 2));
    const zPacket = new Packet(new Uint8Array(vertexCount * 2));

    let prevX = 0;
    let prevY = 0;
    let prevZ = 0;

    for (let v = 0; v < vertexCount; v++) {
      const currentX = vertexX[v];
      const currentY = vertexY[v];
      const currentZ = vertexZ[v];

      const dx = currentX - prevX;
      const dy = currentY - prevY;
      const dz = currentZ - prevZ;

      let flag = 0;
      if (dx !== 0) {
        flag |= 1;
        xPacket.psmarts(dx);
      }
      if (dy !== 0) {
        flag |= 2;
        yPacket.psmarts(dy);
      }
      if (dz !== 0) {
        flag |= 4;
        zPacket.psmarts(dz);
      }
      flagsPacket.p1(flag);

      prevX = currentX;
      prevY = currentY;
      prevZ = currentZ;
    }
    return {
      flags: flagsPacket.data,
      xData: xPacket.data.slice(0, xPacket.pos),
      yData: yPacket.data.slice(0, yPacket.pos),
      zData: zPacket.data.slice(0, zPacket.pos),
    };
  }

  private static encodeFaces(
    faceVertexA: Int32Array,
    faceVertexB: Int32Array,
    faceVertexC: Int32Array,
    faceCount: number
  ): { orientations: Uint8Array; vertexIndices: Uint8Array } {
    const orientationsPacket = new Packet(new Uint8Array(faceCount));
    const vertexIndicesPacket = new Packet(new Uint8Array(faceCount * 3 * 2));

    let encA = 0,
      encB = 0,
      encC = 0,
      encOffset = 0;

    for (let f = 0; f < faceCount; f++) {
      const vA = faceVertexA[f];
      const vB = faceVertexB[f];
      const vC = faceVertexC[f];

      let orientation: number;

      if (vA === encB && vB === encA && vC !== encOffset) {
        orientation = 4;
        orientationsPacket.p1(orientation);
        vertexIndicesPacket.psmarts(vC - encOffset);
      } else if (vA === encC && vB === encB && vC !== encOffset) {
        orientation = 3;
        orientationsPacket.p1(orientation);
        vertexIndicesPacket.psmarts(vC - encOffset);
      } else if (vA === encA && vB === encC && vC !== encOffset) {
        orientation = 2;
        orientationsPacket.p1(orientation);
        vertexIndicesPacket.psmarts(vC - encOffset);
      } else {
        orientation = 1;
        orientationsPacket.p1(orientation);
        vertexIndicesPacket.psmarts(vA - encOffset);
        vertexIndicesPacket.psmarts(vB - vA);
        vertexIndicesPacket.psmarts(vC - vB);
      }
      encOffset = vC;
      encA = vA;
      encB = vB;
      encC = vC;
    }
    return {
      orientations: orientationsPacket.data,
      vertexIndices: vertexIndicesPacket.data.slice(0, vertexIndicesPacket.pos),
    };
  }

  static convertFromData(data: Packet): Model {
    const originalDataEndPos = data.data.length - 18;
    data.pos = originalDataEndPos;

    const vertexCount = data.g2();
    const faceCount = data.g2();
    const texturedFaceCount = data.g1();

    const hasInfoFlagFromFile = data.g1();
    const hasPrioritiesFlagFromFile = data.g1();
    const hasAlphaFlagFromFile = data.g1();
    const hasFaceLabelsFlagFromFile = data.g1();
    const hasVertexLabelsFlagFromFile = data.g1();

    const vertexXLength = data.g2();
    const vertexYLength = data.g2();
    const vertexZLength = data.g2();
    const faceVertexLength = data.g2();

    data.pos = 0;

    const p_vertexCount_flags = new Uint8Array(vertexCount);
    data.gdata(p_vertexCount_flags, 0, p_vertexCount_flags.length);

    const p_faceCount_orientations = new Uint8Array(faceCount);
    data.gdata(p_faceCount_orientations, 0, p_faceCount_orientations.length);

    const facePriorities: number[] = [];
    const faceLabels: number[] = [];
    const faceInfos: number[] = [];
    const vertexLabels: number[] = [];
    const faceAlphas: number[] = [];

    if (hasPrioritiesFlagFromFile === 255) {
      const p_priorities = new Uint8Array(faceCount);
      data.gdata(p_priorities, 0, p_priorities.length);
      for (let i = 0; i < p_priorities.length; i++)
        facePriorities.push(p_priorities[i]);
    }

    if (hasFaceLabelsFlagFromFile === 1) {
      const p_labels = new Uint8Array(faceCount);
      data.gdata(p_labels, 0, p_labels.length);
      for (let i = 0; i < p_labels.length; i++) faceLabels.push(p_labels[i]);
    }

    if (hasInfoFlagFromFile === 1) {
      const p_infos = new Uint8Array(faceCount);
      data.gdata(p_infos, 0, p_infos.length);
      for (let i = 0; i < p_infos.length; i++) faceInfos.push(p_infos[i]);
    }

    if (hasVertexLabelsFlagFromFile === 1) {
      const p_vLabels = new Uint8Array(vertexCount);
      data.gdata(p_vLabels, 0, p_vLabels.length);
      for (let i = 0; i < p_vLabels.length; i++)
        vertexLabels.push(p_vLabels[i]);
    }

    if (hasAlphaFlagFromFile === 1) {
      const p_alphas = new Uint8Array(faceCount);
      data.gdata(p_alphas, 0, p_alphas.length);
      for (let i = 0; i < p_alphas.length; i++) faceAlphas.push(p_alphas[i]);
    }

    const p_faceVertexIndices = new Uint8Array(faceVertexLength);
    data.gdata(p_faceVertexIndices, 0, p_faceVertexIndices.length);

    const p_faceColors = new Uint8Array(faceCount * 2);
    data.gdata(p_faceColors, 0, p_faceColors.length);

    const p_texturedFaceIndices = new Uint8Array(texturedFaceCount * 6);
    data.gdata(p_texturedFaceIndices, 0, p_texturedFaceIndices.length);

    const p_vertexXData = new Uint8Array(vertexXLength);
    data.gdata(p_vertexXData, 0, p_vertexXData.length);

    const p_vertexYData = new Uint8Array(vertexYLength);
    data.gdata(p_vertexYData, 0, p_vertexYData.length);

    const p_vertexZData = new Uint8Array(vertexZLength);
    data.gdata(p_vertexZData, 0, p_vertexZData.length);

    const vertexX = new Int32Array(vertexCount);
    const vertexY = new Int32Array(vertexCount);
    const vertexZ = new Int32Array(vertexCount);
    const faceVertexA = new Int32Array(faceCount);
    const faceVertexB = new Int32Array(faceCount);
    const faceVertexC = new Int32Array(faceCount);
    const faceColor = new Int32Array(faceCount);
    const texturedVertexA = new Int32Array(texturedFaceCount);
    const texturedVertexB = new Int32Array(texturedFaceCount);
    const texturedVertexC = new Int32Array(texturedFaceCount);

    Model.processVertices(
      vertexX,
      vertexY,
      vertexZ,
      vertexCount,
      p_vertexXData,
      p_vertexYData,
      p_vertexZData,
      p_vertexCount_flags
    );
    Model.processFaces(
      faceVertexA,
      faceVertexB,
      faceVertexC,
      faceCount,
      p_faceVertexIndices,
      p_faceCount_orientations
    );
    Model.processColors(faceColor, faceCount, p_faceColors);
    Model.processTextures(
      texturedVertexA,
      texturedVertexB,
      texturedVertexC,
      texturedFaceCount,
      p_texturedFaceIndices
    );

    let finalPriorityVal = 0;
    if (hasPrioritiesFlagFromFile !== 255) {
      finalPriorityVal = hasPrioritiesFlagFromFile;
    }

    const modelType: ModelType = {
      vertexCount,
      vertexX,
      vertexY,
      vertexZ,
      faceCount,
      faceVertexA,
      faceVertexB,
      faceVertexC,
      faceColorA: null,
      faceColorB: null,
      faceColorC: null,
      faceInfo: faceInfos.length > 0 ? new Int32Array(faceInfos) : null,
      facePriority:
        facePriorities.length > 0 ? new Int32Array(facePriorities) : null,
      faceAlpha: faceAlphas.length > 0 ? new Int32Array(faceAlphas) : null,
      faceColor,
      priorityVal: finalPriorityVal,
      texturedFaceCount,
      texturedVertexA,
      texturedVertexB,
      texturedVertexC,
      vertexLabel:
        vertexLabels.length > 0 ? new Int32Array(vertexLabels) : null,
      faceLabel: faceLabels.length > 0 ? new Int32Array(faceLabels) : null,
      labelVertices: null,
      labelFaces: null,
      vertexNormal: null,
      vertexNormalOriginal: null,
    };

    const model = new Model(modelType);
    model.hadOriginalFaceInfos = hasInfoFlagFromFile === 1;
    model.hadOriginalFacePriorities = hasPrioritiesFlagFromFile === 255;
    model.hadOriginalFaceAlphas = hasAlphaFlagFromFile === 1;
    model.hadOriginalFaceLabels = hasFaceLabelsFlagFromFile === 1;
    model.hadOriginalVertexLabels = hasVertexLabelsFlagFromFile === 1;
    if (model.faceColor) {
      model.originalFaceColor = new Int32Array(model.faceColor);
    }
    return model;
  }

  public exportToOb2(): Uint8Array {
    const dataBlocks: Uint8Array[] = [];

    const {
      flags: vertexFlagsData,
      xData: vertexXData,
      yData: vertexYData,
      zData: vertexZData,
    } = Model.encodeVertices(
      this.vertexX,
      this.vertexY,
      this.vertexZ,
      this.vertexCount
    );
    dataBlocks.push(vertexFlagsData);

    const {
      orientations: faceOrientationsData,
      vertexIndices: faceVertexIndicesData,
    } = Model.encodeFaces(
      this.faceVertexA,
      this.faceVertexB,
      this.faceVertexC,
      this.faceCount
    );
    dataBlocks.push(faceOrientationsData);

    if (this.hadOriginalFacePriorities) {
      const facePrioritiesData = this.facePriority
        ? Uint8Array.from(this.facePriority)
        : new Uint8Array(this.faceCount).fill(0);
      dataBlocks.push(facePrioritiesData);
    }

    if (this.hadOriginalFaceLabels) {
      let actualFaceLabels: Uint8Array;
      if (this.faceLabel) {
        actualFaceLabels = Uint8Array.from(this.faceLabel);
      } else if (this.labelFaces) {
        actualFaceLabels = new Uint8Array(this.faceCount).fill(0);
        for (let l = 0; l < this.labelFaces.length; l++) {
          const indices = this.labelFaces[l];
          if (indices) {
            for (let i = 0; i < indices.length; i++) {
              if (indices[i] < this.faceCount) actualFaceLabels[indices[i]] = l;
            }
          }
        }
      } else {
        actualFaceLabels = new Uint8Array(this.faceCount).fill(0);
      }
      dataBlocks.push(actualFaceLabels);
    }

    if (this.hadOriginalFaceInfos) {
      const faceInfosData = this.faceInfo
        ? Uint8Array.from(this.faceInfo)
        : new Uint8Array(this.faceCount).fill(0);
      dataBlocks.push(faceInfosData);
    }

    if (this.hadOriginalVertexLabels) {
      let actualVertexLabels: Uint8Array;
      if (this.vertexLabel) {
        actualVertexLabels = Uint8Array.from(this.vertexLabel);
      } else if (this.labelVertices) {
        actualVertexLabels = new Uint8Array(this.vertexCount).fill(0);
        for (let l = 0; l < this.labelVertices.length; l++) {
          const indices = this.labelVertices[l];
          if (indices) {
            for (let i = 0; i < indices.length; i++) {
              if (indices[i] < this.vertexCount)
                actualVertexLabels[indices[i]] = l;
            }
          }
        }
      } else {
        actualVertexLabels = new Uint8Array(this.vertexCount).fill(0);
      }
      dataBlocks.push(actualVertexLabels);
    }

    if (this.hadOriginalFaceAlphas) {
      const faceAlphasData = this.faceAlpha
        ? Uint8Array.from(this.faceAlpha)
        : new Uint8Array(this.faceCount).fill(0);
      dataBlocks.push(faceAlphasData);
    }
    dataBlocks.push(faceVertexIndicesData);

    const faceColorsPacket = new Packet(new Uint8Array(this.faceCount * 2));
    const colorsToExport = this.originalFaceColor
      ? this.originalFaceColor
      : this.faceColor;

    if (colorsToExport) {
      for (let i = 0; i < this.faceCount; i++) {
        faceColorsPacket.p2(colorsToExport[i]);
      }
    } else {
      for (let i = 0; i < this.faceCount; i++) faceColorsPacket.p2(0);
    }

    const faceColorsData = faceColorsPacket.data;
    dataBlocks.push(faceColorsData);

    const texturedFaceDataPacket = new Packet(
      new Uint8Array(this.texturedFaceCount * 6)
    );
    for (let i = 0; i < this.texturedFaceCount; i++) {
      texturedFaceDataPacket.p2(this.texturedVertexA[i]);
      texturedFaceDataPacket.p2(this.texturedVertexB[i]);
      texturedFaceDataPacket.p2(this.texturedVertexC[i]);
    }
    const texturedFaceData = texturedFaceDataPacket.data;
    dataBlocks.push(texturedFaceData);

    dataBlocks.push(vertexXData);
    dataBlocks.push(vertexYData);
    dataBlocks.push(vertexZData);

    let totalDataLength = 0;
    for (let i = 0; i < dataBlocks.length; i++) {
      totalDataLength += dataBlocks[i].length;
    }

    const footerPacket = new Packet(new Uint8Array(18));
    footerPacket.p2(this.vertexCount);
    footerPacket.p2(this.faceCount);
    footerPacket.p1(this.texturedFaceCount);

    const footerHasInfo = this.hadOriginalFaceInfos ? 1 : 0;
    footerPacket.p1(footerHasInfo);

    let priorityFlagForFooter: number;
    if (this.hadOriginalFacePriorities) {
      priorityFlagForFooter = 255;
    } else {
      priorityFlagForFooter = this.priorityVal;
    }
    footerPacket.p1(priorityFlagForFooter);

    const footerHasAlpha = this.hadOriginalFaceAlphas ? 1 : 0;
    footerPacket.p1(footerHasAlpha);
    const footerHasFaceLabels = this.hadOriginalFaceLabels ? 1 : 0;
    footerPacket.p1(footerHasFaceLabels);
    const footerHasVertexLabels = this.hadOriginalVertexLabels ? 1 : 0;
    footerPacket.p1(footerHasVertexLabels);

    footerPacket.p2(vertexXData.length);
    footerPacket.p2(vertexYData.length);
    footerPacket.p2(vertexZData.length);
    footerPacket.p2(faceVertexIndicesData.length);
    const footerData = footerPacket.data;

    const finalOb2Data = new Uint8Array(totalDataLength + footerData.length);
    let currentOffset = 0;
    for (const block of dataBlocks) {
      finalOb2Data.set(block, currentOffset);
      currentOffset += block.length;
    }
    finalOb2Data.set(footerData, currentOffset);
    return finalOb2Data;
  }

  public saveCurrentVerticesAsOriginal(): void {
    if (
      this.baseScaleX !== 128 ||
      this.baseScaleY !== 128 ||
      this.baseScaleZ !== 128
    ) {
      this.originalVertexX = new Int32Array(this.vertexCount);
      this.originalVertexY = new Int32Array(this.vertexCount);
      this.originalVertexZ = new Int32Array(this.vertexCount);

      for (let i = 0; i < this.vertexCount; i++) {
        this.originalVertexX[i] =
          ((this.vertexX[i] * 128) / this.baseScaleX) | 0;
        this.originalVertexY[i] =
          ((this.vertexY[i] * 128) / this.baseScaleY) | 0;
        this.originalVertexZ[i] =
          ((this.vertexZ[i] * 128) / this.baseScaleZ) | 0;
      }
    } else {
      this.originalVertexX = new Int32Array(this.vertexX);
      this.originalVertexY = new Int32Array(this.vertexY);
      this.originalVertexZ = new Int32Array(this.vertexZ);
    }

    if (this.partMapping && this.partMapping.isNpcModel) {
      this.updateAllPartVertices();
    }
  }

  public resetToOriginal(): void {
    this.vertexX.set(this.originalVertexX);
    this.vertexY.set(this.originalVertexY);
    this.vertexZ.set(this.originalVertexZ);

    this.currentScaleX = this.baseScaleX;
    this.currentScaleY = this.baseScaleY;
    this.currentScaleZ = this.baseScaleZ;

    if (this.partMapping && this.partMapping.isNpcModel) {
      for (const part of this.partMapping.parts) {
        part.originalModel.resetToOriginal();
      }
    }
  }

  private static processVertices(
    vertexX: Int32Array,
    vertexY: Int32Array,
    vertexZ: Int32Array,
    vertexCount: number,
    xData: Uint8Array,
    yData: Uint8Array,
    zData: Uint8Array,
    vertexFlags: Uint8Array
  ): void {
    const dataX = new Packet(xData);
    const dataY = new Packet(yData);
    const dataZ = new Packet(zData);

    let dx = 0;
    let dy = 0;
    let dz = 0;

    for (let v = 0; v < vertexCount; v++) {
      const flags = vertexFlags[v];

      let a = 0;
      if ((flags & 1) !== 0) {
        a = dataX.gsmarts();
      }
      let b = 0;
      if ((flags & 2) !== 0) {
        b = dataY.gsmarts();
      }
      let c = 0;
      if ((flags & 4) !== 0) {
        c = dataZ.gsmarts();
      }

      const x = dx + a;
      const y = dy + b;
      const z = dz + c;

      dx = x;
      dy = y;
      dz = z;

      vertexX[v] = x;
      vertexY[v] = y;
      vertexZ[v] = z;
    }
  }

  private static processFaces(
    faceVertexA: Int32Array,
    faceVertexB: Int32Array,
    faceVertexC: Int32Array,
    faceCount: number,
    faceVertexDataArray: Uint8Array,
    faceOrientationArray: Uint8Array
  ): void {
    const vertexData = new Packet(faceVertexDataArray);
    const orientationData = new Packet(faceOrientationArray);

    let lastA = 0;
    let lastB = 0;
    let lastC = 0;
    let last = 0;

    for (let f = 0; f < faceCount; f++) {
      const orientation = orientationData.g1();

      if (orientation === 1) {
        lastA = vertexData.gsmarts() + last;
        last = lastA;
        lastB = vertexData.gsmarts() + last;
        last = lastB;
        lastC = vertexData.gsmarts() + last;
        last = lastC;
      } else if (orientation === 2) {
        lastB = lastC;
        lastC = vertexData.gsmarts() + last;
        last = lastC;
      } else if (orientation === 3) {
        lastA = lastC;
        lastC = vertexData.gsmarts() + last;
        last = lastC;
      } else if (orientation === 4) {
        const temp = lastA;
        lastA = lastB;
        lastB = temp;
        lastC = vertexData.gsmarts() + last;
        last = lastC;
      }
      faceVertexA[f] = lastA;
      faceVertexB[f] = lastB;
      faceVertexC[f] = lastC;
    }
  }

  private static processColors(
    faceColor: Int32Array,
    faceCount: number,
    faceColorsData: Uint8Array
  ): void {
    const colorPacket = new Packet(faceColorsData);

    for (let f = 0; f < faceCount; f++) {
      const color = colorPacket.g2();
      faceColor[f] = color;
    }
  }

  private static processTextures(
    texturedVertexA: Int32Array,
    texturedVertexB: Int32Array,
    texturedVertexC: Int32Array,
    texturedFaceCount: number,
    texturedFaceRawData: Uint8Array
  ): void {
    if (texturedFaceCount === 0) {
      return;
    }

    const textureData = new Packet(texturedFaceRawData);

    for (let i = 0; i < texturedFaceCount; i++) {
      texturedVertexA[i] = textureData.g2();
      texturedVertexB[i] = textureData.g2();
      texturedVertexC[i] = textureData.g2();
    }
  }

  processTextureCoordinates(): void {
    if (!this.faceInfo) {
      return;
    }
    for (let i = 0; i < this.faceCount; i++) {
      const type = this.faceInfo[i] & 0x3;
      if ((type === 2 || type === 3) && this.faceColor) {
        this.faceTextures[i] = this.faceColor[i];
        this.textureCoords[i] = this.faceInfo[i] >> 2;
        this.calculateTextureCoordinates(i);
      }
    }
  }

  private calculateTextureCoordinates(face: number): void {
    const index0: number = this.faceVertexA[face];
    const index1: number = this.faceVertexB[face];
    const index2: number = this.faceVertexC[face];

    let p: number;
    let m: number;
    let n: number;

    if (this.faceTextures[face] !== -1) {
      const textureCoordinate: number = this.textureCoords[face];
      p = this.texturedVertexA[textureCoordinate];
      m = this.texturedVertexB[textureCoordinate];
      n = this.texturedVertexC[textureCoordinate];
    } else {
      p = index0;
      m = index1;
      n = index2;
    }

    const vx: number = this.vertexX[p];
    const vy: number = this.vertexY[p];
    const vz: number = this.vertexZ[p];

    const f882: number = this.vertexX[m] - vx;
    const f883: number = this.vertexY[m] - vy;
    const f884: number = this.vertexZ[m] - vz;

    const f885: number = this.vertexX[n] - vx;
    const f886: number = this.vertexY[n] - vy;
    const f887: number = this.vertexZ[n] - vz;

    const f888: number = this.vertexX[index0] - vx;
    const f889: number = this.vertexY[index0] - vy;
    const f890: number = this.vertexZ[index0] - vz;

    const f891: number = this.vertexX[index1] - vx;
    const f892: number = this.vertexY[index1] - vy;
    const f893: number = this.vertexZ[index1] - vz;

    const f894: number = this.vertexX[index2] - vx;
    const f895: number = this.vertexY[index2] - vy;
    const f896: number = this.vertexZ[index2] - vz;

    const f897: number = f883 * f887 - f884 * f886;
    const f898: number = f884 * f885 - f882 * f887;
    const f899: number = f882 * f886 - f883 * f885;

    let f900: number = f886 * f899 - f887 * f898;
    let f901: number = f887 * f897 - f885 * f899;
    let f902: number = f885 * f898 - f886 * f897;
    let denom: number = f900 * f882 + f901 * f883 + f902 * f884;
    let f903: number = 1.0 / denom;

    const u0: number = (f900 * f888 + f901 * f889 + f902 * f890) * f903;
    const u1: number = (f900 * f891 + f901 * f892 + f902 * f893) * f903;
    const u2: number = (f900 * f894 + f901 * f895 + f902 * f896) * f903;

    f900 = f883 * f899 - f884 * f898;
    f901 = f884 * f897 - f882 * f899;
    f902 = f882 * f898 - f883 * f897;
    denom = f900 * f885 + f901 * f886 + f902 * f887;
    f903 = 1.0 / denom;

    const v0: number = (f900 * f888 + f901 * f889 + f902 * f890) * f903;
    const v1: number = (f900 * f891 + f901 * f892 + f902 * f893) * f903;
    const v2: number = (f900 * f894 + f901 * f895 + f902 * f896) * f903;
    this.uvCoords[face].set([u0, v0, u1, v1, u2, v2]);
  }

  static mulColorLightness(
    hsl: number,
    scalar: number,
    faceInfo: number
  ): number {
    if ((faceInfo & 0x2) === 2) {
      if (scalar < 0) {
        scalar = 0;
      } else if (scalar > 127) {
        scalar = 127;
      }

      return 127 - scalar;
    }

    scalar = (scalar * (hsl & 0x7f)) >> 7;

    if (scalar < 2) {
      scalar = 2;
    } else if (scalar > 126) {
      scalar = 126;
    }

    return (hsl & 0xff80) + scalar;
  }

  static modelCopyFaces(
    src: Model,
    copyVertexY: boolean,
    copyFaces: boolean
  ): Model {
    const vertexCount: number = src.vertexCount;
    const faceCount: number = src.faceCount;
    const texturedFaceCount: number = src.texturedFaceCount;

    let vertexY: Int32Array;
    if (copyVertexY) {
      vertexY = new Int32Array(vertexCount);
      for (let v: number = 0; v < vertexCount; v++) {
        vertexY[v] = src.vertexY[v];
      }
    } else {
      vertexY = src.vertexY;
    }

    let faceColorA: Int32Array | null;
    let faceColorB: Int32Array | null;
    let faceColorC: Int32Array | null;
    let faceInfo: Int32Array | null;
    let vertexNormal: (VertexNormal | null)[] | null = null;
    let vertexNormalOriginal: (VertexNormal | null)[] | null = null;
    if (copyFaces) {
      faceColorA = new Int32Array(faceCount);
      faceColorB = new Int32Array(faceCount);
      faceColorC = new Int32Array(faceCount);
      for (let f: number = 0; f < faceCount; f++) {
        if (src.faceColorA) {
          faceColorA[f] = src.faceColorA[f];
        }
        if (src.faceColorB) {
          faceColorB[f] = src.faceColorB[f];
        }
        if (src.faceColorC) {
          faceColorC[f] = src.faceColorC[f];
        }
      }

      faceInfo = new Int32Array(faceCount);
      if (!src.faceInfo) {
        for (let f: number = 0; f < faceCount; f++) {
          faceInfo[f] = 0;
        }
      } else {
        for (let f: number = 0; f < faceCount; f++) {
          faceInfo[f] = src.faceInfo[f];
        }
      }

      vertexNormal = new TypedArray1d(vertexCount, null);
      for (let v: number = 0; v < vertexCount; v++) {
        const copy: VertexNormal = (vertexNormal[v] = new VertexNormal());
        if (src.vertexNormal) {
          const original: VertexNormal | null = src.vertexNormal[v];
          if (original) {
            copy.x = original.x;
            copy.y = original.y;
            copy.z = original.z;
            copy.w = original.w;
          }
        }
      }

      vertexNormalOriginal = src.vertexNormalOriginal;
    } else {
      faceColorA = src.faceColorA;
      faceColorB = src.faceColorB;
      faceColorC = src.faceColorC;
      faceInfo = src.faceInfo;
    }
    return new Model({
      vertexCount: vertexCount,
      vertexX: src.vertexX,
      vertexY: vertexY,
      vertexZ: src.vertexZ,
      faceCount: faceCount,
      faceVertexA: src.faceVertexA,
      faceVertexB: src.faceVertexB,
      faceVertexC: src.faceVertexC,
      faceColorA: faceColorA,
      faceColorB: faceColorB,
      faceColorC: faceColorC,
      faceInfo: faceInfo,
      facePriority: src.facePriority,
      faceAlpha: src.faceAlpha,
      faceColor: src.faceColor,
      priorityVal: src.priorityVal,
      texturedFaceCount: texturedFaceCount,
      texturedVertexA: src.texturedVertexA,
      texturedVertexB: src.texturedVertexB,
      texturedVertexC: src.texturedVertexC,
      minX: src.minX,
      maxX: src.maxX,
      minZ: src.minZ,
      maxZ: src.maxZ,
      radius: src.radius,
      minY: src.minY,
      maxY: src.maxY,
      maxDepth: src.maxDepth,
      minDepth: src.minDepth,
      vertexNormal: vertexNormal,
      vertexNormalOriginal: vertexNormalOriginal,
    });
  }

  static modelShareColored(
    src: Model,
    shareColors: boolean,
    shareAlpha: boolean,
    shareVertices: boolean
  ): Model {
    const vertexCount: number = src.vertexCount;
    const faceCount: number = src.faceCount;
    const texturedFaceCount: number = src.texturedFaceCount;

    let vertexX: Int32Array;
    let vertexY: Int32Array;
    let vertexZ: Int32Array;

    if (shareVertices) {
      vertexX = src.vertexX;
      vertexY = src.vertexY;
      vertexZ = src.vertexZ;
    } else {
      vertexX = new Int32Array(vertexCount);
      vertexY = new Int32Array(vertexCount);
      vertexZ = new Int32Array(vertexCount);

      for (let v: number = 0; v < vertexCount; v++) {
        vertexX[v] = src.vertexX[v];
        vertexY[v] = src.vertexY[v];
        vertexZ[v] = src.vertexZ[v];
      }
    }

    let faceColor: Int32Array | null;
    if (shareColors) {
      faceColor = src.faceColor;
    } else {
      faceColor = new Int32Array(faceCount);
      for (let f: number = 0; f < faceCount; f++) {
        if (src.faceColor) {
          faceColor[f] = src.faceColor[f];
        }
      }
    }

    let faceAlpha: Int32Array | null;
    if (shareAlpha) {
      faceAlpha = src.faceAlpha;
    } else {
      faceAlpha = new Int32Array(faceCount);
      if (!src.faceAlpha) {
        for (let f: number = 0; f < faceCount; f++) {
          faceAlpha[f] = 0;
        }
      } else {
        for (let f: number = 0; f < faceCount; f++) {
          faceAlpha[f] = src.faceAlpha[f];
        }
      }
    }
    return new Model({
      vertexCount: vertexCount,
      vertexX: vertexX,
      vertexY: vertexY,
      vertexZ: vertexZ,
      faceCount: faceCount,
      faceVertexA: src.faceVertexA,
      faceVertexB: src.faceVertexB,
      faceVertexC: src.faceVertexC,
      faceColorA: null,
      faceColorB: null,
      faceColorC: null,
      faceInfo: src.faceInfo,
      facePriority: src.facePriority,
      faceAlpha: faceAlpha,
      faceColor: faceColor,
      priorityVal: src.priorityVal,
      texturedFaceCount: texturedFaceCount,
      texturedVertexA: src.texturedVertexA,
      texturedVertexB: src.texturedVertexB,
      texturedVertexC: src.texturedVertexC,
      vertexLabel: src.vertexLabel,
      faceLabel: src.faceLabel,
    });
  }

  static modelShareAlpha(src: Model, shareAlpha: boolean): Model {
    const vertexCount: number = src.vertexCount;
    const faceCount: number = src.faceCount;
    const texturedFaceCount: number = src.texturedFaceCount;

    const vertexX: Int32Array = new Int32Array(vertexCount);
    const vertexY: Int32Array = new Int32Array(vertexCount);
    const vertexZ: Int32Array = new Int32Array(vertexCount);

    for (let v: number = 0; v < vertexCount; v++) {
      vertexX[v] = src.vertexX[v];
      vertexY[v] = src.vertexY[v];
      vertexZ[v] = src.vertexZ[v];
    }

    let faceAlpha: Int32Array | null;
    if (shareAlpha) {
      faceAlpha = src.faceAlpha;
    } else {
      faceAlpha = new Int32Array(faceCount);
      if (!src.faceAlpha) {
        for (let f: number = 0; f < faceCount; f++) {
          faceAlpha[f] = 0;
        }
      } else {
        for (let f: number = 0; f < faceCount; f++) {
          faceAlpha[f] = src.faceAlpha[f];
        }
      }
    }
    return new Model({
      vertexCount: vertexCount,
      vertexX: vertexX,
      vertexY: vertexY,
      vertexZ: vertexZ,
      faceCount: faceCount,
      faceVertexA: src.faceVertexA,
      faceVertexB: src.faceVertexB,
      faceVertexC: src.faceVertexC,
      faceColorA: src.faceColorA,
      faceColorB: src.faceColorB,
      faceColorC: src.faceColorC,
      faceInfo: src.faceInfo,
      facePriority: src.facePriority,
      faceAlpha: faceAlpha,
      faceColor: src.faceColor,
      priorityVal: src.priorityVal,
      texturedFaceCount: texturedFaceCount,
      texturedVertexA: src.texturedVertexA,
      texturedVertexB: src.texturedVertexB,
      texturedVertexC: src.texturedVertexC,
      labelVertices: src.labelVertices,
      labelFaces: src.labelFaces,
    });
  }

  static modelFromModelsBounds(models: Model[], count: number): Model {
    let copyInfo: boolean = false;
    let copyPriority: boolean = false;
    let copyAlpha: boolean = false;
    let copyColor: boolean = false;

    let vertexCount: number = 0;
    let faceCount: number = 0;
    let texturedFaceCount: number = 0;
    let priority: number = -1;

    for (let i: number = 0; i < count; i++) {
      const model: Model = models[i];
      if (model) {
        vertexCount += model.vertexCount;
        faceCount += model.faceCount;
        texturedFaceCount += model.texturedFaceCount;

        copyInfo ||= model.faceInfo !== null;

        if (!model.facePriority) {
          if (priority === -1) {
            priority = model.priorityVal;
          }
          if (priority !== model.priorityVal) {
            copyPriority = true;
          }
        } else {
          copyPriority = true;
        }

        copyAlpha ||= model.faceAlpha !== null;
        copyColor ||= model.faceColor !== null;
      }
    }

    const vertexX: Int32Array = new Int32Array(vertexCount);
    const vertexY: Int32Array = new Int32Array(vertexCount);
    const vertexZ: Int32Array = new Int32Array(vertexCount);

    const faceVertexA: Int32Array = new Int32Array(faceCount);
    const faceVertexB: Int32Array = new Int32Array(faceCount);
    const faceVertexC: Int32Array = new Int32Array(faceCount);

    const faceColorA: Int32Array = new Int32Array(faceCount);
    const faceColorB: Int32Array = new Int32Array(faceCount);
    const faceColorC: Int32Array = new Int32Array(faceCount);

    const texturedVertexA: Int32Array = new Int32Array(texturedFaceCount);
    const texturedVertexB: Int32Array = new Int32Array(texturedFaceCount);
    const texturedVertexC: Int32Array = new Int32Array(texturedFaceCount);

    let faceInfo: Int32Array | null = null;
    if (copyInfo) {
      faceInfo = new Int32Array(faceCount);
    }

    let facePriority: Int32Array | null = null;
    if (copyPriority) {
      facePriority = new Int32Array(faceCount);
    }

    let faceAlpha: Int32Array | null = null;
    if (copyAlpha) {
      faceAlpha = new Int32Array(faceCount);
    }

    let faceColor: Int32Array | null = null;
    if (copyColor) {
      faceColor = new Int32Array(faceCount);
    }

    vertexCount = 0;
    faceCount = 0;
    texturedFaceCount = 0;

    for (let i: number = 0; i < count; i++) {
      const model: Model = models[i];
      if (model) {
        const vertexCount2: number = vertexCount;

        for (let v: number = 0; v < model.vertexCount; v++) {
          vertexX[vertexCount] = model.vertexX[v];
          vertexY[vertexCount] = model.vertexY[v];
          vertexZ[vertexCount] = model.vertexZ[v];
          vertexCount++;
        }

        for (let f: number = 0; f < model.faceCount; f++) {
          faceVertexA[faceCount] = model.faceVertexA[f] + vertexCount2;
          faceVertexB[faceCount] = model.faceVertexB[f] + vertexCount2;
          faceVertexC[faceCount] = model.faceVertexC[f] + vertexCount2;
          if (model.faceColorA) {
            faceColorA[faceCount] = model.faceColorA[f];
          }
          if (model.faceColorB) {
            faceColorB[faceCount] = model.faceColorB[f];
          }
          if (model.faceColorC) {
            faceColorC[faceCount] = model.faceColorC[f];
          }

          if (copyInfo) {
            if (!model.faceInfo) {
              if (faceInfo) {
                faceInfo[faceCount] = 0;
              }
            } else {
              if (faceInfo) {
                faceInfo[faceCount] = model.faceInfo[f];
              }
            }
          }

          if (copyPriority) {
            if (!model.facePriority) {
              if (facePriority) {
                facePriority[faceCount] = model.priorityVal;
              }
            } else {
              if (facePriority) {
                facePriority[faceCount] = model.facePriority[f];
              }
            }
          }

          if (copyAlpha) {
            if (!model.faceAlpha) {
              if (faceAlpha) {
                faceAlpha[faceCount] = 0;
              }
            } else {
              if (faceAlpha) {
                faceAlpha[faceCount] = model.faceAlpha[f];
              }
            }
          }

          if (copyColor && model.faceColor) {
            if (faceColor) {
              faceColor[faceCount] = model.faceColor[f];
            }
          }

          faceCount++;
        }

        for (let f: number = 0; f < model.texturedFaceCount; f++) {
          texturedVertexA[texturedFaceCount] =
            model.texturedVertexA[f] + vertexCount2;
          texturedVertexB[texturedFaceCount] =
            model.texturedVertexB[f] + vertexCount2;
          texturedVertexC[texturedFaceCount] =
            model.texturedVertexC[f] + vertexCount2;
          texturedFaceCount++;
        }
      }
    }
    const model: Model = new Model({
      vertexCount: vertexCount,
      vertexX: vertexX,
      vertexY: vertexY,
      vertexZ: vertexZ,
      faceCount: faceCount,
      faceVertexA: faceVertexA,
      faceVertexB: faceVertexB,
      faceVertexC: faceVertexC,
      faceColorA: faceColorA,
      faceColorB: faceColorB,
      faceColorC: faceColorC,
      faceInfo: faceInfo,
      facePriority: facePriority,
      faceAlpha: faceAlpha,
      faceColor: faceColor,
      priorityVal: priority,
      texturedFaceCount: texturedFaceCount,
      texturedVertexA: texturedVertexA,
      texturedVertexB: texturedVertexB,
      texturedVertexC: texturedVertexC,
    });
    model.calculateBoundsCylinder();
    return model;
  }

  static modelFromModels(
    models: (Model | null)[],
    count: number,
    modelNames?: string[]
  ): Model {
    let copyInfo: boolean = false;
    let copyPriorities: boolean = false;
    let copyAlpha: boolean = false;
    let copyLabels: boolean = false;

    let vertexCount: number = 0;
    let faceCount: number = 0;
    let texturedFaceCount: number = 0;
    let priority: number = -1;

    for (let i: number = 0; i < count; i++) {
      const model: Model | null = models[i];
      if (model) {
        vertexCount += model.vertexCount;
        faceCount += model.faceCount;
        texturedFaceCount += model.texturedFaceCount;
        copyInfo ||= model.faceInfo !== null;

        if (!model.facePriority) {
          if (priority === -1) {
            priority = model.priorityVal;
          }

          if (priority !== model.priorityVal) {
            copyPriorities = true;
          }
        } else {
          copyPriorities = true;
        }

        copyAlpha ||= model.faceAlpha !== null;
        copyLabels ||= model.faceLabel !== null;
      }
    }

    const vertexX: Int32Array = new Int32Array(vertexCount);
    const vertexY: Int32Array = new Int32Array(vertexCount);
    const vertexZ: Int32Array = new Int32Array(vertexCount);

    const vertexLabel: Int32Array = new Int32Array(vertexCount);

    const faceVertexA: Int32Array = new Int32Array(faceCount);
    const faceVertexB: Int32Array = new Int32Array(faceCount);
    const faceVertexC: Int32Array = new Int32Array(faceCount);

    const texturedVertexA: Int32Array = new Int32Array(texturedFaceCount);
    const texturedVertexB: Int32Array = new Int32Array(texturedFaceCount);
    const texturedVertexC: Int32Array = new Int32Array(texturedFaceCount);

    let faceInfo: Int32Array | null = null;
    if (copyInfo) {
      faceInfo = new Int32Array(faceCount);
    }

    let facePriority: Int32Array | null = null;
    if (copyPriorities) {
      facePriority = new Int32Array(faceCount);
    }

    let faceAlpha: Int32Array | null = null;
    if (copyAlpha) {
      faceAlpha = new Int32Array(faceCount);
    }

    let faceLabel: Int32Array | null = null;
    if (copyLabels) {
      faceLabel = new Int32Array(faceCount);
    }

    const faceColor: Int32Array = new Int32Array(faceCount);
    const parts: ModelPart[] = [];

    vertexCount = 0;
    faceCount = 0;
    texturedFaceCount = 0;

    const addVertex = (
      src: Model,
      vertexId: number,
      vertexX: Int32Array,
      vertexY: Int32Array,
      vertexZ: Int32Array,
      vertexLabel: Int32Array,
      vertexCount: number
    ): {
      vertex: number;
      vertexCount: number;
    } => {
      let identical: number = -1;

      const x: number = src.vertexX[vertexId];
      const y: number = src.vertexY[vertexId];
      const z: number = src.vertexZ[vertexId];

      for (let v: number = 0; v < vertexCount; v++) {
        if (x === vertexX[v] && y === vertexY[v] && z === vertexZ[v]) {
          identical = v;
          break;
        }
      }

      if (identical === -1) {
        vertexX[vertexCount] = x;
        vertexY[vertexCount] = y;
        vertexZ[vertexCount] = z;

        if (vertexLabel && src.vertexLabel) {
          vertexLabel[vertexCount] = src.vertexLabel[vertexId];
        }

        identical = vertexCount++;
      }

      return { vertex: identical, vertexCount };
    };

    for (let i: number = 0; i < count; i++) {
      const model: Model | null = models[i];

      if (model) {
        const partStartVertex = vertexCount;
        const partStartFace = faceCount;
        const partStartTexturedFace = texturedFaceCount;
        const vertexMapping = new Map<number, number>();

        for (let face: number = 0; face < model.faceCount; face++) {
          if (copyInfo) {
            if (!model.faceInfo) {
              if (faceInfo) {
                faceInfo[faceCount] = 0;
              }
            } else {
              if (faceInfo) {
                faceInfo[faceCount] = model.faceInfo[face];
              }
            }
          }

          if (copyPriorities) {
            if (!model.facePriority) {
              if (facePriority) {
                facePriority[faceCount] = model.priorityVal;
              }
            } else {
              if (facePriority) {
                facePriority[faceCount] = model.facePriority[face];
              }
            }
          }

          if (copyAlpha) {
            if (!model.faceAlpha) {
              if (faceAlpha) {
                faceAlpha[faceCount] = 0;
              }
            } else {
              if (faceAlpha) {
                faceAlpha[faceCount] = model.faceAlpha[face];
              }
            }
          }

          if (copyLabels && model.faceLabel) {
            if (faceLabel) {
              faceLabel[faceCount] = model.faceLabel[face];
            }
          }

          if (model.faceColor) {
            faceColor[faceCount] = model.faceColor[face];
          }

          const a: { vertex: number; vertexCount: number } = addVertex(
            model,
            model.faceVertexA[face],
            vertexX,
            vertexY,
            vertexZ,
            vertexLabel,
            vertexCount
          );
          if (!vertexMapping.has(model.faceVertexA[face])) {
            vertexMapping.set(model.faceVertexA[face], a.vertex);
          }
          vertexCount = a.vertexCount;

          const b: { vertex: number; vertexCount: number } = addVertex(
            model,
            model.faceVertexB[face],
            vertexX,
            vertexY,
            vertexZ,
            vertexLabel,
            vertexCount
          );
          if (!vertexMapping.has(model.faceVertexB[face])) {
            vertexMapping.set(model.faceVertexB[face], b.vertex);
          }
          vertexCount = b.vertexCount;

          const c: { vertex: number; vertexCount: number } = addVertex(
            model,
            model.faceVertexC[face],
            vertexX,
            vertexY,
            vertexZ,
            vertexLabel,
            vertexCount
          );
          if (!vertexMapping.has(model.faceVertexC[face])) {
            vertexMapping.set(model.faceVertexC[face], c.vertex);
          }
          vertexCount = c.vertexCount;

          faceVertexA[faceCount] = a.vertex;
          faceVertexB[faceCount] = b.vertex;
          faceVertexC[faceCount] = c.vertex;
          faceCount++;
        }

        for (let f: number = 0; f < model.texturedFaceCount; f++) {
          const a: { vertex: number; vertexCount: number } = addVertex(
            model,
            model.texturedVertexA[f],
            vertexX,
            vertexY,
            vertexZ,
            vertexLabel,
            vertexCount
          );
          if (!vertexMapping.has(model.texturedVertexA[f])) {
            vertexMapping.set(model.texturedVertexA[f], a.vertex);
          }
          vertexCount = a.vertexCount;

          const b: { vertex: number; vertexCount: number } = addVertex(
            model,
            model.texturedVertexB[f],
            vertexX,
            vertexY,
            vertexZ,
            vertexLabel,
            vertexCount
          );
          if (!vertexMapping.has(model.texturedVertexB[f])) {
            vertexMapping.set(model.texturedVertexB[f], b.vertex);
          }
          vertexCount = b.vertexCount;

          const c: { vertex: number; vertexCount: number } = addVertex(
            model,
            model.texturedVertexC[f],
            vertexX,
            vertexY,
            vertexZ,
            vertexLabel,
            vertexCount
          );
          if (!vertexMapping.has(model.texturedVertexC[f])) {
            vertexMapping.set(model.texturedVertexC[f], c.vertex);
          }
          vertexCount = c.vertexCount;

          texturedVertexA[texturedFaceCount] = a.vertex;
          texturedVertexB[texturedFaceCount] = b.vertex;
          texturedVertexC[texturedFaceCount] = c.vertex;
          texturedFaceCount++;
        }

        const originalModelName =
          modelNames && modelNames[i] ? modelNames[i] : `part_${i}`;
        parts.push({
          partIndex: i,
          originalModel: model,
          originalModelName: originalModelName,
          vertexOffset: partStartVertex,
          vertexCount: vertexCount - partStartVertex,
          faceOffset: partStartFace,
          faceCount: faceCount - partStartFace,
          texturedFaceOffset: partStartTexturedFace,
          texturedFaceCount: texturedFaceCount - partStartTexturedFace,
          vertexMapping: vertexMapping,
        });
      }
    }

    const combinedModel = new Model({
      vertexCount: vertexCount,
      vertexX: vertexX,
      vertexY: vertexY,
      vertexZ: vertexZ,
      faceCount: faceCount,
      faceVertexA: faceVertexA,
      faceVertexB: faceVertexB,
      faceVertexC: faceVertexC,
      faceColorA: null,
      faceColorB: null,
      faceColorC: null,
      faceInfo: faceInfo,
      facePriority: facePriority,
      faceAlpha: faceAlpha,
      faceColor: faceColor,
      priorityVal: priority,
      texturedFaceCount: texturedFaceCount,
      texturedVertexA: texturedVertexA,
      texturedVertexB: texturedVertexB,
      texturedVertexC: texturedVertexC,
      vertexLabel: vertexLabel,
      faceLabel: faceLabel,
    });

    combinedModel.partMapping = {
      parts: parts,
      isNpcModel: false,
    };

    if (combinedModel.faceColor) {
      combinedModel.originalFaceColor = new Int32Array(combinedModel.faceColor);
    }

    return combinedModel;
  }

  static modelFromNpcModels(
    models: (Model | null)[],
    count: number,
    npcId: string,
    modelNames: string[]
  ): Model {
    const combinedModel = Model.modelFromModels(models, count, modelNames);

    if (combinedModel.partMapping) {
      combinedModel.partMapping.isNpcModel = true;
      combinedModel.partMapping.npcId = npcId;
    }

    return combinedModel;
  }

  exportNpcParts(): Map<number, Uint8Array> | null {
    if (!this.partMapping || !this.partMapping.isNpcModel) {
      return null;
    }

    const partExports = new Map<number, Uint8Array>();

    for (const part of this.partMapping.parts) {
      const exportedModel = this.extractModelPart(part);
      if (exportedModel) {
        const ob2Data = exportedModel.exportToOb2();
        partExports.set(part.partIndex, ob2Data);
      }
    }

    return partExports;
  }

  private extractModelPart(part: ModelPart): Model | null {
    if (!this.partMapping) {
      return null;
    }
    return part.originalModel.clone();
  }

  public updateVertex(
    vertexIndex: number,
    x: number,
    y: number,
    z: number
  ): void {
    if (vertexIndex >= 0 && vertexIndex < this.vertexCount) {
      this.vertexX[vertexIndex] = x;
      this.vertexY[vertexIndex] = y;
      this.vertexZ[vertexIndex] = z;

      if (
        this.currentScaleX !== 128 ||
        this.currentScaleY !== 128 ||
        this.currentScaleZ !== 128
      ) {
        this.originalVertexX[vertexIndex] = ((x * 128) / this.baseScaleX) | 0;
        this.originalVertexY[vertexIndex] = ((y * 128) / this.baseScaleY) | 0;
        this.originalVertexZ[vertexIndex] = ((z * 128) / this.baseScaleZ) | 0;
      } else {
        this.originalVertexX[vertexIndex] = x;
        this.originalVertexY[vertexIndex] = y;
        this.originalVertexZ[vertexIndex] = z;
      }

      if (this.partMapping && this.partMapping.isNpcModel) {
        this.updateAllPartVertices();
      }
    }
  }

  private updateAllPartVertices(): void {
    if (!this.partMapping) {
      return;
    }

    for (const part of this.partMapping.parts) {
      this.updatePartVertices(part);
    }
  }

  private updatePartVertices(part: ModelPart): void {
    for (const [originalVertexIdx, combinedVertexIdx] of part.vertexMapping) {
      if (combinedVertexIdx < this.vertexCount) {
        part.originalModel.vertexX[originalVertexIdx] =
          this.vertexX[combinedVertexIdx];
        part.originalModel.vertexY[originalVertexIdx] =
          this.vertexY[combinedVertexIdx];
        part.originalModel.vertexZ[originalVertexIdx] =
          this.vertexZ[combinedVertexIdx];
      }
    }
    part.originalModel.originalVertexX = new Int32Array(
      part.originalModel.vertexX
    );
    part.originalModel.originalVertexY = new Int32Array(
      part.originalModel.vertexY
    );
    part.originalModel.originalVertexZ = new Int32Array(
      part.originalModel.vertexZ
    );
  }

  calculateBoundsCylinder(): void {
    this.maxY = 0;
    this.radius = 0;
    this.minY = 0;

    for (let i: number = 0; i < this.vertexCount; i++) {
      const x: number = this.vertexX[i];
      const y: number = this.vertexY[i];
      const z: number = this.vertexZ[i];

      if (-y > this.maxY) {
        this.maxY = -y;
      }

      if (y > this.minY) {
        this.minY = y;
      }

      const radiusSqr: number = x * x + z * z;
      if (radiusSqr > this.radius) {
        this.radius = radiusSqr;
      }
    }

    this.radius = (Math.sqrt(this.radius) + 0.99) | 0;
    this.minDepth =
      (Math.sqrt(this.radius * this.radius + this.maxY * this.maxY) + 0.99) | 0;
    this.maxDepth =
      this.minDepth +
      ((Math.sqrt(this.radius * this.radius + this.minY * this.minY) + 0.99) |
        0);
  }

  calculateBoundsY(): void {
    this.maxY = 0;
    this.minY = 0;

    for (let v: number = 0; v < this.vertexCount; v++) {
      const y: number = this.vertexY[v];

      if (-y > this.maxY) {
        this.maxY = -y;
      }

      if (y > this.minY) {
        this.minY = y;
      }
    }

    this.minDepth =
      (Math.sqrt(this.radius * this.radius + this.maxY * this.maxY) + 0.99) | 0;
    this.maxDepth =
      this.minDepth +
      ((Math.sqrt(this.radius * this.radius + this.minY * this.minY) + 0.99) |
        0);
  }

  createLabelReferences(): void {
    if (this.vertexLabel) {
      const labelVertexCount: Int32Array = new Int32Array(256);
      let count: number = 0;
      for (let v: number = 0; v < this.vertexCount; v++) {
        const label: number = this.vertexLabel[v];
        // const countDebug: number = labelVertexCount[label]++; // dead var
        labelVertexCount[label]++;
        if (label > count) {
          count = label;
        }
      }
      this.labelVertices = new TypedArray1d(count + 1, null);
      for (let label: number = 0; label <= count; label++) {
        this.labelVertices[label] = new Int32Array(labelVertexCount[label]);
        labelVertexCount[label] = 0;
      }
      let v: number = 0;
      while (v < this.vertexCount) {
        const label: number = this.vertexLabel[v];
        const verts: Int32Array | null = this.labelVertices[label];
        if (!verts) {
          continue;
        }
        verts[labelVertexCount[label]++] = v++;
      }
      this.vertexLabel = null;
    }

    if (this.faceLabel) {
      const labelFaceCount: Int32Array = new Int32Array(256);
      let count: number = 0;
      for (let f: number = 0; f < this.faceCount; f++) {
        const label: number = this.faceLabel[f];
        // const countDebug: number = labelFaceCount[label]++; // dead var
        labelFaceCount[label]++;
        if (label > count) {
          count = label;
        }
      }
      this.labelFaces = new TypedArray1d(count + 1, null);
      for (let label: number = 0; label <= count; label++) {
        this.labelFaces[label] = new Int32Array(labelFaceCount[label]);
        labelFaceCount[label] = 0;
      }
      let face: number = 0;
      while (face < this.faceCount) {
        const label: number = this.faceLabel[face];
        const faces: Int32Array | null = this.labelFaces[label];
        if (!faces) {
          continue;
        }
        faces[labelFaceCount[label]++] = face++;
      }
      this.faceLabel = null;
    }
  }

  applyTransforms(
    primaryId: number,
    secondaryId: number,
    mask: Int32Array | null
  ): void {
    if (primaryId === -1) {
      return;
    }

    if (!mask || secondaryId === -1) {
      this.applyTransform(primaryId);
    } else {
      const primary: AnimFrame = AnimFrame.instances[primaryId];
      const secondary: AnimFrame = AnimFrame.instances[secondaryId];
      const skeleton: AnimBase | null = primary.base;

      Model.baseX = 0;
      Model.baseY = 0;
      Model.baseZ = 0;

      let counter: number = 0;
      let maskBase: number = mask[counter++];

      for (let i: number = 0; i < primary.frameLength; i++) {
        if (!primary.bases) {
          continue;
        }
        const base: number = primary.bases[i];
        while (base > maskBase) {
          maskBase = mask[counter++];
        }

        if (
          skeleton &&
          skeleton.animTypes &&
          primary.x &&
          primary.y &&
          primary.z &&
          skeleton.animLabels &&
          (base !== maskBase || skeleton.animTypes[base] === 0)
        ) {
          this.applyTransform2(
            primary.x[i],
            primary.y[i],
            primary.z[i],
            skeleton.animLabels[base],
            skeleton.animTypes[base]
          );
        }
      }

      Model.baseX = 0;
      Model.baseY = 0;
      Model.baseZ = 0;

      counter = 0;
      maskBase = mask[counter++];

      for (let i: number = 0; i < secondary.frameLength; i++) {
        if (!secondary.bases) {
          continue;
        }
        const base: number = secondary.bases[i];
        while (base > maskBase) {
          maskBase = mask[counter++];
        }

        if (
          skeleton &&
          skeleton.animTypes &&
          secondary.x &&
          secondary.y &&
          secondary.z &&
          skeleton.animLabels &&
          (base === maskBase || skeleton.animTypes[base] === 0)
        ) {
          this.applyTransform2(
            secondary.x[i],
            secondary.y[i],
            secondary.z[i],
            skeleton.animLabels[base],
            skeleton.animTypes[base]
          );
        }
      }
    }
  }

  applyTransform(id: number): void {
    if (!this.labelVertices || id === -1 || !AnimFrame.instances[id]) {
      return;
    }

    const transform: AnimFrame = AnimFrame.instances[id];
    const skeleton: AnimBase | null = transform.base;
    Model.baseX = 0;
    Model.baseY = 0;
    Model.baseZ = 0;

    for (let i: number = 0; i < transform.frameLength; i++) {
      if (
        !transform.bases ||
        !transform.x ||
        !transform.y ||
        !transform.z ||
        !skeleton ||
        !skeleton.animLabels ||
        !skeleton.animTypes
      ) {
        continue;
      }

      const base: number = transform.bases[i];
      this.applyTransform2(
        transform.x[i],
        transform.y[i],
        transform.z[i],
        skeleton.animLabels[base],
        skeleton.animTypes[base]
      );
    }
  }

  rotateY90(): void {
    for (let v: number = 0; v < this.vertexCount; v++) {
      const tmp: number = this.vertexX[v];
      this.vertexX[v] = this.vertexZ[v];
      this.vertexZ[v] = -tmp;
    }
  }

  rotateX(angle: number): void {
    const sin: number = Pix3D.sin[angle];
    const cos: number = Pix3D.cos[angle];

    for (let v: number = 0; v < this.vertexCount; v++) {
      const tmp: number = (this.vertexY[v] * cos - this.vertexZ[v] * sin) >> 16;
      this.vertexZ[v] = (this.vertexY[v] * sin + this.vertexZ[v] * cos) >> 16;
      this.vertexY[v] = tmp;
    }
  }

  translateModel(y: number, x: number, z: number): void {
    for (let v: number = 0; v < this.vertexCount; v++) {
      this.vertexX[v] += x;
      this.vertexY[v] += y;
      this.vertexZ[v] += z;
    }
  }

  recolor(src: number, dst: number): void {
    if (!this.faceColor) {
      return;
    }

    for (let f: number = 0; f < this.faceCount; f++) {
      if (this.faceColor[f] === src) {
        this.faceColor[f] = dst;
      }
    }
  }

  rotateY180(): void {
    for (let v: number = 0; v < this.vertexCount; v++) {
      this.vertexZ[v] = -this.vertexZ[v];
    }

    for (let f: number = 0; f < this.faceCount; f++) {
      const temp: number = this.faceVertexA[f];
      this.faceVertexA[f] = this.faceVertexC[f];
      this.faceVertexC[f] = temp;
    }
  }

  scale(x: number, y: number, z: number): void {
    this.currentScaleX = x;
    this.currentScaleY = y;
    this.currentScaleZ = z;

    if (
      this.baseScaleX === 128 &&
      this.baseScaleY === 128 &&
      this.baseScaleZ === 128
    ) {
      this.baseScaleX = x;
      this.baseScaleY = y;
      this.baseScaleZ = z;
    }

    for (let v: number = 0; v < this.vertexCount; v++) {
      this.vertexX[v] = ((this.vertexX[v] * x) / 128) | 0;
      this.vertexY[v] = ((this.vertexY[v] * y) / 128) | 0;
      this.vertexZ[v] = ((this.vertexZ[v] * z) / 128) | 0;
    }
  }

  calculateNormals(
    lightAmbient: number,
    lightAttenuation: number,
    lightSrcX: number,
    lightSrcY: number,
    lightSrcZ: number,
    applyLighting: boolean
  ): void {
    const lightMagnitude: number =
      Math.sqrt(
        lightSrcX * lightSrcX + lightSrcY * lightSrcY + lightSrcZ * lightSrcZ
      ) | 0;
    const attenuation: number = (lightAttenuation * lightMagnitude) >> 8;

    if (!this.faceColorA || !this.faceColorB || !this.faceColorC) {
      this.faceColorA = new Int32Array(this.faceCount);
      this.faceColorB = new Int32Array(this.faceCount);
      this.faceColorC = new Int32Array(this.faceCount);
    }

    if (!this.vertexNormal) {
      this.vertexNormal = new TypedArray1d(this.vertexCount, null);

      for (let v: number = 0; v < this.vertexCount; v++) {
        this.vertexNormal[v] = new VertexNormal();
      }
    }

    for (let f: number = 0; f < this.faceCount; f++) {
      const a: number = this.faceVertexA[f];
      const b: number = this.faceVertexB[f];
      const c: number = this.faceVertexC[f];

      const dxAB: number = this.vertexX[b] - this.vertexX[a];
      const dyAB: number = this.vertexY[b] - this.vertexY[a];
      const dzAB: number = this.vertexZ[b] - this.vertexZ[a];

      const dxAC: number = this.vertexX[c] - this.vertexX[a];
      const dyAC: number = this.vertexY[c] - this.vertexY[a];
      const dzAC: number = this.vertexZ[c] - this.vertexZ[a];

      let nx: number = dyAB * dzAC - dyAC * dzAB;
      let ny: number = dzAB * dxAC - dzAC * dxAB;
      let nz: number = dxAB * dyAC - dxAC * dyAB;

      while (
        nx > 8192 ||
        ny > 8192 ||
        nz > 8192 ||
        nx < -8192 ||
        ny < -8192 ||
        nz < -8192
      ) {
        nx >>= 1;
        ny >>= 1;
        nz >>= 1;
      }

      let length: number = Math.sqrt(nx * nx + ny * ny + nz * nz) | 0;
      if (length <= 0) {
        length = 1;
      }

      nx = ((nx * 256) / length) | 0;
      ny = ((ny * 256) / length) | 0;
      nz = ((nz * 256) / length) | 0;

      if (!this.faceInfo || (this.faceInfo[f] & 0x1) === 0) {
        let n: VertexNormal | null = this.vertexNormal[a];
        if (n) {
          n.x += nx;
          n.y += ny;
          n.z += nz;
          n.w++;
        }

        n = this.vertexNormal[b];
        if (n) {
          n.x += nx;
          n.y += ny;
          n.z += nz;
          n.w++;
        }

        n = this.vertexNormal[c];
        if (n) {
          n.x += nx;
          n.y += ny;
          n.z += nz;
          n.w++;
        }
      } else {
        const lightness: number =
          lightAmbient +
          (((lightSrcX * nx + lightSrcY * ny + lightSrcZ * nz) /
            (attenuation + ((attenuation / 2) | 0))) |
            0);
        if (this.faceColor) {
          this.faceColorA[f] = Model.mulColorLightness(
            this.faceColor[f],
            lightness,
            this.faceInfo[f]
          );
        }
      }
    }

    if (applyLighting) {
      this.applyLighting(
        lightAmbient,
        attenuation,
        lightSrcX,
        lightSrcY,
        lightSrcZ
      );
    } else {
      this.vertexNormalOriginal = new TypedArray1d(this.vertexCount, null);

      for (let v: number = 0; v < this.vertexCount; v++) {
        const normal: VertexNormal | null = this.vertexNormal[v];
        const copy: VertexNormal = new VertexNormal();

        if (normal) {
          copy.x = normal.x;
          copy.y = normal.y;
          copy.z = normal.z;
          copy.w = normal.w;
        }

        this.vertexNormalOriginal[v] = copy;
      }
    }

    if (applyLighting) {
      this.calculateBoundsCylinder();
    } else {
      this.calculateBoundsAABB();
    }
  }

  applyLighting(
    lightAmbient: number,
    lightAttenuation: number,
    lightSrcX: number,
    lightSrcY: number,
    lightSrcZ: number
  ): void {
    for (let f: number = 0; f < this.faceCount; f++) {
      const a: number = this.faceVertexA[f];
      const b: number = this.faceVertexB[f];
      const c: number = this.faceVertexC[f];

      if (
        !this.faceInfo &&
        this.faceColor &&
        this.vertexNormal &&
        this.faceColorA &&
        this.faceColorB &&
        this.faceColorC
      ) {
        const color: number = this.faceColor[f];

        const va: VertexNormal | null = this.vertexNormal[a];
        if (va) {
          this.faceColorA[f] = Model.mulColorLightness(
            color,
            lightAmbient +
              (((lightSrcX * va.x + lightSrcY * va.y + lightSrcZ * va.z) /
                (lightAttenuation * va.w)) |
                0),
            0
          );
        }

        const vb: VertexNormal | null = this.vertexNormal[b];
        if (vb) {
          this.faceColorB[f] = Model.mulColorLightness(
            color,
            lightAmbient +
              (((lightSrcX * vb.x + lightSrcY * vb.y + lightSrcZ * vb.z) /
                (lightAttenuation * vb.w)) |
                0),
            0
          );
        }

        const vc: VertexNormal | null = this.vertexNormal[c];
        if (vc) {
          this.faceColorC[f] = Model.mulColorLightness(
            color,
            lightAmbient +
              (((lightSrcX * vc.x + lightSrcY * vc.y + lightSrcZ * vc.z) /
                (lightAttenuation * vc.w)) |
                0),
            0
          );
        }
      } else if (
        this.faceInfo &&
        (this.faceInfo[f] & 0x1) === 0 &&
        this.faceColor &&
        this.vertexNormal &&
        this.faceColorA &&
        this.faceColorB &&
        this.faceColorC
      ) {
        const color: number = this.faceColor[f];
        const info: number = this.faceInfo[f];

        const va: VertexNormal | null = this.vertexNormal[a];
        if (va) {
          this.faceColorA[f] = Model.mulColorLightness(
            color,
            lightAmbient +
              (((lightSrcX * va.x + lightSrcY * va.y + lightSrcZ * va.z) /
                (lightAttenuation * va.w)) |
                0),
            info
          );
        }

        const vb: VertexNormal | null = this.vertexNormal[b];
        if (vb) {
          this.faceColorB[f] = Model.mulColorLightness(
            color,
            lightAmbient +
              (((lightSrcX * vb.x + lightSrcY * vb.y + lightSrcZ * vb.z) /
                (lightAttenuation * vb.w)) |
                0),
            info
          );
        }

        const vc: VertexNormal | null = this.vertexNormal[c];
        if (vc) {
          this.faceColorC[f] = Model.mulColorLightness(
            color,
            lightAmbient +
              (((lightSrcX * vc.x + lightSrcY * vc.y + lightSrcZ * vc.z) /
                (lightAttenuation * vc.w)) |
                0),
            info
          );
        }
      }
    }

    this.vertexNormal = null;
    this.vertexNormalOriginal = null;
    this.vertexLabel = null;
    this.faceLabel = null;

    if (this.faceInfo) {
      for (let f: number = 0; f < this.faceCount; f++) {
        if ((this.faceInfo[f] & 0x2) === 2) {
          return;
        }
      }
    }

    //this.faceColor = null;
  }

  static rgb15to24(rgb: number): number {
    const r: number = (rgb >> 10) & 0x1f;
    const g: number = (rgb >> 5) & 0x1f;
    const b: number = rgb & 0x1f;

    return ((r << 3) << 16) + ((g << 3) << 8) + (b << 3);
  }

  private applyTransform2(
    x: number,
    y: number,
    z: number,
    labels: Uint8Array | null,
    type: number
  ): void {
    if (!labels) {
      return;
    }

    const labelCount: number = labels.length;

    if (type === 0) {
      let count: number = 0;
      Model.baseX = 0;
      Model.baseY = 0;
      Model.baseZ = 0;

      for (let g: number = 0; g < labelCount; g++) {
        if (!this.labelVertices) {
          continue;
        }
        const label: number = labels[g];
        if (label < this.labelVertices.length) {
          const vertices: Int32Array | null = this.labelVertices[label];
          if (vertices) {
            for (let i: number = 0; i < vertices.length; i++) {
              const v: number = vertices[i];
              Model.baseX += this.vertexX[v];
              Model.baseY += this.vertexY[v];
              Model.baseZ += this.vertexZ[v];
              count++;
            }
          }
        }
      }

      if (count > 0) {
        Model.baseX = ((Model.baseX / count) | 0) + x;
        Model.baseY = ((Model.baseY / count) | 0) + y;
        Model.baseZ = ((Model.baseZ / count) | 0) + z;
      } else {
        Model.baseX = x;
        Model.baseY = y;
        Model.baseZ = z;
      }
    } else if (type === 1) {
      for (let g: number = 0; g < labelCount; g++) {
        const group: number = labels[g];
        if (!this.labelVertices || group >= this.labelVertices.length) {
          continue;
        }

        const vertices: Int32Array | null = this.labelVertices[group];
        if (vertices) {
          for (let i: number = 0; i < vertices.length; i++) {
            const v: number = vertices[i];
            this.vertexX[v] += x;
            this.vertexY[v] += y;
            this.vertexZ[v] += z;
          }
        }
      }
    } else if (type === 2) {
      for (let g: number = 0; g < labelCount; g++) {
        const label: number = labels[g];
        if (!this.labelVertices || label >= this.labelVertices.length) {
          continue;
        }

        const vertices: Int32Array | null = this.labelVertices[label];
        if (vertices) {
          for (let i: number = 0; i < vertices.length; i++) {
            const v: number = vertices[i];
            this.vertexX[v] -= Model.baseX;
            this.vertexY[v] -= Model.baseY;
            this.vertexZ[v] -= Model.baseZ;

            const pitch: number = (x & 0xff) * 8;
            const yaw: number = (y & 0xff) * 8;
            const roll: number = (z & 0xff) * 8;

            let sin: number;
            let cos: number;

            if (roll !== 0) {
              sin = Pix3D.sin[roll];
              cos = Pix3D.cos[roll];
              const x_: number =
                (this.vertexY[v] * sin + this.vertexX[v] * cos) >> 16;
              this.vertexY[v] =
                (this.vertexY[v] * cos - this.vertexX[v] * sin) >> 16;
              this.vertexX[v] = x_;
            }

            if (pitch !== 0) {
              sin = Pix3D.sin[pitch];
              cos = Pix3D.cos[pitch];
              const y_: number =
                (this.vertexY[v] * cos - this.vertexZ[v] * sin) >> 16;
              this.vertexZ[v] =
                (this.vertexY[v] * sin + this.vertexZ[v] * cos) >> 16;
              this.vertexY[v] = y_;
            }

            if (yaw !== 0) {
              sin = Pix3D.sin[yaw];
              cos = Pix3D.cos[yaw];
              const x_: number =
                (this.vertexZ[v] * sin + this.vertexX[v] * cos) >> 16;
              this.vertexZ[v] =
                (this.vertexZ[v] * cos - this.vertexX[v] * sin) >> 16;
              this.vertexX[v] = x_;
            }

            this.vertexX[v] += Model.baseX;
            this.vertexY[v] += Model.baseY;
            this.vertexZ[v] += Model.baseZ;
          }
        }
      }
    } else if (type === 3) {
      for (let g: number = 0; g < labelCount; g++) {
        const label: number = labels[g];
        if (!this.labelVertices || label >= this.labelVertices.length) {
          continue;
        }

        const vertices: Int32Array | null = this.labelVertices[label];
        if (vertices) {
          for (let i: number = 0; i < vertices.length; i++) {
            const v: number = vertices[i];
            this.vertexX[v] -= Model.baseX;
            this.vertexY[v] -= Model.baseY;
            this.vertexZ[v] -= Model.baseZ;
            this.vertexX[v] = ((this.vertexX[v] * x) / 128) | 0;
            this.vertexY[v] = ((this.vertexY[v] * y) / 128) | 0;
            this.vertexZ[v] = ((this.vertexZ[v] * z) / 128) | 0;
            this.vertexX[v] += Model.baseX;
            this.vertexY[v] += Model.baseY;
            this.vertexZ[v] += Model.baseZ;
          }
        }
      }
    } else if (type === 5 && this.labelFaces && this.faceAlpha) {
      for (let g: number = 0; g < labelCount; g++) {
        const label: number = labels[g];
        if (label >= this.labelFaces.length) {
          continue;
        }

        const triangles: Int32Array | null = this.labelFaces[label];
        if (triangles) {
          for (let i: number = 0; i < triangles.length; i++) {
            const t: number = triangles[i];

            this.faceAlpha[t] += x * 8;
            if (this.faceAlpha[t] < 0) {
              this.faceAlpha[t] = 0;
            }

            if (this.faceAlpha[t] > 255) {
              this.faceAlpha[t] = 255;
            }
          }
        }
      }
    }
  }

  private calculateBoundsAABB(): void {
    this.maxY = 0;
    this.radius = 0;
    this.minY = 0;
    this.minX = 999999;
    this.maxX = -999999;
    this.maxZ = -99999;
    this.minZ = 99999;

    for (let v: number = 0; v < this.vertexCount; v++) {
      const x: number = this.vertexX[v];
      const y: number = this.vertexY[v];
      const z: number = this.vertexZ[v];

      if (x < this.minX) {
        this.minX = x;
      }

      if (x > this.maxX) {
        this.maxX = x;
      }

      if (z < this.minZ) {
        this.minZ = z;
      }

      if (z > this.maxZ) {
        this.maxZ = z;
      }

      if (-y > this.maxY) {
        this.maxY = -y;
      }

      if (y > this.minY) {
        this.minY = y;
      }

      const radiusSqr: number = x * x + z * z;
      if (radiusSqr > this.radius) {
        this.radius = radiusSqr;
      }
    }

    this.radius = Math.sqrt(this.radius) | 0;
    this.minDepth =
      Math.sqrt(this.radius * this.radius + this.maxY * this.maxY) | 0;
    this.maxDepth =
      this.minDepth +
      (Math.sqrt(this.radius * this.radius + this.minY * this.minY) | 0);
  }

  public clone(): Model {
    const modelTypeData: ModelType = {
      vertexCount: this.vertexCount,
      vertexX: new Int32Array(this.vertexX),
      vertexY: new Int32Array(this.vertexY),
      vertexZ: new Int32Array(this.vertexZ),
      faceCount: this.faceCount,
      faceVertexA: new Int32Array(this.faceVertexA),
      faceVertexB: new Int32Array(this.faceVertexB),
      faceVertexC: new Int32Array(this.faceVertexC),
      faceColorA: this.faceColorA ? new Int32Array(this.faceColorA) : null,
      faceColorB: this.faceColorB ? new Int32Array(this.faceColorB) : null,
      faceColorC: this.faceColorC ? new Int32Array(this.faceColorC) : null,
      faceInfo: this.faceInfo ? new Int32Array(this.faceInfo) : null,
      facePriority: this.facePriority
        ? new Int32Array(this.facePriority)
        : null,
      faceAlpha: this.faceAlpha ? new Int32Array(this.faceAlpha) : null,
      faceColor: this.faceColor ? new Int32Array(this.faceColor) : null,
      priorityVal: this.priorityVal,
      texturedFaceCount: this.texturedFaceCount,
      texturedVertexA: new Int32Array(this.texturedVertexA),
      texturedVertexB: new Int32Array(this.texturedVertexB),
      texturedVertexC: new Int32Array(this.texturedVertexC),
      minX: this.minX,
      maxX: this.maxX,
      minZ: this.minZ,
      maxZ: this.maxZ,
      radius: this.radius,
      minY: this.minY,
      maxY: this.maxY,
      maxDepth: this.maxDepth,
      minDepth: this.minDepth,
      vertexLabel: this.vertexLabel ? new Int32Array(this.vertexLabel) : null,
      faceLabel: this.faceLabel ? new Int32Array(this.faceLabel) : null,
      labelVertices: null,
      labelFaces: null,
      vertexNormal: null,
      vertexNormalOriginal: null,
    };

    const newModel = new Model(modelTypeData);

    newModel.currentScaleX = this.currentScaleX;
    newModel.currentScaleY = this.currentScaleY;
    newModel.currentScaleZ = this.currentScaleZ;
    newModel.baseScaleX = this.baseScaleX;
    newModel.baseScaleY = this.baseScaleY;
    newModel.baseScaleZ = this.baseScaleZ;

    if (this.partMapping) {
      newModel.partMapping = {
        parts: this.partMapping.parts.map((part) => ({
          ...part,
          originalModel: part.originalModel.clone(),
          vertexMapping: new Map(part.vertexMapping),
        })),
        isNpcModel: this.partMapping.isNpcModel,
        npcId: this.partMapping.npcId,
      };
    }

    newModel.originalVertexX = new Int32Array(this.originalVertexX);
    newModel.originalVertexY = new Int32Array(this.originalVertexY);
    newModel.originalVertexZ = new Int32Array(this.originalVertexZ);

    if (this.originalFaceColor) {
      newModel.originalFaceColor = new Int32Array(this.originalFaceColor);
    } else if (this.faceColor) {
      newModel.originalFaceColor = new Int32Array(this.faceColor);
    }

    if (this.labelVertices) {
      newModel.labelVertices = this.labelVertices.map((group) =>
        group ? new Int32Array(group) : null
      );
    }
    if (this.labelFaces) {
      newModel.labelFaces = this.labelFaces.map((group) =>
        group ? new Int32Array(group) : null
      );
    }

    if (this.vertexNormal) {
      newModel.vertexNormal = this.vertexNormal.map((vn) => {
        if (vn) {
          const newVn = new VertexNormal();
          newVn.x = vn.x;
          newVn.y = vn.y;
          newVn.z = vn.z;
          newVn.w = vn.w;
          return newVn;
        }
        return null;
      });
    }
    if (this.vertexNormalOriginal) {
      newModel.vertexNormalOriginal = this.vertexNormalOriginal.map((vn) => {
        if (vn) {
          const newVn = new VertexNormal();
          newVn.x = vn.x;
          newVn.y = vn.y;
          newVn.z = vn.z;
          newVn.w = vn.w;
          return newVn;
        }
        return null;
      });
    }

    newModel.objRaise = this.objRaise;
    newModel.pickable = this.pickable;
    newModel.pickedFace = this.pickedFace;
    newModel.pickedFaceDepth = this.pickedFaceDepth;
    newModel.faceTextures.set(this.faceTextures);
    newModel.textureCoords.set(this.textureCoords);

    if (this.uvCoords) {
      for (let i = 0; i < newModel.faceCount; i++) {
        if (this.uvCoords[i] && newModel.uvCoords[i]) {
          newModel.uvCoords[i].set(this.uvCoords[i]);
        }
      }
    }

    newModel.hadOriginalFaceLabels = this.hadOriginalFaceLabels;
    newModel.hadOriginalVertexLabels = this.hadOriginalVertexLabels;
    newModel.hadOriginalFacePriorities = this.hadOriginalFacePriorities;
    newModel.hadOriginalFaceAlphas = this.hadOriginalFaceAlphas;
    newModel.hadOriginalFaceInfos = this.hadOriginalFaceInfos;

    return newModel;
  }
}
