import State from "../state";
import Zomball from "../../obj/zomball";
import Random from "../../util/random";
import { Constants } from "../../constants";

class ZomballStateAlerted extends State {

  zomball: Zomball;

  constructor(zomball: Zomball) {
    super("zomball-alerted")
    this.zomball = zomball;
  }

  entryActions(): void {
    // increase speed
    this.zomball.speed = 0;

    // set destination as the player
    this.zomball.destination = this.zomball.world?.player?.location!;
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
