import Zomball from '../../obj/zomball'
import * as Vec2 from 'vector2d'
import { Constants } from '../../constants'
import Random from '../../util/random';
import State from '../state';


export default class ZomballStateWalking extends State {

  zomball: Zomball;

  constructor(zomball: Zomball) {
    super("zomball-walking");
    this.zomball = zomball;
  }

  chooseDestination(): void {
    // destination not set, so lets choose one
    // somewhere on the game field
    if (this.zomball.destination == null) {
      this.zomball.destination = new Vec2.Vector(
        Random.int(0, Constants.GAME_SIZE.width),
        Random.int(0, Constants.GAME_SIZE.height)
      );
    } else {
      // destination is set so lets choose one close
      // to where the current one is. so we dont get crazy jerky
      // movements

      // if zomball has reached their destination then chose a completely
      // new one, but only after

    //   else {
    //     // set some defaults for the new locations
    //     let new_x: number = 0;
    //     let new_y: number = 0;

    //     // first work out x
    //     const x_offset = Random.int(0, Constants.ZOMBALL_WALKING_CHANGE_OFFSET);
    //     if (Random.int(0, 1) == 1) {
    //       // positive
    //       new_x = Math.round(this.zomball.destination.x + x_offset);
    //     } else {
    //       // negative
    //       new_x = Math.round(this.zomball.destination.x + x_offset);
    //     }

    //     // first work out x
    //     const y_offset = Random.int(0, Constants.ZOMBALL_WALKING_CHANGE_OFFSET);
    //     if (Random.int(0, 1) == 1) {
    //       // positive
    //       new_y = Math.round(this.zomball.destination.y + y_offset);
    //     } else {
    //       // negative
    //       new_y = Math.round(this.zomball.destination.y + y_offset);
    //     }

    //     // set the new destination
    //     this.zomball.destination = new Vec2.Vector(new_x, new_y);
    //   }
    }
  }

  doActions(): void {

    if (this.zomball.world?.outOfRange(this.zomball.destination!) &&
      this.zomball.world?.outOfRange(this.zomball.location)) {
      this.zomball.remove = true;
    }

    if (this.zomball.world?.getCloseEntity(this.zomball, this.zomball.size, 'zomball') != null) {
      // reverse the destination
      this.zomball.destination = this.zomball.destination!.reverse();
    }

    if (this.zomball.location.equals(this.zomball.destination!)) {
      if (Random.int(0, Constants.ZOMBALL_DEST_REACH_MOVE_POSSIBILITY) == 0) {        
        this.zomball.destination = new Vec2.Vector(
          Random.int(0, Constants.GAME_SIZE.width),
          Random.int(0, Constants.GAME_SIZE.height)
        );
      }
    }

    // only update the direction of the zomball one in every
    // zomball_walking_change_offset ticks, but randomly
    if (Random.int(0, Constants.ZOMBALL_WALKING_CHANGE_OFFSET) == 0) {
      this.chooseDestination();
    }
  }

  checkConditions(): string | null {
    if (this.zomball.health <= 0) {
      return "zomball-dead";
    }

    if (this.zomball.world?.withinRange(this.zomball.location, this.zomball.world?.player?.location!, Constants.ZOMBALL_ALERT_RANGE)) {
      if (Random.int(0, Constants.ZOMBALL_CHARGE_POSSIBILITY) == 0) {
        return "zomball-charging";
      }
    }
    return null;
  }

  entryActions(): void {
    this.chooseDestination();
  }

  exitActions(): void {
    // nothing
  }
}
