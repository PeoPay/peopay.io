import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      ws: 'isomorphic-ws'
    },
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      external: ['isomorphic-ws', 'ws'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['@/components/animation'],
          web3: ['@wagmi/core', '@rainbow-me/rainbowkit', 'wagmi']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react', 'ws'],
    include: ['@walletconnect/legacy-client']
  }
});
