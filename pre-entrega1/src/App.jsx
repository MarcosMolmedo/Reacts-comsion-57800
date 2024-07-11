import './App.css'
import NavBar from "./component/NavBar/NavBar"
import ItemListContainer from './component/itemListContainer/ItemListContainer'


function App() {
 

  return (
 
      <div >
   
        <NavBar/>    
        <ItemListContainer saludo="Bienvenidos"  />

      </div>
 
    
  )
}

export default App
