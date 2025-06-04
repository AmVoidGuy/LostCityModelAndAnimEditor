export default class Packet {
  private static readonly crctable: Int32Array = new Int32Array(256);
  private static readonly bitmask: Uint32Array = new Uint32Array(33);

  private static readonly crc32b = 0xedb88320;

  static {
    for (let i: number = 0; i < 32; i++) {
      this.bitmask[i] = (1 << i) - 1;
    }
    this.bitmask[32] = 0xffffffff;

    for (let b = 0; b < 256; b++) {
      let remainder = b;

      for (let bit = 0; bit < 8; bit++) {
        if ((remainder & 0x1) == 1) {
          remainder = (remainder >>> 1) ^ this.crc32b;
        } else {
          remainder >>>= 0x1;
        }
      }

      this.crctable[b] = remainder;
    }
  }

  data: Uint8Array;
  #view: DataView;
  pos: number;
  bitPos: number;

  constructor(src: Uint8Array) {
    this.data = src;
    this.#view = new DataView(src.buffer, src.byteOffset, src.byteLength);
    this.pos = 0;
    this.bitPos = 0;
  }

  get available(): number {
    return this.data.length - this.pos;
  }

  get length(): number {
    return this.data.length;
  }

  p1(value: number): void {
    this.#view.setUint8(this.pos++, value);
  }

  p2(value: number): void {
    this.#view.setUint16(this.pos, value);
    this.pos += 2;
  }

  ip2(value: number): void {
    this.#view.setUint16(this.pos, value, true);
    this.pos += 2;
  }

  p3(value: number): void {
    this.#view.setUint8(this.pos++, value >> 16);
    this.#view.setUint16(this.pos, value);
    this.pos += 2;
  }

  p4(value: number): void {
    this.#view.setInt32(this.pos, value);
    this.pos += 4;
  }

  ip4(value: number): void {
    this.#view.setInt32(this.pos, value, true);
    this.pos += 4;
  }

  p8(value: bigint): void {
    this.#view.setBigInt64(this.pos, value);
    this.pos += 8;
  }

  pbool(value: boolean): void {
    this.p1(value ? 1 : 0);
  }

  pjstr(str: string, terminator: number = 10): void {
    const length: number = str.length;
    for (let i: number = 0; i < length; i++) {
      this.#view.setUint8(this.pos++, str.charCodeAt(i));
    }
    this.#view.setUint8(this.pos++, terminator);
  }

  pdata(src: Uint8Array, offset: number, length: number): void {
    this.data.set(src.subarray(offset, offset + length), this.pos);
    this.pos += length - offset;
  }

  psize4(size: number): void {
    this.#view.setUint32(this.pos - size - 4, size);
  }

  psize2(size: number): void {
    this.#view.setUint16(this.pos - size - 2, size);
  }

  psize1(size: number): void {
    this.#view.setUint8(this.pos - size - 1, size);
  }

  psmarts(value: number): void {
    if (value < 64 && value >= -64) {
      this.p1(value + 64);
    } else if (value < 16384 && value >= -16384) {
      this.p2(value + 0xc000);
    } else {
      throw new Error("Error psmarts out of range: " + value);
    }
  }

  psmart(value: number): void {
    if (value >= 0 && value < 128) {
      this.p1(value);
    } else if (value >= 0 && value < 32768) {
      this.p2(value + 0x8000);
    } else {
      throw new Error("Error psmart out of range: " + value);
    }
  }

  // ----

  g1(): number {
    return this.#view.getUint8(this.pos++);
  }

  g1b(): number {
    return this.#view.getInt8(this.pos++);
  }

  g2(): number {
    this.pos += 2;
    return this.#view.getUint16(this.pos - 2);
  }

  g2s(): number {
    this.pos += 2;
    return this.#view.getInt16(this.pos - 2);
  }

  ig2(): number {
    this.pos += 2;
    return this.#view.getUint16(this.pos - 2, true);
  }

  g3(): number {
    const result: number =
      (this.#view.getUint8(this.pos++) << 16) | this.#view.getUint16(this.pos);
    this.pos += 2;
    return result;
  }

  g4(): number {
    this.pos += 4;
    return this.#view.getInt32(this.pos - 4);
  }

  ig4(): number {
    this.pos += 4;
    return this.#view.getInt32(this.pos - 4, true);
  }

  g8(): bigint {
    this.pos += 8;
    return this.#view.getBigInt64(this.pos - 8);
  }

  gbool(): boolean {
    return this.g1() === 1;
  }

  gjstr(terminator = 10): string {
    const length: number = this.data.length;
    let str: string = "";
    let b: number;
    while (
      (b = this.#view.getUint8(this.pos++)) !== terminator &&
      this.pos < length
    ) {
      str += String.fromCharCode(b);
    }
    return str;
  }

  gdata(dest: Uint8Array, offset: number, length: number): void {
    dest.set(this.data.subarray(this.pos, this.pos + length), offset);
    this.pos += length;
  }

  gsmarts(): number {
    return this.#view.getUint8(this.pos) < 0x80
      ? this.g1() - 64
      : this.g2() - 0xc000;
  }

  gsmart(): number {
    return this.#view.getUint8(this.pos) < 0x80
      ? this.g1()
      : this.g2() - 0x8000;
  }

  bits(): void {
    this.bitPos = this.pos << 3;
  }

  bytes(): void {
    this.pos = (this.bitPos + 7) >>> 3;
  }

  gBit(n: number): number {
    let bytePos: number = this.bitPos >>> 3;
    let remaining: number = 8 - (this.bitPos & 7);
    let value: number = 0;
    this.bitPos += n;

    for (; n > remaining; remaining = 8) {
      value +=
        (this.#view.getUint8(bytePos++) & Packet.bitmask[remaining]) <<
        (n - remaining);
      n -= remaining;
    }

    if (n == remaining) {
      value += this.#view.getUint8(bytePos) & Packet.bitmask[remaining];
    } else {
      value +=
        (this.#view.getUint8(bytePos) >>> (remaining - n)) & Packet.bitmask[n];
    }

    return value;
  }

  pBit(n: number, value: number): void {
    const pos: number = this.bitPos;
    this.bitPos += n;
    let bytePos: number = pos >>> 3;
    let remaining: number = 8 - (pos & 7);
    const view: DataView = this.#view;

    for (; n > remaining; remaining = 8) {
      const shift: number = (1 << remaining) - 1;
      const byte: number = view.getUint8(bytePos);
      view.setUint8(
        bytePos++,
        (byte & ~shift) | ((value >>> (n - remaining)) & shift)
      );
      n -= remaining;
    }

    const r: number = remaining - n;
    const shift: number = (1 << n) - 1;
    const byte: number = view.getUint8(bytePos);
    view.setUint8(bytePos, (byte & (~shift << r)) | ((value & shift) << r));
  }
}
