import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://serp-server.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
    allowedHosts: [
      "2fcf-112-197-33-75.ngrok-free.app",
      "serp-client-ten.vercel.app",
    ],
  },
});
