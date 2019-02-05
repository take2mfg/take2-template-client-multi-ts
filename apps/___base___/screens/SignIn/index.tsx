import React from 'react';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import SampleForm from '../../components/SampleForm';

const _SignIn = ({ t }) => {
  return (
    <div>
      <p>{t('Sign In')}</p>
      <SampleForm />
      <Link to="/">{t('Hello World')}</Link>
    </div>
  );
};

const SignIn = compose(withNamespaces())(_SignIn);

export default SignIn;
