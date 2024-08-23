import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import { fetchProductoPorId } from '../../data';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetchProductoPorId(id); 

        setProducto(response);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProducto();
  }, [id]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;