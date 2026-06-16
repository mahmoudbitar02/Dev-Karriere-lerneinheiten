import { Outlet } from "react-router-dom";
import { ClickerContext } from "../../context/ClickerContext";
import { useContext } from "react";

function FirstRoute() {
  const { count, setCount } = useContext(ClickerContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      Hello from first Route "Products List" <Outlet />
    </>
  );
}

export default FirstRoute;
