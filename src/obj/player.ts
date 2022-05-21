import Entity from "./entity";
import * as Vec2 from 'vector2d'
import { Constants } from "../constants";
import Color from "../util/color"
import Pistol from "./pistol";
import Weapon from "./weapon";
import World from "./world";


/**
 * Player entity
 */
export default class Player extends Entity {

  /**
   * Player primary weapon
   */
  weapon_primary: Weapon | null = null;

  /**
   * Player secondary weapon
   */
  weapon_secondary: Weapon | null = null;

  /**
   * @param   {World}  world  [world description]
   */
  constructor(world: World) {
    super("player");
    this.world = world;

    // Player location, centre of the world
    this.location = new Vec2.Vector(
      Constants.GAME_SIZE.width / 2, 
      Constants.GAME_SIZE.height / 2
    );

    // Set some attributes for the player
    this.size = Constants.PLAYER_SIZE;
    this.health = Constants.PLAYER_DEFAULT_HEALTH;
    this.color = new Color(128, 128, 255);

    // Set starting weapons
    this.weapon_primary = new Pistol();
  }


  /**
   * Funciton for player to tak damage.
   *
   * @param   {number}  value  How much damage (healthpoints) should the player take
   *
   * @return  {void}
   */
  takeDamage(value: number): void {
    this.health -= value;
  }


  /**
   * Fire player primary weapon
   *
   * @var {Vec2.Vector}
   * 
   * @return  {void}
   */
  firePrimaryWeapon(target: Vec2.Vector): void {
    this.weapon_primary?.fire(target, this.world!);
  }


  /**
   * Fire player secondary weapon: TODO
   * 
   *  @return  {void}
   */
  fireSecondaryWeapon(target: Vec2.Vector): void {

  }

  /**
   * Process any player calcs
   */
  process(gameTime: number) {
    super.process(gameTime);
  }
}