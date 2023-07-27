import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
      '@test': resolve(__dirname, './test/'),
    },
  },
});
