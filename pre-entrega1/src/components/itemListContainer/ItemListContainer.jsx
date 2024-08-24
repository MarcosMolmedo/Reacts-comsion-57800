import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from '../../db/db';
import argentina from '../../assets/img/argentina.png';
import uruguay from '../../assets/img/banderauruguay.png';
import chilena from '../../assets/img/banderachilena.png';
import mexicana from '../../assets/img/banderamexicana.png';
import espana from '../../assets/img/banderaespana.png';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { idtipodetraducciones } = useParams();

  const getProductos = async () => {
    const productosRef = collection(db, "productos");
    const dataDb = await getDocs(productosRef);
    const data = dataDb.docs.map((productDb) => ({
      id: productDb.id,
      ...productDb.data(),
    }));
    setProductos(data);
  };

  const getProductsByCategory = async () => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("categoria", "==", idtipodetraducciones));
    const dataDb = await getDocs(q);
    const data = dataDb.docs.map((productDb) => ({
      id: productDb.id,
      ...productDb.data(),
    }));
    setProductos(data);
  };

  useEffect(() => {
    if (idtipodetraducciones) {
      getProductsByCategory();
    } else {
      getProductos();
    }
  }, [idtipodetraducciones]);

  const obtenerImagen = (categoria) => {
    switch (categoria) {
      case 'argentina': return argentina;
      case 'uruguay': return uruguay;
      case 'chile': return chilena;
      case 'mexico': return mexicana;
      case 'espana': return espana;
      default: return '';
    }
  };

  return (
    <div>
      <h2>My Translator</h2>
      <main className="container">
        <div>
          <h4>Traducciones partidas de nacimiento</h4>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            {productos.map((producto) => (
              <div key={producto.id} className="row mb-3">
                <div className="col-4">
                  <div className="rectangular-img">
                    <Link to={`/detalle/${producto.id}`}>
                      <img src={obtenerImagen(producto.categoria)} alt={producto.categoria} className="img-fluid" />
                    </Link>
                  </div>
                </div>
                <div className="col-8">
                  <div className="subtitulos">
                    <Link to={`/detalle/${producto.id}`}>
                      <h3>{producto.nombre}</h3>
                    </Link>
                    <p>Categoría: {producto.categoria}</p>
                  </div>
                  <ItemCount initial={1} stock={producto.stock} onAdd={(count) => console.log(`Agregado: ${count}`)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemListContainer;
