import { Link } from "react-router";
import SearchBar from "../ui/SearchBar";
import { POPULAR_CATEGORIES, FEATURE_BADGES } from "../../utils/constants";

const HeroContent = ({ isVisible }) => {
  return (
    <div className="order-2 lg:order-1">
      {/* Hero heading - refined typography */}
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="block text-white">
          Find <span className="text-selective-yellow-500">Expert</span>
        </span>
        <span className="block text-white mt-2">
          Services{" "}
          <span className="relative inline-block">
            Near You
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-green-500 rounded-full"></span>
          </span>
        </span>
      </h1>

      {/* Improved subheading */}
      <p
        className={`text-lg sm:text-xl mb-8 text-sky-blue-700 font-light leading-relaxed max-w-xl transition-all duration-1000 delay-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        Connect with trusted professionals for any job you need done, all in one
        platform. Quality service is just a click away.
      </p>

      {/* Hero search - aligned with site search */}
      <div
        className={`mb-8 transition-all duration-1000 delay-400 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="relative">
          <SearchBar variant="dark" className="w-full md:w-[400px] shadow-lg" />

          {/* Quick category selection */}
          <div className="mt-4 flex flex-wrap gap-2">
            {POPULAR_CATEGORIES.map((category) => (
              <Link
                key={category.name}
                to={`/services?category=${category.name.toLowerCase()}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white text-sm transition-colors duration-300"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`flex flex-wrap gap-5 transition-all duration-1000 delay-500 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Primary CTA Button - aligned with global button style */}
        <Link
          to="/services"
          className="group px-8 py-3.5 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-blue relative overflow-hidden"
        >
          <span className="relative z-10">Find Services</span>
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-blue-green-600 group-hover:h-full transition-all duration-300 ease-in-out -z-0"></span>
        </Link>

        {/* Secondary CTA Button */}
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

      {/* Feature badges - improved alignment and consistency */}
      <div
        className={`mt-10 flex flex-wrap gap-3 transition-all duration-1000 delay-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {FEATURE_BADGES.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-green-500/30"
          >
            <span className="text-lg">{badge.icon}</span>
            <span className="text-white text-sm font-medium">{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
