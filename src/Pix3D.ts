import { Int32Array2d, TypedArray1d } from "./Arrays";

export default class Pix3D {
  static lowMemory: boolean = false;

  static reciprocal15: Int32Array = new Int32Array(512);
  static reciprocal16: Int32Array = new Int32Array(2048);
  static sin: Int32Array = new Int32Array(2048);
  static cos: Int32Array = new Int32Array(2048);
  static hslPal: Int32Array = new Int32Array(65536);

  //static textures: (Pix8 | null)[] = new TypedArray1d(50, null);
  static textureCount: number = 0;

  static lineOffset: Int32Array = new Int32Array();
  static centerX: number = 0;
  static centerY: number = 0;

  static jagged: boolean = true;
  static clipX: boolean = false;
  static alpha: number = 0;

  static texelPool: (Int32Array | null)[] | null = null;
  static activeTexels: (Int32Array | null)[] = new TypedArray1d(50, null);
  static poolSize: number = 0;
  static cycle: number = 0;
  static textureCycle: Int32Array = new Int32Array(50);
  static texPal: (Int32Array | null)[] = new TypedArray1d(50, null);

  private static averageTextureRGB: Int32Array = new Int32Array(50);

  static {
    for (let i: number = 1; i < 512; i++) {
      this.reciprocal15[i] = (32768 / i) | 0;
    }

    for (let i: number = 1; i < 2048; i++) {
      this.reciprocal16[i] = (65536 / i) | 0;
    }

    for (let i: number = 0; i < 2048; i++) {
      // angular frequency: 2 * pi / 2048 = 0.0030679615757712823
      // * 65536 = maximum amplitude
      this.sin[i] = (Math.sin(i * 0.0030679615757712823) * 65536.0) | 0;
      this.cos[i] = (Math.cos(i * 0.0030679615757712823) * 65536.0) | 0;
    }
    this.setBrightness(0.8);
  }
  static init3D(width: number, height: number): void {
    this.lineOffset = new Int32Array(height);
    for (let y: number = 0; y < height; y++) {
      this.lineOffset[y] = width * y;
    }
    this.centerX = (width / 2) | 0;
    this.centerY = (height / 2) | 0;
  }

  static clearTexels(): void {
    this.texelPool = null;
    this.activeTexels.fill(null);
  }

  static getAverageTextureRGB(id: number): number {
    if (this.averageTextureRGB[id] !== 0) {
      return this.averageTextureRGB[id];
    }

    const palette: Int32Array | null = this.texPal[id];
    if (!palette) {
      return 0;
    }

    let r: number = 0;
    let g: number = 0;
    let b: number = 0;
    const length: number = palette.length;
    for (let i: number = 0; i < length; i++) {
      r += (palette[i] >> 16) & 0xff;
      g += (palette[i] >> 8) & 0xff;
      b += palette[i] & 0xff;
    }

    let rgb: number =
      (((r / length) | 0) << 16) +
      (((g / length) | 0) << 8) +
      ((b / length) | 0);
    rgb = this.setGamma(rgb, 1.4);
    if (rgb === 0) {
      rgb = 1;
    }
    this.averageTextureRGB[id] = rgb;
    return rgb;
  }

  static setBrightness(brightness: number): void {
    const randomBrightness: number = brightness + Math.random() * 0.03 - 0.015;
    let offset: number = 0;
    for (let y: number = 0; y < 512; y++) {
      const hue: number = ((y / 8) | 0) / 64.0 + 0.0078125;
      const saturation: number = (y & 0x7) / 8.0 + 0.0625;
      for (let x: number = 0; x < 128; x++) {
        const lightness: number = x / 128.0;
        let r: number = lightness;
        let g: number = lightness;
        let b: number = lightness;
        if (saturation !== 0.0) {
          let q: number;
          if (lightness < 0.5) {
            q = lightness * (saturation + 1.0);
          } else {
            q = lightness + saturation - lightness * saturation;
          }
          const p: number = lightness * 2.0 - q;
          let t: number = hue + 0.3333333333333333;
          if (t > 1.0) {
            t--;
          }
          let d11: number = hue - 0.3333333333333333;
          if (d11 < 0.0) {
            d11++;
          }
          if (t * 6.0 < 1.0) {
            r = p + (q - p) * 6.0 * t;
          } else if (t * 2.0 < 1.0) {
            r = q;
          } else if (t * 3.0 < 2.0) {
            r = p + (q - p) * (0.6666666666666666 - t) * 6.0;
          } else {
            r = p;
          }
          if (hue * 6.0 < 1.0) {
            g = p + (q - p) * 6.0 * hue;
          } else if (hue * 2.0 < 1.0) {
            g = q;
          } else if (hue * 3.0 < 2.0) {
            g = p + (q - p) * (0.6666666666666666 - hue) * 6.0;
          } else {
            g = p;
          }
          if (d11 * 6.0 < 1.0) {
            b = p + (q - p) * 6.0 * d11;
          } else if (d11 * 2.0 < 1.0) {
            b = q;
          } else if (d11 * 3.0 < 2.0) {
            b = p + (q - p) * (0.6666666666666666 - d11) * 6.0;
          } else {
            b = p;
          }
        }
        const intR: number = (r * 256.0) | 0;
        const intG: number = (g * 256.0) | 0;
        const intB: number = (b * 256.0) | 0;
        const rgb: number = (intR << 16) + (intG << 8) + intB;
        this.hslPal[offset++] = this.setGamma(rgb, randomBrightness);
      }
    }
  }

  private static setGamma(rgb: number, gamma: number): number {
    const r: number = (rgb >> 16) / 256.0;
    const g: number = ((rgb >> 8) & 0xff) / 256.0;
    const b: number = (rgb & 0xff) / 256.0;
    const powR: number = Math.pow(r, gamma);
    const powG: number = Math.pow(g, gamma);
    const powB: number = Math.pow(b, gamma);
    const intR: number = (powR * 256.0) | 0;
    const intG: number = (powG * 256.0) | 0;
    const intB: number = (powB * 256.0) | 0;
    return (intR << 16) + (intG << 8) + intB;
  }

  static initPool(size: number): void {
    if (this.texelPool) {
      return;
    }
    this.poolSize = size;
    if (this.lowMemory) {
      this.texelPool = new Int32Array2d(size, 16384);
    } else {
      this.texelPool = new Int32Array2d(size, 65536);
    }
    this.activeTexels.fill(null);
  }
}
