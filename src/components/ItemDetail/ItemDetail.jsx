import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";



const ItemDetail = ({ id, nombre, precio, fecha, img, stock }) => {

    //Estado local con la cantidad de productos agregados
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext(CarritoContext);

    // Función manejadora de la cantidad
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);

        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
    }




    return (
        <div className='contenedorItem'>
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <h4>🗓️ {fecha}</h4>
            <h4>📍 {id}</h4>
            <h4>Precio: ${precio}</h4>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                veritatis, dolorem consequatur blanditiis maxime esse ipsum error sed
                laboriosam optio eveniet laudantium animi corrupti tenetur, illum
                voluptas veniam saepe facere.
            </p>

            {/* Empleamos la logica de montaje y desmontaje del contador */}

            {
                agregarCantidad > 0 ? (<Link to="/cart">Terminar comprar</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }


        </div>
    )
}

export default ItemDetail