import State from '../state';
import Color from '../../util/color';
import Zomball from '../../obj/zomball';
import * as Vec2 from 'vector2d';
import { Constants } from '../../constants';

/**
 * Zomball is dead state, all it's health has depleated.
 * Is it a sad zomball? no. A dead zomball has no feelings.
 */
export default class ZomballStateDead extends State {

  /**
   * The zomball that is dead
   */
  zomball: Zomball;

  /**
   * A colour to assign to a ded one.
   */
  dead_color: Color;

  /**
   * We only persist the dead bodies for a period of time, 
   * this variable allows us to keep track of the bodies to 
   * dispose of.
   */
  entry_time: number = 0;

  /**
   * @param   {Zomball}  zomball  The Zomball
   */
  constructor(zomball: Zomball) {
    super('zomball-dead');
    this.zomball = zomball;
    this.dead_color = new Color(128, 64, 0); // Dead Brown
  }

  /**
   * @see {State.entryActions}
   */
  entryActions(): void {
    // Zomball dead, it has no speed.
    this.zomball.speed = 0;

    // Call it. Time of Death. Now.
    this.entry_time = Date.now();

    // Dead brown
    this.zomball.color = this.dead_color;

    // Player is rewarded for the sensless destruction
    this.zomball.world!.player_score += Math.round(((Date.now() - this.zomball.spawn_time) / Constants.ZOMBALL_SCORE_FACTOR) + Constants.ZOMBALL_BASE_VALUE);
    
    // Blood stuff
    if (this.zomball.spatter == false) {
      this.zomball.world?.drawSpatter(this.zomball.location);
      this.zomball.spatter = true;
    }
  }

  /**
   * @see {State.doActions}
   */
  doActions(): void {
    // Check if we can dispose of the body yet?
    const now = Date.now();
    if (Math.round((now-this.entry_time)/1000) > Constants.ZOMBALL_DEATH_TIME) {
      this.zomball.remove = true;
    }
  }

  /**
   * @see {State.checkConditions}
   */
  checkConditions(): string | null {
    return null;
  }

  /**
   * @see {State.exitAction}
   */
  exitActions(): void {
    // nothing
  }
}