import { createHistoryStack } from "./createHistoryStack";
import { getNewHistoryStack } from "./getNewHistoryStack";
import { HistoryStack as HistoryStackType, State } from "./types";

export default class HistoryStack {
  private _historyStack: HistoryStackType;
  private _onChange: (() => void) | null = null;

  constructor(initialState: State) {
    this._historyStack = createHistoryStack(initialState);
  }

  get historyStack() {
    return this._historyStack;
  }

  set historyStack(hs: HistoryStackType) {
    this._historyStack = hs;
    if (this._onChange) {
      this._onChange();
    }
  }

  onChange(handler: () => void) {
    this._onChange = handler;
  }

  push(state: State) {
    this.historyStack = getNewHistoryStack(this.historyStack, state, "PUSH");
  }

  replace(state: State) {
    this.historyStack = getNewHistoryStack(this.historyStack, state, "REPLACE");
  }

  pop(state: State) {
    this.historyStack = getNewHistoryStack(this.historyStack, state, "POP");
  }

  get prevState() {
    const { states, index } = this.historyStack;
    return states[index - 1] || null;
  }

  get canGoBack() {
    const { index } = this.historyStack;
    return index > 0;
  }

  getStack() {
    return this.historyStack;
  }
}
