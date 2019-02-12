import { State, HistoryStack } from "./types";

export function createHistoryStack(initialState: State): HistoryStack {
  return {
    states: [initialState],
    index: 0,
    lastAction: null,
    popStateDirection: null
  };
}
