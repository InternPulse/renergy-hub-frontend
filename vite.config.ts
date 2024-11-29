<<<<<<< HEAD

import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
>>>>>>> 7b858b62a5f44deb9d0d7c874a49897957daa064

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
});
=======
})
>>>>>>> 7b858b62a5f44deb9d0d7c874a49897957daa064
