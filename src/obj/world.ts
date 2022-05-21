import Entity from "./entity";
import Player from "./player";
import Bullet from "./bullet";
import * as Vec2 from 'vector2d'; 
import Random from "../util/random";
import Color from "../util/color";
import drawCircle from "../util/circle";
import { Constants } from "../constants";


/**
 * Main world class, constructs everytrhing about the game world
 */
export default class World {

  /**
   * All game entities, these will all get 
   * processed and rendered every tick
   *
   * @var  {Map<number, Entity>}
   */
  entities: Map<number, Entity> = new Map();


  /**
   * Canvas element which is used for pre-rendering, 
   * more static things
   * 
   * @var {HTMLCanvasElement}
   */
  zomball_prerender: HTMLCanvasElement | null = null;

  /**
   * Canvas element used for prerendering dead zomballs
   * 
   * @var {HTMLCanvasElement}
   */
  zomball_dead_prerender: HTMLCanvasElement | null = null;

  /**
   * Canvas element used for rebndering the blood
   * 
   * @var {HTMLCanvasElement}
   */
  background: HTMLCanvasElement | null = null;

  /**
   * Player entity, handled slightly different from the 
   * other entities in the game.
   * 
   * @var {Player}
   */
  player: Player | null = null;

  /**
   * Player score
   * 
   * @var {number}
   */
  player_score: number = 0;

  /**
   * Entity incremental number, used to track unique numerical
   * id of all entities loaded into the world
   * 
   * @var {number}
   */
  entity_id: number = 0;

  /**
   * Should we draw the targets?
   * 
   * @var {boolean}
   */
  draw_target: boolean = false;

  /**
   * Target current location
   *
   * @var {Vec2.Vector}
   */
  target: Vec2.Vector | null = null;

  /**
   * Helper to calculate FPS and framerates
   * 
   * @var {number}
   */
  timeToDraw: number = 0;

  /**
   * Holder for deltatime
   * 
   * @var {number}
   */
  dt: number = 0;

  /**
   * Previous frame timestamp
   * 
   * @var {DOMHighResTimeStamp}
   */
  oldTimestamp: DOMHighResTimeStamp = 0.0;

  /**
   * Frames per second holder
   * 
   * @var {number}
   */
  fps: number = 0;

  /**
   * Show debug?
   * 
   * @var {boolean}
   */
  show_debug: boolean = true;

  /**
   * If we're drawing the targets, what is the base colour.
   * 
   * @var {Color}
   */
  target_color: Color = new Color(255, 128, 128);


  /**
   * Returns a game Entity
   *
   * @param   {number}  id  Entiti numerical ID
   *
   * @return  {Entity}
   */
  public getEntity(id: number): Entity | null {
    const entity = this.entities.get(id);
    if (entity) return entity;
    return null;
  }

  /**
   * Adds an entity to the game
   *
   * @param   {Entity}  entity  Entity to add to the gameworld
   *
   * @return  {void}
   */
  public addEntity(entity: Entity): void {
    entity.id = this.entity_id;
    entity.world = this;
    this.entities.set(this.entity_id, entity);
    this.entity_id += 1;
  }

  /**
   * Add's the player to the game
   *
   * @param   {Player}  player  Player to add.
   *
   * @return  {void}
   */
  public addPlayer(player: Player): void {
    player.id = 999999;
    player.world = this;
    this.player = player;
  }


  /**
   * Unset's the current target
   *
   * @return  {void}
   */
  public unsetTarget(): void {
    this.target = null;
  }


  /**
   * Sets the current target position
   *
   * @var {Vec2.Vector} mouse_pos   Target position
   * 
   * @return {void}
   */
  public setTargetPosition(mouse_pos: Vec2.Vector) : void {
    if (Constants.GAME_FLIP_SIGHTS == true) {
      if (this.player && this.player.location instanceof Vec2.Vector) {
        const vecCopy: Vec2.Vector = new Vec2.Vector(mouse_pos.x, mouse_pos.y);
        this.target = vecCopy.subtract(this.player.location)
      }
    } else {
      this.target = mouse_pos;
    }
  }

  /**
   * Fire's a bullet
   * 
   * TODO: Rename this to support multi-weapons
   *
   * @return  {void}
   */
  fireBullet(): void {
    if (this.player && this.player.location instanceof Vec2.Vector && this.target instanceof Vec2.Vector) {
      const dst = new Vec2.Vector(this.target.x, this.target.y);
      this.player.firePrimaryWeapon(dst);
    }
  }

  /**
   * Helper function to draw the targets
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public drawTarget(context: CanvasRenderingContext2D): void {
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


  /**
   * Return count of entites by type, if no type specified, 
   * then retunr count of all.
   *
   * @param   {string}  type  Entity Type|Name [optional]
   *
   * @return  {number}        Number of entities
   */
  public countEntities(type?: string): number {
    let count = 0;

    if (!type) return this.entities.size;

    for (let [key, entity] of this.entities) {
      if (entity.name == type && entity.remove == false) {
        count++;
      }
    }
    return count;
  }

