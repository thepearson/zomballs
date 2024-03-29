import Color from "../util/color";
import Entity from "./entity";
import { Constants } from "../constants";
import drawCircle from "../util/circle";
import Random from "../util/random";
import * as Vec2 from "vector2d";

import ZomballStateCharging from "../state/states/zomball_state_charging";
import ZomballStateDead from "../state/states/zomball_state_dead";
import ZomballStateEatingGrass from "../state/states/zomball_state_eating_grass";
import ZomballStateWalking from "../state/states/zomball_state_walking";
import ZomballStateAlerted from "../state/states/zomball_state_alerted";

export default class Zomball extends Entity {
  color: Color = new Color(0, 128, 0);
  spatter: boolean = false;
  in_sights_color: Color = new Color(255, 128, 0);

  constructor() {
    super("zomball")
    this.size = Constants.ZOMBALL_SIZE;
    this.health = Constants.ZOMBALL_DEFAULT_HEALTH;
    this.setSpawn();
    this.damage_value = Constants.ZOMBALL_DAMAGE_VALUE;

    this.brain.addState(new ZomballStateWalking(this));
    this.brain.addState(new ZomballStateCharging(this));
    this.brain.addState(new ZomballStateEatingGrass(this));
    this.brain.addState(new ZomballStateAlerted(this));
    this.brain.addState(new ZomballStateDead(this));
    this.brain.setState("zomball-walking");
    
    this.speed = Constants.ZOMBALL_SPEED_MIN + Random.int(0, Constants.ZOMBALL_SPEED_RANGE);
  }




  /**
   * Render the zomball
   */
  render(context: CanvasRenderingContext2D): void {
    super.render(context);
    
    // Render health bar
    if (this.health > 0) {
      let health_bar_length = 20;
      let health_bar_width = 3;
      let health_bar_empty_color = 'red';
      let health_bar_full_color = 'green';

      let line_x = Math.round(this.location.x - (this.size / 2));
      let  line_y = Math.round(this.location.y - ((this.size / 2) + (health_bar_width*2)));

      const percentage = Math.round((100 / Constants.ZOMBALL_DEFAULT_HEALTH) * this.health);

      // if player health is less than default health
      if (this.health < Constants.ZOMBALL_DEFAULT_HEALTH) {
        context.beginPath();
        context.lineWidth = health_bar_width;
        context.strokeStyle = health_bar_empty_color;
        context.moveTo(line_x, line_y);
        context.lineTo(line_x + health_bar_length, line_y);
        context.stroke();

        // TODO: Work out this
        const new_health_bar_length = ((health_bar_length / 100) * percentage);

        context.beginPath();
        context.lineWidth = health_bar_width;
        context.strokeStyle = health_bar_full_color;
        context.moveTo(line_x, line_y);
        context.lineTo(line_x + new_health_bar_length, line_y);
        context.stroke();
      } else {
        context.beginPath();
        context.lineWidth = health_bar_width;
        context.strokeStyle = health_bar_full_color;
        context.moveTo(line_x, line_y);
        context.lineTo(line_x + health_bar_length, line_y);
        context.stroke();
      } 

    }
  }

  /**
   * Process the zomballs movements and actions
   */
  process(gameTime: number): void {
    super.process(gameTime);

    if (!this.world) return;
    if (!this.world.player) return;

    if (this.world.withinRange(this.location, this.world.player.location, (this.world.player.size / 2) + ( this.size / 2))) {
      this.world.player.takeDamage(this.damage_value);
      this.remove = true;
    }
  }

  /**
   * This sets the initial spawn location of a zomball
   */
  setSpawn() {
    let x: number = 0;
    let y: number = 0;

    // whether r not to restrain the zomball with
    // zomball_spawn_offset from the center, ie a zomball
    // wont spawn within zomball_spawn_offset pixels in any directioon
    // of the center
    let spawn_direction: number = 4;
    if (Constants.ZOMBALL_SPAWN_RESTRAINED == true) {
      spawn_direction = Random.int(0, 3);
    }
    switch (spawn_direction) {
      case 0: // north
        x = Random.int(0, Constants.GAME_SIZE.width);
        y = Random.int(0, Math.round(Constants.GAME_SIZE.height / 2)) - Constants.ZOMBALL_SPAWN_OFFSET;
        break;
      case 1: // east
        x = Random.int(0, Math.round(Constants.GAME_SIZE.width / 2)) + (Math.round(Constants.GAME_SIZE.width / 2) + Constants.ZOMBALL_SPAWN_OFFSET);
        y = Random.int(0, Constants.GAME_SIZE.height);
        break;
      case 2: // south
        x = Random.int(0, Constants.GAME_SIZE.width);
        y = Random.int(0, Math.round(Constants.GAME_SIZE.height / 2)) + (Math.round(Constants.GAME_SIZE.height / 2) + Constants.ZOMBALL_SPAWN_OFFSET);
        break;
      case 3: // west
        x = Random.int(0, Math.round(Constants.GAME_SIZE.width / 2)) - Constants.ZOMBALL_SPAWN_OFFSET;
        // x = rand.nextInt((game_size[0]/2).round())-zomball_spawn_offset;
        y = Random.int(0, Constants.GAME_SIZE.height);
        break;
      case 4:
        x = Random.int(0, Constants.GAME_SIZE.width);
        y = Random.int(0, Constants.GAME_SIZE.height);
        break;
    }
    this.location = new Vec2.Vector(x, y);
  }
}