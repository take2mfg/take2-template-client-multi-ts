import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import { onError } from 'apollo-link-error';
// import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';

/*
  *** NOTE: must be open for graph server to run
  SAMPLE SERVER EDITOR - https://codesandbox.io/s/1x5noor93
  *** NOTE: must be open for graph server to run
  SAMPLE SERVER GRAPH ENDPOINT - https://1x5noor93.sse.codesandbox.io/graphql
*/


export const createClient = options => {
  const cache = new InMemoryCache({
    // Example of modifying cache key
    // cacheRedirects: {
    //   Query: {
    //     example: (_, { id }, { getCacheKey }) =>
    //       getCacheKey({ __typename: 'Example', id })
    //   }
    // }
  });

  // Example of an auth link
  // const authLink = new ApolloLink(async (operation, forward) => {
  //   const token = await AsyncStorage.getItem('token');
  //   operation.setContext({
  //     headers: {
  //       authorization: token,
  //     },
  //   });
  // });

  // Example of using client state
  // const clientState = withClientState({
  //   defaults: {
  //     isConnected: true,
  //   },
  //   resolvers: {
  //     Mutation: {
  //       updateNetworkStatus: (_, { isConnected }, { cache }) => {
  //         cache.writeData({ data: { isConnected }});
  //         return null;
  //       },
  //     },
  //   },
  //   cache,
  // });

  const httpLink = new HttpLink({
    uri: 'https://1x5noor93.sse.codesandbox.io/graphql',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([
      // authLink,
      // clientState
      httpLink,
    ]),
    cache,
  });

  return client;
};
