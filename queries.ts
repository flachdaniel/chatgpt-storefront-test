import { gql } from 'apollo-boost';

const PRODUCT_LIST_QUERY = gql`
  {
    products(first: 5, channel: "default-channel") {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;

export { PRODUCT_LIST_QUERY };