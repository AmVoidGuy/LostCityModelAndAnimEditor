import AnimBase from "./AnimBase.js";
import AnimFrame from "./AnimFrame.js";
import Packet from "./Packet";
import Model from "./Model.js";

type RevisionId = 254 | 274 | 377;

interface SemanticPart {
    name: string;
    revisions: Partial<Record<RevisionId, number | number[]>>;
}

const SEMANTIC_PARTS: SemanticPart[] = [
    { name: 'base',                          revisions: { 254: 0,    274: 0,              377: 0               } },
    { name: 'head',                          revisions: { 254: 35,   274: 16,             377: 1               } },
    { name: 'top neck',                      revisions: { 254: 36,   274: 17,             377: 3               } },
    { name: 'bot neck',                      revisions: { 254: 1,    274: 18,             377: [2, 49]         } },
    { name: 'chest',                         revisions: { 254: 2,    274: 33,             377: 8               } },
    { name: 'midriff',                       revisions: { 254: 37,   274: 30,             377: 4               } },
    { name: 'weapon',                        revisions: { 254: 66,   274: 1,              377: 50              } },
    { name: 'weapon 51',                     revisions: { 254: 101,  274: 101,            377: 51              } },
    { name: 'weapon 53',                     revisions: { 254: 102,  274: 102,            377: 53              } },
    { name: 'weapon 54',                     revisions: { 254: 103,  274: 103,            377: 54              } },
    { name: 'weapon 55',                     revisions: { 254: 104,  274: 104,            377: 55              } },
    { name: 'weapon 61',                     revisions: { 254: 105,  274: 105,            377: 61              } },
    { name: 'weapon 62',                     revisions: { 254: 106,  274: 106,            377: 62              } },
    { name: 'weapon 63',                     revisions: { 254: 107,  274: 107,            377: 63              } },
    { name: 'weapon 64',                     revisions: { 254: 108,  274: 108,            377: 64              } },

    { name: 'left upper arm',                revisions: { 254: 15,   274: 7,              377: [18, 20, 21]    } },
    { name: 'left elbow',                    revisions: { 254: 11,   274: 3,              377: 17              } },
    { name: 'left forearm',                  revisions: { 254: 10,   274: 2,              377: 19              } },
    { name: 'left fist',                     revisions: { 254: 17,   274: 15,             377: 27              } },
    { name: 'right upper arm',               revisions: { 254: 12,   274: 4,              377: [24, 25, 26]    } },
    { name: 'right elbow',                   revisions: { 254: 13,   274: 5,              377: 23              } },
    { name: 'right forearm',                 revisions: { 254: 14,   274: 6,              377: 22              } },
    { name: 'right fist',                    revisions: { 254: 16,   274: 14,             377: 28              } },

    { name: 'front hip',                     revisions: { 254: 18,   274: 19,             377: 30              } },
    { name: 'full hip',                      revisions: { 254: 19,   274: 20,             377: 29              } },
    { name: 'back hip',                      revisions: { 254: 20,   274: 21,             377: 5               } },
    { name: 'right hip',                     revisions: { 254: [23, 45, 47],   274: [24, 62, 64],   377: 40    } },
    { name: 'left hip',                      revisions: { 254: [24, 48, 61],   274: [25, 65, 78],   377: 42    } },
    { name: 'butt',                          revisions: { 254: 21,   274: 22,             377: 41              } },
    { name: 'groin',                         revisions: { 254: 22,   274: 23,             377: 39              } },
    { name: 'right thigh',                   revisions: { 254: 44,   274: 61,             377: 43              } },
    { name: 'left thigh',                    revisions: { 254: 46,   274: 63,             377: 44              } },
    { name: 'top right knee',                revisions: { 254: 27,   274: 27,             377: 35              } },
    { name: 'bot right knee',                revisions: { 254: 25,   274: 26,             377: 37              } },
    { name: 'right knee pad',                revisions: { 254: 42,   274: 59,             377: 36              } },
    { name: 'top left knee',                 revisions: { 254: 30,   274: 29,             377: 34              } },
    { name: 'bot left knee',                 revisions: { 254: 28,   274: 28,             377: 31              } },
    { name: 'left knee pad',                 revisions: { 254: 43,   274: 60,             377: 33              } },
    { name: 'top right foot',                revisions: { 254: 26,   274: 12,             377: 38              } },
    { name: 'right foot',                    revisions: { 254: 32,   274: 9,              377: 46              } },
    { name: 'right heel',                    revisions: { 254: 31,   274: 8,              377: 47              } },
    { name: 'top left foot',                 revisions: { 254: 29,   274: 13,             377: 32              } },
    { name: 'left foot',                     revisions: { 254: 34,   274: 11,             377: 45              } },
    { name: 'left heel',                     revisions: { 254: 33,   274: 10,             377: 48              } },
    { name: 'female hair',                   revisions: { 254: [40, 62], 274: [58, 79],   377: 94              } },
    { name: 'apron chest',                   revisions: { 254: 38,   274: 31,             377: 6               } },
    { name: 'apron bottom',                  revisions: { 254: 39,   274: 32,             377: 7               } },
    { name: 'skirt upper front+back center', revisions: { 254: [49, 50], 274: [66, 67],   377: 79              } },
    { name: 'skirt middle',                  revisions: { 254: [53, 54, 56], 274: [70, 71, 73],   377: [34, 35, 80, 81]} },
    { name: 'skirt lower',                   revisions: { 254: [52, 55, 57], 274: [69, 72, 74],   377: [31, 37, 82, 83]} },
    { name: 'skirt bottom',                  revisions: { 254: [51, 58, 59], 274: [68, 75, 76],   377: [76, 77]} },
    { name: 'skirt short bottom',            revisions: { 254: 60,   274: 77,             377: 57              } },
    { name: 'cape top',                      revisions: { 254: 3,    274: 34,             377: [10, 11]        } },
    { name: 'cape upper',                    revisions: { 254: 4,    274: 35,             377: 9               } },
    { name: 'cape middle',                   revisions: { 254: 7,    274: 36,             377: 14              } },
    { name: 'cape lower',                    revisions: { 254: 6,    274: 37,             377: 13              } },
    { name: 'cape bot',                      revisions: { 254: 5,    274: 38,             377: 12              } },
    { name: 'extra cape 1',                  revisions: { 254: 8,    274: 56,             377: 15              } }, // seen on legends cape
    { name: 'extra cape 2',                  revisions: { 254: 9,    274: 57,             377: 16              } }, // seen on legends cape

    // unlabeled
    { name: 'misc',                          revisions: { 254: 255,  274: 255,            377: 255             } },

    { name: '377 unknown or added 2',        revisions: { 254: 109,  274: 109,            377: 52              } },
    { name: '377 unknown or added 6',        revisions: { 254: 110,  274: 110,            377: 56              } },
    { name: '377 unknown or added 7',        revisions: { 254: 111,  274: 111,            377: 58              } },
    { name: '377 unknown or added 8',        revisions: { 254: 112,  274: 112,            377: 59              } },
    { name: '377 unknown or added 9',        revisions: { 254: 113,  274: 113,            377: 60              } },
    { name: '377 unknown or added 14',       revisions: { 254: 114,  274: 114,            377: 65              } },
    { name: '377 unknown or added 15',       revisions: { 254: 115,  274: 115,            377: 66              } },
    { name: '377 unknown or added 16',       revisions: { 254: 116,  274: 116,            377: 67              } },
    { name: '377 unknown or added 17',       revisions: { 254: 117,  274: 117,            377: 68              } },
    { name: '377 unknown or added 18',       revisions: { 254: 118,  274: 118,            377: 69              } },
    { name: '377 unknown or added 19',       revisions: { 254: 119,  274: 119,            377: 70              } },
    { name: '377 unknown or added 20',       revisions: { 254: 120,  274: 120,            377: 71              } },
    { name: '377 unknown or added 21',       revisions: { 254: 121,  274: 121,            377: 72              } },
    { name: '377 unknown or added 22',       revisions: { 254: 122,  274: 122,            377: 73              } },
    { name: '377 unknown or added 23',       revisions: { 254: 123,  274: 123,            377: 74              } },
    { name: '377 unknown or added 24',       revisions: { 254: 124,  274: 124,            377: 75              } },
    { name: '377 unknown or added 25',       revisions: { 254: 125,  274: 125,            377: 78              } },
    { name: '377 unknown or added 26',       revisions: { 254: 126,  274: 126,            377: 84              } },
    { name: '377 unknown or added 27',       revisions: { 254: 127,  274: 127,            377: 85              } },
    { name: '377 unknown or added 28',       revisions: { 254: 128,  274: 128,            377: 86              } },
    { name: '377 unknown or added 29',       revisions: { 254: 129,  274: 129,            377: 87              } },
    { name: '377 unknown or added 30',       revisions: { 254: 130,  274: 130,            377: 88              } },
    { name: '377 unknown or added 31',       revisions: { 254: 131,  274: 131,            377: 89              } },
    { name: '377 unknown or added 32',       revisions: { 254: 132,  274: 132,            377: 90              } },
    { name: '377 unknown or added 33',       revisions: { 254: 133,  274: 133,            377: 91              } },
    { name: '377 unknown or added 34',       revisions: { 254: 134,  274: 134,            377: 92              } },
    { name: '377 unknown or added 35',       revisions: { 254: 135,  274: 135,            377: 93              } },
];

