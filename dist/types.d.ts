export interface State {
    [key: string]: string;
}
export declare type StateAction = "PUSH" | "REPLACE" | "POP";
export declare type PopStateDirection = "BACK" | "FORWARD" | "UNKNOWN";
export interface HistoryStack {
    states: State[];
    index: number;
    lastAction: StateAction | null;
    popStateDirection: PopStateDirection | null;
}
