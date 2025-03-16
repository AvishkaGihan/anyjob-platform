import { useState, useEffect, useRef } from "react";
import ServiceCard from "../ui/ServiceCard";
import { categories } from "../../utils/data";

const ServiceCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const targetElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-sky-blue-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-green-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-selective-yellow-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-prussian-blue-500 relative inline-block">
            Service Categories
            <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-ut-orange-500 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-prussian-blue-400 max-w-2xl mx-auto text-lg">
            Browse through our diverse range of services to find exactly what
            you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${150 * (index % 4)}ms` }}
            >
              <ServiceCard service={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
