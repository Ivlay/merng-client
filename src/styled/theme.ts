declare module "styled-components" {
    export interface DefaultTheme extends IpropertiesThemes {

    }
};

export type TTheme = 'dark' | 'light';

export type IpropertiesThemes = typeof themes.dark;

export const themes = {
    dark: {
        body: '#222226',
        text: '#ADADB5'
    },
    light: {
        body: '#FFF',
        text: '#2E444E'
    }
};
