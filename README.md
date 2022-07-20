# vite-svg-plugin

transfer svg file to svg symbol in vite

## Install

```bash
npm install vite-svg-plugin -D
```

## quick start

```js
// vite.config.js / vite.config.ts
import { svgBuilder } from 'vite-svg-plugin'

export default {
  plugins: [
    svgBuilder({ path: 'your svg files directory path', prefix: '' })
  ]
}
```

use svg to import

```html
<svg class="svg-icon" aria-hidden="true" v-on="$attrs">
  <use xlink:href="iconName" />
</svg>
```

if you set prefix, the iconName is `#${prefix}-${svgFileName}`. if not, this iconName is `#${svgFileName}`.

## config

you can check /src/type.ts to see the option.
