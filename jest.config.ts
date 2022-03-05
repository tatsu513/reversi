import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  preset: 'ts-jest',
  // ./src 以下のテストファイルを再帰的に探す
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jest-environment-jsdom',
  // *.test.ts ファイルを探す
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],

  // .ts を .js にする
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default createJestConfig(customJestConfig);
