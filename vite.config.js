import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
const { resolve } = require('path')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
  server: {
    host: '127.0.0.1',
    port: '2001',
    open: true
  }
})
