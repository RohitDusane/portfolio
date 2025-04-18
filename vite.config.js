import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base:"/website/",
  plugins: [react()],
  assetsInclude: ['**/*.pdf']
 
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
