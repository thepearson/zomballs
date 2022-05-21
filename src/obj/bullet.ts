import Projectile from './projectile';
import Entity from './entity';
import Color from '../util/color';
import * as Vec2 from 'vector2d';
import drawCircle from '../util/circle';
import { Constants } from '../constants';
import Random from '../util/random';


export default class Bullet extends Projectile {

  /**
   * Constructor, initiates a "bullet"
   */
  constructor() {
    super("bullet")
  }

  /**
   * Process the zomballs movements and actions
   */
  process(gameTime: number): void {
    super.process(gameTime);

    // short circuit if world is null
    if (this.world == null) return;


    const zomball: Entity | null = this.world.getCloseEntity(this, Constants.ZOMBALL_SIZE, 'zomball');
    if (zomball != null && zomball.brain.getActiveStateName() != 'zomball-dead') {
    
      // Decrease zomball health
      zomball.health -= this.damage_value;
      zomball.speed = zomball.speed - (Random.int(1, 6) / 1000);

      // Make zomball charge after being shot.
      if (zomball.health > 0 && zomball.brain.getActiveStateName() != 'zomball-charging') {
        zomball.brain.setState("zomball-charging");
      }

      const blood_spirt = new Vec2.Vector(zomball.location.x, zomball.location.y);
      this.world.drawShotSplat(blood_spirt);
      
      // set for removal
      this.remove = true;

      // lets set others in range to alert, but only of they aren't charging
      const in_range: Array<Entity> = this.world.getEntitiesInRange(zomball, Constants.ZOMBALL_ALERT_RANGE, 'zomball');

      for (let entity of in_range) {
        if (entity.brain.getActiveStateName() != "zomball-charging") {
          entity.brain.setState("zomball-alerted");
        }
      }
    }

    // remove the bullet when it reaches it's destination.
    if (this.world.withinRange(this.location, this.destination!, 10)) {
      this.remove = true;
    }
  }
}