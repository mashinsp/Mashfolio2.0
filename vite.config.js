import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk warning limit (KB)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Basic manual chunking to split large vendor libraries
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            'framer-motion'
          ],
        },
      },
    },
  },
})