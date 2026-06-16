export type ClickerState = number;

export type ClickerAction = {
  type: "INCREMENT" | "DECREMENT";
  value: number;
};

export function clickerReducer(prevState: ClickerState, action: ClickerAction) {
  switch (action.type) {
    case "INCREMENT":
      return prevState + action.value;
    case "DECREMENT":
      return prevState - action.value;
    default:
      return prevState;
  }
}
