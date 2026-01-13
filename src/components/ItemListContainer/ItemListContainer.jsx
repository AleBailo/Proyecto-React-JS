import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getEventos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ bienvenida }) => {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        getEventos()
            .then(respuesta => setEventos(respuesta))
            .catch(error => console.log(error))
    }, [])

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
