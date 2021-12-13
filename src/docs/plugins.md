---
page: 3
title: Plugins
links:
  [
    { title: 'What are plugins', href: '#what-are-plugins' },
    { title: 'Using plugins', href: '#using-plugins' },
  ]
---

## What are plugins ?

Plugins are scripts that lets you to customize, add features.

## Using plugins

Using ulka plugins is very straight forward. All you need to do is pass the plugin to the plugins array in `ulka-config.js`

#### Passing plugin as a string

```js
module.exports = {
  plugins: [
    '@ulkajs/plugin-sass',
    {
      plugin: '@ulkajs/plugin-tags',
      options: { matterKey: '_tags' },
    },
  ],
}
```

#### Passing plugin as a function

```js
const sassPlugin = require('@ulkajs/plugin-sass')
const _tagsPlugin = require('@ulkajs/plugin-tags')

const tagsPlugin = () => _tagsPlugin({ matterKey: '_tags' })

module.exports = {
  plugins: [sassPlugin, tagsPlugin],
}
```
