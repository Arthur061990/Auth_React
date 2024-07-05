import useLocalStorage from '../hooks/useLocalStorage';
import CarritoContext from './carrito.context';

const CarritoState = (props) => {
    const storage = useLocalStorage([], 'carrito');

    const initialState = {
        productos: storage.almacenamiento,
        estado: 'en proceso',
    };

    return (
        <CarritoContext.Provider
            value={{
                productos: initialState.productos,
                agregar: storage.agregar,
                eliminar: () => {}
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
};

export default CarritoState;