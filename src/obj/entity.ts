import * as Vec2D from 'vector2d'
import World from './world';
import StateMachine from '../state/state_machine';

export default class Entity {
  id: number = 0;
  size: number = 0;
  speed: number = 0;
  damage_value: number = 0;
  health: number = 0;
  name: string = '';
  location: Vec2D.Vector = new Vec2D.Vector(0, 0);
  destination: Vec2D.Vector | undefined;
  remove: boolean = false;

  world: World | null = null;
  brain: StateMachine;

  constructor(name: string) {
    this.name = name;
    this.brain = new StateMachine();
  }

  render(context: CanvasRenderingContext2D) {
    // do stuff
  }

  process(gameTime: number) {
    this.brain.think();
  }
}