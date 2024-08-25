import React from 'react';
import '../ProductList/ProductList.css';

const ProductList = ({ productos }) => {
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
                                <p>Precio: {producto.precio} Gs.</p>
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
