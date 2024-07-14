import './App.css'
import NavBar from "./component/NavBar/NavBar"
import ItemListContainer from './component/itemListContainer/ItemListContainer'


function App() {
 

  return (
 
      <div >
   
        <NavBar/>    
        <ItemListContainer saludo="Bienvenidos"  />
        
        <div> <h5 classNane="titulo">Tipo de Traducciones</h5></div>
    
        <ul className="tipodetraducciones">
           <li>Traducción Partida de Nacimiento Argentina</li>
            <li>Traducción Partida de Nacimiento Uruguaya</li>
            <li>Traducción Partida de Nacimiento Chilena</li>
            <li>Traducción Partida de Nacimiento Mexicana</li>
            <li>Traducción Partida de Nacimiento Española</li>
            <li>Traducción Partida de Nacimiento de otro país Hispano Hablante</li>
          </ul>
        

      </div>

      
      
 
    
  )
}

export default App
