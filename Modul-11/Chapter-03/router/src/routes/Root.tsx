import { Outlet } from "react-router-dom";
import "./root.css";
function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <a href="/">
          <button className="sidebar-item">Home</button>
        </a>
        <a href="/first">
          <button className="sidebar-item">First</button>
        </a>
        <a href="/second">
          <button className="sidebar-item">second</button>
        </a>
      </nav>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
