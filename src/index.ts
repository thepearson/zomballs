import "./scss/styles.scss";

import Game from './game';

// Create game.
const game = new Game();

type GameInit = {
  canvas: HTMLCanvasElement, 
  context: CanvasRenderingContext2D
}


function init(target: string): GameInit | null {
  const canvas = document.querySelector<HTMLCanvasElement>(target);
  if (canvas == null) return null; // TODO: Create canvas if not exists
  
  const context = canvas.getContext('2d');

  return { 
    canvas: canvas as HTMLCanvasElement, 
    context: context as CanvasRenderingContext2D
  };
}


(() => {
  const gameTarget = init('#game-board');
  if (gameTarget !== null) {
    game.setTarget(gameTarget.canvas, gameTarget.context);
  }
  
  window.requestAnimationFrame(gameLoop)
  

  // Define gameloop and process.
  function gameLoop(timestamp: DOMHighResTimeStamp) {
    game.draw(timestamp);
  
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
  }  
})()


  

 
