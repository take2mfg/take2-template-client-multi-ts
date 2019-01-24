import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import Routes from './Routes';

import { createClient } from '../graphql/client';

class App extends Component {
  constructor(props) {
    super(props);
    this.client = createClient();
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

export default App;
