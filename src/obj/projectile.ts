import Color from '../util/color';
import Entity from './entity'
import * as Vec2 from 'vector2d'

export default class Projectile extends Entity {

  type: string = "";

  constructor(type: string) {
    super(type);
    this.type = type;
  }

  setColor(color: Color) {
    this.color = color;
  }

  setSize(size: number) {
    this.size = size;
  }

  setDamage(damage: number) {
    this.damage_value = damage;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  setLocation(location: Vec2.Vector) {
    this.location = location;
  }

  setDestination(location: Vec2.Vector) {
    this.destination = location;
  }
}