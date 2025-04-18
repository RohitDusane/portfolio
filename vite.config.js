// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';

// export default defineConfig({
//   base:"/website/",
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss],
//     },
//   },
//   assetsInclude: ['**/*.pdf'],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: "/website/",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  assetsInclude: ['**/*.pdf'], // Ensure PDF files are handled correctly
});
