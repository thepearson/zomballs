import * as Vec2 from 'vector2d'
import World from './world';
import drawCircle from '../util/circle';
import StateMachine from '../state/state_machine';
import Color from '../util/color';

/**
 * Core entity class, all objects within the game field are entities.
 */
export default class Entity {

  /**
   * Unique numerical ID, 
   */
  id: number = 0;

  /**
   * Time the entity was created, milliseconds since EPOC
   */
  spawn_time: number = 0;

  /**
   * Entity size, for the most part this is the diameter of the "ball"
   */
  size: number = 4;

  /**
   * Colour of the entity
   *
   * @return  {Color}  Colour object that the entity will be drawn as.
   */
  color: Color = new Color(0, 0, 0);

  /**
   * A default speed for the entity
   */
  speed: number = 0;

  /**
   * How much damage the entity does in helth points
   */
  damage_value: number = 0;

  /**
   * How much health the entity has in helth points
   */
  health: number = 0;

  /**
   * A name for the entity, aka type. Can be used to query for eneities of "name"
   */
  name: string = '';

  /**
   * Entity current location
   *
   * @return  {Vec2.Vector}  Vector object
   */
  location: Vec2.Vector = new Vec2.Vector(0, 0);

  /**
   * Entity destination
   *
   * @var {Vec2.Vector}
   */
  destination: Vec2.Vector | undefined;


  /**
   * If set to tru the entity will be disposed of next tick.
   */
  remove: boolean = false;

  /**
   * Ref to the game wold
   */
  world: World | null = null;

  /**
   * Entity "brain"
   * 
   * @var {StateMachine}
   */
  brain: StateMachine;

  /**
   * @param   {string}  name  name or type of entity
   */
  constructor(name: string) {
    this.name = name;
    this.spawn_time = Date.now();
    this.brain = new StateMachine();
  }

  /**
   * Sets Color
   *
   * @param   {Color}  color  Color to set on the entity
   *
   * @return  {void}
   */
  public setColor(color: Color): void {
    this.color = color;
  }

  /**
   * Sets the size of the entity
   *
   * @param   {number}  size  Size in pixels
   *
   * @return  {void}
   */
  public setSize(size: number): void {
    this.size = size;
  }

  /**
   * Sets the damage that the entity does
   *
   * @param   {number}  damage  Damage in health points
   *
   * @return  {void}
   */
  public setDamage(damage: number): void {
    this.damage_value = damage;
  }

  /**
   * Sets the speed of the entitiy
   *
   * @param   {number}  speed  Speed
   *
   * @return  {void}
   */
  public setSpeed(speed: number): void {
    this.speed = speed;
  }

  /**
   * Set's the locaiton of the entity
   *
   * @var {Vec2.Vector}   location Current location
   */
  public setLocation(location: Vec2.Vector): void {
    this.location = location;
  }

  /**
   * Sets the destination of the entity
   *
   * @var {Vec2.Vector}   destination Entity destination
   */
  public setDestination(destination: Vec2.Vector): void {
    this.destination = destination;
  }

  /**
   * Render the entity, by default all entities are treated as circles.
   *
   * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
   *
   * @return  {void}
   */
  public render(context: CanvasRenderingContext2D): void {
    drawCircle(context, this.location, this.color, this.size);
  }

  /**
   * Do any pre-render calculations
   *
   * @param   {number}  gameTime  deltaTime
   *
   * @return  {void}
   */
  public process(gameTime: number): void {
    this.brain.think();

    // If the entity is moving, and hasn't yet reached it's destination
    if (this.speed > 0 && !this.location.equals(this.destination!)) {
      const destinationClone = new Vec2.Vector(this.destination!.x, this.destination!.y);
      const vec_to_destination: Vec2.Vector = destinationClone.subtract(this.location);
      const distance_to_destination = vec_to_destination.length();
      const heading = vec_to_destination.normalize();
      const distance_traveled: number = Math.min(distance_to_destination, gameTime * this.speed);
      const travel_vector: Vec2.Vector = heading.mulS(distance_traveled);

      // new location is the current location
      // plus the distance traveled vector
      this.location = this.location.add(travel_vector);
    }
  }

  
}