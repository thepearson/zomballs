import Zomball from "../../obj/zomball";
import State from "../state";
import * as Vec2 from 'vector2d';
import { Constants } from "../../constants";

export default class ZomballStateCharging extends State {

  zomball: Zomball;

  constructor(zomball: Zomball) {
    super("zomball-charging");
    this.zomball = zomball;
  }

  entryActions(): void {
    // increase speed
    this.zomball.speed = Constants.ZOMBALL_CHARGE_SPEED;

    // set destination as the player
    const playerLocation = this.zomball.world?.player?.location;
    if (playerLocation) {
      this.zomball.destination = new Vec2.Vector(playerLocation.x, playerLocation.y);
    }
  }

  checkConditions(): string | null {
    if (this.zomball.health <= 0) {
      return "zomball-dead";
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