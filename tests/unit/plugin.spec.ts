import { describe, expect, it } from 'vitest';
import bookmarklet from '../hello-world.ts?bookmarklet';

describe('bookmarklet', () => {
	it('should contain alert with "Hello, World!"', () => {
		expect(bookmarklet).toContain('javascript:(function(){alert(%22Hello%2C%20World!%22)%3B%0A})()');
	});
});
