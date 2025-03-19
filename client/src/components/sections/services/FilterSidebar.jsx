import React, { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  ChevronDown,
  Flame,
  Sliders,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "../../../utils/constants/categories";

const FilterSidebar = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(true);
  const [locationMenuOpen, setLocationMenuOpen] = useState(true);
  const [priceMenuOpen, setPriceMenuOpen] = useState(true);
  const [ratingMenuOpen, setRatingMenuOpen] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-prussian-blue-500 flex items-center gap-2">
          <Sliders className="h-5 w-5 text-blue-green-500" />
          <span>Filters</span>
        </h2>
        <button className="text-blue-green-500 text-sm font-medium hover:text-blue-green-700 transition-colors">
          Reset All
        </button>
      </div>

      {/* Service Category */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10"
          onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <Search className="text-blue-green-500" size={18} />
            <span className="font-medium">Category</span>
          </div>
          <ChevronDown
            className={`transform transition-transform text-prussian-blue-400 ${
              categoryMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        {categoryMenuOpen && (
          <div className="mt-4 space-y-2">
            {SERVICE_CATEGORIES.slice(0, 6).map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="rounded text-blue-green-500 focus:ring-blue-green-500"
                />
                <span className="text-prussian-blue-400">{category.title}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Location */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10"
          onClick={() => setLocationMenuOpen(!locationMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <MapPin className="text-ut-orange-500" size={18} />
            <span className="font-medium">Location</span>
          </div>
          <ChevronDown
            className={`transform transition-transform text-prussian-blue-400 ${
              locationMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        {locationMenuOpen && (
          <div className="mt-4">
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-blue-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full py-2.5 pl-9 pr-3 bg-white border border-sky-blue-600 rounded-lg text-prussian-blue-500 placeholder-sky-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-green-500"
              />
            </div>
            <div className="mt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded text-selective-yellow-500 focus:ring-selective-yellow-500"
                />
                <span className="text-prussian-blue-400">Within 5 miles</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10"
          onClick={() => setPriceMenuOpen(!priceMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <Flame className="text-selective-yellow-500" size={18} />
            <span className="font-medium">Price Range</span>
          </div>
          <ChevronDown
            className={`transform transition-transform text-prussian-blue-400 ${
              priceMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        {priceMenuOpen && (
          <div className="mt-4 space-y-3">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-blue-400">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full py-2.5 pl-8 pr-3 bg-white border border-sky-blue-600 rounded-lg text-prussian-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-green-500"
                />
              </div>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-blue-400">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full py-2.5 pl-8 pr-3 bg-white border border-sky-blue-600 rounded-lg text-prussian-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-green-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Minimum Rating */}
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer pb-3 border-b border-sky-blue-800/10"
          onClick={() => setRatingMenuOpen(!ratingMenuOpen)}
        >
          <div className="flex items-center gap-2 text-prussian-blue-400">
            <Star className="text-selective-yellow-500" size={18} />
            <span className="font-medium">Rating</span>
          </div>
          <ChevronDown
            className={`transform transition-transform text-prussian-blue-400 ${
              ratingMenuOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </div>

        {ratingMenuOpen && (
          <div className="mt-4">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={selectedRating === rating}
                    onChange={() => setSelectedRating(rating)}
                    className="text-selective-yellow-500 focus:ring-selective-yellow-500"
                  />
                  <div className="flex text-selective-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <span className="text-prussian-blue-400">
                    {rating}+ stars
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      <button className="w-full py-3.5 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-green-600 hover:-translate-y-1 hover:shadow-glow-blue">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
