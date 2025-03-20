import { Link, useLocation } from "react-router";

const NavLinks = ({ isMobile = false }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `font-medium transition-colors duration-300 ${
      isActive(path)
        ? "text-selective-yellow-500"
        : isMobile
        ? "text-prussian-blue-400 border-b border-sky-blue-800/10"
        : "text-white hover:text-blue-green-500"
    }`;

  return (
    <div
      className={
        isMobile
          ? "flex flex-col space-y-4"
          : "hidden lg:flex items-center gap-8"
      }
    >
      <Link to="/" className={linkClass("/")}>
        Home
      </Link>
      <Link to="/services" className={linkClass("/services")}>
        Services
      </Link>
      <Link to="/about" className={linkClass("/about")}>
        About
      </Link>
      <Link to="/contact-us" className={linkClass("/contact-us")}>
        Contact Us
      </Link>
    </div>
  );
};

export default NavLinks;
