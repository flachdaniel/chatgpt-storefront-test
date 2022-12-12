
import { createTheme } from '@material-ui/core/styles';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, useQuery } from '@apollo/client';

// Import the `PRODUCT_LIST_QUERY` from the '../queries' module
import { PRODUCT_LIST_QUERY } from '../queries';

// Define the types for the data that will be fetched from the GraphQL endpoint
type ProductEdge = {
  node: {
    id: string;
    name: string;
    description: string;
  };
};
type QueryResult = {
  products: {
    edges: ProductEdge[];
  };
};


export default function ProductListPage() {
  // Create a Material-UI theme using the `createTheme` function from the '@material-ui/core/styles' package
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    palette: {
      primary: {
        main: '#00bcd4',
      },
    },
  });

  // Use the `useApolloClient` hook to get the `client` instance
  // const client = useApolloClient();

  const link = createHttpLink({
    uri: 'https://saleor.oaktree.digital/graphql/',
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  // Use the `useQuery` hook to fetch data from the GraphQL endpoint
  const { loading, data } = useQuery<QueryResult>(PRODUCT_LIST_QUERY, {
    client,
  });

  // Add a type assertion to the `data` variable to tell the TypeScript compiler that you are confident that the `data` variable will be defined
  const products = (data as QueryResult).products.edges;


  return (
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      {/* Use the `Products` component to display a list of product cards, passing the `products` and `loading` props to the `Products` component */}
      <Products products={products} loading={loading} />
    </ApolloProvider>
    </ThemeProvider>
  );
}

function Products({ products, loading }: { products: ProductEdge[]; loading: boolean }) {
  return (
    <Grid container spacing={3}>
      {/* Use the `loading` prop to display a loading message while the data is being fetched from the GraphQL endpoint */}
      {loading && <p>Loading...</p>}

      {/* Map over the list of products and return a product card for each one */}

      {products.map(({ node }) => (
        <Grid item key={node.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt={node.name}
              height="140"
              image={`https://source.unsplash.com/random?${node.name}`}
              title={node.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {node.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {node.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
