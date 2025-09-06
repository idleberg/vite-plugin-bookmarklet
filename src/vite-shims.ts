const postfixRE = /[?#].*$/;

export const bookmarkletRE = /(\?|&)bookmarklet(?:&|$)/;

export function cleanUrl(url: string): string {
	return url.replace(postfixRE, '');
}
