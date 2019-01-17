module.exports = {
  testMatch: ['**/*.spec.js'],
  testPathIgnorePatterns: process.env.STORYBOOK ? [] : ['stories.spec.js'],
  reporters: ['jest-spec-reporter', 'jest-junit'],
  globalSetup: '<rootDir>test/globalSetup.js',
  setupTestFrameworkScriptFile: '<rootDir>test/testSetup.js',
};
