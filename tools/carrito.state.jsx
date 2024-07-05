import useLocalStorage from '../hooks/useLocalStorage';
import CarritoContext from './carrito.context';

const CarritoState = (props) => {
    const storage = useLocalStorage([], 'carrito');

    const initialState = {
        productos: storage.almacenamiento.map(producto => ({
            ...producto,
            cantidad: producto.cantidad || 1
        })),
        estado: 'en proceso',
    };

    const agregarProducto = (producto) => {
        const nuevosProductos = [...storage.almacenamiento];
        const productoExistente = nuevosProductos.find(p => p._id === producto._id);

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            nuevosProductos.push({ ...producto, cantidad: 1 });
        }

        storage.reemplazar(nuevosProductos);
    };

    const eliminarProducto = (id) => {
        const nuevosProductos = storage.almacenamiento.map(producto => {
            if (producto._id === id) {
                return { ...producto, cantidad: producto.cantidad - 1 };
            }
            return producto;
        }).filter(producto => producto.cantidad > 0);

        storage.reemplazar(nuevosProductos);
    };

    return (
        <CarritoContext.Provider
            value={{
                productos: initialState.productos,
                agregar: agregarProducto,
                eliminar: eliminarProducto
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
};

export default CarritoState;