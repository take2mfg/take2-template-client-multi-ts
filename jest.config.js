module.exports = {
  'setupTestFrameworkScriptFile': '<rootDir>testSetup.js',
  'testMatch': [
    '**/*.spec.js',
  ],
  reporters: ['jest-spec-reporter', 'jest-junit'],
};
