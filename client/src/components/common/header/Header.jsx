// src/components/common/Header/Header.js
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";

import { toggleMobileMenu, setScrolled } from "../../../store/ui/uiSlice";

import SearchBar from "../search/SearchBar";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const dispatch = useDispatch();
  const { mobileMenuOpen, scrolled } = useSelector((state) => state.ui);
  const [headerSearch, setHeaderSearch] = useState("");

  const handleHeaderSearch = (term) => {
    // Handle header-specific search logic
    console.log("Header search:", term);
    setHeaderSearch(term);
  };
  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 20));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-prussian-blue-500 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-12">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-prussian-blue-500" : "text-white"
            }`}
          >
            AnyJob
          </span>
        </Link>

        {/* Desktop Search & Navigation */}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavItems scrolled={scrolled} />
          <div className="hidden lg:flex items-center gap-8 flex-1 max-w-2xl">
            <SearchBar
              initialValue={headerSearch}
              onSearch={handleHeaderSearch}
              variant={scrolled ? "light" : "dark"}
              className="transition-all duration-300"
            />
          </div>
          <div className="flex gap-3">
            <Link
              to="/login"
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md ${
                scrolled
                  ? "border border-blue-green-500 text-blue-green-500 hover:bg-blue-green-50"
                  : "border border-white/60 text-white hover:bg-white/10"
              }`}
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
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-prussian-blue-500" : "text-white"
          }`}
          onClick={() => dispatch(toggleMobileMenu())}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                mobileMenuOpen
                  ? "w-6 rotate-45 translate-y-2 bg-prussian-blue-500"
                  : scrolled
                  ? "w-6 bg-prussian-blue-500"
                  : "w-6 bg-white"
              }`}
            ></span>
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                mobileMenuOpen
                  ? "w-0 opacity-0"
                  : scrolled
                  ? "w-4 bg-prussian-blue-500"
                  : "w-4 bg-white"
              }`}
            ></span>
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                mobileMenuOpen
                  ? "w-6 -rotate-45 -translate-y-2 bg-prussian-blue-500"
                  : scrolled
                  ? "w-6 bg-prussian-blue-500"
                  : "w-6 bg-white"
              }`}
            ></span>
          </div>
        </button>
      </div>

      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
    </header>
  );
};

export default Header;
