// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(),    tailwindcss()],
//   define: {
//     'process.env': process.env, // Ensures env variables are available
//   },
//   base: '/UI/', // Change to your repo name

// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ Set to "/"
});
