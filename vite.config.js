// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import dts from 'vite-plugin-dts';

// Автоматически находим все .js/.ts файлы в src/
const entries = fs.readdirSync(path.resolve(__dirname, 'src'))
  .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
  .map(file => ({
    name: file.replace(/\.[jt]s$/, ''),
    path: path.resolve(__dirname, 'src', file),
  }));

export default defineConfig({
  build: {
    lib: {
      entry: Object.fromEntries(entries.map(e => [e.name, e.path])),
      formats: ['es', 'cjs'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [
    dts({
      include: ['src/**/*.js', 'src/**/*.ts'], // Обрабатывать JS и TS
      outDir: 'dist/types',                     // Куда складывать .d.ts
      entryRoot: 'src',                         // Корень исходников
    }),
  ],
});