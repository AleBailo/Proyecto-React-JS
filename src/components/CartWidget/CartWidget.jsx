import "./CartWidget.css"

const CartWidget = () => {

    const imgCart = "https://cdn-icons-png.flaticon.com/512/3394/3394009.png"

    return (
        <div>
            <img className="imgCart" src={imgCart} alt="Imagen de carrito de compras" />

        </div>
    )
}
export default CartWidget

