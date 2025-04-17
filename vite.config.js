import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  base:"/portfolio-website/",
  build: {
    outDir: 'dist',  // This is the default output directory, which is what gh-pages expects
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
