import Entity from "./entity";
import * as Vec2D from 'vector2d'
import { Constants } from "../constants";
import Color from "../util/color"


export default class Player extends Entity {

  color: Color | null;

  constructor() {
    super("player");

    this.location = new Vec2D.Vector(
      Constants.GAME_SIZE.width / 2, 
      Constants.GAME_SIZE.height / 2
    );

    this.size = Constants.PLAYER_SIZE;
    this.health = Constants.PLAYER_DEFAULT_HEALTH;
    this.color = new Color(128, 128, 255);
  }

  takeDamage(value: number) {
    this.health -= value;
  }

  /**
   * Render the zomball
   * 
   */
  render(context: CanvasRenderingContext2D) {
    super.render(context);

    if (!this.color) this.color = new Color(0, 0, 0);
    
    if (this.location == null) return;

    context.beginPath();
    context.arc(this.location.toObject().x, this.location.toObject().y, Math.round(this.size/2), 0, 2 * Math.PI);
    context.fillStyle = this.color.getHex();
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = this.color.getHex();
    context.stroke();

  }

  /**
   * Process the zomballs movements and actions
   */
  process(gameTime: number) {
    super.process(gameTime);
  }
}