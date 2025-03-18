import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './pages/Layout';
import LoadingSpinner from './components/common/loading/LoadingSpinner';
const HomePage = lazy(() => import('./pages/homepage/HomePage'));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              {/* Add other routes */}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;