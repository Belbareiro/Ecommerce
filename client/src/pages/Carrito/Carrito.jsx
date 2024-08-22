import React, { useState } from 'react';
import './Carrito.css'; 

//recibe dos props: `itemsCarrito` (productos en el carrito) y `completarCompra` (una función para finalizar la compra)
const Carrito = ({ itemsCarrito, completarCompra }) => {
  // Estado local `compraCompleta`, inicia como `false`, y se usa para mostrar un mensaje de éxito cuando la compra se completa
  const [compraCompleta, setCompraCompleta] = useState(false);

  // Función que calcula el total a pagar sumando el precio por cantidad de cada producto en el carrito
  const calcularTotal = (items) => {
    let total = 0;
    for (const item of items) {
      total += item.precio * item.cantidad; // Suma el total multiplicando el precio por la cantidad de cada producto
    }
    return total; // Devuelve el total calculado
  };

  const total = calcularTotal(itemsCarrito); // Calcula el total usando la función anterior y los productos del carrito

  // Función que se llama cuando el usuario hace clic en "Completar Compra"
  const manejarCompletarCompra = () => {
    completarCompra(); // Llama a la función `completarCompra` (probablemente para procesar el pago o guardar la compra)
    setCompraCompleta(true); // Actualiza el estado `compraCompleta` a `true`, lo que cambia la interfaz para mostrar un mensaje de éxito
  };


  return (
    <div className="carrito"> {/* Contenedor principal del carrito */}
      <h1>Mi carrito de compras</h1>
      {compraCompleta ? ( // Si la compra está completa, muestra el mensaje de éxito
        <div className="mensaje-exito">
          <h3>¡Compra completada con éxito!</h3>
          <p>Gracias por tu compra. ¡Regresa pronto!</p>
        </div>
      ) : itemsCarrito.length > 0 ? ( // Si hay productos en el carrito, los muestra en una lista
        <div className="carrito-contenido">
          <ul className="carrito-lista"> {/* Lista de productos en el carrito */}
            {itemsCarrito.map((item) => ( // Recorre los productos en el carrito y renderiza cada uno
              <li key={item._id} className="carrito-item"> {/* Cada producto del carrito */}
                <img
                  src={item.imagen ? `http://localhost:5000/uploads/${item.imagen}` : 'ruta/default/image.jpg'} // Muestra la imagen del producto o una imagen por defecto
                  alt={item.nombre}
                  className="carrito-item-image"
                />
                <div className="carrito-item-details"> {/* Detalles del producto */}
                  <h3>{item.nombre}</h3>
                  <p>Precio: {item.precio} Gs.</p>
                  <p>Cantidad: {item.cantidad}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Resumen de la compra con el total */}
          <div className="carrito-resumen">
            <div className="carrito-resumen-item">
              <span className="carrito-total-titulo">Total:</span> 
              <span className="carrito-total-monto">{total} Gs.</span> 
            </div>
            <button onClick={manejarCompletarCompra} className="carrito-completar-compra-button"> {/* Botón para completar la compra */}
              Completar Compra
            </button>
          </div>
        </div>
      ) : ( // Si el carrito está vacío, muestra un mensaje indicándolo
        <div className="mensaje-carrito-vacio">
          <h3>Su carrito está vacío...</h3>
        </div>
      )}
    </div>
  );
};

export default Carrito;
