import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ✅ This fixes blank screen after deployment
  base: "./",
  build: {
    outDir: "dist",
  },
});
