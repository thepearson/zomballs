/**
 * Abstract state class, devines the base "state" for use with 
 * state machine.
 */
export default abstract class State {

  /**
   * Name or key for the state, used to refer to the given state
   * from within the other states and state machine
   */
  name: string = '';

  /**
   * @param   {string}  name  State name/key
   */
  constructor(name: string) {
    this.name = name;
  }
  
  /**
   * Do things required of this state
   *
   * @return  {void}
   */
  public abstract doActions(): void;

  /**
   * Check the conditions, and change state if needed
   *
   * @return  {string|null}  new state if we need to change
   */
  public abstract checkConditions(): string | null;

  /**
   * Things to do when we first enter this state
   *
   * @return  {void}
   */
  public abstract entryActions(): void;

  /**
   * Things to do before we leave this state
   *
   * @return  {void} 
   */
  public abstract exitActions(): void;
}