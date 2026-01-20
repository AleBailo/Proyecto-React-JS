import { useEffect, useState } from 'react'
import { getUnEvento } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [evento, setEvento] = useState(null);

    useEffect(() => {
        getUnEvento(2)
            .then(respuesta => setEvento(respuesta))
    }, []);

    return (
        <div>
            <ItemDetail {...evento} />
        </div>
    )
}

export default ItemDetailContainer