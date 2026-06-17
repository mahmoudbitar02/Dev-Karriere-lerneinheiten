import { Outlet } from "react-router-dom";
import { ClickerContext, ClickerContext2 } from "../../context/ClickerContext";
import { useContext } from "react";

function FirstRoute() {
  const { count, setCount } = useContext(ClickerContext);
  const { count2, setCount2 } = useContext(ClickerContext2);

  return (
    <>
      <button onClick={() => setCount({ type: "DECREMENT", value: 1 })}>count: {count}</button>
      <button onClick={() => setCount2({ type: "INCREMENT", value: 1 })}>count2: {count2}</button>
      <button onClick={() => setCount2({ type: "RESET", value: 0 })}>Reset</button>
      Hello from first Route "Products List" <Outlet />
    </>
  );
}

export default FirstRoute;
