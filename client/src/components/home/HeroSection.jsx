import { Link } from "react-router";
import { useEffect, useState, useRef } from "react";
import showcaseImage from "../../assets/images/service-showcase.jpg";
import SearchBar from "../ui/SearchBar";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Categories shown in the quick search buttons
  const popularCategories = [
    { name: "Plumbing", icon: "🔧" },
    { name: "Cleaning", icon: "🧹" },
    { name: "Electrical", icon: "💡" },
    { name: "Moving", icon: "📦" },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-16 bg-gradient-to-br from-prussian-blue-500 via-prussian-blue-600 to-prussian-blue-700 overflow-hidden"
    >
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-blue-green-500 opacity-10 blur-3xl"
          style={{ animation: "pulse 15s infinite ease-in-out" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-selective-yellow-500 opacity-5 blur-3xl"
          style={{ animation: "pulse 20s infinite ease-in-out" }}
        />
        <div
          className="absolute -top-32 left-0 w-72 h-72 rounded-full bg-ut-orange-500 opacity-5 blur-3xl"
          style={{ animation: "pulse 18s infinite ease-in-out" }}
        />

        {/* Floating particles - more subtle */}
        <div className="hidden lg:block">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-sky-blue-500 rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${3 + Math.random() * 7}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Fine grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-10 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Hero heading - refined typography */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
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
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Connect with trusted professionals for any job you need done, all
              in one platform. Quality service is just a click away.
            </p>

            {/* Hero search - aligned with site search */}
            <div
              className={`mb-8 transition-all duration-1000 delay-400 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative">
                <SearchBar
                  variant="dark"
                  className="w-full md:w-[400px] shadow-lg"
                />

                {/* Quick category selection */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {popularCategories.map((category) => (
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
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
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
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {[
                { icon: "⚡", text: "Fast & Reliable" },
                { icon: "🛡️", text: "Secure Payments" },
                { icon: "🔍", text: "Verified Providers" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-green-500/30"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-white text-sm font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image/illustration - improved positioning and effects */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/3] lg:aspect-video rounded-lg overflow-hidden relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-green-500/30 to-prussian-blue-600/30 animate-pulse"></div>
                )}
                <img
                  src={showcaseImage}
                  alt="Professional service providers from AnyJob"
                  onLoad={() => setImageLoaded(true)}
                  style={{ opacity: imageLoaded ? 1 : 0 }}
                  className="transition-opacity duration-500 w-full h-full object-cover"
                />
              </div>

              {/* Image overlay with caption */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-selective-yellow-500/20 flex items-center justify-center text-lg">
                    ⭐
                  </div>
                  <div>
                    <p className="font-medium text-prussian-blue-500">
                      Top-rated professionals
                    </p>
                    <p className="text-sm text-prussian-blue-300">
                      Over 10,000 verified service providers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements - enhanced visual interest */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-dashed border-selective-yellow-500/30 rounded-2xl -rotate-3"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ut-orange-500/20 rounded-full blur-md"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-green-500/20 rounded-full blur-md"></div>

            {/* Floating elements for visual interest */}
            <div className="absolute -right-2 top-1/4 bg-white p-2 rounded-lg shadow-lg transform rotate-6 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs">
                  ✓
                </div>
                <span className="text-sm font-medium text-prussian-blue-500">
                  Verified
                </span>
              </div>
            </div>
            <div className="absolute -left-4 bottom-1/3 bg-white p-2 rounded-lg shadow-lg transform -rotate-3 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-green-100 flex items-center justify-center text-blue-green-800 text-xs">
                  $
                </div>
                <span className="text-sm font-medium text-prussian-blue-500">
                  Best Price
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Improved curved divider with layered waves to match other sections */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative h-20">
          {/* First wave */}
          <svg
            className="absolute bottom-0 w-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,170.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          {/* Second wave */}
          <svg
            className="absolute bottom-0 w-full opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,165.3C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          {/* Main wave */}
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,122.7C672,107,768,117,864,144C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Refined scroll indicator */}
      <div
        className={`absolute bottom-14 left-1/2 -translate-x-1/2 z-50 transition-all duration-1000 delay-1000 pointer-events-none ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-xs uppercase tracking-wider font-light mb-2">
            Discover More
          </span>
          <div className="w-6 h-10 rounded-full border border-white/50 flex justify-center items-start p-1.5">
            <div className="w-1.5 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
