import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogo.css';

const Catalogo = ({ onAgregarAlCarrito }) => {
  return (
    <div className="container">
      <div className="product-card">
        <img src="/imagenes/producto1.png" alt="Producto 1" className="product-image" />
        <h3 className="product-title">Funda TeamKakapo</h3>
        <p className="product-description">Funda disponible para multiples dispositivos.</p>
        <Link to="/detalle/1" className="product-link">
          Ver Detalles
        </Link>
        <button onClick={() => onAgregarAlCarrito({ id: 1, nombre: 'Funda TeamKakapo', precio: 20 })}>
          Añadir al Carrito
        </button>
      </div>
      <div className="product-card">
        <img src="/imagenes/producto2.png" alt="Producto 2" className="product-image" />
        <h3 className="product-title">Gorra TeamKakapo</h3>
        <p className="product-description">Gorra ideal para el verano.</p>
        <Link to="/detalle/2" className="product-link">
          Ver Detalles
        </Link>
        <button onClick={() => onAgregarAlCarrito({ id: 2, nombre: 'Gorra TeamKakapo', precio: 15 })}>
          Añadir al Carrito
        </button>
      </div>
      <div className="product-card">
        <img src="/imagenes/producto3.png" alt="Producto 3" className="product-image" />
        <h3 className="product-title">Mochila TeamKakapo</h3>
        <p className="product-description">Mochila para el regreso a clases.</p>
        <Link to="/detalle/3" className="product-link">
          Ver Detalles
        </Link>
        <button onClick={() => onAgregarAlCarrito({ id: 3, nombre: 'Mochila TeamKakapo', precio: 30 })}>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default Catalogo;