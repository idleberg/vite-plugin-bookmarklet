import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import bookmarklet from "vite-plugin-bookmarklet";

// https://vite.dev/config/
export default defineConfig({
  plugins: [bookmarklet(), vue()],
})
