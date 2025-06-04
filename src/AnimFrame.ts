import AnimBase from "./AnimBase";
import Packet from "./Packet";

export default class AnimFrame {
  static instances: AnimFrame[] = [];

  id: number = 0;
  frameDelay: number = 0;
  base: AnimBase | null = null;
  frameLength: number = 0;
  bases: Int32Array | null = null;
  x: Int32Array | null = null;
  y: Int32Array | null = null;
  z: Int32Array | null = null;

  private originalGroupCount: number | null = null;
  private isModified: boolean = false;

  static convertFromData(id: number, fileData: Packet): AnimFrame {
    fileData.pos = fileData.data.length - 8;
    const headLength = fileData.g2();
    const tran1Length = fileData.g2();
    const tran2Length = fileData.g2();
    const delLength = fileData.g2();

    fileData.pos = 0;

    const p_headData = new Uint8Array(headLength);
    fileData.gdata(p_headData, 0, headLength);
    const headSectionPacket = new Packet(p_headData);

    const p_tran1Data = new Uint8Array(tran1Length);
    fileData.gdata(p_tran1Data, 0, tran1Length);
    const tran1SectionPacket = new Packet(p_tran1Data);

    const p_tran2Data = new Uint8Array(tran2Length);
    fileData.gdata(p_tran2Data, 0, tran2Length);
    const tran2SectionPacket = new Packet(p_tran2Data);

    const p_delData = new Uint8Array(delLength);
    fileData.gdata(p_delData, 0, delLength);
    const delSectionPacket = new Packet(p_delData);

    const frame = new AnimFrame();
    frame.isModified = false;

    headSectionPacket.g2();
    AnimFrame.instances[id] = frame;
    frame.id = id;
    frame.frameDelay = delSectionPacket.g1();
    const baseId = headSectionPacket.g2();
    const base = AnimBase.instances[baseId];
    base.id = baseId;

    if (!base) {
      console.error(`AnimFrame ${id}: Missing AnimBase with id ${baseId}`);
      throw new Error(`AnimFrame ${id}: Missing AnimBase with id ${baseId}`);
    }

    if (!base.animTypes) {
      console.error(`AnimFrame ${id}: AnimBase ${baseId} has no animTypes`);
      throw new Error(`AnimFrame ${id}: AnimBase ${baseId} has no animTypes`);
    }

    const groupCountFromFile = headSectionPacket.g1();
    frame.originalGroupCount = groupCountFromFile;
    const maxPossibleTempLength = groupCountFromFile * 2;
    const labels = new Int32Array(maxPossibleTempLength);
    const x = new Int32Array(maxPossibleTempLength);
    const y = new Int32Array(maxPossibleTempLength);
    const z = new Int32Array(maxPossibleTempLength);

    let lastGroup = -1;
    let current = 0;

    for (let j = 0; j < groupCountFromFile; j++) {
      const flags = tran1SectionPacket.g1();

      if (flags > 0) {
        if (j < base.animTypes.length && base.animTypes[j] !== 0) {
          for (let group = j - 1; group > lastGroup; group--) {
            if (group < base.animTypes.length && base.animTypes[group] === 0) {
              if (current >= maxPossibleTempLength) {
                throw new Error(
                  `AnimFrame ${id}: Exceeded temp array capacity for type 0 group insert.`
                );
              }
              labels[current] = group;
              x[current] = 0;
              y[current] = 0;
              z[current] = 0;
              current++;
              break;
            }
          }
        }

        if (current >= maxPossibleTempLength) {
          throw new Error(
            `AnimFrame ${id}: Exceeded temp array capacity for main group.`
          );
        }
        labels[current] = j;
        let defaultValue = 0;
        if (j < base.animTypes.length && base.animTypes[j] === 3) {
          defaultValue = 128;
        }

        if ((flags & 1) === 0) {
          x[current] = defaultValue;
        } else {
          x[current] = tran2SectionPacket.gsmarts();
        }

        if ((flags & 2) === 0) {
          y[current] = defaultValue;
        } else {
          y[current] = tran2SectionPacket.gsmarts();
        }

        if ((flags & 4) === 0) {
          z[current] = defaultValue;
        } else {
          z[current] = tran2SectionPacket.gsmarts();
        }

        lastGroup = j;
        current++;
      }
    }

    frame.base = base;
    frame.frameLength = current;

    if (current > 0) {
      frame.bases = new Int32Array(current);
      frame.x = new Int32Array(current);
      frame.y = new Int32Array(current);
      frame.z = new Int32Array(current);

      for (let k = 0; k < current; k++) {
        frame.bases[k] = labels[k];
        frame.x[k] = x[k];
        frame.y[k] = y[k];
        frame.z[k] = z[k];
      }
    } else {
      frame.bases = null;
      frame.x = null;
      frame.y = null;
      frame.z = null;
    }
    return frame;
  }

