import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Products from './pages/PageSection/PageSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPage from './pages/AdminPage/AdminPage';
import TodosLosProductos from './pages/TodosLosProductos/TodosLosProductos';
import ProductosPorCategoria from './pages/ProductosPorCategoria/ProductosPorCategoria';
import Carrito from './pages/Carrito/Carrito';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [listaDeProductosPrincipales, setListaDeProductosPrincipales] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(itemsCarrito));
    setCartCount(itemsCarrito.reduce((total, item) => total + item.cantidad, 0));
  }, [itemsCarrito]);

  const handleAddToCart = (producto) => {
    setItemsCarrito((prevItems) => {
      const existingItem = prevItems.find(item => item._id === producto._id);
      if (existingItem) {
        return prevItems.map(item =>
          item._id === producto._id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prevItems, { ...producto, cantidad: 1 }];
    });
  };

  const handleCompletePurchase = () => {
    setItemsCarrito([]);
    setCartCount(0);
  };

  useEffect(() => {
    const obtenerListaDeProductosPrincipales = async () => {
      const URL = "http://localhost:5000/api/products";
      try {
        const respuesta = await axios.get(URL);
        setListaDeProductosPrincipales(respuesta.data);
      } catch (error) {
        console.error('Error al obtener los productos principales:', error);
      }
    };
    obtenerListaDeProductosPrincipales();
  }, []);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Products productos={productos} onAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Asegúrate de que este componente esté correctamente importado */}
        {/* <Route path="/listaPrincipal" element={<ProducListPrincipal listaDeProductosPrincipales={listaDeProductosPrincipales} />} /> */}
        <Route path="/todosLosProductos" element={<TodosLosProductos onAddToCart={handleAddToCart} />} />
        <Route path="/categoria/:categoria" element={<ProductosPorCategoria onAddToCart={handleAddToCart} />} />
        <Route path="/carrito" element={<Carrito itemsCarrito={itemsCarrito} completarCompra={handleCompletePurchase} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
