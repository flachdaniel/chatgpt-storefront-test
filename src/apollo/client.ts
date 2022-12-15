import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const link = createHttpLink({
    uri: 'https://saleor.oaktree.digital/graphql/',
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});


export default client;