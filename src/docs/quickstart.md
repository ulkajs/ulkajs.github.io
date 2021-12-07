---
page: 2
title: Quickstart
links:
  [
    { title: "Creating new project", href: "#creating-new-project" },
    { title: "Building", href: "#building-static-site" },
    { title: "Development Server", href: "#development-server" },
  ]
---

> This quick start is not intended for developers who are new to ulka. For step by step guide, head to our [tutorial](/tutorial)

## Creating new project

```bash
npm init @ulkajs/app ulka-site
cd ulka-site
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
