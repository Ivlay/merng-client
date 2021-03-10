import { createContext, useReducer } from 'react';

import { authReducer }               from '@stores/authReducer';
import { useLocaleStorage }          from '@hooks/useLocaleStorage';
import { IUser }                     from '@graphql/User';

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
    //TODO: need research about local state @client Apollo
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
