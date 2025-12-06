import { expect, test } from '@playwright/test';

test('bookmarklet link triggers alert', async ({ page }) => {
	// Set up the dialog handler BEFORE any action that could trigger it
	const dialogPromise = new Promise<string>((resolve) => {
		page.once('dialog', async (dialog) => {
			const message = dialog.message();
			await dialog.dismiss();
			resolve(message);
		});
	});

	await page.goto('http://localhost:7007/');

	// Wait for the bookmarklet link to be present in the DOM
	const link = await page.waitForSelector('a[href^="javascript:"]');

	// Click the bookmarklet link
	await link.click();

	// Verify the dialog message
	const message = await dialogPromise;
	expect(message).toBe('Hello, World!');
});
