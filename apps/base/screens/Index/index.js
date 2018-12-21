import React from 'react';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

const _Index = ({ t }) => {
  return (
    <div>
      <p>
        {t('Hello World')}
      </p>
      <Link to="/signin">{t('Sign In')}</Link>
    </div>
  );
};

const Index = compose(
  withNamespaces()
)(_Index);

export default Index;
