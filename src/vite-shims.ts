/**
 * This file contains utility functions adapted from Vite's source code.
 */

/**
 * {@link {@see https://github.com/vitejs/vite/blob/v7.0.0/packages/vite/src/shared/utils.ts#L31}}
 */
const postfixRE = /[?#].*$/;

/**
 * Adapted from the raw query parameter
 * {@link {@see https://github.com/vitejs/vite/blob/v7.0.0/packages/vite/src/node/utils.ts#L345}
 */
export const bookmarkletRE = /(\?|&)bookmarklet(?:&|$)/;

/**
 * {@link {@see https://github.com/vitejs/vite/blob/v7.0.0/packages/vite/src/shared/utils.ts#L32-L34}
 */
export function cleanUrl(url: string): string {
	return url.replace(postfixRE, '');
}
