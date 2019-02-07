const isVisualRegression = !!(process.env.VIZ_REG);

const testPathIgnorePatterns = isVisualRegression ? ['node_modules'] : [
  '/node_modules/',
  '/stories.spec.tsx',
  '/stories.spec.js',
];

const testRegex = isVisualRegression ? '(/__tests__/.*|(.|/)(stories.)(test|spec)).tsx?$' : '(/__tests__/.*|(.|/)(test|spec)).tsx?$';

module.exports = {
  roots: ['<rootDir>/apps'],
  transform: {
    '^.+.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: ['jest-spec-reporter', 'jest-junit'],
  globalSetup: '<rootDir>test/globalSetup.js',
  setupTestFrameworkScriptFile: '<rootDir>test/testSetup.js',
  testPathIgnorePatterns,
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
