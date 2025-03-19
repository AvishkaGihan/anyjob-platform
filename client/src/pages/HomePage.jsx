import HeroSection from "../components/sections/home/HeroSection";
import ServiceCategories from "../components/sections/home/ServiceCategories";
import VendorsSection from "../components/sections/home/VendorsSection";

const HomePage = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <ServiceCategories />
      <VendorsSection />
    </main>
  );
};

export default HomePage;
