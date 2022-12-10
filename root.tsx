import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

// Define the `Root` component, which is the root component of your app
function Root() {
  // Create a new Apollo client using the `ApolloClient` class and the `HttpLink` class from the '@apollo/client' package
    // Use the `createHttpLink` function from the 'apollo-link-http' package to create an `HttpLink` instance
    const link = createHttpLink({
        uri: 'https://saleor.oaktree.digital/graphql/',
      });
    
      const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: link,
      });
    

  return (
    <ApolloProvider client={client}>
      {/* Your application components go here */}
    </ApolloProvider>
  );
}

// Render the `Root` component to the DOM
ReactDOM.render(<Root />, document.getElementById('root'));

export { Root };