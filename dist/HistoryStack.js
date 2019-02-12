"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createHistoryStack_1 = require("./createHistoryStack");
const getNewHistoryStack_1 = require("./getNewHistoryStack");
class HistoryStack {
    constructor(initialState) {
        this._onChange = null;
        this._historyStack = createHistoryStack_1.createHistoryStack(initialState);
    }
    get historyStack() {
        return this._historyStack;
    }
    set historyStack(hs) {
        this._historyStack = hs;
        if (this._onChange) {
            this._onChange();
        }
    }
    onChange(handler) {
        this._onChange = handler;
    }
    push(state) {
        this.historyStack = getNewHistoryStack_1.getNewHistoryStack(this.historyStack, state, "PUSH");
    }
    replace(state) {
        this.historyStack = getNewHistoryStack_1.getNewHistoryStack(this.historyStack, state, "REPLACE");
    }
    pop(state) {
        this.historyStack = getNewHistoryStack_1.getNewHistoryStack(this.historyStack, state, "POP");
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
exports.default = HistoryStack;
//# sourceMappingURL=HistoryStack.js.map