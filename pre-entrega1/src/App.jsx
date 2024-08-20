import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import EnglishToSpanish from './components/EnglishToSpanish/EnglishToSpanish';
import SpanishToEnglish from './components/SpanishToEnglish/SpanishToEnglish';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta principal que muestra todos los productos */}
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos" />} />
        {/* Ruta para mostrar productos filtrados por categoría */}
        <Route path="/categoria/:idtipodetraducciones" element={<ItemListContainer />} />
        {/* Ruta para mostrar el detalle de un producto específico */}
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        {/* Ruta para mostrar el componente SpanishToEnglish */}
        <Route path="/tipodetraducciones/traducciones-de-espanol-a-ingles" element={<SpanishToEnglish />} />
        {/* Ruta para mostrar el componente EnglishToSpanish */}
        <Route path="/tipodetraducciones/traducciones-de-ingles-a-espanol" element={<EnglishToSpanish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
