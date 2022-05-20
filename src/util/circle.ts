import * as Vec2 from 'vector2d';
import Color from './color';

/**
 * Draw a circle on the context given
 * 
 * @var {CanvasRenderingContext2D}  context   Canvas rendering context to draw with
 * @var {Vec2.Vector}               location  Where to draw the circle
 * @var {Color}                     color     Color to draw with
 * @var {number}                    size      Diameter in pixels
 * 
 * @returns {void}
 */
export default function drawCircle(context: CanvasRenderingContext2D, location: Vec2.Vector, color: Color, size: number): void {
  context.beginPath();
  context.arc(location.x, location.y, Math.round(size/2), 0, 2 * Math.PI, false);
  context.fillStyle = color.getHex();
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = color.getHex();
  context.stroke();
}
