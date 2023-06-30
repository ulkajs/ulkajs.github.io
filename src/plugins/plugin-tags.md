---
title: Tags Plugin
page: 2
links:
  [
    { title: 'Installation', href: '#installation' },
    { title: 'Usage', href: '#usage' },
    { title: 'Plugin Options', href: '#plugin-options' },
  ]
---

The Tags plugin is a plugin for Ulka that provides functionality related to organizing content based on tags. It allows you to define a specific key in your front matter to represent tags and creates a mapping of tags to the corresponding content templates. This plugin helps in categorizing and grouping content based on tags, enabling easier navigation and filtering.

## Installation

To use the Tags plugin, you need to install it from npm using the following command:

```sh
npm install @ulkajs/plugin-tags
```

## Usage

- Add the plugin to configuration file.

  ```js
  module.exports = {
    plugins: [
      {
        plugin: '@ulkajs/plugin-tags',
        options: {
          matterKey: '_tags', // default => tags
          contextKey: 'tags', // default => tags
        },
      },
    ],
  }
  ```

- Use `matterKey` as the key in frontmatter for tags

  ```md
  ---
  title: Sample Title
  _tags:
    - tag1
    - tag2
  ---
  ```

## Plugin Options

The Tags plugin accepts the following options:

- matterKey (optional):

  Specifies the key in the front matter that represents tags. By default, it is set to 'tags'.

- contextKey (optional):

  Specifies the key to store the tags mapping in the template context. By default, it is set to 'tags'.