  /**
   * Remove an entity fromt he game
   *
   * @param   {number}  id  Numebrical ID of the entity 
   *
   * @return  {void}
   */
  public removeEntity(id: number): void {
    this.entities.delete(id);
  }


  /**
   * Draws blood splatter
   *
   * @var {CanvasRenderingContext2D}  context   Canvas drawing context
   * @var {Vec2.Vector}               location  Where to draw the blood
   * 
   * @return {void}
   */
  public spatter(context: CanvasRenderingContext2D, location: Vec2.Vector): void {
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


  /**
   * Draws gunshot splatter
   *
   * @var {Vec2.Vector} 
   * @var {[type]}
   */
  public drawShotSplat(bloodVec: Vec2.Vector) {
    if (this.background) {
      const bg_context: CanvasRenderingContext2D | null = this.background.getContext("2d");

      let loop = 0;

      while (loop < 5) {
        const location = bloodVec.add(new Vec2.Vector(Random.int(-10, 10), Random.int(-10, 10)));
        const size = Random.int(0, (Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX - Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN) + Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN);
        const one = Random.int(0, 55);
        const two = Random.int(0, 128);
        const color: Color = new Color(one + 200, two, two, 0.8);
  
        drawCircle(bg_context!, location, color, size);
        loop += 1;
      }
    }
  }


  /**
   * Draw splatter calling wrapper function
   *
   * @var {Vec2.Vector}   location  WHere splatter will be drawn
   * 
   * @return {void}
   */
  public drawSpatter(location: Vec2.Vector): void {
    if (this.background) {
      const bg_context: CanvasRenderingContext2D | null = this.background.getContext("2d");
      if (bg_context) this.spatter(bg_context, location);
    }
  }


  /**
   * Draw the debugging panel
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public drawDebug(context: CanvasRenderingContext2D): void {
    // Draw number to the screen
    context.fillStyle = '#dddddd55';
    context.fillRect(Constants.GAME_SIZE.width - 75, Constants.GAME_SIZE.height - 100, 75, 100);
    context.font = '11px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + this.fps, Constants.GAME_SIZE.width - 70, Constants.GAME_SIZE.height - 85);
    context.fillText("ENT: " + this.entities.size, Constants.GAME_SIZE.width - 70, Constants.GAME_SIZE.height - 70);

  }

  /**
   * Draw the HUD gui
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
   *
   * @return  {void}
   */
  public drawGui(context: CanvasRenderingContext2D): void {
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


  /**
   * Process all the rendering for the world
   *
   * @param   {HTMLCanvasElement}         canvas   Canvas
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {

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


  /**
   * Check if a location vector is our of bounds
   *
   * @var {Vec2.Vector}   location  Location to check
   * 
   * @return {boolean}
   */
  public outOfRange(location: Vec2.Vector): boolean {
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


  /**
   * Garbage clean up, removes any entities that are schedule for removal
   *
   * @return  {void} 
   */
  public removeEntities(): void {
    const ids: number[] = [];
    for (let [key, entity] of this.entities) {
      if (entity.remove) {
        this.entities.delete(key);
      }
    }
  }


  /**
   * Do all world calculations
   *
   * @param   {number}               gameTime   DeltaTime
   * @param   {DOMHighResTimeStamp}  timestamp  Current time
   *
   * @return  {void}
   */
  public process(gameTime: number, timestamp: DOMHighResTimeStamp) : void {
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


  /**
   * Determine if vecor1 is witin range of vector2
   *
   * @var {Vec2.Vector} vector1   First location
   * @var {Vec2.Vector} vector2   Second location
   * @var {number}      range     Range in pixels
   * 
   * @return {boolean}
   */
  public withinRange(vector1: Vec2.Vector, vector2: Vec2.Vector, range: number) : boolean {
    const distance_vector: number = vector1.distance(vector2);
    if (distance_vector <= range) {
      return true;
    }
    return false;
  }

  /**
   * Get entities within range, get any entities within range of given entity.
   *
   * @param   {Entity}    queryEntity  Source entity
   * @param   {number}    range        Range from source entity
   * @param   {string[]}  type         type filter out specific types of entities
   *
   * @return  {Entity[]}               List of entities
   */
  public getEntitiesInRange(queryEntity: Entity, range: number, type?: string): Entity[] {
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

  /**
   * Get the closest entity to a given entity within a range
   *
   * @param   {Entity}  queryEntity  Source entity
   * @param   {number}  range        range
   * @param   {string}  type         type filter on type
   *
   * @return  {Entity}               Closest entity of type
   */
  public getCloseEntity(queryEntity: Entity, range: number, type?: string): Entity | null {
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
