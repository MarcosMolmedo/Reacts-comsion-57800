import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';
import argentina from '../../assets/img/argentina.png';
import uruguay from '../../assets/img/banderauruguay.png';
import chilena from '../../assets/img/banderachilena.png';
import mexicana from '../../assets/img/banderamexicana.png';
import espana from '../../assets/img/banderaespana.png';

const EnglishToSpanish = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
   
    const productosEnglishToSpanish = [
      { id: 1, nombre: "Traducción  - Argentina", categoria: "argentina" },
      { id: 2, nombre: "Traducción  - Uruguay", categoria: "uruguay" },
      { id: 3, nombre: "Traducción  - Chile", categoria: "chile" },
      { id: 4, nombre: "Traducción  - México", categoria: "mexico" },
      { id: 5, nombre: "Traducción  - España", categoria: "espana" }
    ];
    setProductos(productosEnglishToSpanish);
  }, []);

  const obtenerImagen = (categoria) => {
    switch (categoria) {
      case 'argentina': return argentina;
      case 'uruguay': return uruguay;
      case 'chile': return chilena;
      case 'mexico': return mexicana;
      case 'espana': return espana;
      default: return null; 
    }
  };

  return (
    <div>
      <h2>Traducciones de Español a Ingles </h2>
      <main className="container">
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
                  <ItemCount initial={1} stock={10} onAdd={(count) => console.log(`Agregado: ${count}`)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnglishToSpanish;
