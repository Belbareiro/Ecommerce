import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import '../ProductList/ProductList.css';

const ProductList = ({ props }) => {
    const parametros = useParams();
    const navegacion = useNavigate();

    const productoActual = props.todosLosProductos.find((producto) => producto._id == parametros._id);

    const eliminarProducto = async () => {
        const URL = `http://localhost:5000/api/products/eliminar/${productoActual._id}`;
        await axios.delete(URL);
        props.eliminarProductoDeLaLista(productoActual._id);
        navegacion("/todosLosProductos");
    }
// aun me falta pasarle la funcion de eliminar producto de la lista pero no se donde se esta llamando a este componente en la app eliminarProductodeLaLista
    const editarProducto=()=>{
        navegacion (`/admin${productoActual._id}`)
    }   
    //editarProducto tambien debo llamar en la app

return (
        <div>
            <h2>Lista de Productos</h2>
            <div className="product-list">
                {productos.length > 0 ? (
                    productos.map((producto) => {
                        const imageUrl = `http://localhost:5000/uploads/${producto.imagen}`;
                        return (
                            <div key={producto._id} className="product-card">
                                <h3>{producto.nombre}</h3>
                                <p>Precio: {producto.precio} Gs.</p>
                                <p>Descripción: {producto.descripcion}</p>
                                <p>Categoría: {producto.categoria}</p>
                                <img src={imageUrl} alt={producto.nombre} />
                                <button onClick={eliminarProducto}> Eliminar </button>
                                <button onClick={editarProducto}>Editar</button>
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