function getRevisionLabels(part: SemanticPart, revId: RevisionId): number[] {
    const v = part.revisions[revId];
    if (v === undefined) return [];
    return Array.isArray(v) ? v : [v];
}

export default class AnimSet {
    static parseRevisionDir(revisionDir: string): { from: RevisionId; to: RevisionId } {
      const match = revisionDir.match(/^(\d+)to(\d+)$/);
      if (!match) throw new Error(`Invalid revisionDir format: "${revisionDir}". Expected e.g. "377to274".`);

      const from = parseInt(match[1]) as RevisionId;
      const to   = parseInt(match[2]) as RevisionId;

      const valid: RevisionId[] = [254, 274, 377];
      if (!valid.includes(from)) throw new Error(`Unsupported source revision: ${from}`);
      if (!valid.includes(to))   throw new Error(`Unsupported target revision: ${to}`);

      return { from, to };
  }

  static buildSingleMap(from: RevisionId, to: RevisionId): Map<number, number> {
      const map = new Map<number, number>();

      for (const part of SEMANTIC_PARTS) {
          const labelsFrom = getRevisionLabels(part, from);
          const labelsTo   = getRevisionLabels(part, to);

          if (labelsFrom.length === 0 || labelsTo.length === 0) continue;

          const target = labelsTo[0];
          for (const src of labelsFrom) {
              map.set(src, target);
          }
      }

      return map;
  }

