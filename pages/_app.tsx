import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, useQuery } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {

  const link = createHttpLink({
    uri: 'https://saleor.oaktree.digital/graphql/',
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });


  return <Component {...pageProps} />
}
