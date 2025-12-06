import { expect, test } from '@playwright/test';

test('bookmarklet link triggers alert', async ({ page }) => {
	// Set up the dialog listener BEFORE any action that could trigger it
	const dialogPromise = page.waitForEvent('dialog');

	await page.goto('http://localhost:7007/');

	// Click the bookmarklet link
	await page.click('a[href^="javascript:"]');

	// Wait for and verify the dialog
	const dialog = await dialogPromise;
	expect(dialog.message()).toBe('Hello, World!');
	await dialog.dismiss();
});
