import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

let storybookUrl = 'file:///';
storybookUrl += path.resolve(__dirname, '../../../.storybook-static');

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({ storybookUrl }),
});
