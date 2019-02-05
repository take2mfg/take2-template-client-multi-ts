import React from 'react';
import { get, map } from 'lodash';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import { SHOPS } from '../../graphql/queries';

const _Index = ({ t }) => {
  return (
    <div>
      <p>{t('Hello World')}</p>
      <Link to="/signin">{t('Sign In')}</Link>
      <Query query={SHOPS}>
        {({ data, loading, error }) => {
          if (loading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return (
              <p>
                Try opening{' '}
                <a href="https://codesandbox.io/s/1x5noor93" target="_blank">
                  https://codesandbox.io/s/1x5noor93
                </a>{' '}
                to restart the server
              </p>
            );
          }

          const shops = map(get(data, 'shops'), ({ id, name }) => (
            <li key={id}>{name}</li>
          ));

          return <ul>{shops}</ul>;
        }}
      </Query>
    </div>
  );
};

const Index = compose(withNamespaces())(_Index);

export default Index;
