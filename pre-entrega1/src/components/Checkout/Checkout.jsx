import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../db/db'; 

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
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
          <h3>Thank you for your purchase!</h3>
          <p>Your order has been placed successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h4>Shipping Information</h4>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
