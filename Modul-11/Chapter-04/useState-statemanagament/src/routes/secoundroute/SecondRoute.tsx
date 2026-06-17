import { useContext } from "react";
import { ClickerContext, ClickerContext2 } from "../../context/ClickerContext";

function SecondRoute() {
  const { count, setCount } = useContext(ClickerContext);
  const { count2, setCount2 } = useContext(ClickerContext2);

  return (
    <>
      <p>button wurde {count} mal geklickt...</p>
      <button onClick={() => setCount({ type: "INCREMENT", value: 1 })}>{count}</button>
      <button onClick={() => setCount2({ type: "DECREMENT", value: 1 })}>{count2}</button>
      Hello from second Route
    </>
  );
}

export default SecondRoute;
