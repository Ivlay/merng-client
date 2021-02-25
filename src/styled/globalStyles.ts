import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.backgroundColor};
        transition: background-color 0.25s ease-in, color 0.25s ease-in;
    }

    button {
        border: none;
        font-family: 'Lato', sans-serif;
        padding: 0;
        background-color: transparent;
    }
`;
