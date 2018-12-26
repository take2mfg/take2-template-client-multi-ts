import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import App from './containers/App';

import i18n from './utils/i18n';
import { configureStore } from './store';
const { store } = configureStore();

// Dispatch any store actions
// store.dispatch(someAction(props));

const startApp = async () => {

  // Set up a fakeApp method for development, because app filling sucks.
  // window.fillForm = process.env.NODE_ENV === 'production' ? () => {} : () => {
  //   const form = 'sampleform';
  //   const data = { email: 'test@example', password: 'password' };
  //   const dispatch = store.dispatch;
  //
  //   batchUpdateKeys({ form, data, dispatch });
  // };

  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>,
    document.getElementById('root')
  );
};

startApp();
