import { Link, Outlet } from "react-router-dom";
import "./root.css";
function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <Link to="/">
          <button className="sidebar-item">Home</button>
        </Link>
        <Link to="/first">
          <button className="sidebar-item">First</button>
        </Link>
        <Link to="/second">
          <button className="sidebar-item">second</button>
        </Link>
      </nav>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
