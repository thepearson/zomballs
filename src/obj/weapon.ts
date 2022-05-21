import World from "./world";
import Projectile from "./projectile";
import * as Vec2 from "vector2d";
import projectileFactory from "../util/projectileFactory";

/**
 * Base weapon class
 */
export default class Weapon {
  
  /**
   * Projectile name
   * 
   * @var {string}
   */
  projectile: string = "";

  /**
   * How many ammunition this weapon holds
   * 
   * @var {number}
   */
  ammunition: number = 0;

  /**
   * Size of the projectile
   * 
   * @var {number}
   */
  size: number = 1;

  /**
   * Damage the projectile does
   * 
   * @var {number}
   */
  damage: number = 1;

  /**
   * How fast the projectile moves
   * 
   * @var {number}
   */
  speed: number = 1;

  /**
   * @param   {string}  projectileType  name of projectile type
   */
  constructor(projectileType: string) {
    this.projectile = projectileType;
  }

  /**
   * Returns a projectile
   *
   * @return  {Projectile}
   */
  public createProjectile(): Projectile {
    return projectileFactory(this.projectile);
  }


  /**
   * Fire this weapon
   *
   * @var {Vec2.Vector} target    Location to fire to
   * @var {World}       world     World object
   * 
   * @return {void}
   */
  public fire(target: Vec2.Vector, world: World): void {
    const projectile = this.createProjectile();
    projectile.setLocation(new Vec2.Vector(world.player!.location.x, world.player!.location.y));
    projectile.setDestination(target);
    projectile.setSize(this.size);
    projectile.setDamage(this.damage)
    projectile.setSpeed(this.speed);

    world.addEntity(projectile);
  }
}
