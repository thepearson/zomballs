import State from './state';

/**
 * The state machine is the brain for a given entity.
 */
 export default class StateMachine {

  // Map holds all possible states for the entity
  states: Map<string, State>;

  // This is the name of the active state
  active_state: string | null;

  /**
   * Construct
   */
  constructor() {
    this.states = new Map();
    this.active_state = null;
  }

  /**
   * Add a state to the state machine
   *
   * @param   {State}  state  A valid state
   *
   * @return  {void}
   */
  addState(state: State): void {
    this.states.set(state.name, state);
  }


  /**
   * this processes the actions for the current state
   * it will also check for any conditions on the existing
   * state that could change the state of the entity, thus
   * altering the state of the entity
   *
   * @return  {void}    [return description]
   */
  think(): void {
    const currentState = this.getActiveState()
    if (currentState) {
      currentState.doActions();
      const newState = currentState.checkConditions();
      if (newState) {
        this.setState(newState);
      }
    }
  }


  /**
   * Returns the active state or null if none active
   *
   * @return  {State}   [return description]
   */
  getActiveState(): State | null {
    if (this.active_state == null) return null;
    const activeState = this.states.get(this.active_state);
    if (activeState) return activeState;
    return null;
  }


  /**
   * Sets the active state, runs any exit actions for the old active
   *  state (if any) and runs entry actions for the new state.
   *
   * @param   {string}  state_name  State name or key to set as the active state
   *
   * @return  {void}
   */
  setState(state_name: string): void {
    const currentState = this.getActiveState()
    if (currentState) currentState.exitActions()
  
    this.active_state = state_name;
    const newState = this.getActiveState();
    if (newState) newState.entryActions();
  }

}