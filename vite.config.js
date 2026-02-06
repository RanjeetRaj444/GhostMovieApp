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
});
