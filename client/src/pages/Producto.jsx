import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Producto = (props) => {
    const parametros = useParams();
    const navegacion = useNavigate();

    const productoActual = props.productlistPrincipal.find((producto) => producto._id == parametros._id);

    const eliminarProducto = async () => {
        const URL = `http://localhost:8080//eliminar/${productoActual.id}`;
        await axios.delete(URL);
        //Aqui se debe crear esta funcion en lista de productos para poder eliminar de esa lista el producto eso aun no hice 
        props.eliminarProductoDeLaLista(productoActual._id);
        navegacion("/productos");
    }

    const redireccionarAVistaVendedor = () => {
        navegacion(`/formulario/vendedor/${productoActual.id}`);
    }

    return (
        <>
            <h3> Nombre: {productoActual.nombre} </h3>
            <h3> Precio: {productoActual.precio} </h3>
            <p> Descripcion: {productoActual.descripcion} </p>
            <p> Categoria: {productoActual.categoria} </p>
            <p> Imagen: {productoActual.imagen} </p>
            <button onClick={eliminarProducto}> Eliminar </button>
            <button onClick={redireccionarAVistaVendedor}> Agregar Producto </button>
        </>
    );
}

export default Producto;