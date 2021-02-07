import { render } from 'react-dom';

import App        from './App';
import MainLayout from '@layouts/MainLayout';

render(
    <MainLayout>
        <App />
    </MainLayout>,
    document.getElementById('root')
);
