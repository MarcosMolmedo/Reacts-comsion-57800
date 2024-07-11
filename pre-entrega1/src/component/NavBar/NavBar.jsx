import logoMyTranslator from "../../img/logo.png"

const NavBar = () => {
    return (
     <nav>
        <div className="Brand">
            <img src={logoMyTranslator} width={200} alt="" />
           
         <h1>My Translator</h1>
       </div>
    </nav>
    )
  }
  
  export default NavBar