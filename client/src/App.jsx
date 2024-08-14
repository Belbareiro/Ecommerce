import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/PageSection/PageSection';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
