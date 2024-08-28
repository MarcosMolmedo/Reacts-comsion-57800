import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import Checkout from './components/Checkout/Checkout';

function App() {
 
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos" />} />
        <Route path="/categoria/:idtipodetraducciones" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
