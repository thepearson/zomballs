import State from '../state';
import Color from '../../util/color';
import Zomball from '../../obj/zomball';
import * as Vec2 from 'vector2d';
import { Constants } from '../../constants';

export default class ZomballStateDead extends State {
  zomball: Zomball;
  dead_color: Color;
  entry_time: number = 0;

  constructor(zomball: Zomball) {
    super('zomball-dead');
    this.zomball = zomball;
    this.dead_color = new Color(128, 64, 0); //brown
  }

  entryActions(): void {
    // increase speed
    this.zomball.speed = 0;
    this.entry_time = Date.now();
    this.zomball.color = this.dead_color;

    // set destination as the player
    const player = this.zomball.world?.player;
    if (player) {
      this.zomball.destination = new Vec2.Vector(player.location.x, player.location.y);
    }
    

    // spatter
    if (this.zomball.spatter == false) {
      this.zomball.world?.drawSpatter(this.zomball.location);
      this.zomball.spatter = true;
    }
  }

  doActions(): void {
    const now = Date.now();
    if (Math.round((now-this.entry_time)/1000) > Constants.ZOMBALL_DEATH_TIME) {
      this.zomball.remove = true;
    }
  }

  checkConditions(): string | null {
    return null;
  }
  exitActions(): void {
    // nothing
  }
}