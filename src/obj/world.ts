import Entity from "./entity";
import Player from "./player";
import Bullet from "./bullet";
import * as Vec2 from 'vector2d'; 
import Random from "../util/random";
import Color from "../util/color";
import drawCircle from "../util/circle";
import { Constants } from "../constants";

export default class World {
  entities: Map<number, Entity> = new Map();

  zomball_prerender: HTMLCanvasElement | null = null;
  zomball_dead_prerender: HTMLCanvasElement | null = null;
  background: HTMLCanvasElement | null = null;

  player: Player | null = null;

  player_score: number = 0;
  entity_id: number = 0;

  draw_target: boolean = false;
  target: Vec2.Vector | null = null;

  timeToDraw: number = 0;
  dt: number = 0;
  oldTimestamp: DOMHighResTimeStamp = 0.0;
  fps: number = 0;

  show_debug: boolean = true;

  //Bullet bullet;
  target_color: Color = new Color(255, 128, 128);

  constructor() {
    //this.entities = new Map();
    //this.target_color = new Color(255, 128, 128);
  }

  getEntity(id: number): Entity | null {
    const entity = this.entities.get(id);
    if (entity) return entity;
    return null;
  }

  addEntity(entity: Entity): void {
    entity.id = this.entity_id;
    entity.world = this;
    this.entities.set(this.entity_id, entity);
    this.entity_id += 1;
  }

  addPlayer(player: Player): void {
    player.id = 999999;
    player.world = this;
    this.player = player;
  }

  unsetTarget(): void {
    this.target = null;
  }

  setTargetPosition(mouse_pos: Vec2.Vector) : void {
    if (Constants.GAME_FLIP_SIGHTS == true) {
      if (this.player && this.player.location instanceof Vec2.Vector) {
        const vecCopy: Vec2.Vector = new Vec2.Vector(mouse_pos.x, mouse_pos.y);
        this.target = vecCopy.subtract(this.player.location)
      }
      //this.target = (((mouse_pos-this.player.location)*1.5)*-1.0)+this.player.location;
    } else {
      this.target = mouse_pos;
    }
  }

  fireBullet(): void {
    if (this.player && this.player.location instanceof Vec2.Vector && this.target instanceof Vec2.Vector) {
      const dst = new Vec2.Vector(this.target.x, this.target.y);
      this.player.firePrimaryWeapon(dst);
      // const bullet: Bullet = new Bullet(this.player?.location, this.target);
      // bullet.world = this;
      // this.addEntity(bullet);
      // this.target = null;
    }
  }

  drawTarget(context: CanvasRenderingContext2D) {
    if (this.target != null) {
      if (this.player instanceof Player)  {
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = this.target_color?.getHex();
        context.moveTo(this.player?.location?.x, this.player?.location?.y);
        context.lineTo(this.target.x, this.target.y);
        context.stroke();
      }
    }
  }

  countEntities(type?: string): number {
    let count = 0;

    if (!type) return this.entities.size;

    for (let [key, entity] of this.entities) {
      if (entity.name == type && entity.remove == false) {
        count++;
      }
    }
    return count;
  }

  removeEntity(id: number) {
    this.entities.delete(id);
  }

  spatter(context: CanvasRenderingContext2D, location: Vec2.Vector): void {
    let loop = 0;

    const x_min = Math.round(location.x-(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));
    const x_max = Math.round(location.x+(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));

    const y_max = Math.round(location.y+(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));
    const y_min = Math.round(location.y-(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));

    //var rand = Math.random();
    while (loop < Constants.ZOMBALL_BLOOD_SPLATTER_SIZE) {
      const location = new Vec2.Vector(Random.int(0, (x_max - x_min)) + x_min, Random.int(0, (y_max - y_min)) + y_min);
      const size = Random.int(0, (Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX - Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN) + Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN);
      const one = Random.int(0, 55);
      const two = Random.int(0, 128);
      const color: Color = new Color(one + 200, two, two, 0.8);

      drawCircle(context, location, color, size);
      loop += 1;
    }
  }

  drawShotSplat(bloofVec: Vec2.Vector) {
    if (this.background) {
      const bg_context: CanvasRenderingContext2D | null = this.background.getContext("2d");

      let loop = 0;

      while (loop < 5) {
        const location = bloofVec.add(new Vec2.Vector(Random.int(-10, 10), Random.int(-10, 10)));
        const size = Random.int(0, (Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX - Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN) + Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN);
        const one = Random.int(0, 55);
        const two = Random.int(0, 128);
        const color: Color = new Color(one + 200, two, two, 0.8);
  
        drawCircle(bg_context!, location, color, size);
        loop += 1;
      }
    }
  }

