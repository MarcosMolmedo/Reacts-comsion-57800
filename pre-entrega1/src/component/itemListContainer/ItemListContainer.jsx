import { useParams } from "react-router-dom";

// const {} = useParams (idtipodetraducciones) no la puedo ejecutar


const ItemListContainer = ({ saludo }) => {
  return (
    <div>
      <h2>{saludo}</h2>
    </div>
  );
};

export default ItemListContainer;