import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5zxcp4-5173.csb.app",
      "5173.csb.app",        
      ".csb.app"             
    ]
  }
})
