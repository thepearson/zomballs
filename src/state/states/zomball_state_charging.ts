import Zomball from "../../obj/zomball";
import State from "../state";
import * as Vec2 from 'vector2d';
import { Constants } from "../../constants";

export default class ZomballStateCharging extends State {

  /**
   * The zomball
   */
  private zomball: Zomball;

  /**
   * @param   {Zomball}  zomball  The Zomball
   */
  constructor(zomball: Zomball) {
    super("zomball-charging");
    this.zomball = zomball;
  }

  /**
   * @see {State.entryActions}
   */
  public entryActions(): void {
    // Increase speed, anger give zomball strength!
    this.zomball.speed = Constants.ZOMBALL_CHARGE_SPEED;

    // Set destination as the player, failsafe if zomball 
    // just decided to charge without being alerted
    const playerLocation = this.zomball.world?.player?.location;
    if (playerLocation) {
      this.zomball.destination = new Vec2.Vector(playerLocation.x, playerLocation.y);
    }
  }

  /**
   * @see {State.checkConditions}
   */
  public checkConditions(): string | null {
    // It died
    if (this.zomball.health <= 0) {
      return "zomball-dead";
    }

    return null;
  }

  /**
   * @see {State.doActions}
   */
  public doActions(): void {
    // nothing
  }

  /**
   * @see {State.exitActions}
   */
  public exitActions(): void {
    // nothing
  }
}