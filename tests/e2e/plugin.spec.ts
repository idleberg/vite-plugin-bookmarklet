import { expect, test } from '@playwright/test';

test('bookmarklet link triggers alert', async ({ page }) => {
	await page.goto('http://localhost:7007/');

	// Listen for the alert dialog
	page.once('dialog', async (dialog) => {
		expect(dialog.message()).toBe('Hello, World!');
		await dialog.dismiss();
	});

	// Click the bookmarklet link
	await page.click('a[href^="javascript:"]');
});
