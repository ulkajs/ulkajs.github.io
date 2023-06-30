---
title: Introduction
page: 1
links:
  [
    { title: 'Static site generator', href: '#static-site-generator' },
    { title: 'Why SSG', href: '#why-static-site-generator' },
    { title: 'Why Ulka', href: '#why-ulka' },
  ]
---

> Ulka is a fast, pluggable and lightweight static site generator.

## Static site generator

A static site generator (SSG) is a tool which takes in data and templates, process them and generates static html pages and assets. The greatest difference between a static site generator and a dynamic website is that instead of waiting for request and generating view on demand, a static site generator does this on advance.

<hr />

## Why static site generator ?

- [Speed](#speed)
- [Scalability](#scalability)
- [Security](#security)

### Speed

As static site generators generate websites in advance instead of on demand (as with a dynamic website), websites load faster in users' browsers.

### Scalability

Static sites are optimised for scale by default. Less computing power is required to respond to additional requests, making it far easier for the site to handle additional traffic.

### Security

Static site generators generates static assets and contents already polluted with data. So, there is no need of database and server to perform logical operation. This makes our website more secure as there are few

<hr />

## Why Ulka ?

- [Supports multiple template languages.](#supports-multiple-template-languages)
- [No client side javascript.](#no-client-side-javascript)
- [Custom template engine for javascript developers.](#custom-template-engine-for-javascript-developers)
- [Pluggable](#pluggable)
- [Directory Structure Flexibility](#directory-structure-flexibility)
- [Powerful Configuration](#powerful-configuration)
- [Faster Installation](#faster-installation)

### Supports multiple template languages.

Ulka out of the box supports `ejs`, `pug`, `liquid`, `markdown` and `ulka` templating languages. Ulka also makes it easier to add more template language through plugin system.

### No client side javascript.

Ulka doesn't export any client side javascript other than what you have written. Ulka only exports what you tell it to export.

### Custom template engine for javascript developers.

Ulka introduces new templating engine `ulka`. This template engine allows you to write javascript inside double curly brackets {% raw %}`{{ }}`{% endraw %}. For example:

{% raw %}

Input:

```ulka
<h1>{{ ["ulka", "js", "is", "awesome"].join(" ") }}</h1>
```

Output:

```ulka
<h1>ulka js is awesome</h1>
```

{% endraw %}

### Pluggable

Ulka is highly pluggable. Plugin can be used to transform any data at any point of time.

1. afterSetup
1. beforeBuild
1. beforeRender -> afterRender -> beforeWrite -> afterWrite
1. afterBuild

### Directory Structure Flexibility

Ulka doesn't require you have files in specific folders. You can have your files, layouts in any directory you want but you have to tell ulka where they are.

### Powerful Configuration

Ulka allows you to change config of a template through frontmatter. Which makes it easier to have different config for each templates in a collection.

It is also possible to change config for every template in a collection through config file. Ulka makes to easier to sort collection, change link, change layout and perform difrrent task on all templates of a collection directly through config file.

### Faster Installation

Ulka aims to be lightweight. So, before publishing libraries used by ulka are bundled using rollup. This makes installation faster and saves your time and space.
