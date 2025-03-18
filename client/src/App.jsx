import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './pages/Layout';
import HomePage from './pages/homepage/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* Add other routes */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;