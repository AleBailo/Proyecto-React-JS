import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="cartEmpty">
                <h2>El carrito está vacío</h2>
                <Link to="/" className="btnVolver">Ver eventos</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            {
                carrito.map(producto => <CartItem key={producto.id} {...producto} />)}

            <div className="cartResumen">
                <h3>Precio total: ${total}</h3>
                <h3>Cantidad de productos: {cantidadTotal}</h3>
                <div className="cartActions">
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to="/checkout">Finalizar compra</Link>
                </div>

            </div>
        </div>


    )
}


export default Cart
