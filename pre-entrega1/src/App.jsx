import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/components/itemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
