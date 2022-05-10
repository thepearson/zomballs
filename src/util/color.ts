export default class Color {
  r: number = 0;
  g: number = 0;
  b: number = 0;
  a: number = 0.0;

  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    if (a) {
      this.a = a;
    } else {
      this.a = 1.0;
    }
  }


  getInt(): number {
    // TODO: figure this out.
    return 0; //int.parse('0x${this.hexColor()}');
  }

  getRgb(): [number, number, number] {
    return [this.r, this.g, this.b];
  }

  getHsl(): [number, number, number] {
    const max = Math.max(Math.max(this.r, this.g), this.b);
    const min = Math.min(Math.min(this.r, this.g), this.b);
    const d = max - min;

    let h: number;

    if (max == min) {
      h = 0.0;
    } else if (max == this.r) {
      h = 60 * (this.g-this.b)/d;
    } else if (max == this.g) {
      h = 60 * (this.b-this.r)/d + 120;
    } else { // max == b
      h = 60 * (this.r - this.g)/d + 240;
    }

    const l = (max + min)/2;
    let s: number;
    if (max == min) {
      s = 0.0;
    } else if (l < 0.5) {
      s = d/(2*l);
    } else {
      s = d/(2 - 2*l);
    }

    return [Math.round((Math.round(h) % 360)), s, l];
  }

  getHex(): string {
    const r = this.r.toString(16);
    const g = this.g.toString(16);
    const b = this.b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
}