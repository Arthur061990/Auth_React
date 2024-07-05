import useLocalStorage from '../hooks/useLocalStorage';
import CarritoContext from './carrito.context';

const CarritoState = (props) => {
    const storage = useLocalStorage([], 'carrito');

    const initialState = {
        productos: storage.almacenamiento,
        estado: 'en proceso',
    };

    const eliminarProducto = (id) => {
        console.log(id)
        const nuevosProductos = storage.almacenamiento.filter(producto => producto._id !== id);
        console.log(nuevosProductos)
        storage.reemplazar(nuevosProductos);
    };

    return (
        <CarritoContext.Provider
            value={{
                productos: initialState.productos,
                agregar: storage.agregar,
                eliminar: eliminarProducto
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
};

export default CarritoState;