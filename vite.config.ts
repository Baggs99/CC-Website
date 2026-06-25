import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  // Root-hosted static deploy (Render, Netlify, etc.). Never use a subdirectory
  // base here unless the site is actually served under that path.
  base: "/",

  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Default: explicit so hashed bundles always land in dist/assets/
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
  },
});
