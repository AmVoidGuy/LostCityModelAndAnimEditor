import Packet from "./Packet";
import { TypedArray1d } from "./Arrays.js";

export default class AnimBase {
  static instances: AnimBase[] = [];

  static isIdTaken(id: number): boolean {
      return !!this.instances[id];
  }
  static getNextAvailableId(): number {
      const keys = Object.keys(this.instances).map(Number);
      return keys.length === 0 ? 0 : Math.max(...keys) + 1;
  }

  static convertFromData(id: number, fileData: Packet) {
    fileData.pos = fileData.data.length - 4;
    const typeSectionLength = fileData.g2();
    const labelSectionLength = fileData.g2();

    fileData.pos = 0;

    const transformTypesData = new Uint8Array(typeSectionLength);
    fileData.gdata(transformTypesData, 0, typeSectionLength);

    const groupLabelsData = new Uint8Array(labelSectionLength);
    fileData.gdata(groupLabelsData, 0, labelSectionLength);

    const typePacket = new Packet(transformTypesData);
    const labelPacket = new Packet(groupLabelsData);

    const instance = new AnimBase();
    instance.animLength = typeSectionLength;

    const transformTypes = new Uint8Array(instance.animLength);
    const groupLabels = new TypedArray1d<Uint8Array | null>(
      instance.animLength,
      null
    );

    for (let j = 0; j < instance.animLength; j++) {
      transformTypes[j] = typePacket.g1();

      const groupCount = labelPacket.g1();
      const labels = new Uint8Array(groupCount);
      for (let k = 0; k < groupCount; k++) {
        labels[k] = labelPacket.g1();
      }
      groupLabels[j] = labels;
    }

    instance.animTypes = transformTypes;
    instance.animLabels = groupLabels;

    AnimBase.instances[id] = instance;
    return instance;
  }

  static convertFromData377(id: number, fileData: Packet): AnimBase {
      const instance = new AnimBase();
      instance.id = id;

      const length = fileData.g1();
      instance.animLength = length;

      const types = new Uint8Array(length);
      const labels = new Array<Uint8Array>(length);

      for (let i = 0; i < length; i++) {
          types[i] = fileData.g1();
      }

      for (let i = 0; i < length; i++) {
          const labelCount = fileData.g1();
          const groupLabels = new Uint8Array(labelCount);

          for (let j = 0; j < labelCount; j++) {
              groupLabels[j] = fileData.g1();
          }
          labels[i] = groupLabels;
      }
      
      instance.animTypes = types;
      instance.animLabels = labels;

      AnimBase.instances[id] = instance;
      return instance;
  }

    static convertFromDataDat2(id: number, fileData: Packet): AnimBase {
    const instance = new AnimBase();
    instance.id = id;

    const count = fileData.g1();
    instance.animLength = count;

    const types = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
      types[i] = fileData.g1();
    }

    const labelLengths = new Int32Array(count);
    for (let i = 0; i < count; i++) {
      labelLengths[i] = fileData.g1();
    }

    const labels = new Array<Uint8Array>(count);
    for (let i = 0; i < count; i++) {
      const groupLabels = new Uint8Array(labelLengths[i]);
      for (let j = 0; j < labelLengths[i]; j++) {
        groupLabels[j] = fileData.g1();
      }
      labels[i] = groupLabels;
    }

    instance.animTypes = types;
    instance.animLabels = labels;

    AnimBase.instances[id] = instance;
    return instance;
  }

  animLength: number = 0;
  animTypes: Uint8Array | null = null;
  animLabels: (Uint8Array | null)[] | null = null;
  id: number = 0;
}