  static buildLabelMap(from: RevisionId, to: RevisionId): Map<number, number[]> {
      const map = new Map<number, number[]>();

      for (const part of SEMANTIC_PARTS) {
          const labelsFrom = getRevisionLabels(part, from);
          const labelsTo   = getRevisionLabels(part, to);

          if (labelsFrom.length === 0 || labelsTo.length === 0) continue;

          for (const src of labelsFrom) {
              const existing = map.get(src);
              if (existing) {
                  for (const tgt of labelsTo) {
                      if (!existing.includes(tgt)) existing.push(tgt);
                  }
              } else {
                  map.set(src, [...labelsTo]);
              }
          }
      }

      return map;
  }

  static applyModelRelabel(model: Model, from: RevisionId, to: RevisionId) {
      const map = this.buildSingleMap(from, to);

      const remapLabelArray = (labelArray: (Int32Array | null)[] | null) => {
          if (!labelArray) return null;

          const newLabelArray: (Int32Array | null)[] = new Array(256).fill(null);
          const tempGroups = new Map<number, number[]>();

          for (let oldId = 0; oldId < labelArray.length; oldId++) {
              const vertices = labelArray[oldId];
              if (!vertices) continue;

              const newId = map.has(oldId) ? map.get(oldId)! : oldId;

              if (!tempGroups.has(newId)) tempGroups.set(newId, []);
              tempGroups.get(newId)!.push(...Array.from(vertices));
          }

          tempGroups.forEach((indices, newId) => {
              newLabelArray[newId] = new Int32Array(indices);
          });

          return newLabelArray;
      };

      if (model.labelVertices) {
          model.labelVertices = remapLabelArray(model.labelVertices);
          model.hadOriginalVertexLabels = true;
      }
  }

