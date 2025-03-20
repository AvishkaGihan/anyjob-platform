import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
