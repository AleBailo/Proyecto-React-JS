import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { toast } from "react-toastify";



const ItemDetail = ({ id, nombre, precio, fecha, ubicacion, img, stock, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext(CarritoContext);

    // Función manejadora de la cantidad
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
        toast.success(`Se agregaron productos al carrito!`, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored"
        });
    }

    return (
        <div className='contenedorItem'>
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <h4>🗓️ {fecha?.toDate().toLocaleDateString()}</h4>
            <h4>📍 {ubicacion}</h4>
            <h4>Precio: ${precio}</h4>

            <p>{descripcion}</p>
            

            {/* Empleamos la logica de montaje y desmontaje del contador */}

            {
                agregarCantidad > 0 ? (<Link to="/cart">Terminar comprar</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }


        </div>
    )
}

export default ItemDetail