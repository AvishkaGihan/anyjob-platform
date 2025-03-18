import { lazy } from 'react';

const HeroSection = lazy(() => import('../../components/sections/home/HeroSection'));
const ServiceCategories = lazy(() => import('../../components/sections/home/ServiceCategories'));
const VendorsSection = lazy(() => import('../../components/sections/home/VendorsSection'));

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <ServiceCategories />
            <VendorsSection />
        </main>
    );
};

export default HomePage;