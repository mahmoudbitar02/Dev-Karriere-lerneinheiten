import { Link, Outlet } from "react-router-dom";
import "./root.css";
import Button from "@mui/material/Button";
function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <Link to="/">
          <Button variant="contained" className="sidebar-item">
            Home
          </Button>
        </Link>
        <Link to="/first">
          <Button variant="contained" className="sidebar-item">
            First
          </Button>
        </Link>
        <Link to="/second">
          <Button variant="contained" className="sidebar-item">
            second
          </Button>
        </Link>
        <Link to="/user">
          <Button variant="contained" className="sidebar-item">
            user
          </Button>
        </Link>
        <Link to="/posts">
          <Button variant="contained" className="sidebar-item">
            posts
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="contained" className="sidebar-item">
            Contact
          </Button>
        </Link>
        <Link to="/contactReducer">
          <Button variant="contained" className="sidebar-item">
            Contact Reducer
          </Button>
        </Link>
      </nav>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
