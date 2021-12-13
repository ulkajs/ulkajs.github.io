---
title: Configs
page: 2
links: [{ title: 'Ulka config file', href: '#ulka-config-file' }]
---

## Ulka config file

Ulka config file is javascript file which exports object consisting of special keys with values which tells ulka to how and where to generate static files.

## Understanding the config

We added something in ulka-config.js in previous section. Now let's understand what each key is for.

```js
module.exports = {
  output: '_site',
  layout: '_layouts',
  contents: {
    root: {
      match: ['index.ulka'],
    },
    blogs: {
      match: 'blogs/**/*.ulka',
    },
  },
  copy: ['assets/**'],
}
```

- **output**

Path from current working directory where all files should be generated.

- **layout**

Path from current working directory where all layouts are kept.

- **plugins**

plugins are described [here](/docs/plugins). Later we will be adding some plugins to our project.
