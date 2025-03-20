import React, { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  ChevronDown,
  Flame,
  Sliders,
  X,
  Check,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "../../../utils/constants/categories";

const FilterSidebar = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(true);
  const [locationMenuOpen, setLocationMenuOpen] = useState(true);
  const [priceMenuOpen, setPriceMenuOpen] = useState(true);
  const [ratingMenuOpen, setRatingMenuOpen] = useState(true);
  const [activeFilters, setActiveFilters] = useState([]);
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const toggleFilter = (type, value) => {
    const filterKey = `${type}:${value}`;

    if (activeFilters.includes(filterKey)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterKey));
    } else {
      setActiveFilters([...activeFilters, filterKey]);
    }
  };

  const resetAllFilters = () => {
    setActiveFilters([]);
    setSelectedRating(null);
  };

  // Animation helpers
  const toggleSection = (setter, value) => {
    setter(!value);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-sky-blue-800/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-prussian-blue-500 flex items-center gap-2">
          <Sliders className="h-5 w-5 text-blue-green-500 transition-transform duration-300 ease-in-out transform rotate-0 group-hover:rotate-90" />
          <span>Filters</span>
        </h2>
        <button
          className="text-blue-green-500 text-sm font-medium hover:text-blue-green-700 transition-colors flex items-center gap-1 group"
          onClick={resetAllFilters}
        >
          <X className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Active filters display */}
      {activeFilters.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {activeFilters.map((filter) => {
            const [type, value] = filter.split(":");
            return (
              <div
                key={filter}
                className="px-2 py-1 bg-sky-blue-800/10 rounded-full flex items-center gap-1 text-sm text-prussian-blue-400 group hover:bg-ut-orange-500/10 transition-all duration-300"
              >
                <span>{value}</span>
                <button
                  onClick={() => toggleFilter(type, value)}
                  className="hover:bg-prussian-blue-500/10 rounded-full h-4 w-4 flex items-center justify-center transition-all"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Service Category */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10 hover:border-blue-green-500/50 transition-colors duration-300"
          onClick={() => toggleSection(setCategoryMenuOpen, categoryMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <Search className="text-blue-green-500" size={18} />
            <span className="font-medium">Category</span>
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ease-out text-prussian-blue-400 ${
              categoryMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            categoryMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 space-y-2">
            {SERVICE_CATEGORIES.slice(0, 6).map((category) => {
              const isActive = activeFilters.includes(
                `category:${category.title}`
              );
              return (
                <label
                  key={category.id}
                  className="flex items-center gap-2 cursor-pointer hover:bg-sky-blue-800/5 p-1 rounded-md transition-all duration-200"
                  onMouseEnter={() =>
                    setHoveredFilter(`category-${category.id}`)
                  }
                  onMouseLeave={() => setHoveredFilter(null)}
                >
                  <div className="relative h-5 w-5 flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none h-5 w-5 rounded border-2 border-sky-blue-600 checked:border-blue-green-500 transition-colors duration-200"
                      onChange={() => toggleFilter("category", category.title)}
                      checked={isActive}
                    />
                    <Check
                      size={14}
                      className={`absolute text-blue-green-500 transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-prussian-blue-400 transition-colors duration-200 ${
                      isActive ? "text-blue-green-500" : ""
                    }`}
                  >
                    {category.title}
                    <span
                      className={`transition-all duration-300 border-b border-blue-green-500 ${
                        hoveredFilter === `category-${category.id}`
                          ? "inline-block w-full"
                          : "inline-block w-0"
                      }`}
                    ></span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10 hover:border-ut-orange-500/50 transition-colors duration-300"
          onClick={() => toggleSection(setLocationMenuOpen, locationMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <MapPin className="text-ut-orange-500" size={18} />
            <span className="font-medium">Location</span>
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ease-out text-prussian-blue-400 ${
              locationMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            locationMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4">
            <div className="relative group">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-blue-400 group-hover:text-ut-orange-500 transition-colors duration-300"
                size={16}
              />
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full py-2.5 pl-9 pr-3 bg-white border border-sky-blue-600 rounded-lg text-prussian-blue-500 placeholder-sky-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-green-500 transition-all duration-300"
              />
            </div>
            <div className="mt-3">
              <label className="flex items-center gap-2 cursor-pointer hover:bg-sky-blue-800/5 p-1 rounded-md transition-all duration-200">
                <div className="relative h-5 w-5 flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer appearance-none h-5 w-5 rounded border-2 border-sky-blue-600 checked:border-selective-yellow-500 transition-colors duration-200"
                    onChange={() => toggleFilter("location", "Within 5 miles")}
                    checked={activeFilters.includes("location:Within 5 miles")}
                  />
                  <Check
                    size={14}
                    className={`absolute text-selective-yellow-500 transition-opacity duration-200 ${
                      activeFilters.includes("location:Within 5 miles")
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </div>
                <span className="text-prussian-blue-400">Within 5 miles</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Price Range with slider animation */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10 hover:border-selective-yellow-500/50 transition-colors duration-300"
          onClick={() => toggleSection(setPriceMenuOpen, priceMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <Flame className="text-selective-yellow-500" size={18} />
            <span className="font-medium">Price Range</span>
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ease-out text-prussian-blue-400 ${
              priceMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            priceMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 space-y-3">
            <div className="flex gap-3">
              <div className="relative flex-1 group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-blue-400 group-hover:text-selective-yellow-500 transition-colors duration-300">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full py-2.5 pl-8 pr-3 bg-white border border-sky-blue-600 rounded-lg text-prussian-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-green-500 transition-all duration-300"
                />
              </div>
              <div className="relative flex-1 group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-blue-400 group-hover:text-selective-yellow-500 transition-colors duration-300">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full py-2.5 pl-8 pr-3 bg-white border border-sky-blue-600 rounded-lg text-prussian-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-green-500 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimum Rating with star hover effects */}
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10 hover:border-selective-yellow-500/50 transition-colors duration-300"
          onClick={() => toggleSection(setRatingMenuOpen, ratingMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <Star className="text-selective-yellow-500" size={18} />
            <span className="font-medium">Rating</span>
          </div>
          <ChevronDown
            className={`transform transition-transform duration-300 ease-out text-prussian-blue-400 ${
              ratingMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            ratingMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className={`flex items-center gap-2 cursor-pointer hover:bg-sky-blue-800/5 p-1 rounded-md transition-all duration-200 ${
                    selectedRating === rating ? "bg-sky-blue-800/5" : ""
                  }`}
                  onMouseEnter={() => setHoveredFilter(`rating-${rating}`)}
                  onMouseLeave={() => setHoveredFilter(null)}
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={selectedRating === rating}
                    onChange={() => {
                      setSelectedRating(rating);
                      toggleFilter("rating", `${rating} stars`);
                    }}
                    className="text-selective-yellow-500 focus:ring-selective-yellow-500 transition-all duration-200"
                  />
                  <div className="flex text-selective-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`transition-transform duration-200 ${
                          hoveredFilter === `rating-${rating}` && i < rating
                            ? "scale-110"
                            : ""
                        }`}
                      >
                        {i < rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="text-prussian-blue-400">
                    {rating}+ stars
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="w-full py-3.5 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-green-600 hover:-translate-y-1 hover:shadow-glow-blue relative overflow-hidden group">
        <span className="relative z-10">Apply Filters</span>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-prussian-blue-500 group-hover:h-full transition-all duration-300 ease-in-out"></span>
      </button>
    </div>
  );
};

export default FilterSidebar;
