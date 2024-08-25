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
import ProducListPrincipal from './pages/ProductListPrincipal/ProductListPrincipal'

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [listaDeProductosPrincipales, setlistaDeProductosPrincipales] = useState([]);//Esto hara una lista de los productos principales 

const handleAddToCart = (producto) => {
  // Actualiza el estado del carrito con el nuevo producto
  setItemsCarrito((prevItems) => {
    // Verifica si el producto ya está en el carrito
    const existingItem = prevItems.find(item => item._id === producto._id);

    if (existingItem) {
      // Si el producto ya existe en el carrito, actualiza la cantidad
      return prevItems.map(item =>
        item._id === producto._id
          // Incrementa la cantidad del producto existente
          ? { ...item, cantidad: item.cantidad + 1 }
          // Deja el resto de los productos sin cambios
          : item
      );
    }
    // Si el producto no está en el carrito, añádelo con una cantidad inicial de 1
    return [...prevItems, { ...producto, cantidad: 1 }];
  });
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
      const respuesta = await axios.get(URL);
      setlistaDeProductosPrincipales(respuesta.data);
    }
    obtenerListaDeProductosPrincipales();
  
  }, []);//esto  hara que se cargue en la pagina los productos principales
  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Products productos={productos} onAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/listaPrincipal" element={<ProducListPrincipal listaDeProductosPrincipales={listaDeProductosPrincipales}/>} /> 
        ESTO ME DEBE ENLISTAR EN LA PAGINA PRINCIPAL LOS PRODUCTOS */}
        <Route path="/todosLosProductos" element={<TodosLosProductos onAddToCart={handleAddToCart} />} />
        <Route path="/categoria/:categoria" element={<ProductosPorCategoria onAddToCart={handleAddToCart} />} />
        <Route path="/carrito" element={<Carrito itemsCarrito={itemsCarrito} completarCompra={handleCompletePurchase} />} />
      </Routes>
      <Footer />
    </div>
  );
};
}
export default App;