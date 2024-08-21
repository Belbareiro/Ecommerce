import React, { useState } from 'react';
import CargarProductos from '../CargarProductos';
import ProductList from '../ProductList/ProductList';

const AdminPage = () => {
    const [productos, setProductos] = useState([]);

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