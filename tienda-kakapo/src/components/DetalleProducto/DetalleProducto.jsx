import React from 'react';
import { useParams } from 'react-router-dom';
import './DetalleProducto.css';

const DetalleProducto = ({ onAgregarAlCarrito }) => {
  const { id } = useParams();


  const producto = {
    id: id,
    nombre: `Producto ${id}`,
    precio: `$${(id * 10).toFixed(2)}`,
    descripcion: `Descripción detallada del Producto ${id}. Este es un producto increíble que seguro te encantará. ¡Añádelo a tu carrito ahora!`,
    imagen: `/imagenes/producto${id}.png`,
  };

  const handleAgregarAlCarrito = () => {
    onAgregarAlCarrito(producto);
  };

  return (
    <div className="product-details">
      <img src={producto.imagen} alt={producto.nombre} className="product-image" />
      <h2 className="product-title">{producto.nombre}</h2>
      <p className="product-price">{producto.precio}</p>
      <p className="product-description">{producto.descripcion}</p>
      <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default DetalleProducto;