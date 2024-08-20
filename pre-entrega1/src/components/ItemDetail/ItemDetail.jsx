const ItemDetail = ({ producto }) => {
    return (
      <div>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
        <p>Categoría: {producto.categoria}</p>
        <p>Descripción: {producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
    );
  };
  
  export default ItemDetail;
  
  