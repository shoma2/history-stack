import { HistoryStack, State, PopStateDirection } from "./types";

export function determinePopStateDirection(
  { states, index, lastAction }: HistoryStack,
  state: State
): PopStateDirection {
  if (states.length < 2 || index === 0) {
    return "UNKNOWN";
  }

  if (lastAction === "PUSH" || index === states.length - 1) {
    return "BACK";
  }

  const prevStateString = JSON.stringify(states[index - 1]);
  const nextStateString = JSON.stringify(states[index + 1]);

  if (prevStateString === nextStateString) {
    return "UNKNOWN";
  }

  const stateString = JSON.stringify(state);

  if (prevStateString === stateString) {
    return "BACK";
  }

  if (nextStateString === stateString) {
    return "FORWARD";
  }

  return "UNKNOWN";
}
