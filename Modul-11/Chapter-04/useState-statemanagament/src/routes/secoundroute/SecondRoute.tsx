import { useContext } from "react";
import { ClickerContext } from "../../context/ClickerContext";

function SecondRoute() {
  const { count, setCount } = useContext(ClickerContext);
  return (
    <>
      <p>button wurde {count} mal geklickt...</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      Hello from second Route
    </>
  );
}

export default SecondRoute;
