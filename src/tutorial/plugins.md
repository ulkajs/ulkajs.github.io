---
title: Using Plugins
---

First let's install the plugin and tell ulka to use the plugin.

```sh
npm install @ulkajs/plugin-tags -D
```

```js
// ulka-config.js
module.exports = {
  // ...
  plugins: ['@ulkajs/plugin-tags'],
  // ...
}
```

This is will add ability to add `tags` to our contents' frontmatter. To configure the key you can pass the options.

```js
// ulka.config.js

module.exports = {
  // ...
  plugins: [
    {
      name: '@ulkajs/plugin-tags',
      options: { matterKey: '_tags' },
    },
  ],
  // ...
}
```
