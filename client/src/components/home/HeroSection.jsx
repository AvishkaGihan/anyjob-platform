import { useEffect, useState, useRef } from "react";
import BackgroundEffects from "./BackgroundEffects";
import WaveDivider from "./WaveDivider";
import ScrollIndicator from "./ScrollIndicator";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-16 bg-gradient-to-br from-prussian-blue-500 via-prussian-blue-600 to-prussian-blue-700 overflow-hidden"
    >
      <BackgroundEffects />
      <div className="container mx-auto px-4 relative z-10 pt-10 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent isVisible={isVisible} />
          <HeroImage isVisible={isVisible} />
        </div>
      </div>

      <WaveDivider />
      <ScrollIndicator isVisible={isVisible} />
    </div>
  );
};

export default HeroSection;
