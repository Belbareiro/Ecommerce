import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../ProductList/ProductList.css'

const ProductList = () => {
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

    return (
        <div>
            <h2>Lista de Productos</h2>
            <div className="product-list">
                {productos.length > 0 ? (
                    productos.map((producto) => {
                        // Construir la URL de la imagen
                        const imageUrl = `http://localhost:5000/uploads/${producto.imagen}`;

                        return (
                            <div key={producto._id} className="product-card">
                                <h3>{producto.nombre}</h3>
                                <p>Precio: ${producto.precio}</p>
                                <p>Descripción: {producto.descripcion}</p>
                                <p>Categoría: {producto.categoria}</p>
                                {/* Mostrar la imagen */}
                                <img src={imageUrl} alt={producto.nombre} />
                            </div>
                        );
                    })
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;