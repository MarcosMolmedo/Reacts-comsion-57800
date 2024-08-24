import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeItem }) => {
  const navigate = useNavigate();


  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Mi Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio por Unidad</th>
                <th>Cantidad</th>
                <th>Precio Parcial</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => removeItem(item.id)}>Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Total: ${getTotalPrice()}</h3>
            <button onClick={() => navigate('/checkout')}>
              Seguir con mi compra
            </button>
            <Link to="/">
              <button>Seguir Comprando</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
