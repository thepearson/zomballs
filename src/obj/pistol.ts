import Weapon from "./weapon";
import World from "./world";
import { Constants } from "../constants";

export default class Pistol extends Weapon {

  constructor() {
    super("bullet");

    this.size = Constants.WEAPON_PISTOL_PROJECTILE_SIZE;
    this.damage = Constants.WEAPON_PISTOL_PROJECTILE_DAMAGE;
    this.speed = Constants.WEAPON_PISTOL_PROJECTILE_SPEED;
  }
}