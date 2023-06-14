import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import tsconfigPath from 'vite-tsconfig-paths';

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
  plugins: [
    react(),
    tsconfigPath(),
    checker({
      overlay: false,
      typescript: true,
    }),
  ],
});
