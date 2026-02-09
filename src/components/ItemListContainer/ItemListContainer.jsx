import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../service/config"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({ bienvenida }) => {

    const [eventos, setEventos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "eventos"), where("idCat", "==", idCategoria)) : collection(db, "eventos")

        getDocs(misProductos)
            .then(res => {
                const nuevosEventos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }

                })
                setEventos(nuevosEventos)
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <div className="textoBienvenida">{bienvenida}
            </div>

            <h4 className="textoSubtitulo">Próximos Eventos</h4>
            <ItemList eventos={eventos} />

        </>
    )
}
export default ItemListContainer
