import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, inicial, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    // Función para agregar o sacar cantidad
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className='itemCount'>
            <div className='contador'>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
            </div>
            <div className='btnAgregar'>
            <button onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount
