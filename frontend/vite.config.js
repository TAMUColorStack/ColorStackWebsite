import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    liveReload: true,
    open: true,
    fs : {
      strict: false
    }
  },
})