  drawSpatter(location: Vec2.Vector): void {
    if (this.background) {
      const bg_context: CanvasRenderingContext2D | null = this.background.getContext("2d");
      if (bg_context) this.spatter(bg_context, location);
    }
  }

  drawDebug(context: CanvasRenderingContext2D): void {
    // Draw number to the screen
    context.fillStyle = '#dddddd55';
    context.fillRect(Constants.GAME_SIZE.width - 75, Constants.GAME_SIZE.height - 100, 75, 100);
    context.font = '11px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + this.fps, Constants.GAME_SIZE.width - 70, Constants.GAME_SIZE.height - 85);
    context.fillText("ENT: " + this.entities.size, Constants.GAME_SIZE.width - 70, Constants.GAME_SIZE.height - 70);

  }

  drawGui(context: CanvasRenderingContext2D) {
    var health_bar_length = Constants.GAME_SIZE.width - 30;
    var health_bar_width = 30;
    var health_bar_empty_color = "#ff5555bb";
    var health_bar_full_color = "#55FF55bb";

    var line_x = 15; //Math.round( - (this.size / 2));
    var line_y = 30; //Math.round(this.location.y - ((this.size / 2) + (health_bar_width * 2)));

    // if player health is less than default health
    context.beginPath();
    context.lineWidth = health_bar_width;
    context.strokeStyle = health_bar_empty_color;
    context.moveTo(line_x, line_y);
    context.lineTo(line_x + health_bar_length, line_y);
    context.stroke();

    health_bar_length = Math.round((this.player!.health/100) * health_bar_length);

    if (this.player!.health > 0) {
      context.beginPath();
      context.lineWidth = health_bar_width;
      context.strokeStyle = health_bar_full_color;
      context.moveTo(line_x, line_y);
      context.lineTo(line_x+health_bar_length, line_y);
      context.stroke();
    }

    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText(`Score: ${this.player_score}`, 20, 35);
  }

  render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {

    // build background
    if (this.background == null) {
      this.background = document.createElement('canvas');
      this.background.width = canvas.width;
      this.background.height = canvas.height;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(this.background, 0, 0);

    for (let [key, entity] of this.entities) {
      entity.render(context)
    }

    // draw target if any
    if (this.draw_target) this.drawTarget(context);

    this.player?.render(context);

    if (this.show_debug) this.drawDebug(context);

    this.drawGui(context);
  }

  outOfRange(location: Vec2.Vector): boolean {
    let x = location.x;
    let y = location.y;
    if (x < (0 - Constants.ZOMBALL_SPAWN_OFFSET) || x > (Constants.GAME_SIZE.width + Constants.ZOMBALL_SPAWN_OFFSET)) {
      return true;
    }
    if (y < (0 - Constants.ZOMBALL_SPAWN_OFFSET) || y > (Constants.GAME_SIZE.height + Constants.ZOMBALL_SPAWN_OFFSET)) {
      return true;
    }
    return false;
  }

  removeEntities(): void {
    const ids: number[] = [];
    for (let [key, entity] of this.entities) {
      if (entity.remove) {
        this.entities.delete(key);
      }
    }
  }

  process(gameTime: number, timestamp: DOMHighResTimeStamp) : void {
    // Calculate the number of seconds passed since the last frame
    this.timeToDraw = gameTime / 1000;

    // Calculate fps
    this.fps = Math.round(1 / this.timeToDraw);

    this.removeEntities();
    for (let [key, entity] of this.entities) {
      entity.process(gameTime)
    }
    this.player?.process(gameTime);
  }

  withinRange(vector1: Vec2.Vector, vector2: Vec2.Vector, range: number) : boolean {
    const distance_vector: number = vector1.distance(vector2);
    if (distance_vector <= range) {
      return true;
    }
    return false;
  }

  getEntitiesInRange(queryEntity: Entity, range: number, type?: string): Entity[] {
    const entities: Entity[] = [];
    for (let [key, entity] of this.entities) {
      if (queryEntity.id != key) { 
        if (this.withinRange(queryEntity.location, entity.location, range)) {
          if (type) {
            if (entity.name == type) {
              entities.push(entity);
            }
          } else {
            entities.push(entity)
          }
        }
      }
    }
    return entities;
  }

  getCloseEntity(queryEntity: Entity, range: number, type?: string): Entity | null {
    for (let [key, entity] of this.entities) {
      // Exclude the queried entity
      if (queryEntity.id != key) { 
        if (this.withinRange(queryEntity.location, entity.location, range)) {
          if (type) {
            if (entity.name == type) {
              return entity;
            }
          } else {
            return entity;
          }
        }
      }
    }
    return null;
  }
}