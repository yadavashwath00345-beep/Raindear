/**
 * Raindear — GitHub Pages Build Config
 *
 * Usage:
 *   npm run build:github
 *
 * This outputs a fully static build to ./dist/
 * Push the contents of ./dist/ to your gh-pages branch.
 *
 * If your repo is at github.com/username/raindear (not root domain),
 * change base below to '/raindear/' (with slashes).
 * If your repo IS the root domain (username.github.io), keep base as './'.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
