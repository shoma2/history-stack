import { HistoryStack as HistoryStackType, State } from "./types";
export default class HistoryStack {
    private _historyStack;
    private _onChange;
    constructor(initialState: State);
    historyStack: HistoryStackType;
    onChange(handler: () => void): void;
    push(state: State): void;
    replace(state: State): void;
    pop(state: State): void;
    readonly prevState: State;
    readonly canGoBack: boolean;
    getStack(): HistoryStackType;
}
