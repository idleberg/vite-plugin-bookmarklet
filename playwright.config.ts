import { env } from 'node:process';
import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: 'tests/e2e',
	use: {
		trace: 'on-first-retry',
	},
	webServer: {
		command: 'npm run server',
		reuseExistingServer: !env.CI,
	},
});
