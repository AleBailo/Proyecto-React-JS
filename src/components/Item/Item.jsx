import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, fecha, img }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {nombre}</h5>
                    <p className="card-text">{fecha}</p>
                    <h6 className="card-title"> {precio}</h6>
                    <Link to={`/item/${id}`} className="btn btn-primary event-btn">Ir al evento</Link>
                </div>
        </div>
    )
}

export default Item