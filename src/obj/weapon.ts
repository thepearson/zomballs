import World from "./world";
import Projectile from "./projectile";
import * as Vec2 from "vector2d";
import projectileFactory from "../util/projectileFactory";

export default class Weapon {
  
  projectile: string = "";
  ammunition: number = 0;
  size: number = 1;
  damage: number = 1;
  speed: number = 1;

  constructor(projectileType: string) {
    this.projectile = projectileType;
  }

  createProjectile(): Projectile {
    return projectileFactory(this.projectile);
  }

  fire(target: Vec2.Vector, world: World) {
    const projectile = this.createProjectile();
    projectile.setLocation(new Vec2.Vector(world.player!.location.x, world.player!.location.y));
    projectile.setDestination(target);
    projectile.setSize(this.size);
    projectile.setDamage(this.damage)
    projectile.setSpeed(this.speed);

    world.addEntity(projectile);
  }

}