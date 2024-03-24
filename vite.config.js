import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({exportAsDefault: true})],
  server: {
    port: 3000,
    open: true
  },
  define: {
    __API__: JSON.stringify('https://vbdeliveryserver-eemjdi2u.b4a.run')
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
