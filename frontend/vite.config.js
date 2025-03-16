// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {port:5173}
// })





<<<<<<< HEAD
=======
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



>>>>>>> b646a135f68d9e1d35b3fcbf652727bb130c0a9f

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: '0.0.0.0', // Allow access from outside the container
    port: 5173,      // Keep the same port
    strictPort: true, // Ensure it fails if port 5173 is in use
  }
})

=======
    host: '0.0.0.0',  // Allows access from anywhere
    port: 5173,       // Keep the same port
    strictPort: true, // Ensures it fails if port 5173 is in use
    cors: true,       // Enable CORS for external access
    allowedHosts: 'all' // Allows all hosts
  }
})







>>>>>>> b646a135f68d9e1d35b3fcbf652727bb130c0a9f
