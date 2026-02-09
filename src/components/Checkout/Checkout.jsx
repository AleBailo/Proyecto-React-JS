import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from "../../service/config"
import { collection, addDoc } from 'firebase/firestore'
import './Checkout.css'



const Checkout = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirmacion, setEmailConfirmacion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [error, setError] = useState('')
    const [ordenId, setOrdenId] = useState('')

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    // Funciones y validaciones
    const manejadorFormulario = (event) => {
        event.preventDefault()

        if (!nombre || !apellido || !email || !emailConfirmacion || !telefono) {
            setError('Por favor, completá todos los campos.')
            return
        }

        if (email !== emailConfirmacion) {
            setError('Los emails no coinciden.')
            return
        }

        // Orden de compra
        const orden = {
            item: carrito.map(evento => ({
                id: evento.item.id,
                nombre: evento.item.nombre,
                precio: evento.item.precio,
                cantidad: evento.cantidad
            })),
            total: total,
            nombre,
            apellido,
            email,
            telefono,
            fecha: new Date()
        }

        // Guardar la orden en Firestore
        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) => {
                setError('Se produjo un error al crear la orden. Por favor, intentalo nuevamente.')
                console.error("Error al crear la orden: ", error)
            })
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                <div className="checkoutResumen">
                    {carrito.map((evento) => (
                        <div key={evento.item.id}>
                            <p>{evento.item.nombre} x {evento.cantidad}</p>
                            <p>Precio: ${evento.item.precio}</p>
                            <hr />
                        </div>

                    ))}
                </div>

                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="emailConfirmacion">Confirmar Email:</label>
                    <input type="email" id="emailConfirmacion" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                {
                    error && <p className="error">{error}</p>
                }

                <button type="submit">Confirmar Compra</button>

                {ordenId && (
                    <div className="checkoutSuccess">
                        <h3>¡Gracias por tu compra!</h3>
                        <h5>Tu número de orden es: {ordenId}</h5>
                    </div>
                )}


            </form>


        </div>
    )
}

export default Checkout