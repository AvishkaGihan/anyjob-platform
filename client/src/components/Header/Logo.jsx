import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="w-8 h-8 rounded-full bg-prussian-blue-500 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-12">
        <span className="text-white font-bold text-lg">A</span>
      </div>
      <span className="text-xl font-bold transition-colors duration-300 text-white">
        AnyJob
      </span>
    </Link>
  );
};

export default Logo;
