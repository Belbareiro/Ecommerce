import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/PageSection/PageSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPage from './pages/AdminPage/AdminPage';
import TodosLosProductos from './pages/TodosLosProductos/TodosLosProductos';
import ProductosPorCategoria from './pages/ProductosPorCategoria/ProductosPorCategoria';
const App = () => {
  const [cartCount, setCartCount] = useState(0);

  //se ejecuta cada vez que hagas SHOP NOW un producto al carrito. 
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
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/todosLosProductos" element={<TodosLosProductos />} />
        <Route path="/categoria/:categoria" element={<ProductosPorCategoria />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App;
