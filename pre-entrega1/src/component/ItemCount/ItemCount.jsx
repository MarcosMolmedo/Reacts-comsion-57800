import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);
  
    const increment = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    const handleAddToCart = () => {
      console.log(`Cantidad agregada al carrito: ${count}`);
    };
  
    return (
      <div className="item-count">
        <div className="controls">
          <button onClick={decrement} className="btn btn-outline-secondary">-</button>
          <span>{count}</span>
          <button onClick={increment} className="btn btn-outline-secondary">+</button>
        </div>
        <button onClick={handleAddToCart} className="btn btn-primary">Agregar al carrito</button>
      </div>
    );
  };
  
export default ItemCount