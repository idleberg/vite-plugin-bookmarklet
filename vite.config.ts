import { defineConfig } from 'vite';
import plugin from './src/plugin.ts';

export default defineConfig({
	plugins: [plugin()],
	root: 'tests',
	server: {
		port: 7007,
	},
	test: {
		browser: {
			provider: 'playwright',
			enabled: true,
			instances: [{ browser: 'chromium' }],
		},
		include: ['unit/*.spec.ts'],
	},
});
