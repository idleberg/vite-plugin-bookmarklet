import { defineConfig } from 'vite';
import plugin from './src/plugin.ts';

export default defineConfig({
	plugins: [plugin()],
	root: 'tests',
	server: {
		port: 7007,
	},
	test: {
		include: ['unit/*.spec.ts'],
	},
});
