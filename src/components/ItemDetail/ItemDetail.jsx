import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, precio, fecha, img }) => {
    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <h4>Fecha: {fecha}</h4>
            <h4>Precio: ${precio}</h4>
            <img src={img} alt={nombre} />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                veritatis, dolorem consequatur blanditiis maxime esse ipsum error sed
                laboriosam optio eveniet laudantium animi corrupti tenetur, illum
                voluptas veniam saepe facere.
            </p>

        </div>
    )
}

export default ItemDetail