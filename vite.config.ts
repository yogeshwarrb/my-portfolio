import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "ldvpzp-5181.csb.app", // <-- Replace with your sandbox host
    ],
  },
});
