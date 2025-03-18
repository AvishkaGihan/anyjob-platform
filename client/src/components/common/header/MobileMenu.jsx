import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { toggleMobileMenu } from "../../../store/ui/uiSlice";
import { NAV_ITEMS } from "../../../utils/constants/navItems";

const MobileMenu = ({ mobileMenuOpen }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
    >
      <div className="container mx-auto px-4 py-6">
        <nav className="flex flex-col gap-4 mb-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-prussian-blue-400 hover:text-blue-green-500 py-2 transition-colors duration-200 border-b border-sky-blue-800/10"
              onClick={() => dispatch(toggleMobileMenu())}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <Link
            to="/login"
            className="py-2.5 text-center border border-blue-green-500 text-blue-green-500 rounded-lg hover:bg-blue-green-50 transition-colors duration-200"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="py-2.5 text-center bg-ut-orange-500 text-white rounded-lg hover:bg-ut-orange-600 transition-colors duration-200"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
