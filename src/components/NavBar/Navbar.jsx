import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/logo.png" alt="Logo" className="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/categoria/shows" className="nav-link">Shows</Link>
                            <Link to="/categoria/festivales" className="nav-link">Festivales</Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar evento..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>

                        <CartWidget />
                    </div>
                </div>
            </nav>


        </>
    )
}
export default Navbar

