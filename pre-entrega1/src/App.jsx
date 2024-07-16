import './App.css'
import NavBar from "./component/NavBar/NavBar"
import ItemListContainer from './component/itemListContainer/ItemListContainer'
import argentina from './assets/img/argentina.png';
import uruguay from './assets/img/banderauruguay.png'
import chilena from './assets/img/banderachilena.png'
import mexicana from './assets/img/banderamexicana.png'
import espana from './assets/img/banderaespana.png'
import mundo from './assets/img/banderasdelmundo.png'
import ItemCount from './component/ItemCount/ItemCount.jsx'


function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <ItemListContainer saludo="Bienvenidos" />
        <div><h4>Traducciones de partidas de nacimiento</h4></div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="row mb-3">
              <div className="col-4">
                <div className="rectangle">
                  
                </div>
              </div>
              <div className="col-8">
              
                <ul className="tipodetraducciones">
                  <li>
                    <div className="rectangular-img">
                      <img src={argentina} alt="Argentina" className="img-fluid" />
                    </div>
                   <div className="subtitulos"> <h3>Argentinas</h3></div> 
                   <ItemCount initial={1} stock={10} /> 
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={uruguay} alt="bandera uruguay" className="img-fluid" />
                    </div>
                    <div className="subtitulos"> <h3>Uruguayas</h3></div> 
                    <ItemCount initial={1} stock={10} /> 
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={chilena} alt="bandera de chile" className="img-fluid" /></div>
                    <div className="subtitulos"> <h3>Chilenas</h3></div> 
                    <ItemCount initial={1} stock={10} /> 
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <div className="rectangle">
                </div>
              </div>
              <div className="col-8">
                <ul className="tipodetraducciones">
                  <li>
                    <div className="rectangular-img">
                      <img src={mexicana} alt="bandera mexicana" className="img-fluid" />
                    </div>
                    <div className="subtitulos"> <h3>Mexicanas</h3></div> 
                    <ItemCount initial={1} stock={10} /> 
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={espana} alt="bandera espana" className="img-fluid" />
                    </div>
                    <div className="subtitulos"> <h3>Españolas</h3></div> 
                    <ItemCount initial={1} stock={10} /> 
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={mundo} alt="banderasdelmundo" className="img-fluid" />
                    </div>
                    <div className="subtitulos"> <h3>otros paises</h3></div> 
                    <ItemCount initial={1} stock={10} /> 
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;