import { Link } from "react-router";

const CTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-8">
      <Link
        to="/services"
        className="group px-8 py-3.5 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-blue relative overflow-hidden"
      >
        <span className="relative z-10">Find Services</span>
        <span className="absolute bottom-0 left-0 right-0 h-0 bg-blue-green-600 group-hover:h-full transition-all duration-300 ease-in-out -z-0" />
      </Link>
      <Link
        to="/signup"
        className="group px-8 py-3.5 bg-transparent border-2 border-selective-yellow-500 text-selective-yellow-500 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-yellow relative overflow-hidden"
      >
        <span className="relative z-10 group-hover:text-prussian-blue-500 transition-colors duration-300">
          Become a Provider
        </span>
        <span className="absolute bottom-0 left-0 right-0 h-0 bg-selective-yellow-500 group-hover:h-full transition-all duration-300 ease-in-out -z-0"></span>
      </Link>
    </div>
  );
};

export default CTAButtons;
