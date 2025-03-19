import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const VendorCard = ({ vendor }) => {
  const { id, name, image, rating, service, price } = vendor;

  // Render stars based on rating with the selective-yellow color
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-selective-yellow-500">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-selective-yellow-500">
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-sky-blue-700">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg relative group">
      {/* Subtle border that appears on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-blue-green-500/0 group-hover:border-blue-green-500/20 transition-all duration-300"></div>

      {/* Image container with subtle zoom effect */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{ transform: "scale(1.01)" }}
        />
        {/* Overlay gradient that fades in on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue-500/10 to-prussian-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content area */}
      <div className="p-5 flex-grow flex flex-col relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-prussian-blue-500 transition-colors duration-300 group-hover:text-blue-green-500">
            {name}
          </h3>
          <div className="flex text-lg">{renderStars(rating)}</div>
        </div>

        <p className="text-prussian-blue-300 text-sm mb-3 flex-grow">
          {service}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-ut-orange-500 font-bold">{price}</div>

          {/* View Profile link with subtle animation */}
          <Link
            to={`/vendors/${id}`}
            className="flex items-center text-sm text-blue-green-500 font-medium opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <span className="relative">
              View Profile
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-green-500 group-hover:w-full transition-all duration-300"></span>
            </span>
            <ChevronRight className="h-4 w-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Book Now Button */}
        <Link
          to={`/book/${id}`}
          className="w-full text-center py-2.5 px-4 bg-selective-yellow-600 text-prussian-blue-200 rounded-lg font-medium transition-all duration-300 hover:bg-selective-yellow-700 hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-selective-yellow-300 focus:ring-offset-2"
        >
          Book Now
        </Link>
      </div>

      {/* Availability indicator with improved styling */}
      <div className="absolute top-4 left-4 flex items-center bg-white/90 px-2 py-1 rounded-full shadow-sm border border-white/50">
        <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
        <span className="text-xs text-prussian-blue-500 font-medium">
          Available Now
        </span>
      </div>

      {/* Bottom accent bar that appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-green-500 to-selective-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
    </div>
  );
};

export default VendorCard;
