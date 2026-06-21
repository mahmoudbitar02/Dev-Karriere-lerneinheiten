import { Link, Outlet } from "react-router-dom";
import "./Roots.css";

function Roots() {
  return (
    <div>
      <div className="root-body">
        <nav className="sidebar-container">
          <Link to="/">
            <button className="sidebar-item">Home</button>
          </Link>
          <Link to="products">
            <button className="sidebar-item">Products</button>
          </Link>
          <Link to="category">
            <button className="sidebar-item">Category</button>
          </Link>
        </nav>
      </div>

      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default Roots;
