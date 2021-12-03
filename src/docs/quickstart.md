---
page: 2
title: Quickstart
links:
  [
    { title: "Creating new project", path: "#creating-new-project" },
    { title: "Creating production build", path: "#creating-production-build" },
  ]
---

> This quick start is not intended for developers who are just getting into ulka. For step by step guide, head to our [tutorial](/tutorial)

## Creating new project

```sh
npm init @ulkajs/app ulka-site
cd ulka-site
npm install
npx ulka -w
```

Above command will generate a basic template install all the dependencies and start the ulka development server.

## Creating production build

```sh
npx ulka
```

This command builds all the files into output path specified in `ulka-config.js`
