import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
 base: '/FakeStore/', // This tells Vite how to bundle the app for deployment under a subdirectory

})
