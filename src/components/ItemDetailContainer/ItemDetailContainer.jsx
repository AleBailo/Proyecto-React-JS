import { useEffect, useState } from 'react'
import { getUnEvento } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [evento, setEvento] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnEvento(idItem)
            .then(respuesta => setEvento(respuesta))
    }, [idItem]);

    return (
        <div>
            <ItemDetail {...evento} />
        </div>
    )
}

export default ItemDetailContainer