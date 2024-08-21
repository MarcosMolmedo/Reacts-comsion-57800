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
    
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos" />} />
   
        <Route path="/categoria/:idtipodetraducciones" element={<ItemListContainer />} />
   
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        
        <Route path="/tipodetraducciones/traducciones-de-espanol-a-ingles" element={<SpanishToEnglish />} />

        <Route path="/tipodetraducciones/traducciones-de-ingles-a-espanol" element={<EnglishToSpanish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
