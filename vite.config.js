import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        silenceDeprecations: ["import"],
        logger: {
          warn: (message, options) => {
            if (message.includes("legacy-js-api")) return;
          },
        },
      },
    },
  },
  build: {
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for node_modules
          vendor: ["react", "react-dom", "react-router-dom"],
          // Redux chunk
          redux: ["@reduxjs/toolkit", "react-redux"],
          // UI libraries chunk
          ui: ["react-icons", "react-circular-progressbar", "react-player"],
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Target modern browsers for smaller bundles
    target: "es2020",
    // Enable source maps for production debugging
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "@reduxjs/toolkit"],
  },
});
