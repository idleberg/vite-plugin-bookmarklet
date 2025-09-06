import { readFile } from 'node:fs/promises';
import type { Plugin } from 'vite';
import { bookmarkletRE, cleanUrl } from './vite-shims.ts';

/**
 * A Vite plugin that transforms JavaScript files into bookmarklets.
 * @returns a Vite plugin
 */
export default function BookmarkletPlugin(): Plugin {
	return {
		name: 'vite-plugin-bookmarklet',

		load: {
			filter: {
				id: {
					// Rollup convention, this ID should be handled by the
					// plugin that marked it with \0
					exclude: /^\0/,
				},
			},
			async handler(id) {
				if (bookmarkletRE.test(id)) {
					const file = cleanUrl(id);
					this.addWatchFile(file);

					const code = await readFile(file, 'utf-8');

					return `export default ${JSON.stringify(`javascript:(function(){${encodeURIComponent(code)}})()`)}`;
				}
			},
		},
	};
}
