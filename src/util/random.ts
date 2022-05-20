/**
 * RNG helper for integers.
 * Looked into using a lib but this is fine.
 */
export default class Random {

  /**
   * Return a 'random' int, unsing Math.random()
   *
   * @param   {number}  min  Range minimum (inclusive)
   * @param   {number}  max  Range maximum (inclusive)
   */
  public static int(min: number = 0, max: number = 10): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
