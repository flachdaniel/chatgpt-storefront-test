import '../styles/globals.css'
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, useQuery } from '@apollo/client';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const link = createHttpLink({
    uri: 'https://saleor.oaktree.digital/graphql/',
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider >
  );
}

