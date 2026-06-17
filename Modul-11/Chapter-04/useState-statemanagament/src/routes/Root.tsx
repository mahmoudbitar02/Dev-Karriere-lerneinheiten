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
        <Link to="/user">
          <button className="sidebar-item">user</button>
        </Link>
        <Link to="/posts">
          <button className="sidebar-item">posts</button>
        </Link>
      </nav>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
