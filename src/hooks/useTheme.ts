import { useEffect }        from 'react';

import { TTheme }           from '@styled/theme';

import { useLocaleStorage } from './useLocaleStorage';

const useTheme = () => {
    const { storedItem, setItem } = useLocaleStorage<TTheme>('theme');

    useEffect(() => {
        if (!storedItem) setItem('dark');
    }, [storedItem, setItem]);

    const switchTheme = () => {
        if (storedItem === 'dark') setItem('light');
        else setItem('dark');
    };

    return {
        theme: storedItem || 'dark',
        switchTheme
    };
};

export default useTheme;
