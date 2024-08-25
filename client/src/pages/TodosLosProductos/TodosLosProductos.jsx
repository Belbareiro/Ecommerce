import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodosLosProductos.css'; // Asegúrate de tener esta hoja de estilos

const TodosLosProductos = ({ onAddToCart }) => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
                setError('No se pudieron cargar los productos. Intenta de nuevo más tarde.');
            }
        };

        fetchProductos();
    }, []);

    return (
        <div className="todos-los-productos">
            <h2>Todos los Productos</h2>
            {error && <p className="error">{error}</p>}

            <div className="galeria">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div key={producto._id} className="producto-card">
                            <img src={`http://localhost:5000/uploads/${producto.imagen}`} alt={producto.nombre} />
                            <h3>{producto.nombre}</h3>
                            <p>Precio: Gs {producto.precio}</p>
                            <p>{producto.descripcion}</p>
                            <p>Categoría: {producto.categoria}</p>
                            <button onClick={() => onAddToCart(producto)}>Añadir al carrito</button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default TodosLosProductos;