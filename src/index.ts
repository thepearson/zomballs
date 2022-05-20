import "./scss/styles.scss";
import Game from './game';

/**
 * Query selector string 
 * for the canvas target
 */
const target = '#game-board';



(() => {
  // This is our target canvas
  const canvas = document.querySelector<HTMLCanvasElement>(target);
  if (canvas instanceof HTMLCanvasElement) {

    // Using the 2D context
    const context = canvas.getContext('2d');
    if (context == null) return; 

    // Create Game object.
    const game = new Game(canvas, context);
  
    // Define gameloop and process.
    const gameLoop = (timestamp: DOMHighResTimeStamp): void => {
      
      game.process(timestamp);
    
      // Keep requesting new frames
      window.requestAnimationFrame(gameLoop);
    }  

    // Bootstrap any setup stuff
    game.setUp();

    // Start the renderloop.
    window.requestAnimationFrame(gameLoop)
  }
})()


  

 
