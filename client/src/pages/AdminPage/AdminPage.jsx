import React, { useState, useEffect } from 'react';
import CargarProductos from '../CargarProductos';
import ProductList from '../ProductList/ProductList';
import axios from 'axios';

const AdminPage = (props) => {
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

    const actualizarListaProductos = (nuevoProducto) => {
        setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
    };

    return (
        <div>
            <h1>Página de Administrador</h1>
            <CargarProductos actualizarListaProductos={actualizarListaProductos} />
            <ProductList productos={productos} />
        </div>
    );
};

export default AdminPage;