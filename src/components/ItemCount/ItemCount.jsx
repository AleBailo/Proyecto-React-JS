import { useState } from 'react'

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
        <div>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount
