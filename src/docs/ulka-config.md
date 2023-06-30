---
title: Ulka Config
page: 4
links:
  [
    { title: 'Format of file', href: '#format-of-configuration-file' },
    { title: 'Configuration Options', href: '#configuration-options' },
  ]
---

{% raw %}

The configuration file `ulka-config.js` is your gateway to unleash the power of customization and create stunning static websites.

## Format of configuration file

You can export a object or a function from a configuration file.

```js
module.exports = {
  // ...configuration options
}
```

```js
module.exports = (ulka) => {
  return {
    // ...configuration options
  }
}
```

To get editor completion you can import `defineConfig` function from ulka and pass that object or function to this defineConfig function

```js
const { defineConfig } = require('ulka')

module.exports = defineConfig({
  // ...configuration options
})
```

```js
const { defineConfig } = require('ulka')

module.exports = defineConfig((ulka) => {
  return {
    // ...configuration options
  }
})
```

## Configuration Options

Example:

```js
module.exports = {
  input: '.', // source files directory
  output: 'dist', // output directory for generated site
  layout: 'layouts', // directory which has layouts

  contents: {
    // content configuration for the "blog" section
    blog: {
      match: 'blog/*.md', // match markdown files in the "blog" directory
      layout: 'blog.ulka', // default layout for each blogs
      link: (template) => `/blog/${template.matter.link}`, // generate dynamic links based on template data
      forEach: (template, index, templates) => {
        // custom function to transform each template in the "blog" section
      },
    },

    // content configuration for the "projects" section
    projects: {
      match: 'projects/*.md', // match Markdown files in the "projects" directory
      layout: 'project.ulka', // layout specific to the "projects" section
      ignore: ['projects/secret.md'], // ignore specific files in this section
    },
  },

  verbose: true, // Enable verbose output during site generation

  plugins: [
    'plugin1', // "plugin1" (installed from npm)
    {
      plugin: 'plugin2', // "plugin2" (installed from npm)  with options
      options: {
        option1: true,
        option2: 'value',
      },
    },
    (ulka) => {
      // Custom plugin function
    },
  ],

  copy: [
    // copy the png files from assets to images folder inside output folder
    {
      match: 'assets/*.png', // match PNG files in the "assets" directory
      output: (path) => `/images/${path}`, // define output path for each matched file
    },

    'static', // Copy the static folder to output dir
  ],

  metaData: {
    // additional metadata accessible during the site generation process
    author: 'John Doe',
    description: 'A magical website created with Ulka',
  },

  concurrency: 5, // set maximum concurrency level during site generation
}
```

{% endraw %}
