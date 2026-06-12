import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from "dotenv"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_PUBLIC_KEY':process.env.VITE_PUBLIC_KEY,
    'process.env.VITE_SERVICE_ID':process.env.VITE_SERVICE_ID,
    'process.env.VITE_TEMPLATE_ID':process.env.VITE_TEMPLATE_ID
  }
})
