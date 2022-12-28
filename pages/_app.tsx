import '../src/styles/globals.css'
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import client from '../src/apollo/client';

export default function App({ Component, pageProps }: AppProps) {





  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider >
  );
}

