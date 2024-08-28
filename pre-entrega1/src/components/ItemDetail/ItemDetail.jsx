import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'; 
const ItemDetail = ({ producto, addToCart }) => {
  // debugger;
  const [quantity, setQuantity] = useState(1);
  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  
  const handleAddToCart = () => {
    addToCart({ ...producto, quantity });
  };

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: {producto.precio}</p>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Categoría: {producto.categoria}</p>
      <p>Stock disponible: {producto.stock}</p>

      {}
      <ItemCount
        initial={1}
        stock={producto.stock}
        onAdd={(count) => setQuantity(count)} 
      />

      {}
      <button onClick={handleAddToCart}>Agregar al Carrito</button>

      {}
      <div className="navigation-buttons">
        <Link to="/cart">
          <button>Ver Carrito</button>
        </Link>
        <Link to="/checkout">
          <button>Ir al Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
