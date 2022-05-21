import Weapon from "./weapon";
import { Constants } from "../constants";

/**
 * Player weapon: Rifle
 */
export default class Rifle extends Weapon {

  /**
   * Set's Rifle properties.
   */
  constructor() {
    super("bullet");

    this.size = Constants.WEAPON_RIFLE_PROJECTILE_SIZE;
    this.damage = Constants.WEAPON_RIFLE_PROJECTILE_DAMAGE;
    this.speed = Constants.WEAPON_RIFLE_PROJECTILE_SPEED;
    this.ammunition = Constants.WEAPON_RIFLE_MAX_AMMO;
  }
}