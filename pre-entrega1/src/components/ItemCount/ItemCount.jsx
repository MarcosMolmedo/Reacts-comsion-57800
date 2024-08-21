import { useState } from 'react';
import './ItemCount.css'; 

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
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
