import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';

const ProductList = ({ productos, eliminarProductoDeLaLista }) => {
    const navigate = useNavigate();

    const eliminarProducto = async (productoId) => {
        const URL = `http://localhost:5000/api/products/eliminar/${productoId}`;
        try {
            await axios.delete(URL);
            eliminarProductoDeLaLista(productoId);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            alert('Error al eliminar el producto. Intente de nuevo.');
        }
    };

    const editarProducto = (productoId) => {
        navigate(`/admin/${productoId}`);
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <div className="product-list">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div key={producto._id} className="product-card">
                            <h3>{producto.nombre}</h3>
                            <p>Precio: {producto.precio} Gs.</p>
                            <p>Descripción: {producto.descripcion}</p>
                            <p>Categoría: {producto.categoria}</p>
                            <img src={`http://localhost:5000/uploads/${producto.imagen}`} alt={producto.nombre} />
                            <button onClick={() => eliminarProducto(producto._id)}>Eliminar</button>
                            <button onClick={() => editarProducto(producto._id)}>Editar</button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;