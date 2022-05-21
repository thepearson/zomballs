import Color from '../util/color';
import Entity from './entity'
import * as Vec2 from 'vector2d'

/**
 * Base projectile class
 */
export default class Projectile extends Entity {

  /**
   * String to define what type of projectile this is.
   */
  type: string = "";

  /**
   * @param   {string}  type  Type of projectile
   */
  constructor(type: string) {
    super(type);
    this.type = type;
  }
}
