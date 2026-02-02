import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const {cantidadTotal} = useContext(CarritoContext);

    const imgCart = "https://cdn-icons-png.flaticon.com/512/3394/3394009.png"

    return (
        <div>
            <Link to="/cart">
            <img className="imgCart" src={imgCart} alt="Imagen de carrito de compras" />
            {cantidadTotal > 0 && <strong className="contadorCarrito">{cantidadTotal}</strong>}
            </Link>
        </div>
    )
}
export default CartWidget

