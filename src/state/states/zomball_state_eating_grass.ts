import Zomball from "../../obj/zomball";
import State from "../state";
import * as Vec2 from "vector2d";
import { Constants } from "../../constants";
import Random from "../../util/random";

/**
 * Currently unused
 */
export default class ZomballStateEatingGrass extends State {

  zomball: Zomball;

  constructor( zomball: Zomball) {
    super('zomballe-eating-grass');
    this.zomball = zomball;
  }

  entryActions(): void {
    // increase speed
    this.zomball.speed = 0;

    // set destination as the player
    this.zomball.destination = this.zomball.location;
  }

  checkConditions(): string | null {
    if (this.zomball.health <= 0) {
      return "zomball-dead";
    }

    // if the zomball decides to move
    if (Random.int(0, Constants.ZOMBALL_DEST_REACH_MOVE_POSSIBILITY) == 0) {

      // it might charge or walk.
      const player = this.zomball.world?.player;
      if (player && this.zomball.world?.withinRange(new Vec2.Vector(this.zomball.location.x, this.zomball.location.y), new Vec2.Vector(player.location.x, player.location.y), Constants.ZOMBALL_SPAWN_OFFSET)) {
        if (Random.int(0, Constants.ZOMBALL_CHARGE_POSSIBILITY) == 0) {
          return "zomball-charging";
        }
      }
      return "zomball-walking";
    }
    return null;
  }

  doActions(): void {
    // nothing
  }
  exitActions(): void {
    // nothing
  }
}