  exportToFrame(): Uint8Array | null {
    if (!this.base || !this.base.animTypes) {
      console.error(
        `AnimFrame ${this.id}: Cannot export, AnimBase or its animTypes are missing.`
      );
      return null;
    }

    const dataBlocks: Uint8Array[] = [];

    let groupCountForExport: number;
    if (!this.isModified && this.originalGroupCount !== null) {
      groupCountForExport = this.originalGroupCount;
    } else {
      groupCountForExport = this.base.animTypes.length;
    }

    const headPacket = new Packet(new Uint8Array(2 + 2 + 1));
    headPacket.p2(this.id);
    headPacket.p2(this.base.id);
    headPacket.p1(groupCountForExport);
    const headData = headPacket.data.slice(0, headPacket.pos);
    const headLength = headData.length;
    dataBlocks.push(headData);

    const estimatedTran2Size =
      (this.frameLength > 0 ? this.frameLength : 1) * 3 * 5;
    const tran1Packet = new Packet(new Uint8Array(groupCountForExport));
    const tran2Packet = new Packet(new Uint8Array(estimatedTran2Size));

    for (let i = 0; i < groupCountForExport; i++) {
      let flags = 0;
      const transformIndex =
        this.bases && this.frameLength > 0 ? this.bases.indexOf(i) : -1;

      if (transformIndex !== -1 && this.x && this.y && this.z) {
        const currentX = this.x[transformIndex];
        const currentY = this.y[transformIndex];
        const currentZ = this.z[transformIndex];

        let animTypeForGroupI = 0;
        if (i < this.base.animTypes.length) {
          animTypeForGroupI = this.base.animTypes[i];
        }

        const defaultValue = animTypeForGroupI === 3 ? 128 : 0;

        if (currentX !== defaultValue) {
          flags |= 1;
          tran2Packet.psmarts(currentX);
        }
        if (currentY !== defaultValue) {
          flags |= 2;
          tran2Packet.psmarts(currentY);
        }
        if (currentZ !== defaultValue) {
          flags |= 4;
          tran2Packet.psmarts(currentZ);
        }
      }
      tran1Packet.p1(flags);
    }

    const tran1Data = tran1Packet.data.slice(0, tran1Packet.pos);
    const tran1Length = tran1Data.length;
    dataBlocks.push(tran1Data);

    const tran2Data = tran2Packet.data.slice(0, tran2Packet.pos);
    const tran2Length = tran2Data.length;
    dataBlocks.push(tran2Data);

    const delPacket = new Packet(new Uint8Array(1));
    delPacket.p1(this.frameDelay);
    const delData = delPacket.data.slice(0, delPacket.pos);
    const delLength = delData.length;
    dataBlocks.push(delData);

    let totalDataBlockLength = 0;
    for (const block of dataBlocks) {
      totalDataBlockLength += block.length;
    }

    const footerPacket = new Packet(new Uint8Array(8));
    footerPacket.p2(headLength);
    footerPacket.p2(tran1Length);
    footerPacket.p2(tran2Length);
    footerPacket.p2(delLength);
    const footerData = footerPacket.data.slice(0, footerPacket.pos);

    const finalFrameData = new Uint8Array(
      totalDataBlockLength + footerData.length
    );
    let currentOffset = 0;

    for (const block of dataBlocks) {
      finalFrameData.set(block, currentOffset);
      currentOffset += block.length;
    }

    finalFrameData.set(footerData, currentOffset);

    return finalFrameData;
  }

  addTransform(baseIndex: number, opX: number, opY: number, opZ: number): void {
    const newLength = this.frameLength + 1;

    const newBases = new Int32Array(newLength);
    const newX = new Int32Array(newLength);
    const newY = new Int32Array(newLength);
    const newZ = new Int32Array(newLength);

    if (this.frameLength > 0 && this.bases && this.x && this.y && this.z) {
      for (let i = 0; i < this.frameLength; i++) {
        newBases[i] = this.bases[i];
        newX[i] = this.x[i];
        newY[i] = this.y[i];
        newZ[i] = this.z[i];
      }
    }

    newBases[this.frameLength] = baseIndex;
    newX[this.frameLength] = opX;
    newY[this.frameLength] = opY;
    newZ[this.frameLength] = opZ;

    this.bases = newBases;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.frameLength = newLength;
    this.isModified = true;
  }

  deleteTransform(transformIndex: number): boolean {
    if (transformIndex < 0 || transformIndex >= this.frameLength) {
      console.error(
        `AnimFrame ${this.id}.deleteTransform: Invalid transformIndex ${transformIndex}. frameLength is ${this.frameLength}.`
      );
      return false;
    }

    const newLength = this.frameLength - 1;

    if (newLength === 0) {
      this.bases = null;
      this.x = null;
      this.y = null;
      this.z = null;
    } else {
      const newBases = new Int32Array(newLength);
      const newX = new Int32Array(newLength);
      const newY = new Int32Array(newLength);
      const newZ = new Int32Array(newLength);

      let currentIndex = 0;
      for (let i = 0; i < this.frameLength; i++) {
        if (i === transformIndex) {
          continue;
        }
        newBases[currentIndex] = this.bases![i];
        newX[currentIndex] = this.x![i];
        newY[currentIndex] = this.y![i];
        newZ[currentIndex] = this.z![i];
        currentIndex++;
      }
      this.bases = newBases;
      this.x = newX;
      this.y = newY;
      this.z = newZ;
    }

    this.frameLength = newLength;
    this.isModified = true;
    return true;
  }
}
