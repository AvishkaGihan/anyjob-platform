import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { vendors } from "../../../utils/data/vendors";
import VendorCard from "../../common/vendorCard/VendorCard";
import NoResults from "./NoResults";
import { useRef } from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

const ServiceProviders = () => {
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  const [sortOption, setSortOption] = useState("recommended");
  const [isLoading, setIsLoading] = useState(false);

  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleSort = (e) => {
    setSortOption(e.target.value);
    // In a real application, you would sort the vendors here
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading more vendors
    setTimeout(() => {
      setIsLoading(false);
      // Add more vendors logic would go here
    }, 1000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-32 left-1/3 w-80 h-80 bg-selective-yellow-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-green-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`flex justify-between items-center mb-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <h2 className="text-2xl font-bold text-prussian-blue-500">
              Service Providers
            </h2>
            <p className="text-prussian-blue-300">
              {filteredVendors.length} professionals ready to help
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-prussian-blue-400">Sort by:</span>
            <select
              className="px-3 py-1.5 rounded-lg border border-sky-blue-600 text-prussian-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-green-500"
              value={sortOption}
              onChange={handleSort}
            >
              <option value="recommended">Recommended</option>
              <option value="rating">Highest Rating</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className={`transition-all duration-1000 delay-100 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <FilterSidebar />
          </div>

          <div className="lg:w-3/4">
            {filteredVendors.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVendors.map((vendor, index) => (
                    <div
                      key={vendor.id}
                      className={`transition-all duration-700 transform ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-12 opacity-0"
                      }`}
                      style={{ transitionDelay: `${150 * (index % 3)}ms` }}
                    >
                      <VendorCard vendor={vendor} />
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-12 text-center transition-all duration-1000 delay-500 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <button
                    className="px-8 py-3.5 bg-selective-yellow-500 text-prussian-blue-500 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-yellow disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleLoadMore}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Load More"}
                  </button>
                </div>
              </>
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
