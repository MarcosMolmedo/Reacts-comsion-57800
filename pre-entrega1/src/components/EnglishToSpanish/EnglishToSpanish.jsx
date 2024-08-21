import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx'; 
import { Link } from 'react-router-dom';
import mundo from '../../assets/img/banderasdelmundo.png'; 
const EnglishToSpanish = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
   
    const productosEnglishToSpanish = [
      { id: 1, nombre: "Traducciónes Generales en Ingles", categoria: "mundo" },
 
    ];
    setProductos(productosEnglishToSpanish);
  }, []);

  const obtenerImagen = (categoria) => {
    switch (categoria) {
      case 'mundo': return mundo; 
      default: return null; 
    }
  };

  return (
    <div>
      <h2>Traducciones de Inglés a Español</h2>
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
