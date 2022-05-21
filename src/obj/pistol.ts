import Weapon from "./weapon";
import { Constants } from "../constants";

/**
 * Player weapon: pistol
 */
export default class Pistol extends Weapon {

  /**
   * Sets Pistol properties
   */
  constructor() {
    super("bullet");
    this.size = Constants.WEAPON_PISTOL_PROJECTILE_SIZE;
    this.damage = Constants.WEAPON_PISTOL_PROJECTILE_DAMAGE;
    this.speed = Constants.WEAPON_PISTOL_PROJECTILE_SPEED;
  }
}
