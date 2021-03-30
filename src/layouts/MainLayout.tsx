import styled, { ThemeProvider } from 'styled-components';

import { themes }                from '@styled/theme';
import { GlobalStyle }           from '@styled/globalStyles';

import useTheme                  from '@hooks/useTheme';

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

const MainLayout: React.FC = ({ children }) => {
    const { theme, switchTheme } = useTheme();

    return (
        <ThemeProvider theme={themes[theme]}>
            <MainWrapper>
                <Header />
                <SwitcherTheme
                    label   = 'Switch theme'
                    onClick = {switchTheme}
                />
                <GlobalStyle />
                {children}
            </MainWrapper>
        </ThemeProvider>
    );
};

export default MainLayout;