  static remapBaseLabels(sourceBaseId: number, from: RevisionId, to: RevisionId): number | null {
      const sourceBase = AnimBase.instances[sourceBaseId];
      if (!sourceBase || !sourceBase.animTypes || !sourceBase.animLabels) {
          console.error(`remapLabels: no valid AnimBase at id ${sourceBaseId}`);
          return null;
      }

      const labelMap = this.buildLabelMap(from, to);

      const newLabels: (Uint8Array | null)[] = new Array(sourceBase.animLength).fill(null);

      for (let groupIdx = 0; groupIdx < sourceBase.animLength; groupIdx++) {
          const srcLabels = sourceBase.animLabels[groupIdx];

          if (!srcLabels || srcLabels.length === 0) {
              newLabels[groupIdx] = new Uint8Array(0);
              continue;
          }

          const translated: number[] = [];
          const seen = new Set<number>();

          for (const srcLbl of srcLabels) {
              const mappedLabels = labelMap.get(srcLbl);
              if (mappedLabels) {
                  for (const tgtLbl of mappedLabels) {
                      if (!seen.has(tgtLbl)) {
                          seen.add(tgtLbl);
                          translated.push(tgtLbl);
                      }
                  }
              }
          }

          newLabels[groupIdx] = new Uint8Array(translated);
      }

      sourceBase.animLabels = newLabels;

      return sourceBaseId;
  }

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

static async importWithConflictCheck(fileData: Uint8Array) {
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

  static exportAsLegacyAnim(baseId: number): Uint8Array {
    const base = AnimBase.instances[baseId];
    const frames = AnimFrame.getFramesByBaseId(baseId).sort((a, b) => a.id - b.id);

    if (!base || frames.length === 0) throw new Error("Base or frames missing for export");

    const meta = new Packet(new Uint8Array(2 + (frames.length * 3)));
    const flags = new Packet(new Uint8Array(frames.length * base.animLength));
    const values = new Packet(new Uint8Array(frames.length * base.animLength * 6));
    const delays = new Packet(new Uint8Array(frames.length));

    meta.p2(frames.length);

    const mapping: Record<number, number> = {};

    for (let fIdx = 0; fIdx < frames.length; fIdx++) {
      const frame = frames[fIdx];
      const legacyId = fIdx;
      mapping[frame.id] = legacyId;

      meta.p2(legacyId); 
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

    const basePack = new Packet(new Uint8Array(1000000));
    basePack.p1(base.animLength);
    for (let i = 0; i < base.animLength; i++) basePack.p1(base.animTypes![i]);
    for (let i = 0; i < base.animLength; i++) {
      basePack.p1(base.animLabels![i]!.length);
      for (const l of base.animLabels![i]!) basePack.p1(l);
    }

    if (values.pos > 65535 || flags.pos > 65535) {
        console.warn("WARNING: This animation is too large for the Legacy format. It may corrupt upon import.");
    }

    const totalSize = meta.pos + flags.pos + values.pos + delays.pos + basePack.pos + 8;
    const total = new Packet(new Uint8Array(totalSize));
    
    const mSize = meta.pos; total.pdata(meta.data, 0, meta.pos);
    const flSize = flags.pos; total.pdata(flags.data, 0, flags.pos);
    const vSize = values.pos; total.pdata(values.data, 0, values.pos);
    const dSize = delays.pos; total.pdata(delays.data, 0, delays.pos);
    total.pdata(basePack.data, 0, basePack.pos);

    total.p2(mSize - 2); 
    total.p2(flSize); 
    total.p2(vSize); 
    total.p2(dSize);

    console.log("Animation remapped for Legacy Export:");
    console.table(mapping);

    return total.data.slice(0, total.pos);
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