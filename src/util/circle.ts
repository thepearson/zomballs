import * as Vec2 from 'vector2d';
import Color from './color';

export default function drawCircle(context: CanvasRenderingContext2D, location: Vec2.Vector, color: Color, size: number) {
  context.beginPath();
  context.arc(location.x, location.y, Math.round(size/2), 0, 2 * Math.PI, false);
  context.fillStyle = color.getHex();
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = color.getHex();
  context.stroke();
}
