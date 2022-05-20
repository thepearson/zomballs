/**
 * Colour helper, useful for converting between colour formats.
 * This is probably not really needed for the TS/JS version but is
 * more of a hangover from the Dart version of the game. Was good 
 * learning converting it to javascript/typescript.
 */
export default class Color {

  /**
   * red
   */
  private r: number = 0;

  /**
   * green
   */
  private g: number = 0;

  /**
   * blue
   */
  private b: number = 0;

  /**
   * alpha
   */
  private a: number = 0.0;

  /**
   * [constructor description]
   *
   * @param   {number}  r  red [0 - 255]
   * @param   {number}  g  green [0 - 255]
   * @param   {number}  b  blue [0 - 255]
   * @param   {number?}  a  alpha [0.0 - 1.0]
   */
  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a ? a : 1.0;
  }

  /**
   * Returns an array of RGB values
   *
   * @return  {Array<number>}  
   */
  public getRgb(): [number, number, number] {
    return [this.r, this.g, this.b];
  }

  /**
   * Return array of HSL values
   * 
   * From: https://css-tricks.com/converting-color-spaces-in-javascript/
   *
   * @return  {Array<number>}  
   */
  public getHsl(): [number, number, number] {
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

  /**
   * Return HEX value of colour (inlcuding alpha)
   * 
   * From: https://css-tricks.com/converting-color-spaces-in-javascript/
   *
   * @return  {string}  
   */
  public getHex(withAlpha: boolean = true): string {
    let r = this.r.toString(16);
    let g = this.g.toString(16);
    let b = this.b.toString(16);
    let a = (this.a * 255).toString(16);
  
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    if (a.length == 1) a = "0" + a;
  
    if (!withAlpha) return "#" + r + g + b;
    return "#" + r + g + b + a;
  }
}