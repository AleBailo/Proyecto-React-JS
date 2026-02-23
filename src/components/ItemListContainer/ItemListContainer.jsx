import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../service/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import Loader from "../Loader/Loader"


const ItemListContainer = ({ bienvenida }) => {

    const [eventos, setEventos] = useState([])
    const [loading, setLoading] = useState(false)
    const { idCategoria } = useParams()

    useEffect(() => {
        setLoading(true)
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
            .finally(() => {
                console.log("Proceso de carga finalizado")
                setLoading(false)
            })
    }, [idCategoria])

    return (
        <>
            <div className="textoBienvenida">{bienvenida}
            </div>
            <h4 className="textoSubtitulo">Próximos Eventos</h4>
            {loading ? <Loader /> : <ItemList eventos={eventos} />}
        </>
    )
}
export default ItemListContainer
