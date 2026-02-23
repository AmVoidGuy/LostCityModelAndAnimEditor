import AnimBase from "./AnimBase.js";
import AnimFrame from "./AnimFrame.js";
import Packet from "./Packet";

export default class AnimSet {

  static remapSeqConfig(rawText: string, mapping: Map<number, number>): string {
    let updatedText = rawText;
    const sortedOldIds = Array.from(mapping.keys()).sort((a, b) => b - a);
    
    for (const oldId of sortedOldIds) {
      const newId = mapping.get(oldId);
      const regex = new RegExp(`anim_${oldId}\\b`, 'g');
      updatedText = updatedText.replace(regex, `anim_${newId}`);
    }
    return updatedText;
  }

static async importWithConflictCheck(fileData: Uint8Array, originalBaseId: number) {
    const footer = new Packet(fileData);
    footer.pos = fileData.length - 8;
    const metaSize = footer.g2();
    const flagSize = footer.g2();
    const valuesSize = footer.g2();
    const delaysSize = footer.g2();

    let offset = 0;
    const metaPacket = new Packet(fileData.subarray(offset, offset + metaSize + 2));
    offset += metaSize + 2;
    const flagPacket = new Packet(fileData.subarray(offset, offset + flagSize));
    offset += flagSize;
    const valuePacket = new Packet(fileData.subarray(offset, offset + valuesSize));
    offset += valuesSize;
    const delayPacket = new Packet(fileData.subarray(offset, offset + delaysSize));
    offset += delaysSize;
    
    const basePacket = new Packet(fileData.subarray(offset, fileData.length - 8));

    const frameCount = metaPacket.g2();

    const targetBaseId = AnimBase.getNextAvailableId();
    let nextFrameId = AnimFrame.getNextAvailableId();
    const frameMapping = new Map<number, number>();

    const animBase = AnimBase.convertFromData377(targetBaseId, basePacket);

    const existingBase = AnimBase.instances[originalBaseId];
    if (existingBase && existingBase.animLabels && animBase.animLabels) {
        console.log(`%c Conflict detected for Base ${originalBaseId}. Syncing labels to new Base ${targetBaseId}...`, "color: orange");
        
        const minGroups = Math.min(animBase.animLength, existingBase.animLength);
        for (let i = 0; i < minGroups; i++) {
            if (animBase.animTypes![i] === existingBase.animTypes![i]) {
                animBase.animLabels[i] = new Uint8Array(existingBase.animLabels[i]!);
            }
        }
    }

    const tempGroups = new Array<number>(500);
    const tempX = new Array<number>(500);
    const tempY = new Array<number>(500);
    const tempZ = new Array<number>(500);

    for (let i = 0; i < frameCount; i++) {
      const originalFrameId = metaPacket.g2();
      const newFrameId = nextFrameId++;

      frameMapping.set(originalFrameId, newFrameId);

      const animFrame = new AnimFrame();
      animFrame.id = newFrameId;
      animFrame.frameDelay = delayPacket.g1();
      animFrame.base = animBase;

      const transformGroupCount = metaPacket.g1();
      let lastGroup = -1;
      let currentTransformIndex = 0;

      for (let j = 0; j < transformGroupCount; j++) {
        const transformFlags = flagPacket.g1();

        if (transformFlags > 0) {
          if (animBase.animTypes![j] !== 0) {
            for (let k = j - 1; k > lastGroup; k--) {
              if (animBase.animTypes![k] === 0) {
                tempGroups[currentTransformIndex] = k;
                tempX[currentTransformIndex] = 0;
                tempY[currentTransformIndex] = 0;
                tempZ[currentTransformIndex] = 0;
                currentTransformIndex++;
                break;
              }
            }
          }

          tempGroups[currentTransformIndex] = j;
          let defaultValue = animBase.animTypes![j] === 3 ? 128 : 0;

          tempX[currentTransformIndex] = (transformFlags & 0x1) !== 0 ? valuePacket.gsmarts() : defaultValue;
          tempY[currentTransformIndex] = (transformFlags & 0x2) !== 0 ? valuePacket.gsmarts() : defaultValue;
          tempZ[currentTransformIndex] = (transformFlags & 0x4) !== 0 ? valuePacket.gsmarts() : defaultValue;

          lastGroup = j;
          currentTransformIndex++;
        }
      }

      animFrame.frameLength = currentTransformIndex;
      animFrame.bases = new Int32Array(currentTransformIndex);
      animFrame.x = new Int32Array(currentTransformIndex);
      animFrame.y = new Int32Array(currentTransformIndex);
      animFrame.z = new Int32Array(currentTransformIndex);

      for (let l = 0; l < currentTransformIndex; l++) {
        animFrame.bases[l] = tempGroups[l];
        animFrame.x[l] = tempX[l];
        animFrame.y[l] = tempY[l];
        animFrame.z[l] = tempZ[l];
      }

      AnimFrame.instances[newFrameId] = animFrame;
    }

    return {
      baseId: targetBaseId,
      mapping: frameMapping,
      frameCount: frameCount
    };
}

