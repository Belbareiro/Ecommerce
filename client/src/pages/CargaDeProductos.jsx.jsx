import React, { useState } from 'react';

const CargarProductos = ({}) => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [descripcion,setDescripcion] = useState("");
    const [category, setCategory] = useState("");
    const [imagen, setImagen] = useState("");
    const [tamaño, setTamaño] = useState(0);
    const [color, setColor] = useState("");


    const navegacion = useNavigate();

    const enviarFormularioProducto = async (e) => {
        e.preventDefault();
        try{
            const nuevoProducto = {
                nombre, precio, descripcion, category, imagen, tamaño, color
            }
            const URL = "http://localhost:8080/producto/nuevo";// esto se debe aun conectar a la base de de datos 
            const respuesta = await axios.post(URL, nuevoProducto);
           
            props.actualizarListaProductos(respuesta.data);
            setNombre("");
            setPrecio(0);
            setDescripcion("");
            setCategory("");
            setImagen("");
            setTamaño(0);
            setColor("");
            navegacion("/productos");
        }
        catch(error){
            console.log("Algo falló", error);
            setError(error.response.statusText);
        }
    }

    return(
        <>
            <h2> Agregar nuevo Producto</h2>
            <form onSubmit={enviarFormularioProducto}>
                <div>
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text"
                           id="nombre"
                           name="nombre"
                           value={nombre}
                           onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="precio">
                        Precio:
                    </label>
                    <input type="number"
                           id="precio"
                           name="precio"
                           value={precio}
                           onChange={(e) => setPrecio(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="descripcion">
                        Descripcion:
                    </label>
                    <input type="text"
                           id="descripcion"
                           name="descripcion"
                           value={descripcion}
                           onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="category">
                        Category:
                    </label>
                    <input type="text"
                           id="category"
                           name="category"
                           value={category}
                           onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="imagen">
                        Imagen:
                    </label>
                     <input type="file" 
                        id="imagen"
                        name="imagen"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}/>
                </div>
               
                <div>
                    <label htmlFor="edad">
                        Tamaño:
                    </label>
                    <input type="number"
                           id="tamaño"
                           name="tamaño"
                           value={tamaño}
                           onChange={(e) => setTamaño(e.target.value)} />
                </div>
                <div>
                <label htmlFor="color">Color:</label>  
                    <select id="color" name="color" value={color} onChange={(e) => setColor(e.target.value)}>  
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
                <button> Agregar </button>
            </form>
        </>
    );
}


export default CargarProductos