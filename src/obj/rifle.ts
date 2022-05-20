import Weapon from "./weapon";
import World from "./world";
import { Constants } from "../constants";

export default class Rifle extends Weapon {

  constructor() {
    super("bullet");

    this.size = Constants.WEAPON_RIFLE_PROJECTILE_SIZE;
    this.damage = Constants.WEAPON_RIFLE_PROJECTILE_DAMAGE;
    this.speed = Constants.WEAPON_RIFLE_PROJECTILE_SPEED;
    this.ammunition = Constants.WEAPON_RIFLE_MAX_AMMO;
  }
}