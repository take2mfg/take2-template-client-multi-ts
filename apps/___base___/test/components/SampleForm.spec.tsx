import React from 'react';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer, Field } from 'redux-form';

import SampleForm, { required } from '../../components/SampleForm';

describe('SampleForm - Component (example)', () => {
  let store;
  let component;

  // Strap up a real version of the form
  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    component = mount(
      <Provider store={store}>
        <SampleForm />
      </Provider>,
    );
  });

  test('testing an input exists', () => {
    expect(component.find('input[name="email"]').length).toEqual(1);
  });

  test('testing state after a change', () => {
    const value = 'Test';
    component
      .find('input[name="email"]')
      .simulate('change', { target: { value } });
    expect(store.getState().form.testForm.values.email).toEqual(value);
  });

  test('testing state after a change (with snapshot)', () => {
    const value = 'Test';
    component
      .find('input[name="email"]')
      .simulate('change', { target: { value } });
    expect(store.getState()).toMatchSnapshot();
  });

  test('testing syncErrors after a touch (with snapshot)', () => {
    component.find('input[name="email"]').simulate('focus');
    expect(store.getState()).toMatchSnapshot();
  });

  test('testing if a validator on a field', () => {
    expect(
      component.contains(
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
          validate={[required]}
        />,
      ),
    ).toEqual(true);
  });
});
