import './Cart.css'
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Funda', price: 10, quantity: 1 },
    { id: 2, name: 'Gorra', price: 20, quantity: 1 },
    { id: 3, name: 'Mochila', price: 30, quantity: 1 },
  ]);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const addItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Su carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => addItem(item.id)}>+</button>
                <button onClick={() => removeItem(item.id)}>-</button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${getTotal().toFixed(2)}</p>
          <button className="clear-cart" onClick={() => setCartItems([])}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
