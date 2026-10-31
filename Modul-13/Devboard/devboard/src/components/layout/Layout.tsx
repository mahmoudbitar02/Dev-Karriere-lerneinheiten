import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <main className="mx-auto container py-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
