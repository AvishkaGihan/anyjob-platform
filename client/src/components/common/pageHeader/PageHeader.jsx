import { useRef } from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

const PageHeader = ({ title, description }) => {
  const headerRef = useRef(null);
  const isVisible = useIntersectionObserver(headerRef, { threshold: 0.1 });

  return (
    <div
      ref={headerRef}
      className="pt-20 bg-gradient-to-br from-prussian-blue-500 via-prussian-blue-600 to-prussian-blue-700 text-white relative overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-blue-green-500 opacity-10 blur-3xl"
          style={{ animation: "pulse 15s infinite ease-in-out" }}
        />
        <div
          className="absolute -left-32 bottom-0 w-72 h-72 rounded-full bg-selective-yellow-500 opacity-5 blur-3xl"
          style={{ animation: "pulse 18s infinite ease-in-out" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-10 pb-28 relative z-10">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {title}
          <div
            className={`mt-4 h-1.5 w-24 bg-ut-orange-500 rounded-full transition-all duration-1000 delay-300 transform ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
        </h1>

        <p
          className={`text-lg sm:text-xl mb-8 text-sky-blue-700 font-light leading-relaxed max-w-xl transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Subtle wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,165.3C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;
