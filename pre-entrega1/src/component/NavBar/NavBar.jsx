import logoMyTranslator from "../../img/logo.png"
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logoMyTranslator} width={60} height={60} className="d-inline-block align-top" alt="Logo" />
        {' '}
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="tipodetraducciones/traducciones-de-espanol-a-ingles">Traducciones de Español a Inglés</Link>       
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="tipodetraducciones/traducciones-de-ingles-a-espanol">Traducciones de Inglés a Español</Link>
          </li>
        </ul>
        <span className="navbar-text">
          <CartWidget />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;