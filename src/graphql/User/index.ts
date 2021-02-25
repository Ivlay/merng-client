import { gql } from '@apollo/client';

export interface IUser {
    userName  : string;
    email     : string;
    token     : string;
    createdAt : string;
    id        : string;
};

export const LOGIN_USER = gql`
    mutation login(
        $userName : String!
        $password : String!
    ) {
        login(
            userName: $userName, password: $password
        ) {
            id
            email
            userName
            createdAt
            token
        }
    }
`;

export const REGISTER_USER = gql`
    mutation register(
        $userName        : String!
        $email           : String!
        $password        : String!
        $confirmPassword : String!
    ) {
        register(
            registerInput: {
                userName        : $userName
                email           : $email
                password        : $password
                confirmPassword : $confirmPassword
            }
        ) {
            id
            email
            userName
            createdAt
            token
        }
    }
`;