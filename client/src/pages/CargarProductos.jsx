import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CargarProductos = (props) => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [category, setCategory] = useState("");
    const [imagen, setImagen] = useState("");
    const [tamanho, setTamanho] = useState(0);
    const [color, setColor] = useState("");
    const [error, setError] = useState(null);

    const navegacion = useNavigate();

    const enviarFormularioProducto = async (e) => {
        e.preventDefault();
        try {
            const nuevoProducto = {
                nombre, precio, descripcion, category, imagen, tamanho, color
            };
            const URL = "http://localhost:8080/producto/nuevo"; // Debe conectarse a la base de datos
            const respuesta = await axios.post(URL, nuevoProducto);
           
            props.actualizarListaProductos(respuesta.data);
            setNombre("");
            setPrecio(0);
            setDescripcion("");
            setCategory("");
            setImagen("");
            setTamanho(0);
            setColor("");
            navegacion("/productos");
        } catch (error) {
            console.log("Algo falló", error);
            setError(error.response ? error.response.statusText : "Error de conexión");
        }
    }

    return (
        <>
            <h2>Agregar nuevo Producto</h2>
            <form onSubmit={enviarFormularioProducto}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input 
                        type="number"
                        id="precio"
                        name="precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <input 
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="category">Categoría:</label>
                    <input 
                        type="text"
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="imagen">Imagen:</label>
                    <input 
                        type="file" 
                        id="imagen"
                        name="imagen"
                        onChange={(e) => setImagen(e.target.files[0])} 
                    />
                </div>
                <div>
                    <label htmlFor="tamanho">Tamaño:</label>
                    <input 
                        type="number"
                        id="tamanho"
                        name="tamanho"
                        value={tamanho}
                        onChange={(e) => setTamanho(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <select 
                        id="color" 
                        name="color" 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)}
                    >  
                        <option value="">Selecciona un color</option>  
                        <option value="rojo">Rojo</option>  
                        <option value="verde">Verde</option>  
                        <option value="azul">Azul</option>  
                        <option value="amarillo">Amarillo</option>  
                        <option value="negro">Negro</option>  
                        <option value="blanco">Blanco</option>  
                        <option value="gris">Gris</option>  
                    </select> 
                </div>
                <button>Agregar</button>
            </form>
        </>
    );
}

export default CargarProductos;
