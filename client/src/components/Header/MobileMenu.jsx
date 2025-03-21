// components/Header/MobileMenu.js
import { Link } from "react-router";
import NavLinks from "./NavLinks";
import SearchBar from "../shared/SearchBar";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen
          ? "max-h-screen opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-full"
      }`}
      role="menu"
      aria-expanded={isMenuOpen}
    >
      <div className="container mx-auto px-4 py-4 space-y-4">
        {/* Search Bar */}
        <SearchBar variant="light" className="w-full" />

        {/* Navigation Links */}
        <NavLinks isMobile />

        {/* Authentication Links */}
        <div className="flex flex-col gap-3 mt-4">
          <Link
            to="/login"
            className="py-2.5 text-center border border-blue-green-500 text-blue-green-500 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="py-2.5 text-center bg-ut-orange-500 text-white rounded-lg hover:bg-ut-orange-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
