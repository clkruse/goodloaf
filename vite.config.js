import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/goodloaf/",
  plugins: [],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        how: resolve(__dirname, 'how/index.html'),
        howto: resolve(__dirname, 'howto/index.html'),
      },
    },
  },
});