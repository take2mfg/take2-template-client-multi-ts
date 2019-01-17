const storybook = require('@storybook/react/standalone');

module.exports = async () => {
  if (process.env.STORYBOOK) {
    await storybook({
      mode: 'static',
      outputDir: './.storybook-static',
      configDir: './.storybook',
    });
  }
};
