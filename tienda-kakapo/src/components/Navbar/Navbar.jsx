import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <brand>Tienda Kakapo</brand>
      <ul>
        <li><Link to="/">Catalogo</Link></li>
        <li><Link to="/cart">Carrito <span className="cart-icon">🛒</span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;