import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/BigScreenDemo/",
  build: {
    outDir: "docs",
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
});
