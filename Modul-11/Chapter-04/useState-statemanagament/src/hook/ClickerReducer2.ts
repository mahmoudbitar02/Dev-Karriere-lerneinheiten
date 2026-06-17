type State = number;

export type Action = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
  value: number;
};

function ClickerReducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - action.value;

    case "INCREMENT":
      return 0;

    default:
      return action.value;
  }
}

export default ClickerReducer;
