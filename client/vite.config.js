import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: [
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-regular-svg-icons",
    "@fortawesome/react-fontawesome",
  ],
});
