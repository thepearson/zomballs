import Player from "./obj/player";
import { Constants } from "./constants";
import World from "./obj/world";
import * as Vec2 from "vector2d";

export default class Game {
  
  mouse_move: any = null;
  mouse_down: any = null;
  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D;
  //secondsPassed: number = 0;
  //dt: number = 0;
  oldTimestamp: DOMHighResTimeStamp = 0.0;
  world: World | undefined;
  fps: number = 0;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.canvas.width = Constants.GAME_SIZE.width;
    this.canvas.height = Constants.GAME_SIZE.height;
  }

  setUp() {
    this.world = new World();
    this.world.addPlayer(new Player());

    // Add events
    if (this.canvas instanceof HTMLCanvasElement) {
      this.mouse_move = this.canvas.addEventListener("mousemove", (event: MouseEvent) => {
        const mouse_pos = new Vec2.Vector(event.clientX, event.clientY);
        this.world?.setTargetPosition(mouse_pos);
      })
      this.mouse_down = this.canvas.addEventListener("mousedown", (event: MouseEvent) => {
        this.world?.fireBullet();
      })
    }
  }

  process(timestamp: DOMHighResTimeStamp): void {

    // Calculate the number of seconds passed since the last frame
    const dt : number = timestamp - this.oldTimestamp;
    //this.secondsPassed = dt / 1000;
    this.oldTimestamp = timestamp;

    this.world?.process(dt, timestamp);

    if (this.canvas == null) return;
    if (this.context == null) return;

    // Calculate fps
    //this.fps = Math.round(1 / this.secondsPassed);
    this.world?.render(this.canvas, this.context);
  }
}
 