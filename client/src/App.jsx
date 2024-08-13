import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/PageSection/PageSection';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;