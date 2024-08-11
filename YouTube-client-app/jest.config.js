module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    },
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    transform: {
        '^.+\\.(ts|js|html)$': 'esbuild-jest',
      },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: true,
    coverageReporters: ['html'],
    coverageDirectory: '<rootDir>/coverage',
    testEnvironment: 'jsdom',
  };
  