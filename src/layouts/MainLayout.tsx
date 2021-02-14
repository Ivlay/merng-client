import styled,
{   createGlobalStyle,
    ThemeProvider
} from 'styled-components';
import { useState }       from 'react';

import { TTheme, themes } from '@/styled/theme';
import Header             from '@components/Header';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.body};
        transition: background-color 0.25s ease-in, color 0.25s ease-in;
    }
`;

const MainWrapper = styled.div`
    min-height: 100vh;
    max-width: 960px;
    box-sizing: content-box;
    padding: 0 15px;
    margin: 0 auto;
`;

const Button = styled.button`
    color: ${({ theme }) => theme.text};
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
                <Button onClick={handleTheme}>Switch theme</Button>
                <GlobalStyle />
                {children}
            </MainWrapper>
        </ThemeProvider>
    );
};

export default MainLayout;