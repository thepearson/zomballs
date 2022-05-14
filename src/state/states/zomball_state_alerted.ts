import State from "../state";
import Zomball from "../../obj/zomball";
import Random from "../../util/random";
import { Constants } from "../../constants";
import * as Vec2 from "vector2d";

export default class ZomballStateAlerted extends State {

  zomball: Zomball;

  constructor(zomball: Zomball) {
    super("zomball-alerted")
    this.zomball = zomball;
  }

  entryActions(): void {
    // increase speed
    this.zomball.speed = 0;

    // set destination as the player
    this.zomball.destination = new Vec2.Vector(this.zomball.world?.player?.location.x!, this.zomball.world?.player?.location.y!);
  }

  checkConditions(): string | null {
    if (this.zomball.health <= 0) {
      return "zomball-dead";
    }

    if (Random.int(0, Constants.ZOMBALL_ALERT_CHARGE_POSSIBILITY) == 0) {
      return "zomball-charging";
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
