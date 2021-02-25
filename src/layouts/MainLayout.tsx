import styled, { ThemeProvider } from 'styled-components';
import React, { useState }       from 'react';

import { TTheme, themes }        from '@styled/theme';
import { GlobalStyle }           from '@styled/globalStyles';

import Header                    from '@components/Header';
import Button                    from '@components/UI/Button';

const MainWrapper = styled.div`
    min-height: 100vh;
    max-width: 960px;
    box-sizing: content-box;
    padding: 0 15px;
    margin: 0 auto;
`;

const SwitcherTheme = styled(Button)`
    width: 120px;
`;

const MainLayout: React.FC = ({children}) => {
    const [themeState, setThemeState] = useState<TTheme>('dark');

    //TODO: need create hook useTheme
    const handleTheme = () => {
        if (themeState === 'dark') {
            setThemeState('light');
        } else {
            setThemeState('dark');
        };
    };

    return (
        <ThemeProvider theme={themes[themeState]}>
            <MainWrapper>
                <Header />
                <SwitcherTheme
                    label= 'Switch theme'
                    onClick = {handleTheme}
                />
                <GlobalStyle />
                {children}
            </MainWrapper>
        </ThemeProvider>
    );
};

export default MainLayout;