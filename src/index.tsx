import { render }         from 'react-dom';

import { ApolloProvider } from '@apollo/client';
import { apolloClient }   from './ApolloClient';

import App                from './App';

render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
