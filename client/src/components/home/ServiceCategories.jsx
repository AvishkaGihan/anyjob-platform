import { useState, useEffect, useRef } from "react";
import ServiceCard from "../ui/ServiceCard";

const ServiceCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations when scrolled into view
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

  // Mock data - replace with API calls in production
  const categories = [
    {
      id: 1,
      title: "Plumbing",
      icon: "🔧",
      description: "Faucet repairs, pipe installations, and more",
    },
    {
      id: 2,
      title: "Cleaning",
      icon: "🧹",
      description: "Home, office, and commercial cleaning services",
    },
    {
      id: 3,
      title: "Babysitting",
      icon: "👶",
      description: "Childcare services by trusted professionals",
    },
    {
      id: 4,
      title: "Gardening",
      icon: "🌱",
      description: "Landscaping and garden maintenance",
    },
    {
      id: 5,
      title: "Electrical",
      icon: "💡",
      description: "Installations, repairs, and safety inspections",
    },
    {
      id: 6,
      title: "Tutoring",
      icon: "📚",
      description: "Academic help for all ages and subjects",
    },
    {
      id: 7,
      title: "Pet Care",
      icon: "🐕",
      description: "Dog walking, grooming, and sitting services",
    },
    {
      id: 8,
      title: "Moving",
      icon: "📦",
      description: "Help with packing, loading, and relocation",
    },
  ];

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

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button className="group px-8 py-4 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-green-600 hover:shadow-glow-blue transform hover:-translate-y-1 relative overflow-hidden">
            <span className="relative z-10">View All Categories</span>
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-blue-green-400 group-hover:h-full transition-all duration-300 ease-in-out -z-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
