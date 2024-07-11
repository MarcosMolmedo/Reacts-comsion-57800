import logoMyTranslator from "../../img/logo.png"
import CartWidget from "./CartWidget"
 


const NavBar = () => {
    return (
     <nav>
        <div className="Brand">
            <img src={logoMyTranslator} width={150} alt="" />
           
         <h1>My Translator</h1>
       </div>
       <ul>
        <li>Traduccion Partida de Nacimiento Argentina</li>
        <li>Traduccion Partida de Nacimiento Uruguaya</li>
        <li>Traduccion Partida de Nacimiento Chilena</li>
        <li>Traduccion Partida de Nacimiento Mexicana</li>
        <li>Traduccion Partida de Nacimiento Espanola</li>
        <li>Traduccion Partida de Nacimiento de otro pais Hispano Hablante</li>
       </ul>

       <CartWidget />
    </nav>
    )
  }
  
  export default NavBar