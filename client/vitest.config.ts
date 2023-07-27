/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite';
import config from './vite.config';

export default mergeConfig(
  config,
  defineConfig({
    test: {
      globals: true,
      mockReset: true,
      environment: 'jsdom',
      reporters: 'verbose',
      setupFiles: ['./test/setup.ts'],
    },
  }),
);
