export default abstract class State {
  name: string = '';

  constructor(name: string) {
    this.name = name;
  }
  
  abstract doActions(): void;
  abstract checkConditions(): string | null;
  abstract entryActions(): void;
  abstract exitActions(): void;
}