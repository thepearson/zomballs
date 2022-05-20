import Player from "./obj/player";
import { Constants } from "./constants";
import World from "./obj/world";
import * as Vec2 from "vector2d";
import Zomball from "./obj/zomball";

/**
 * The top-level Game class, manages setup, base loop, and events
 */
export default class Game {
  
  /**
   * Event for the canvs.onMouseMove event
   */
  private mouse_move: any = null;

  /**
   * Event for the canvas.onMouseDown event
   */
  private mouse_down: any = null;

  /**
   * Game canvas
   */
  private canvas: HTMLCanvasElement | null = null;

  /**
   * Canvas redering context
   */
  private context: CanvasRenderingContext2D;

  /**
   * Timestamp when last frame was processed
   * used for calculating the deltaTime and
   * FPS.
   */
  private oldTimestamp: DOMHighResTimeStamp = 0.0;

  /**
   * Game world object
   */
  private world: World | undefined;

  /**
   * Holder for FPS, useful when needing to render 
   * this within the game environment
   */
  private fps: number = 0;

  /**
   * Timer helper for adding enemy entities
   */
  private last_run_add: DOMHighResTimeStamp = 0;

  /**
   * Constructor
   * 
   * @param   {HTMLCanvasElement}         canvas   This is the target canvas for our game
   * @param   {CanvasRenderingContext2D}  context  This is the contet for the canvas
   */
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    // Set canvas dimensions
    this.canvas.width = Constants.GAME_SIZE.width;
    this.canvas.height = Constants.GAME_SIZE.height;
  }

  /**
   * Bootstrap function, used for setting  
   * everything up prior to kicking off the renderLoop
   *
   * @return  {void}
   */
  public setUp(): void {

    // Create world
    this.world = new World();

    // Add player to game
    this.world.addPlayer(new Player(this.world));

    // Add events
    if (this.canvas instanceof HTMLCanvasElement) {
      this.mouse_move = this.canvas.addEventListener("mousemove", (event: MouseEvent) => {
        const mouse_pos = new Vec2.Vector(event.clientX, event.clientY);
        this.world?.setTargetPosition(mouse_pos);
      })
      this.mouse_down = this.canvas.addEventListener("mousedown", (event: MouseEvent) => {
        const mouse_pos = new Vec2.Vector(event.clientX, event.clientY);
        this.world?.setTargetPosition(mouse_pos);
        this.world?.player!.firePrimaryWeapon(mouse_pos);
      })
    }
  }

  /**
   * Add's an enemy to the world
   *
   * @return  {void}
   */
  private addZomball(): void {
    const zom = new Zomball();
    zom.setSpawn();
    this.world?.addEntity(zom);
  }

  /**
   * Processes any periodic timers
   *
   * @param   {DOMHighResTimeStamp}  timestamp  EPOC Milliseconds
   *
   * @return  {void}
   */
  private processTimers(timestamp: DOMHighResTimeStamp): void {

    // Add enemy timer logic
    const add_zom_time = Constants.ZOMBALL_SPAWN_NEW_ZOMBALL_DELAY;
    if (timestamp - this.last_run_add > add_zom_time) {
      this.addZomball();
      this.last_run_add = timestamp;
    }
  }

  /**
   * Process any game calculations, cascades down to the 
   * World object and passes off any entity based calcs to there.
   * Then trigger of all rendering for the world.
   *
   * @param   {DOMHighResTimeStamp}  timestamp  EPOC milliseconds
   *
   * @return  {void}
   */
  public process(timestamp: DOMHighResTimeStamp): void {

    // Short circut, these MUST exist
    if (this.canvas == null || this.context == null) return;

    // Process any timers
    this.processTimers(timestamp);

    // Calculate the number of seconds passed since the last frame
    const dt : number = timestamp - this.oldTimestamp;

    // Update timestamp for next process frame
    this.oldTimestamp = timestamp;

    // Trigger World calcs
    // TODO: async? Performance improvment at a later date.
    this.world?.process(dt, timestamp);

    // Render things
    this.world?.render(this.canvas, this.context);
  }
}
 