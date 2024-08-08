import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]); 
  const { idtipodetraducciones } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const dataProductos = await fetchProductos(); 

        if (idtipodetraducciones) {
          const productosFiltrados = dataProductos.filter(
            (producto) => producto.categoria === idtipodetraducciones
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(dataProductos);
        }
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Finalizó la promesa");
      }
    };

    obtenerProductos();
  }, [idtipodetraducciones]);

  return (
    <div>
      <h2>{saludo}</h2>
      {/*profe, aca deberian ir el listaod de productos??? */}
    </div>
  );
};

export default ItemListContainer;
