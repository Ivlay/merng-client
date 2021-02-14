import { createContext, useReducer } from 'react';

import { authReducer, IUser } from '@stores/authReducer';
import { useLocaleStorage }   from '@/hooks/useLocaleStorage';

export interface IUserContext {
    user   : IUser,
    login  : (userData: IUser) => void,
    logOut : () => void
};

const AuthContext = createContext<IUserContext>({
    user   : null,
    login  : () => {},
    logOut : () => {}
});

const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch]       = useReducer(authReducer, { user: null });
    const { setItem, removeItem } = useLocaleStorage('AUTH_TOKEN');

    const login  = (userData: IUser) => {
        dispatch({ type: 'LOGIN', payload: userData });
        setItem(userData.token);
    };
    const logOut = () => {
        dispatch({ type: 'LOGOUT' });
        removeItem();
    };

    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
