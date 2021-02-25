import { IUser } from '@graphql/User';

type TActionAuth = { type: 'LOGIN', payload: IUser } | { type: 'LOGOUT' };

interface IUserState {
    user: IUser;
};

export const authReducer = (state: IUserState, action: TActionAuth): IUserState => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state
    };
};
