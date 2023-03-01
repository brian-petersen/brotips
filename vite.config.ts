import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Needed for github pages deploy
  base: '/brotips/',
  plugins: [react()],
})
