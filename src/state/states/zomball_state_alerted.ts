import State from "../state";
import Zomball from "../../obj/zomball";
import Random from "../../util/random";
import { Constants } from "../../constants";
import * as Vec2 from "vector2d";

/**
 * Zomball has been suprised. Not in a good way! One of it's
 * friends has been shot. It's not yet sure what to do...
 * 
 * ... should it charge or keep standing still?
 */
export default class ZomballStateAlerted extends State {

  /**
   * Zomball
   */
  private zomball: Zomball;

  /**
   * @param   {Zomball}  zomball  The Zomball
   */
  constructor(zomball: Zomball) {
    super("zomball-alerted")
    this.zomball = zomball;
  }

  /**
   * @see {State.entryActions}
   */
  public entryActions(): void {
    // Zomball is shocked, it is not moving.
    this.zomball.speed = 0;

    // Zomball know's that Player shot it's friend, it will come for 
    // Player. Player is zomball destination. Just not moving yet.
    this.zomball.destination = new Vec2.Vector(this.zomball.world?.player?.location.x!, this.zomball.world?.player?.location.y!);
  }


  /**
   * @see {State.entryActions}
   */
  public checkConditions(): string | null {

    // If zomball is shot while standing here, it ded.
    if (this.zomball.health <= 0) {
      return "zomball-dead";
    }

    // Mustering up the courage to charge at the player. Will it happen?
    if (Random.int(0, Constants.ZOMBALL_ALERT_CHARGE_POSSIBILITY) == 0) {
      return "zomball-charging";
    }
    
    return null;
  }


  /**
   * @see {State.entryActions}
   */
  public doActions(): void {
    // Nothing, Zomball is shocked!
  }

  /**
   * @see {State.entryActions}
   */
  public exitActions(): void {
    // nothing
  }

}
