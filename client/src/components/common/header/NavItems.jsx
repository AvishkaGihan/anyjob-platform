import { Link } from "react-router";
import { NAV_ITEMS } from "../../../utils/constants/navItems";

const NavItems = ({ scrolled }) => {
  return (
    <nav className="flex gap-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`relative overflow-hidden font-medium transition-colors duration-300 hover:text-blue-green-500 ${scrolled ? "text-prussian-blue-400" : "text-white"
            }`}
        >
          <span>{item.name}</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-green-500 transform translate-y-1 transition-transform duration-300 origin-left scale-x-0 hover:scale-x-100"></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
