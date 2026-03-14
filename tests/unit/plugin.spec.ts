import { describe, expect, it } from 'vitest';
import bookmarklet from '../hello-world.ts?bookmarklet';

describe('bookmarklet', () => {
	it('should contain alert with "Hello, World!"', () => {
		expect(bookmarklet).toMatch(/^javascript:/);
		expect(decodeURIComponent(bookmarklet)).toContain('Hello, World!');
	});

	it('should strip TypeScript type annotations', () => {
		const code = decodeURIComponent(bookmarklet);

		expect(code).toMatch(/^javascript:/);
		expect(code).toContain('Hello, World!');
		expect(code).not.toContain(': string');
	});
});
