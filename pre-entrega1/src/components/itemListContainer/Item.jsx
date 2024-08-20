import { Link } from "react-router-dom";



const Item = ({Productos}) => {

return (
    <div>
        <img> </img> 
        <p>nombre del producto</p>
        <link to= {"/tipodetraducciones/"+productos.id }>Ver detalle</link>

    </div>
)

} 

export default Item;