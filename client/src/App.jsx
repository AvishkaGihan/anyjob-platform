import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
