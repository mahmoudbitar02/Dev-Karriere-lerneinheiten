import { Outlet } from "react-router-dom";

function FirstRoute() {
  return (
    <>
      Hello from first Route "Products List" <Outlet />
    </>
  );
}

export default FirstRoute;
