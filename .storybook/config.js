import { configure, setAddon, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import JSXAddon from 'storybook-addon-jsx';

addDecorator(checkA11y);
addDecorator(withNotes);

setAddon(JSXAddon);

function loadStories() {
  require('../apps/___base___/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
