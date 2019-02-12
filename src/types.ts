export interface State {
  [key: string]: string;
}

export type StateAction = "PUSH" | "REPLACE" | "POP";
export type PopStateDirection = "BACK" | "FORWARD" | "UNKNOWN";

export interface HistoryStack {
  states: State[];
  index: number;
  lastAction: StateAction | null;
  popStateDirection: PopStateDirection | null;
}
