---
title: Installation And Setup
page: 1
links:
  [
    { title: 'Requirements', href: '#requirements' },
    { title: 'Creating new project', href: '#creating-new-project' },
  ]
---

## Requirements

- Computer

- Nodejs

  We need nodejs to run ulkajs. So make sure you have nodejs installed on your pc. Visit <https://nodejs.org/en/> and download it.

## Creating new project

Let's start by creating a new directory. Create a directory named `my-blog` using terminal or your file explorer. And change directory to my-blog.

```bash
mkdir my-blog
cd my-blog
```

Now, let's initialize package.json file and install ulka (make sure you are inside my-blog directory).

```bash
npm init -y
```

```bash
npm install ulka
```

Now, create a `ulka-config.js` file and add following content to the file.

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

We will discuss about this `ulka-config.js` file and what's going on this file in next section.
