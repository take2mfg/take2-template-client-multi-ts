import * as React from 'react';
import { compose } from 'redux';
import { Form, Field, reduxForm } from 'redux-form';

export const required = value => value ? undefined : 'required';

const _SampleForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit({})}>
    <Field
      name="email"
      component="input"
      type="text"
      placeholder="Email"
      validate={[required]}
    />
    <Field
      name="password"
      component="input"
      type="password"
      placeholder="Password"
      validate={[required]}
    />
    <span className="unique" />
  </Form>
);

const SampleForm = compose(
  reduxForm({
    form: 'testForm',
  })
)(_SampleForm);

export default SampleForm;
