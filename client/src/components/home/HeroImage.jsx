import { useState } from "react";
import showcaseImage from "../../assets/images/service-showcase.jpg";

const HeroImage = ({ isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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
  );
};

export default HeroImage;
