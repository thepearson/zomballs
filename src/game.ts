class Game {

  canvas: HTMLCanvasElement | null = null;

  context: CanvasRenderingContext2D | null = null;

  secondsPassed: number = 0;

  oldTimestamp: DOMHighResTimeStamp = 0.0;
  
  fps: number = 0;

  constructor() {}

  setTarget(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
  }



  draw(timestamp: DOMHighResTimeStamp) {

    // Calculate the number of seconds passed since the last frame
    this.secondsPassed = (timestamp - this.oldTimestamp) / 1000;
    this.oldTimestamp = timestamp;

    if (this.context == null) return;

    // Calculate fps
    this.fps = Math.round(1 / this.secondsPassed);

    // Draw number to the screen
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, 200, 100);
    this.context.font = '12px Arial';
    this.context.fillStyle = 'black';
    this.context.fillText("FPS: " + this.fps, 10, 30);


    
    const randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0';
    this.context.fillStyle = randomColor;
    this.context.fillRect(100, 50, 200, 175);
  }
}

export default Game;