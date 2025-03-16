import { useState, useEffect } from "react";
import { Link } from "react-router";
import SearchBar from "../ui/SearchBar";
import { NAV_ITEMS } from "../../utils/constants";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative overflow-hidden font-medium transition-colors duration-300 hover:text-blue-green-500 ${
                  scrolled ? "text-prussian-blue-400" : "text-white"
                }`}
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-green-500 transform translate-y-1 transition-transform duration-300 origin-left scale-x-0 hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          {/* Search bar - now visible in both scroll states */}
          <SearchBar
            variant={scrolled ? "light" : "dark"}
            className="transition-all duration-300"
          />

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

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-prussian-blue-500" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <SearchBar className="mb-6 w-full" />
          <nav className="flex flex-col gap-4 mb-6">
            {["Home", "Services", "About", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-prussian-blue-400 hover:text-blue-green-500 py-2 transition-colors duration-200 border-b border-sky-blue-800/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="py-2.5 text-center border border-blue-green-500 text-blue-green-500 rounded-lg hover:bg-blue-green-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2.5 text-center bg-ut-orange-500 text-white rounded-lg hover:bg-ut-orange-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
