
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer bienvenida="Bienvenido acá podres comprar todos los tickets para festivales, shows y fiestas 🚀" />
        </>
    )
}
export default App;
