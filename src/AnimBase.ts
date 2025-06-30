import Packet from "./Packet";
import { TypedArray1d } from "./Arrays.js";

export default class AnimBase {
  static instances: AnimBase[] = [];

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

  animLength: number = 0;
  animTypes: Uint8Array | null = null;
  animLabels: (Uint8Array | null)[] | null = null;
  id: number = 0;
}