  static async importFromData(fileData: Uint8Array) {
    const footer = new Packet(fileData);
    footer.pos = fileData.length - 8;
    const metaSize = footer.g2();
    const flagSize = footer.g2();
    const valuesSize = footer.g2();
    const delaySize = footer.g2();

    const metaData = new Packet(fileData);
    metaData.pos = 0;
    const frameCount = metaData.g2();

    const baseIdOffset = AnimBase.getNextAvailableId();
    const frameIdOffset = AnimFrame.getNextAvailableId();

    const flagData = new Packet(fileData);
    flagData.pos = metaSize;
    const valueData = new Packet(fileData);
    valueData.pos = flagData.pos + flagSize;
    const delayData = new Packet(fileData);
    delayData.pos = valueData.pos + valuesSize;
    const animBaseData = new Packet(fileData);
    animBaseData.pos = delayData.pos + delaySize;

    const animBase = AnimBase.convertFromData377(baseIdOffset, animBaseData);

    const tempGroups = new Int32Array(500);
    const tempX = new Int32Array(500);
    const tempY = new Int32Array(500);
    const tempZ = new Int32Array(500);

    for (let i = 0; i < frameCount; i++) {
      const originalFrameId = metaData.g2();
      const newFrameId = originalFrameId + frameIdOffset;

      const frame = new AnimFrame();
      frame.id = newFrameId;
      frame.base = animBase;
      frame.frameDelay = delayData.g1();

      const groupCount = metaData.g1();
      let lastGroup = -1;
      let current = 0;

      for (let j = 0; j < groupCount; j++) {
        const flags = flagData.g1();
        if (flags > 0) {
          if (animBase.animTypes![j] !== 0) {
            for (let k = j - 1; k > lastGroup; k--) {
              if (animBase.animTypes![k] === 0) {
                tempGroups[current] = k;
                tempX[current] = 0;
                tempY[current] = 0;
                tempZ[current] = 0;
                current++;
                break;
              }
            }
          }
          tempGroups[current] = j;
          const def = animBase.animTypes![j] === 3 ? 128 : 0;
          tempX[current] = (flags & 1) ? valueData.gsmarts() : def;
          tempY[current] = (flags & 2) ? valueData.gsmarts() : def;
          tempZ[current] = (flags & 4) ? valueData.gsmarts() : def;
          lastGroup = j;
          current++;
        }
      }

      frame.frameLength = current;
      frame.bases = tempGroups.slice(0, current);
      frame.x = tempX.slice(0, current);
      frame.y = tempY.slice(0, current);
      frame.z = tempZ.slice(0, current);

      AnimFrame.instances[newFrameId] = frame;
    }

    return { baseId: baseIdOffset, firstFrame: frameIdOffset, count: frameCount };
  }

  static exportAnimSet(baseId: number): Uint8Array {
    const base = AnimBase.instances[baseId];
    const frames = AnimFrame.getFramesByBaseId(baseId).sort((a, b) => a.id - b.id);

    if (!base || frames.length === 0) throw new Error("Base or frames missing for export");

    const meta = new Packet(new Uint8Array(2 + (frames.length * 3)));
    const flags = new Packet(new Uint8Array(frames.length * base.animLength));
    const values = new Packet(new Uint8Array(frames.length * base.animLength * 6));
    const delays = new Packet(new Uint8Array(frames.length));

    meta.p2(frames.length);

    for (const frame of frames) {
      meta.p2(frame.id); 
      meta.p1(base.animLength);

      for (let i = 0; i < base.animLength; i++) {
        const idx = frame.bases ? Array.from(frame.bases).indexOf(i) : -1;
        let f = 0;
        if (idx !== -1) {
          const def = base.animTypes![i] === 3 ? 128 : 0;
          if (frame.x![idx] !== def) { f |= 1; values.psmarts(frame.x![idx]); }
          if (frame.y![idx] !== def) { f |= 2; values.psmarts(frame.y![idx]); }
          if (frame.z![idx] !== def) { f |= 4; values.psmarts(frame.z![idx]); }
        }
        flags.p1(f);
      }
      delays.p1(frame.frameDelay);
    }

    const basePack = new Packet(new Uint8Array(100000000));
    basePack.p1(base.animLength);
    for (let i = 0; i < base.animLength; i++) basePack.p1(base.animTypes![i]);
    for (let i = 0; i < base.animLength; i++) {
      basePack.p1(base.animLabels![i]!.length);
      for (const l of base.animLabels![i]!) basePack.p1(l);
    }

    const total = new Packet(new Uint8Array(meta.pos + flags.pos + values.pos + delays.pos + basePack.pos + 8));
    const mSize = meta.pos; total.pdata(meta.data, 0, meta.pos);
    const flSize = flags.pos; total.pdata(flags.data, 0, flags.pos);
    const vSize = values.pos; total.pdata(values.data, 0, values.pos);
    const dSize = delays.pos; total.pdata(delays.data, 0, delays.pos);
    total.pdata(basePack.data, 0, basePack.pos);

    total.p2(mSize - 2); total.p2(flSize); total.p2(vSize); total.p2(dSize);

    return total.data.slice(0, total.pos);
  }

