
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer bienvenida="Bienvenido acá podres comprar todos los tickets para festivales, shows y fiestas 🚀" />
            <ItemDetailContainer/>
        </>
    )
}
export default App;
