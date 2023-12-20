import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Catalogo from './components/Catalogo/Catalogo';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:id" element={<DetalleProducto />} />
          <Route path="/" element={<Catalogo />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;