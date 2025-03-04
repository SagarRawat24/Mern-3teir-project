// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {port:5173}
// })





// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0', // Allow access from outside the container
//     port: 5173,      // Keep the same port
//     strictPort: true, // Ensure it fails if port 5173 is in use
//   }
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows access from anywhere
    port: 5173,       // Keep the same port
    strictPort: true, // Ensures it fails if port 5173 is in use
    cors: true,       // Enable CORS for external access
    allowedHosts: 'all' // Allows all hosts
  }
})







