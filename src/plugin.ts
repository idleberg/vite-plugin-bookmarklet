import { type Plugin, transformWithEsbuild } from 'vite';

/**
 * A Vite plugin that transforms JavaScript files into bookmarklets.
 * @returns a Vite plugin
 */
export default function BookmarkletPlugin(): Plugin {
	return {
		name: 'vite-plugin-bookmarklet',

		async transform(code, id) {
			if (!id.endsWith('?bookmarklet')) {
				return null;
			}

			const transformed = await transformWithEsbuild(code, id, {
				minify: true,
			});

			try {
				return {
					code: `export default 'javascript:(function(){${encodeURIComponent(transformed.code)}})()'`,
					id,
				};
			} catch (_error) {
				this.error(`Failed to load file: ${id}`);
			}
		},
	};
}
