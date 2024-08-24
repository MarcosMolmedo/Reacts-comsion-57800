import React from 'react';

const ItemDetail = ({ producto }) => {
  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: {producto.precio}</p>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Categoría: {producto.categoria}</p>
      <p>Stock disponible: {producto.stock}</p>
    </div>
  );
};

export default ItemDetail;
