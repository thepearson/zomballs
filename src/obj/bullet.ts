import Entity from './entity';
import Color from '../util/color';
import * as Vec2 from 'vector2d';
import drawCircle from '../util/circle';
import { Constants } from '../constants';


export default class Bullet extends Entity {
  color: Color = new Color(0, 0, 0);

  constructor(location: Vec2.Vector, destination: Vec2.Vector) {
    super("bullet")

    this.location = new Vec2.Vector(location.x, location.y);
    this.destination = new Vec2.Vector(destination.x, destination.y);
    this.size = 1;
    this.damage_value = Constants.BULLET_DAMAGE_VALUE;
    this.speed = 1;
  }

  /**
   * Render the zomball
   */
  render(context: CanvasRenderingContext2D) {
    super.render(context);
    drawCircle(context, this.location, this.color, this.size);
  }

  /**
   * Process the zomballs movements and actions
   */
  process(gameTime: number): void {
    super.process(gameTime);
    if (this.world == null) return;

    // Entity zomball = this.world.get_close_entity(this, zomball_size, 'zomball');
    // if (zomball != null && zomball.brain.active_state != 'dead') {
    //   // decrease zomball health
    //   zomball.health -= this.damage_value;
    //   this.world.player_score += this.damage_value;

    //   // set for removal
    //   this.remove = true;

    //   // lets set others in range to alert, but only of they aren't charging
    //   List in_range = this.world.get_entities_in_range(zomball, zomball_alert_range, 'zomball');
    //   for (var id in in_range) {
    //     if (this.world.entities[id].brain.active_state != "charging") {
    //       this.world.entities[id].brain.set_state("alerted");
    //     }
    //   }
    // }

    // remove the bullet when it reaches it's destination.
    if (this.world.withinRange(this.location, this.destination, 10)) {
      this.remove = true;
    }

    // if we are moving towards the destination
    if (this.speed > 0 && !this.location.equals(this.destination)) {
      const distance_to_destination: number = this.destination.distance(this.location);
      const destCopy = new Vec2.Vector(this.destination.x, this.destination.y);
      const heading: Vec2.Vector = destCopy.subtract(this.location).normalize();
      const distance_traveled = Math.min(distance_to_destination, gameTime * this.speed);
      const travel_vector = heading.mulS(distance_traveled);

      // new location is the current location
      // plus the distance traveled vector
      this.location = this.location.add(travel_vector);
    }
  }
}