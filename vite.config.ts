import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration pour Vercel
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/framer-motion')) return 'motion';
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor';
          if (id.includes('node_modules/react-router-dom')) return 'router';
        },
      },
    },
  },
});
