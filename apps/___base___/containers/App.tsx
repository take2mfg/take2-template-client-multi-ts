import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Routes from './Routes';

import { createClient } from '../graphql/client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.client = createClient({});
  }

  client: any

  render() {
    return (
      <ApolloProvider client={this.client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

export default App;
