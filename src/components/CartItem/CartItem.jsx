import { useContext} from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className='cartItem'>
        <div className='cartItemInfo'>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
        </div>

        <button className='btnEliminar' onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem