import { determinePopStateDirection } from "./determinePopStateDirection";
import { HistoryStack, State, StateAction } from "./types";

export function getNewHistoryStack(
  historyStack: HistoryStack,
  state: State,
  action: StateAction
): HistoryStack {
  const { states, index } = historyStack;
  if (action === "REPLACE") {
    return {
      states: [...states.slice(0, index), state, ...states.slice(index + 1)],
      index,
      lastAction: "REPLACE",
      popStateDirection: null
    };
  }

  if (action === "PUSH") {
    if (JSON.stringify(states[index]) === JSON.stringify(state)) {
      return historyStack;
    }

    const newStates = [...states.slice(0, index + 1), state];

    return {
      states: newStates,
      index: newStates.length - 1,
      lastAction: "PUSH",
      popStateDirection: null
    };
  }

  const popStateDirection = determinePopStateDirection(historyStack, state);
  if (popStateDirection === "UNKNOWN") {
    console.warn(
      "Can't determine popState direction. History stack is breaked and will be recreated."
    );
  }

  const newHistoryStack: HistoryStack = {
    ...historyStack,
    lastAction: "POP",
    popStateDirection
  };

  switch (popStateDirection) {
    case "UNKNOWN":
      return {
        ...newHistoryStack,
        states: [state],
        index: 0
      };
    case "BACK":
      return {
        ...newHistoryStack,
        index: index - 1
      };
    case "FORWARD":
      return {
        ...newHistoryStack,
        index: index + 1
      };
  }
}
