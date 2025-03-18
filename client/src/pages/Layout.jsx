import { Outlet } from 'react-router';
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;