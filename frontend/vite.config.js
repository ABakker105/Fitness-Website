import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/workouts': { target: 'http://localhost:3000' },
      '/drinks': { target: 'http://localhost:3001'},
      '/moods': { target: 'http://localhost:3002'},
      '/foodlog': { target: 'http://localhost:3005'},
      '/sleeps': { target: 'http://localhost:3003'}
    }
  }
})
