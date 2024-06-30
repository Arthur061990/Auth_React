import useLocalStorage from '../hooks/useLocalStorage';
import AuthContext from './auth.context';

const AuthState = (props) => {
    const storage = useLocalStorage({token:null}, 'auth');

    const initialState = {
        auth: storage.almacenamiento,
    };

    const reset = () => {
        storage.reemplazar({token:null});
    }

    return (
        <AuthContext.Provider
            value={{
                auth: initialState.auth,
                set: (token) => storage.reemplazar({token}),
                reset
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;