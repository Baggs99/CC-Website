import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

function serveSorterIndex(): Plugin {
  return {
    name: "serve-sorter-index",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split("?")[0];
        if (url === "/sorter" || url === "/sorter/") {
          req.url = "/sorter/index.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  // Root-hosted static deploy (Render, Netlify, etc.). Never use a subdirectory
  // base here unless the site is actually served under that path.
  base: "/",

  plugins: [serveSorterIndex(), react()],
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
