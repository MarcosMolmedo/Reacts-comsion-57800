import { useState } from 'react';
import './ItemCount.css'; 

const ItemCount = ({ initial, stock, onAdd }) => {
<<<<<<< HEAD

  const [count, setCount] = useState(0);

  const aumentar = () => {
   
=======
  // Establece el estado inicial del contador en 0
  const [count, setCount] = useState(0);

  const aumentar = () => {
    // Incrementa el contador solo si es menor que el stock máximo
>>>>>>> 112171443489d70feee3f429c53fdff0afc0c08f
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
<<<<<<< HEAD
   
=======
    // Decrementa el contador solo si es mayor que 0
>>>>>>> 112171443489d70feee3f429c53fdff0afc0c08f
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contador">
      <button className="btn-itemcount" onClick={disminuir}>-</button>
      <p>{count}</p>
      <button className="btn-itemcount" onClick={aumentar}>+</button>
      <button className="btn-itemcount" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
