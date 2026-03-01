import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base: '/',
}
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  preview: {
    port: 3000,
    host: '0.0.0.0'
  }
})

