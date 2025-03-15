import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Homepage from "./pages/HomePage";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
