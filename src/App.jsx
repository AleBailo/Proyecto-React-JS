
import Navbar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';


const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <CarritoProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer bienvenida="Bienvenido acá podres comprar todos los tickets para festivales, shows y fiestas 🚀" />} />
                        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                </CarritoProvider>
                <ToastContainer />

            </BrowserRouter>

        </div >
    )
}
export default App;
