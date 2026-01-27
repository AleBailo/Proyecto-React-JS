
import Navbar from './components/NavBar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer bienvenida="Bienvenido acá podres comprar todos los tickets para festivales, shows y fiestas 🚀" />} />
                    <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}
export default App;
