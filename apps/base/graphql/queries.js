import gql from 'graphql-tag';

export const SHOPS = gql`
  {
    shops {
      id
      name
    }
  }
`;
