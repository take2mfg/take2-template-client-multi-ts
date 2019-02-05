module.exports = {
  roots: ['<rootDir>/apps'],
  transform: {
    '^.+.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(.|/)(test|spec)).tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: ['jest-spec-reporter', 'jest-junit'],
  globalSetup: '<rootDir>test/globalSetup.js',
  setupTestFrameworkScriptFile: '<rootDir>test/testSetup.js',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
