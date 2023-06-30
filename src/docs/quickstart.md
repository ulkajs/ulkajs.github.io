---
page: 2
title: Quickstart
links:
  [
    { title: 'Creating new project', href: '#creating-new-project' },
    { title: 'Building', href: '#building-static-site' },
    { title: 'Development Server', href: '#development-server' },
  ]
---

## Requirements

- Nodejs

  Visit [https://nodejs.org/](https://nodejs.org/) and download nodejs labelled as with LTS.

- Editor

  For efficient code writing, a recommended editor is [Visual Studio Code (VSCode)](https://code.visualstudio.com/). To enhance productivity and readability specifically for Ulka code, the [Ulka extension](https://marketplace.visualstudio.com/items?itemName=Roshan.ulka-language-support) for VSCode offers code highlighting and formatting capabilities.

## Creating new project

```bash
npm init ulka <project-name>
cd <project-name>
npm install
```

Above command will generate a basic template install all the dependencies.

## Building static site

```bash
npx ulka
```

Above command builds all the files into output path specified in `ulka-config.js`.

## Development server

```bash
npx ulka -w
```

Above command build, create live development server and watch files.
