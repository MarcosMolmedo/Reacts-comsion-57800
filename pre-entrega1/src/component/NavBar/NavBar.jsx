import logoMyTranslator from "../../img/logo.png"
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';



 


const NavBar = () => {
   return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="container-fluid">
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
               <a className="nav-link active" aria-current="page" href="#">Inicio</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Traducciones de Espanol a Ingles </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Traducciones de Ingles a Espanol</a>
             </li>
           </ul>
           <span className="navbar-text">
           
           </span>
           <CartWidget /> 
         </div>
       </div>
     </nav>
   );

 };
 
 export default NavBar;