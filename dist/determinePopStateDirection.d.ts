import { HistoryStack, State, PopStateDirection } from "./types";
export declare function determinePopStateDirection({ states, index, lastAction }: HistoryStack, state: State): PopStateDirection;
