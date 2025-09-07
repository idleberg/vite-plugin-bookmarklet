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

### Example

Create a `vite.config.ts`(or any other supported format):

```javascript
import { defineConfig } from "vite";
import bookmarklet from "vite-plugin-bookmarklet";

export default defineConfig({
	plugins: [bookmarklet()],
});
```

See the [examples](https://github.com/idleberg/vite-plugin-bookmarklet/tree/main/examples) folder vanilla JavaScript and framework-specific implementations.

### TypeScript

To avoid type errors, add the following line to your `vite-env.d.ts`:

```ts
/// <reference types="vite-plugin-bookmarklet/client" />
```

Alternatively, you define the types in your `tsconfig.ts`:

```json
{
	"compilerOptions": {
		"types": ["vite-plugin-bookmarklet/client"]
	}
}
```

## License ©️

This work is licensed under [The MIT License](LICENSE).
