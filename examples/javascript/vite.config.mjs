import { defineConfig } from 'vite'
import bookmarklet from "vite-plugin-bookmarklet";

// https://vite.dev/config/
export default defineConfig({
  plugins: [bookmarklet()],
})
