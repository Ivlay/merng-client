declare module 'styled-components' {
    export interface DefaultTheme extends IpropertiesThemes {

    }
};

export type TTheme = 'dark' | 'light';

export type IpropertiesThemes = typeof themes.dark;

export const themes = {
    dark: {
        body: '#222226',
        text: '#ADADB5',
        button: {
            gradient: {
                1: '#DA5201',
                2: '#F8772B'
            },
            color: '#FFDBAD'
        }
    },
    light: {
        body: '#FFF',
        text: '#2E444E',
        button: {
            gradient: {
                1: '#137272',
                2: '#1A8F89'
            },
            color: '#FFF'
        }
    }
};
