import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';

storiesOf('BaseApp|Button', module)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('with text', () => (
    <Button onClick={action('button-click')}>Hello Button</Button>
  ));


storiesOf('BaseApp|Button/Emoji', module)
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ), { info: { text: `
    ### Additional Info
    You can use markdown to add additional info to a story
  `} });
