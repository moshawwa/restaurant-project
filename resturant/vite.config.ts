import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/restaurant/', // Replace 'restaurant' with your actual GitHub repository name
  build: {
    outDir: 'dist',
  },
})