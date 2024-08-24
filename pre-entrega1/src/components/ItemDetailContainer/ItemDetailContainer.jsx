import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; 
import db from '../../db/db'; 
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idProducto } = useParams(); 

  const getProduct = async () => {
    try {
      const docRef = doc(db, "productos", idProducto); 
      const dataDb = await getDoc(docRef); 

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() }; 
        setProducto(data);
      } else {
        console.error("Producto no encontrado."); 
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error); 
    }
  };

  useEffect(() => {
    getProduct(); 
  }, [idProducto]); 
  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} /> 
      ) : (
        <p>Cargando...</p> 
      )}
    </div>
  );
};

export default ItemDetailContainer;
