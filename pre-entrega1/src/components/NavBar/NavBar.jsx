import logoMyTranslator from "../../img/logo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={logoMyTranslator}
          width={60}
          height={60}
          className="d-inline-block align-top"
          alt="Logo"
        />
        {' '}
        My Translator
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          {/* Enlaces a las categorías */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/argentina">Argentina</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/uruguay">Uruguay</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/chile">Chile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/mexico">México</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/espana">España</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/resto-del-mundo">Resto del Mundo</NavLink>
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
