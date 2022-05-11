import Player from "./obj/player";
import { Constants } from "./constants";
import World from "./obj/world";

export default class Game {
  
  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D;
  secondsPassed: number = 0;
  dt: number = 0;
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
  }

  process(timestamp: DOMHighResTimeStamp): void {

    // Calculate the number of seconds passed since the last frame
    this.dt = timestamp - this.oldTimestamp;
    this.secondsPassed = this.dt / 1000;
    this.oldTimestamp = timestamp;

    this.world?.process(this.dt);

    if (this.canvas == null) return;
    if (this.context == null) return;

    // Calculate fps
    this.fps = Math.round(1 / this.secondsPassed);
    this.world?.render(this.canvas, this.context);
  }
}
 