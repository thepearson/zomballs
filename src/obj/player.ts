import Entity from "./entity";
import * as Vec2D from 'vector2d'
import { Constants } from "../constants";
import Color from "../util/color"
import Pistol from "./pistol";
import Weapon from "./weapon";
import World from "./world";


export default class Player extends Entity {

  weapon_primary: Weapon | null = null;
  weapon_secondary: Weapon | null = null;

  constructor(world: World) {
    super("player");

    this.world = world;

    this.location = new Vec2D.Vector(
      Constants.GAME_SIZE.width / 2, 
      Constants.GAME_SIZE.height / 2
    );

    this.size = Constants.PLAYER_SIZE;
    this.health = Constants.PLAYER_DEFAULT_HEALTH;
    this.color = new Color(128, 128, 255);

    this.weapon_primary = new Pistol();
  }

  takeDamage(value: number) {
    this.health -= value;
  }

  firePrimaryWeapon(target: Vec2D.Vector) {
    this.weapon_primary?.fire(target, this.world!);
  }

  fireSecondaryWeapon() {

  }

  /**
   * Process the zomballs movements and actions
   */
  process(gameTime: number) {
    super.process(gameTime);
  }
}