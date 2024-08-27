import React from 'react';
import '../ProductListPrincipal/ProductListPrincipal.css'
import globeIcon from '../assets/iconsProductListP/globeIcon.png';
import mannequinIcon from '../assets/iconsProductListP/mannequinIcon.png';
import offerIcon from '../assets/iconsProductListP/offerIcon.png';
import secureIcon from '../assets/iconsProductListP/secureIcon.png'


<<<<<<< HEAD
  const [productos, setProductos] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {  
    const fetchProducts = async () => {  
      try {  
        const response = await fetch('http://localhost:5000/api/products/');  

        if (!response.ok) {  
          throw new Error('Error al cargar los productos');   
        }  
        const data = await response.json();  
        setProductos(data); 
      } catch (error) {  
        setError(error.message);   
      } finally {  
        setLoading(false); 
      }  
    };  
  
    fetchProducts();  
  }, []); 

  if (loading) {  
    return <div>Cargando productos...</div>; 
  }  

  if (error) {  
    return <div>Error: {error}</div>; 
  }  

  const productosFiltrados = productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
      acc[producto.categoria] = [];
    }
    if (acc[producto.categoria].length < 4) {
      acc[producto.categoria].push(producto);
    }
    return acc;
  }, {});

=======
const images = [
  { src: women1, title: 'Vestido Elegante', category: 'Mujer', link: 'categoria/mujer', price: 25 },
  { src: women2, title: 'Blusa Blanca', category: 'Mujer', link: 'categoria/mujer', price: 40 },
  { src: women3, title: 'Pantalones Cortos de Verano', category: 'Mujer', link: 'categoria/mujer', price: 15 },
  { src: men1, title: 'Vaquero masculino', category: 'Hombre', link: 'categoria/hombre', price: 10 },
  { src: men2, title: 'Zapato Elegante', category: 'Hombre', link: '#categoria/hombre', price: 15 },
  { src: men3, title: 'Zapato Azul', category: 'Hombre', link: '#categoria/hombre', price: 10 },
  { src: acc1, title: 'Anillo de Compromiso', category: 'Accesorios', link: 'categoria/accesorios', price: 12 },
  { src: acc2, title: 'Gafas', category: 'Accesorios', link: 'categoria/accesorios', price: 8 },
  { src: acc3, title: 'Gorra Deportiva', category: 'Accesorios', link: 'categoria/accesorios', price: 20 },
  { src: acc4, title: 'Reloj', category: 'Accesorios', link: 'categoria/accesorios', price: 5 },
];
>>>>>>> 99c299db87aa785626a32fd6f293dbed27a44e6b

const ProducListPrincipal = () => {
  return (
    <div className="gallery">
      <div className='featured'><h2>Productos Destacados</h2></div>
      <div className='seccion'>
<<<<<<< HEAD
        {Object.keys(productosFiltrados).map((categoria) => (
          <div key={categoria} className="seccion">
            <h3>{categoria}</h3>
            {productosFiltrados[categoria].map((producto) => (
              <div key={producto._id} className="producto-card">
                <img src={`http://localhost:5000/uploads/${producto.imagen}`} alt={producto.nombre} onError={(e) => { e.target.onerror = null; e.target.src = 'ruta/a/imagen/placeholder.jpg'; }} />
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio.toFixed(2)} Gs.</p>
                <p>{producto.descripcion}</p>
                <p>Categoría: {producto.categoria}</p>
              </div>
            ))}
=======
        {images.map((image, index) => (
          <div className="item" key={index}>
            <a href={image.link}>
              <img src={image.src} alt={image.title} />
              <div className="title">{image.title}</div>
              <div className="price" >
                Gs {image.price.toFixed(2)} {/* Formato de precio con dos decimales */} </div>
              <div className="category">{image.category}</div>
            </a>
>>>>>>> 99c299db87aa785626a32fd6f293dbed27a44e6b
          </div>
        ))}
      </div>
      <div className="icons">
        <div className='iconSeccion'>
          <img src={globeIcon} alt="" />
          <h2>Envío mundial</h2>
          <p>Realizamos envíos a todas partes del mundo, para que puedas recibir tu pedido sin importar la distancia</p>
        </div>
        <div className='iconSeccion'>
          <img src={mannequinIcon} alt="" />
          <h2>Mejor calidad</h2>
          <p>Seleccionamos productos de alta calidad para garantizar tu satisfacción y la durabilidad de cada compra.</p>
        </div>
        <div className='iconSeccion'>
          <img src={offerIcon} alt="" />
          <h2>Mejores ofertas</h2>
          <p>Ofrecemos promociones y descuentos especiales para que consigas los productos que amas a precios increíbles.</p>
        </div>
        <div className='iconSeccion'>
          <img src={secureIcon} alt="" />
          <h2>Pago Seguro</h2>
          <p>Tu seguridad es nuestra prioridad. Utilizamos métodos de pago seguros y protegemos toda tu información personal.</p>
        </div>
      </div>
    </div>
  );
};
export default ProducListPrincipal;
