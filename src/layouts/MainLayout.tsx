import styled,
{   createGlobalStyle,
    ThemeProvider
} from 'styled-components';
import { useState }       from 'react';

import { themes, TTheme } from '@/styled/theme';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const MainWrapper = styled.div`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    min-height: 100vh;
    transition: background-color 0.25s ease-in, color 0.25s ease-in;
`;

const Button = styled.button`
    color: ${({ theme }) => theme.text};
`;

const MainLayout: React.FC = ({children}) => {
    const [themeState, setThemeState] = useState<TTheme>('dark');

    //TODO: need think how update theme mb use LS or update useMutation??
    const handleTheme = () => {
        if (themeState === 'dark') {
            setThemeState('light');
        } else {
            setThemeState('dark');
        };
    };

    return (
        <ThemeProvider theme={themes[themeState]}>
            <MainWrapper className='main'>
                <Button onClick={handleTheme}>Switch theme</Button>
                <GlobalStyle />
                {children}
            </MainWrapper>
        </ThemeProvider>
    );
};

export default MainLayout;