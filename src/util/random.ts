export default class Random {

  static int(min: number = 0, max: number = 10): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}