import argentina from './assets/img/argentina.png'; 
import uruguay from './assets/img/banderauruguay.png'; 
import chilena from './assets/img/banderachilena.png';
import mexicana from './assets/img/banderamexicana.png';
import espana from './assets/img/banderaespana.png'; 
import mundo from './assets/img/banderasdelmundo.png'; 

const productos = [
  {
    id: "argentina",
    nombre: "Traducciones Argentinas",
    descripcion: "Traducciones de documentos argentinos.",
    precio: "$100",
    categoria: "traducciones-de-espanol-a-ingles",
    stock: 10,
    imagen: argentina
  },
  {
    id: "uruguayas",
    nombre: "Traducciones Uruguayas",
    descripcion: "Traducciones de documentos uruguayos.",
    precio: "$110",
    categoria: "traducciones-de-espanol-a-ingles",
    stock: 15,
    imagen: uruguay
  },
  {
    id: "chilenas",
    nombre: "Traducciones Chilenas",
    descripcion: "Traducciones de documentos chilenos.",
    precio: "$120",
    categoria: "traducciones-de-espanol-a-ingles",
    stock: 20,
    imagen: chilena
  },
  {
    id: "mexicanas",
    nombre: "Traducciones Mexicanas",
    descripcion: "Traducciones de documentos mexicanos.",
    precio: "$130",
    categoria: "traducciones-de-espanol-a-ingles",
    stock: 25,
    imagen: mexicana
  },
  {
    id: "espanolas",
    nombre: "Traducciones Españolas",
    descripcion: "Traducciones de documentos españoles.",
    precio: "$140",
    categoria: "traducciones-de-espanol-a-ingles",
    stock: 30,
    imagen: espana
  },
  {
    id: "otrospaises",
    nombre: "Traducciones Otros Países",
    descripcion: "Traducciones de documentos de otros países.",
    precio: "$150",
    categoria: "traducciones-de-ingles-a-espanol",
    stock: 35,
    imagen: mundo
  }
];

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export default obtenerProductos;
