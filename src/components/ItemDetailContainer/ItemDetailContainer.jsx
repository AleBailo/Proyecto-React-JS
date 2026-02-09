import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../../service/config"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [evento, setEvento] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "eventos", idItem)

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                console.log(data)
                const nuevoEvento = { id: res.id, ...data }
                console.log(nuevoEvento)
                setEvento(nuevoEvento)
            })
            .catch(error => console.log(error))


    }, [idItem])

    return (
        <div>
            <ItemDetail {...evento} />
        </div>
    )
}

export default ItemDetailContainer