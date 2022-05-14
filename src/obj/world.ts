import Entity from "./entity";
import Player from "./player";
import Bullet from "./bullet";
import * as Vec2 from 'vector2d'; 
import Color from "../util/color";
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
  ;
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
      const bullet: Bullet = new Bullet(this.player?.location, this.target);
      bullet.world = this;
      this.addEntity(bullet);
      this.target = null;
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
      // Vector2 location = new Vector2((rand.nextInt(x_max-x_min)+x_min).toDouble(), (rand.nextInt(y_max-y_min)+y_min).toDouble());
      // num size = rand.nextInt(zomball_blood_splater_cicrle_max-zomball_blood_splater_cicrle_min)+zomball_blood_splater_cicrle_min;
      // num one = rand.nextInt(55);
      // num two = rand.nextInt(128);
      // Color color = new Color(one+200, 0, 0);
      // draw_circle(context, location, color, size);
      // loop += 1;
    }
  }


  drawSpatter(location: Vec2.Vector): void {
    //const bg_context: CanvasRenderingContext2D = this.background.getContext("2d");
    //this.spatter(bg_context, location);
  }

  drawDebug(context: CanvasRenderingContext2D): void {
    // Draw number to the screen
    context.fillStyle = '#dddddd';
    context.fillRect(0, 0, 75, 100);
    context.font = '11px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + this.fps, 5, 13);
    context.fillText("ENT: " + this.entities.size, 5, 25);

  }

  render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {

    // build background
    // if (this.background == null) {
    //   this.background = new Element.html('<canvas/>');
    //   this.background.width = canvas.width;
    //   this.background.height = canvas.height;
    // }

    context.clearRect(0, 0, canvas.width, canvas.height);
    //context.drawImage(this.background, 0, 0);

    for (let [key, entity] of this.entities) {
      entity.render(context)
    }

    // draw target if any
    if (this.draw_target) this.drawTarget(context);

    this.player?.render(context);

    if (this.show_debug) this.drawDebug(context);
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