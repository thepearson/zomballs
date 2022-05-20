import * as Vec2D from 'vector2d'
import World from './world';
import drawCircle from '../util/circle';
import StateMachine from '../state/state_machine';
import Color from '../util/color';


export default class Entity {
  id: number = 0;
  spawn_time: number = 0;
  size: number = 4;
  color: Color = new Color(0, 0, 0);
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
    this.spawn_time = Date.now();
    this.brain = new StateMachine();
  }

  render(context: CanvasRenderingContext2D) {
    drawCircle(context, this.location, this.color, this.size);
  }

  process(gameTime: number) {
    this.brain.think();
  }
}