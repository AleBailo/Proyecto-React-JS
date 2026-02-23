import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({ eventos }) => {
  
  return (
    <div className='contenedorEventos'>
        {eventos.map(evento => <Item key={evento.id} {...evento}/> )}



    </div>
  )
}

export default ItemList