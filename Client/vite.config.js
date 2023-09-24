import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/local-assets': {
        target: 'file://' + "D:\Proyectos\Rick_and_Morty\Rick_and_Morty\rick-and-morty-webpage",
        changeOrigin:true,
        secure: false,
        rewrite: (path) => path.replace(/^\/local-assets/,"")
      }
    }
  }
})
