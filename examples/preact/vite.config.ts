import { defineConfig } from 'vite'
import bookmarklet from "vite-plugin-bookmarklet";
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [bookmarklet(), preact()],
})
