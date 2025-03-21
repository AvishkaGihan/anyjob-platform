// components/Header/Header.js
import { useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "../shared/SearchBar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      {/* Navigation Section */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLinks />
          <SearchBar variant="dark" />
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md border border-white/60 text-white hover:bg-white/10"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-ut-orange-500 text-white rounded-lg hover:bg-ut-orange-600 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col items-end gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-white rounded transition-all duration-300 ${
                isMenuOpen ? "w-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
