import * as Vec2D from 'vector2d'
import World from './world';

export default class Entity {
  id: number = 0;
  size: number = 0;
  speed: number = 0;
  damage_value: number = 0;
  health: number = 0;
  name: string = '';
  location: Vec2D.Vector | null = null;
  destination: Vec2D.Vector | null = null;
  remove: boolean = false;

  world: World | null = null;
  //StateMachine brain;

  constructor(name: string) {
    this.name = name;
    //this.brain = new StateMachine();
  }

  render(context: CanvasRenderingContext2D) {
    // do stuff
  }

  process(gameTime: number) {
    //this.brain.think();
  }
}