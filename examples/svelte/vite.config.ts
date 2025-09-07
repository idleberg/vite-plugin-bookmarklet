import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import bookmarklet from "vite-plugin-bookmarklet";

// https://vite.dev/config/
export default defineConfig({
  plugins: [bookmarklet(), svelte()],
})
