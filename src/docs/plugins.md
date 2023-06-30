---
page: 5
title: Plugins
links:
  [
    { title: 'What are plugins', href: '#what-are-plugins' },
    { title: 'Using plugins', href: '#using-plugins' },
  ]
---

## What are plugins ?

Plugins are powerful extensions that enhance the functionality of Ulka. They allow you to customize and modify the site generation process at specific stages.

## Using plugins

Using ulka plugins is very straight forward. All you need to do is pass the plugin to the plugins array in `ulka-config.js`

#### Passing plugin as a string

```js
module.exports = {
  plugins: [
    '@ulkajs/plugin-tags',
    // or
    {
      plugin: '@ulkajs/plugin-tags',
      options: { matterKey: '_tags' },
    },
  ],
}
```

#### Passing plugin as a function

```js
const _tagsPlugin = require('@ulkajs/plugin-tags')

const tagsPlugin = () => _tagsPlugin({ matterKey: '_tags' })

module.exports = {
  plugins: [tagsPlugin],
}
```

<br />
Plugins in Ulka offer a flexible and customizable way to enhance its functionality. Whether using pre-existing plugins from the npm ecosystem or creating your own custom plugins, you can extend Ulka's capabilities and tailor the site generation process to meet your specific requirements. By exploring the available plugins and experimenting with different options, you can unlock the full potential of Ulka and create remarkable static websites.

<br />
