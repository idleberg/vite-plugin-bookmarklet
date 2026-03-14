import { build, type Plugin, type PluginOption, type ResolvedConfig } from 'vite';
import { bookmarkletRE, cleanUrl } from './vite-shims.ts';

/**
 * A Vite plugin that transforms JavaScript files into bookmarklets.
 * @returns a Vite plugin
 */
export default function BookmarkletPlugin(): Plugin {
	let resolvedConfig: ResolvedConfig;

	return {
		name: 'vite-plugin-bookmarklet',

		configResolved(config) {
			resolvedConfig = config;
		},

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

					// Forward user plugins to the sub-build, excluding this
					// plugin (to avoid recursion) and Vite internals (they
					// carry state from the parent build; build() adds fresh ones).
					const plugins = resolvedConfig.plugins
						.filter((p) => p.name !== 'vite-plugin-bookmarklet' && !p.name.startsWith('vite:'))
						.map((p) => p as PluginOption);

					const result = await build({
						configFile: false,
						plugins,
						resolve: {
							alias: resolvedConfig.resolve.alias,
							conditions: resolvedConfig.resolve.conditions,
						},
						build: {
							write: false,
							lib: {
								entry: file,
								formats: ['iife'],
								name: 'bookmarklet',
							},
							minify: true,
						},
						logLevel: 'silent',
					});

					// build() returns an array when multiple environments are
					// configured, otherwise a single output object.
					const firstResult = Array.isArray(result) ? result[0] : result;

					if (!firstResult || !('output' in firstResult)) {
						throw new Error('Unexpected result from bookmarklet build');
					}

					const chunk = firstResult.output[0];

					if (!chunk) {
						throw new Error('Bookmarklet build produced no output');
					}

					const code = chunk.code;

					return `export default ${JSON.stringify(`javascript:${encodeURIComponent(code)}`)}`;
				}
			},
		},
	};
}
