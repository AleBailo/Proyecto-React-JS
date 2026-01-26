import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getEventos, getEventosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ bienvenida }) => {

    const [eventos, setEventos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        const funcionEventos = idCategoria ? getEventosPorCategoria : getEventos

        funcionEventos(idCategoria)
            .then(respuesta => setEventos(respuesta))
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
