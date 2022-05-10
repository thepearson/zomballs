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
    // Make r, g, and b fractions of 1
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;
    
    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    // Calculate hue
    // No difference
    if (delta == 0) {
      h = 0;
    // Red is max
    } else if (cmax == r) {
      h = ((g - b) / delta) % 6;
    // Green is max
    } else if (cmax == g) {
      h = (b - r) / delta + 2;
    // Blue is max
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);
    
    // Make negative hues positive behind 360°
    if (h < 0) {
      h += 360;
    }

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l];
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