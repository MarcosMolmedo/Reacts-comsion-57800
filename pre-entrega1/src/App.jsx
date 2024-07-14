import './App.css'
import NavBar from "./component/NavBar/NavBar"
import ItemListContainer from './component/itemListContainer/ItemListContainer'
import argentina from './assets/img/argentina.png';
import uruguay from './assets/img/banderauruguay.png'
import chilena from './assets/img/banderachilena.png'
import mexicana from './assets/img/banderamexicana.png'
import espana from './assets/img/banderaespana.png'
import mundo from './assets/img/banderasdelmundo.png'


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
                    Argentinas
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={uruguay} alt="bandera uruguay" className="img-fluid" />
                    </div>
                    Uruguayas
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={chilena} alt="bandera de chile" className="img-fluid" />
                    </div>
                    Chilenas
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
                    Mexicanas
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={espana} alt="bandera espana" className="img-fluid" />
                    </div>
                    Españolas
                  </li>
                  <li>
                    <div className="rectangular-img">
                      <img src={mundo} alt="banderasdelmundo" className="img-fluid" />
                    </div>
                    Otros paises 
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