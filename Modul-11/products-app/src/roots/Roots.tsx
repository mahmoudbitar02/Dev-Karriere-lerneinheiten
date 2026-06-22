import { Link, Outlet } from "react-router-dom";
import "./Roots.css";
import { Button } from "@mui/material";

function Roots() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <Link to="/">
          <Button variant="outlined" className="sidebar-item">
            Home
          </Button>
        </Link>
        <Link to="products">
          <Button variant="outlined" className="sidebar-item">
            Products
          </Button>
        </Link>
        <Link to="allcategories">
          <Button variant="outlined" className="sidebar-item">
            All Categories
          </Button>
        </Link>
      </nav>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Roots;
