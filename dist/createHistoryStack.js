"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createHistoryStack(initialState) {
    return {
        states: [initialState],
        index: 0,
        lastAction: null,
        popStateDirection: null
    };
}
exports.createHistoryStack = createHistoryStack;
//# sourceMappingURL=createHistoryStack.js.map