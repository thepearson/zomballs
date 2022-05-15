import "./scss/styles.scss";
import Game from './game';

/**
 * Query selector string 
 * for the canvas target
 */
const target = '#game-board';


(() => {
  const canvas = document.querySelector<HTMLCanvasElement>(target);

  if (canvas instanceof HTMLCanvasElement) {
    const context = canvas.getContext('2d');
    if (context == null) return; 

    // Create game.
    const game = new Game(canvas, context);
  
    // Define gameloop and process.
    const gameLoop = (timestamp: DOMHighResTimeStamp): void => {
      
      game.process(timestamp);
    
      // Keep requesting new frames
      window.requestAnimationFrame(gameLoop);
    }  
    
    game.setUp();
    window.requestAnimationFrame(gameLoop)
  }



})()


  

 
