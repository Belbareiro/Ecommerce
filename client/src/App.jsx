import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/PageSection/PageSection';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import CargarProductos from './pages/CargarProductos';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/new" element={<CargarProductos />} />
      </Routes>
    </div>
  );
};


export default App;
