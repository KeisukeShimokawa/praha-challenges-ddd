import type { Config } from '@jest/types';
import defaultConfig from './jest.common.config';

const config: Config.InitialOptions = {
  ...defaultConfig,
  moduleFileExtensions: ['ts', 'js', 'json'],
  // testMatch: ['**/__tests__/**/*.spec.[jt]s'],
  testMatch: ['**/domain/**/__tests__/**/*.spec.[jt]s'],
  testPathIgnorePatterns: ['integration'],
  collectCoverageFrom: ['**/*.(t|j)s'],
};
export default config;
