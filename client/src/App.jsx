import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/PageSection/PageSection';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import CargarProductos from './pages/CargarProductos';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
	<Route path="/products" element={<CargarProductos />} />
    
      </Routes>
    </div>
  );
};

export default App;
