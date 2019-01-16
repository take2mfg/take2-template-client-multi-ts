import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .addWithJSX('with text', () => (
    <Button onClick={action('button-click')}>Hello Button</Button>
  ));


storiesOf('Button/Emoji', module)
  .addWithJSX('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ), {
    notes: { markdown: `
### An emoji button
You know you like it.
    ` },
  });
