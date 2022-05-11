import Entity from "./entity";
import Player from "./player";
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

  target: Vec2.Vector | null = null;

  //Bullet bullet;
  target_color: Color | null = null;

  constructor() {
    //this.entities = new Map();
    this.target_color = new Color(255, 128, 128);
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

  // setTargetPosition(mouse_pos: Vec2.Vector) {
  //   if (Constants.GAME_FLIP_SIGHTS == true) {
  //     this.target = mouse_pos.subtract(this.player?.location)
  //     //this.target = (((mouse_pos-this.player.location)*1.5)*-1.0)+this.player.location;
  //   } else {
  //     this.target = mouse_pos;
  //   }
  // }

  fireBullet(): void {
    // Bullet bullet = new Bullet(this.player.location, this.target);
    // bullet.world = this;
    // this.add_entity(bullet);
    // this.target = null;
  }

  // drawTarget(context: CanvasRenderingContext2D) {
  //   if (this.target != null) {
  //     context.beginPath();
  //     context.lineWidth = 1;
  //     context.strokeStyle = this.target_color?.getHex();
  //     context.moveTo(this.player?.location?.x, this.player?.location?.y);
  //     context.lineTo(this.target.x, this.target.y);
  //     context.stroke();
  //   }
  // }

  // countEntities(type: string): number {
  //   let count = 0;
  //   for (var id in this.entities.keys()) {
  //     if (?type) {
  //       if (this.entities.get(id).name == type && this.entities.get(id).remove == false) {
  //         count++;
  //       }
  //     } else {
  //       count++;
  //     }
  //   }
  //   return count;
  // }

  removeEntity(id: number) {
    this.entities.delete(id);
  }

  spatter(context: CanvasRenderingContext2D, location: Vec2.Vector): void {
    let loop = 0;

    const x_min = Math.round(location.x-(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));
    const x_max = Math.round(location.x+(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));

    const y_max = Math.round(location.y+(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));
    const y_min = Math.round(location.y-(Constants.ZOMBALL_BLOOD_SPLATTER_SIZE/2));

    var rand = Math.random();
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


  // drawSpatter(location: Vec2.Vector): void {
  //   const bg_context: CanvasRenderingContext2D = this.background.getContext("2d");
  //   this.spatter(bg_context, location);
  // }


  render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {

    // build background
    // if (this.background == null) {
    //   this.background = new Element.html('<canvas/>');
    //   this.background.width = canvas.width;
    //   this.background.height = canvas.height;
    // }

    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.drawImage(this.background, 0, 0);

    // for (var id in this.entities.keys()) {
    //   this.entities.get(id).render(context);
    // }
    // draw target if any
    //this.drawTarget(context);
    this.player?.render(context);
  }

  // outOfRange(location: Vec2.Vector): boolean {
  //   let x = location.x;
  //   let y = location.y;
  //   if (x < (0-zomball_spawn_offset) || x > (game_size[0]+zomball_spawn_offset)) {
  //     return true;
  //   }
  //   if (y < (0-zomball_spawn_offset) || y > (game_size[1]+zomball_spawn_offset)) {
  //     return true;
  //   }
  //   return false;
  // }

  removeEntities(): void {
    const ids: number[] = [];
    for (let [key, entity] of this.entities) {
      if (entity.remove) {
        this.entities.delete(key);
      }
    }
  }

  process(gameTime: number) : void {
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

  // List get_entities_in_range(Entity entity, num range, [String type]) {
  //   List entities = [];
  //   for (num id in this.entities.keys) {
  //     if (entity.id != id) {
  //       if (this.within_range(entity.location, this.entities[id].location, range)) {
  //         if (?type) {
  //           if (this.entities[id].name == type) {
  //             entities.add(id);
  //           }
  //         } else {
  //           entities.add(id);
  //         }
  //       }
  //     }
  //   }
  //   return entities;
  // }

  // Entity get_close_entity(Entity entity, num range, [String type]) {
  //   for (num id in this.entities.keys) {
  //     if (entity.id != id) {
  //       if (this.within_range(entity.location, this.entities[id].location, range)) {
  //         if (?type) {
  //           if (this.entities[id].name == type) {
  //             return this.entities[id];
  //           }
  //         } else {
  //           return this.entities[id];
  //         }
  //       }
  //     }
  //   }
  //   return null;
  // }
}