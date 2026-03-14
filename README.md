# vite-plugin-bookmarklet

> A Vite plugin to import scripts as bookmarklets.

[![License](https://img.shields.io/github/license/idleberg/vite-plugin-bookmarklet?color=blue&style=for-the-badge)](https://github.com/idleberg/vite-plugin-bookmarklet/blob/main/LICENSE)
[![Version: npm](https://img.shields.io/npm/v/vite-plugin-bookmarklet?style=for-the-badge)](https://www.npmjs.org/package/vite-plugin-bookmarklet)
[![Version: jsr](https://img.shields.io/jsr/v/@idleberg/vite-plugin-bookmarklet?style=for-the-badge)](https://jsr.io/@idleberg/vite-plugin-bookmarklet)
[![CI: Node](https://img.shields.io/github/actions/workflow/status/idleberg/vite-plugin-bookmarklet/node.yml?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://github.com/idleberg/vite-plugin-bookmarklet/actions/workflows/node.yml)
[![CI: Deno](https://img.shields.io/github/actions/workflow/status/idleberg/vite-plugin-bookmarklet/deno.yml?logo=deno&logoColor=white&style=for-the-badge)](https://github.com/idleberg/vite-plugin-bookmarklet/actions/workflows/deno.yml)

## Installation 💿

```shell
# npm
npm install vite-plugin-bookmarklet

# jsr
deno add jsr:@idleberg/vite-plugin-bookmarklet
```

## Usage 🚀

With this plugin, you can append the `?bookmarklet` to any JavaScript/TypeScript import.

> [!TIP]
> Treat your bookmarklet like any other JavaScript file, the plugin will do the rest:
> - URI-encode the code
> - wrap it inside an [IIFE](https://developer.mozilla.org/docs/Glossary/IIFE)
> - create a [JavaScript URL](https://developer.mozilla.org/docs/Web/URI/Reference/Schemes/javascript)

### Example

Create a `vite.config.ts`(or any other supported format):

```javascript
import { defineConfig } from "vite"
import bookmarklet from "vite-plugin-bookmarklet"

export default defineConfig({
	plugins: [bookmarklet()],
})
```

Take a look at the following implementations:

<details>
<summary>Plain JavaScript</summary>

```js
import bookmarklet from './my-code?bookmarklet'

document.querySelector('#app').innerHTML = `
	<a href="${bookmarklet}">
		Run
	</a>
`
```
</details>

<details>
<summary>Astro</summary>

```astro
---
import bookmarklet from './my-code?bookmarklet'
---

<a href={bookmarklet}>
	Run
</a>
```
</details>

<details>
<summary>Lit</summary>

```js
import { LitElement,  html } from 'lit'
import bookmarklet from './my-code?bookmarklet'

@customElement('bookmarklet')
export class Bookmarklet extends LitElement {
	render() {
		return html`
			<a href=${bookmarklet}>
				Run
			</a>
		`
	}
}
```
</details>

<details>
<summary>Preact</summary>

```tsx
import bookmarklet from './my-code?bookmarklet'

export function Bookmarklet() {
	return (
		<a href={bookmarklet}>
			Run
		</a>
	)
}
```
</details>

<details>
<summary>Svelte</summary>

```svelte
<script>
	import bookmarklet from './my-code?bookmarklet'
</script>

<a href={bookmarklet}>
	Run
</a>
```
</details>

<details>
<summary>Vue</summary>

```vue
<script setup>
	import bookmarklet from './my-code?bookmarklet'
</script>

<template>
	<a :href={bookmarklet}>
		Run
	</a>
</template>
```
</details>

### TypeScript

To avoid type errors, add the following line to your `vite-env.d.ts`:

```ts
/// <reference types="vite-plugin-bookmarklet/client" />
```

Alternatively, you can define the types in your `tsconfig.ts`:

```json
{
	"compilerOptions": {
		"types": ["vite-plugin-bookmarklet/client"]
	}
}
```

## License ©️

This work is licensed under [The MIT License](LICENSE).
