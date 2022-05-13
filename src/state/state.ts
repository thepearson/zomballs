export default abstract class State {
  name: string = '';
  abstract do_actions(): void;
  abstract check_conditions(): string | null;
  abstract entry_actions(): void;
  abstract exit_actions(): void;
}