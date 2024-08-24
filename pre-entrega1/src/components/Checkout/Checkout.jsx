import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../db/db'; 

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'orders'), {
        ...formData,
        date: new Date(),
      });

      console.log('Order placed with ID: ', docRef.id);
      setOrderPlaced(true);
      setTimeout(() => {
        navigate('/'); 
      }, 3000);
    } catch (error) {
      console.error('Error placing order: ', error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {orderPlaced ? (
        <div>
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu pedido ha sido realizado con éxito.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h4>Información de Envío</h4>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">Ciudad:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="postalCode">Código Postal:</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Realizar Pedido</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
