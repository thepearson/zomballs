import Projectile from './projectile';
import Entity from './entity';
import Color from '../util/color';
import * as Vec2 from 'vector2d';
import drawCircle from '../util/circle';
import { Constants } from '../constants';
import Random from '../util/random';


export default class Bullet extends Projectile {

  color: Color = new Color(0, 0, 0);

  constructor() {
    super("bullet")
  }

  /**
   * Render the zomball
   */
  render(context: CanvasRenderingContext2D) {
    super.render(context);
  }

  /**
   * Process the zomballs movements and actions
   */
  process(gameTime: number): void {
    super.process(gameTime);
    if (this.world == null) return;

    const zomball: Entity | null = this.world.getCloseEntity(this, Constants.ZOMBALL_SIZE, 'zomball');
    if (zomball != null && zomball.brain.active_state != 'zomball-dead') {
      // Decrease zomball health
      zomball.health -= this.damage_value;
      zomball.speed = zomball.speed - (Random.int(1, 6) / 1000);

      // Make zomball charge after being shot.
      if (zomball.health > 0 && zomball.brain.active_state != 'zomball-charging') {
        zomball.brain.setState("zomball-charging");
      }

      const blood_spirt = new Vec2.Vector(zomball.location.x, zomball.location.y);
      this.world.drawShotSplat(blood_spirt);
      
      // set for removal
      this.remove = true;

      // lets set others in range to alert, but only of they aren't charging
      const in_range: Array<Entity> = this.world.getEntitiesInRange(zomball, Constants.ZOMBALL_ALERT_RANGE, 'zomball');

      for (let entity of in_range) {
        if (entity.brain.active_state != "zomball-charging") {
          entity.brain.setState("zomball-alerted");
        }
      }
    }

    // remove the bullet when it reaches it's destination.
    if (this.world.withinRange(this.location, this.destination!, 10)) {
      this.remove = true;
    }

    // if we are moving towards the destination
    if (this.speed > 0 && !this.location.equals(this.destination!)) {
      const distance_to_destination: number = this.destination!.distance(this.location);
      const destCopy = new Vec2.Vector(this.destination!.x, this.destination!.y);
      const heading: Vec2.Vector = destCopy.subtract(this.location).normalize();
      const distance_traveled = Math.min(distance_to_destination, gameTime * this.speed);
      const travel_vector = heading.mulS(distance_traveled);

      // new location is the current location
      // plus the distance traveled vector
      this.location = this.location.add(travel_vector);
    }
  }
}