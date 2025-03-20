import { BrowserRouter as Router, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Default Layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
