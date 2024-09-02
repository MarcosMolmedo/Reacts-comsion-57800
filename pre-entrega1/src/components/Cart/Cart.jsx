import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.nombre}</h2>
          <p>Precio por unidad: $100{item.precio}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio total: ${item.precio * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">
        <button>Ir al Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
