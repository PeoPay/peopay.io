import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      ws: 'isomorphic-ws'
    }
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  optimizeDeps: {
    include: ['@rainbow-me/rainbowkit', 'wagmi', 'viem']
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      external: ['ws'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          web3: ['wagmi', 'viem', '@rainbow-me/rainbowkit']
        }
      }
    }
  }
});