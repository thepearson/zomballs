import Zomball from '../../obj/zomball'
import * as Vec2 from 'vector2d'
import { Constants } from '../../constants'
import Random from '../../util/random';
import State from '../state';


/**
 * Zomball walking state, just meandering about, bumping into each other,
 * not agro or charging. Just a lovely day on the field minding it's own business.
 */
export default class ZomballStateWalking extends State {

  /**
   * State entity
   */
  zomball: Zomball;

  /**
   * @param   {Zomball}  zomball  Zomball Entity this state belongs to
   */
  constructor(zomball: Zomball) {
    super("zomball-walking");
    this.zomball = zomball;
  }

  /**
   * [chooseDestination description]
   *
   * @return  {void}    [return description]
   */
  chooseDestination(): void {
    // Destination not set, so lets choose one
    // somewhere on the game field.
    if (this.zomball.destination == null) {
      this.zomball.destination = new Vec2.Vector(
        Random.int(0, Constants.GAME_SIZE.width),
        Random.int(0, Constants.GAME_SIZE.height)
      );
    } else {
      /**
      TODO: Ported directly from Dart, it's currently not behaving correctly.
      
      Requirements: if a zomball is walking it may change it's direction slightly.

      */

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

  /**
   * @see  {State.doActions}
   */
  doActions(): void {

    // If the Zomball is out of game range AND it's walking further away,
    // Flag it for removal, it's an idiot.
    if (this.zomball.world?.outOfRange(this.zomball.destination!) &&
      this.zomball.world?.outOfRange(this.zomball.location)) {
      this.zomball.remove = true;
    }

    // If another 'zomball' is 'bumped' into then reverse the current direction
    if (this.zomball.world?.getCloseEntity(this.zomball, this.zomball.size, 'zomball') != null) {
      // Reverse the destination
      this.zomball.destination = this.zomball.destination!.reverse();
    }

    // If a zomball has reached it's destination, then lets 
    // randomly, maybe choose another destination.
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

  /**
   * @see {State.checkConditions}
   */
  checkConditions(): string | null {
    // If the zomball has zero or less health then they ded.
    if (this.zomball.health <= 0) {
      return "zomball-dead";
    }

    // If a zomball is close to the player (within ZOMBALL_ALERT_RANGE), 
    // then trigger a charge possibility.
    if (this.zomball.world?.withinRange(this.zomball.location, this.zomball.world?.player?.location!, Constants.ZOMBALL_ALERT_RANGE)) {
      if (Random.int(0, Constants.ZOMBALL_CHARGE_POSSIBILITY) == 0) {
        return "zomball-charging";
      }
    }

    return null;
  }

  /** 
   * @see {State.entryActions}
   */
  entryActions(): void {
    // Good morning, zomball has just awoken, where is it going?
    this.chooseDestination();
  }

  /**
   * @see {State.exitActions}
   */
  exitActions(): void {
    // nothing
  }
}
