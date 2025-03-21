import { motion } from "framer-motion";
import HeroBackground from "../../components/Home/HeroBackground";
import SearchBar from "../../components/shared/SearchBar";
import CategoryBadges from "../../components/Home/CategoryBadges";
import ImageSection from "../../components/Home/ImageSection";
import CTAButtons from "../../components/Home/CTAButtons";
import FeatureBadges from "../../components/Home/FeatureBadges";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-prussian-blue-500 via-prussian-blue-600 to-prussian-blue-700 overflow-hidden">
      {/* Background Effects */}
      <HeroBackground />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-white">
                Find <span className="text-selective-yellow-500">Expert</span>
              </span>
              <span className="block text-white mt-2">
                Services{" "}
                <span className="relative inline-block">
                  Near You
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-green-500 rounded-full" />
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-sky-blue-700 font-light leading-relaxed max-w-xl">
              Connect with trusted professionals for any job you need done, all
              in one platform. Quality service is just a click away.
            </p>
            <SearchBar
              variant="dark"
              className="w-full md:w-[400px] shadow-lg"
            />
            <CategoryBadges />
            <CTAButtons />
            <FeatureBadges />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ImageSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
