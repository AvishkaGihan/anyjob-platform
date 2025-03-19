import { useRef } from "react";
import { Link } from "react-router";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { SERVICE_CATEGORIES } from "../../../utils/constants/categories";
import { ChevronRight } from "lucide-react";

const ServiceCategories = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-sky-blue-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-prussian-blue-500 relative inline-block">
            Service Categories
            <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-ut-orange-500 transform -translate-x-1/2" />
          </h2>
          <p className="text-prussian-blue-400 max-w-2xl mx-auto text-lg">
            Browse through our diverse range of services to find exactly what
            you need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SERVICE_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${150 * (index % 4)}ms` }}
            >
              <Link
                to={`/services/${category.id}`}
                className="group bg-white rounded-xl shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-selective-yellow-500 opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="text-3xl mb-4 w-14 h-14 flex items-center justify-center bg-sky-blue-800 text-prussian-blue-500 rounded-lg group-hover:bg-selective-yellow-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                    {category.icon}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-prussian-blue-500 group-hover:text-blue-green-500 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-prussian-blue-300 text-sm group-hover:text-prussian-blue-400 transition-colors duration-300">
                    {category.description}
                  </p>

                  <div className="mt-4 flex items-center text-sm text-blue-green-500 font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
