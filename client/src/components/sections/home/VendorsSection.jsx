import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import VendorCard from "../../common/vendorCard/VendorCard";
import { vendors } from "../../../utils/data/vendors";

const VendorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-sky-blue-900 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-ut-orange-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-green-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`mb-16 text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-prussian-blue-500 relative inline-block">
            Featured Vendors
            <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-selective-yellow-500 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-prussian-blue-400 max-w-2xl mx-auto text-lg">
            Connect with our top-rated professionals ready to help with any
            project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.slice(0, 4).map((vendor, index) => (
            <div
              key={vendor.id}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${150 * (index % 4)}ms` }}
            >
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            to="/vendors"
            className="group px-8 py-4 bg-selective-yellow-500 text-prussian-blue-500 font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-yellow transform hover:-translate-y-1 relative overflow-hidden inline-block"
          >
            <span className="relative z-10">View All Vendors</span>
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-selective-yellow-600 group-hover:h-full transition-all duration-300 ease-in-out -z-0"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;
