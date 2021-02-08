import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri   : 'http://localhost:8080',
    cache : new InMemoryCache()
});
