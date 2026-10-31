import { LayoutDashboard, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto py-5 flex justify-between">
        <Link to="/boards" className="text-primary flex flex-row gap-2 text-lg items-center">
          <LayoutDashboard className="w-5 h-5" /> Devkarriere
        </Link>

        <Link to="/profile" className="hover:text-primary text-secondary flex flex-row gap-2 text-lg items-center">
          <UserCircle className="w-5 h-5" /> <span className="text-secondary">Profil</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
