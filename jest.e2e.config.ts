import type { Config } from '@jest/types';
import defaultConfig from './jest.common.config';

const config: Config.InitialOptions = {
  ...defaultConfig,
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.e2e-spec.[jt]s'],
};
export default config;
