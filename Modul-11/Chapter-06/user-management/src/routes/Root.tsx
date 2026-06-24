import { Link, Outlet } from "react-router-dom";
function Root() {
  return (
    <div>
      <div>Hallo</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
