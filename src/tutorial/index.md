---
title: Installation And Setup
page: 1
links:
  [
    { title: "Requirements", href: "#requirements" },
    { title: "Creating new project", href: "#creating-new-project" },
  ]
---

## Requirements

- Nodejs

## Creating new project

```bash
mkdir my-blog
cd my-blog
```

```bash
npm init -y
npm install ulka
```

```bash
touch ulka-config.js
```

```js
module.exports = {
  output: "_site",
  layout: "_layouts",
  contents: {
    root: {
      match: ["index.ulka"],
    },
    blogs: {
      match: "blogs/**/*.ulka",
    },
  },
  copy: ["assets/**"],
};
```
