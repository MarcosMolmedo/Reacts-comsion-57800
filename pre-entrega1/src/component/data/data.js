import argentina from './assets/img/argentina.png'; 
import uruguay from './assets/img/banderauruguay.png'; 
import chilena from './assets/img/banderachilena.png';
import mexicana from './assets/img/banderamexicana.png';
import espana from './assets/img/banderaespana.png'; 
import mundo from './assets/img/banderasdelmundo.png'; 

const productos = [
    {
      id: "argentina",
      nombre: "traduccionesargentinas",
      descripcion: "",
      precio: "",
      categoria: "traducciones-de-espanol-a-ingles",
      stock: "",
      imagen: ""
    },

  ];
  [
    {
      id: "uruguayas",
      nombre: "traduccionesuruguayas",
      descripcion: "",
      precio: "",
      categoria: "traducciones-de-espanol-a-ingles",
      stock: "",
      imagen: ""
    },
    

  ];
  [
    {
      id: "chilenas",
      nombre: "traduccioneschilenas",
      descripcion: "",
      precio: "",
      categoria: "traducciones-de-espanol-a-ingles",
      stock: "",
      imagen: ""
    },
    

  ];
  [
    {
      id: "mexicanas",
      nombre: "traduccionesmexicanas",
      descripcion: "",
      precio: "",
      categoria: "traducciones-de-espanol-a-ingles",
      stock: "",
      imagen: ""
    },
    

  ];
  [
    {
      id: "espanolas",
      nombre: "traduccionesespanolas",
      descripcion: "",
      precio: "",
      categoria: "traducciones-de-espanol-a-ingles",
      stock: "",
      imagen: ""
    },
    

  ];
  [
    {
      id: "otrospaises",
      nombre: "traduccionesotrospaises",
      descripcion: "",
      precio: "",
      categoria: "Traducciones-de-ingles-a-espanol",
      stock: "",
      imagen: ""
    },
    

  ];

  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
                
  export default productos;