  static convertFromData(baseId: number, fileData: Uint8Array) {
    const footer = new Packet(fileData);
    footer.pos = fileData.length - 8;
    const metaDataSize = footer.g2();
    const flagSize = footer.g2();
    const valuesSize = footer.g2();
    const delaysSize = footer.g2();

    const metaData = new Packet(fileData);
    metaData.pos = 0;
    const frameCount = metaData.g2();

    const flagData = new Packet(fileData);
    flagData.pos = metaData.pos + metaDataSize;

    const valueData = new Packet(fileData);
    valueData.pos = flagData.pos + flagSize;

    const delayData = new Packet(fileData);
    delayData.pos = valueData.pos + valuesSize;

    const animBaseData = new Packet(fileData);
    animBaseData.pos = delayData.pos + delaysSize;

    const animBase = AnimBase.convertFromData377(baseId, animBaseData);

    const tempGroups = new Array<number>(500);
    const tempX = new Array<number>(500);
    const tempY = new Array<number>(500);
    const tempZ = new Array<number>(500);

    for (let i = 0; i < frameCount; i++) {
      const frameIndex = metaData.g2();

      const animFrame = new AnimFrame();
      
      animFrame.id = frameIndex;
      animFrame.frameDelay = delayData.g1(); 
      animFrame.base = animBase;

      const transformGroupCount = metaData.g1();
      let lastGroup = -1;
      let tempIndex = 0;

      for (let j = 0; j < transformGroupCount; j++) {
        const transformFlags = flagData.g1();

        if (transformFlags > 0) {
          if (animBase.animTypes![j] !== 0) {
            for (let k = j - 1; k > lastGroup; k--) {
              if (animBase.animTypes![k] === 0) {
                tempGroups[tempIndex] = k;
                tempX[tempIndex] = 0;
                tempY[tempIndex] = 0;
                tempZ[tempIndex] = 0;
                tempIndex++;
                break;
              }
            }
          }

          tempGroups[tempIndex] = j;
          let defaultValue = 0;
          if (animBase.animTypes![tempGroups[tempIndex]] === 3) {
            defaultValue = 128;
          }

          if ((transformFlags & 0x1) == 0) {
            tempX[tempIndex] = defaultValue;
          } else {
            tempX[tempIndex] = valueData.gsmarts();
          }

          if ((transformFlags & 0x2) == 0) {
            tempY[tempIndex] = defaultValue;
          } else {
            tempY[tempIndex] = valueData.gsmarts();
          }

          if ((transformFlags & 0x4) == 0) {
            tempZ[tempIndex] = defaultValue;
          } else {
            tempZ[tempIndex] = valueData.gsmarts();
          }

          lastGroup = j;
          tempIndex++;
        }
      }

      animFrame.frameLength = tempIndex;
      animFrame.bases = new Int32Array(tempIndex);
      animFrame.x = new Int32Array(tempIndex);
      animFrame.y = new Int32Array(tempIndex);
      animFrame.z = new Int32Array(tempIndex);

      for (let l = 0; l < tempIndex; l++) {
        animFrame.bases[l] = tempGroups[l];
        animFrame.x[l] = tempX[l];
        animFrame.y[l] = tempY[l];
        animFrame.z[l] = tempZ[l];
      }
      AnimFrame.instances[frameIndex] = animFrame;
    }
  }
}