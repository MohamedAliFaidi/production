import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import { splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),viteCompression(),splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          console.log(id)
          // Split third-party dependencies into smaller chunks
          if (id.includes('node_modules')) {
            // Split common React-related dependencies
            if (
              id.includes('@material-tailwind') 
            ) {
              return '@material-tailwind';
            }
            if (
              id.includes('react-router-dom') ||
              id.includes('@remix-run') ||
              id.includes('react-router')
            ) {
              return '@react-router';
            }
            if (id.includes('@heroicons/react') || id.includes('@material-tailwind/react') || id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-hot-toast') || id.includes('zustand')) {
              return 'react_vendor';
            }
            // Split other third-party dependencies
            else {
              return 'other_vendor';
            }
          }
        },
      },
    },
  },

})
