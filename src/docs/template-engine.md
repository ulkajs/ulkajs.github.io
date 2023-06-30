---
title: Ulka Syntax
page: 3
links:
  [
    { title: 'Variables', href: '#variables' },
    { title: 'Loops', href: '#loops' },
    { title: 'Conditionals', href: '#conditionals' },
    { title: 'Importing', href: '#importing' },
    { title: 'Using require', href: '#using-require' },
  ]
---

{% raw %}
You can use any template engine you like. But ulka introduces new template engine `@ulkajs/template-engine`. This template engine is specially made for javascript developers. This template engine allows you to write javascript inside double curly brackets`{{}}`.

If you use vscode, I recommend you to download [vscode-ulka](https://marketplace.visualstudio.com/items?itemName=Roshan.ulka-language-support) extension. This extension will highlight and format code written inside `*.ulka` files.

## Variables

```ulka
{{ const name = "Roshan Acharya" }}

<h1>My name is {{ name }}.</h1>
```

Above code will output:

```html
<h1>My name is Roshan Acharya.</h1>
```

## Loops

```ulka
{{ const langs = ["Javascript", "Rust", "Typescript", "C++"] }}

<div>
  {{ langs.map(lang => /* HTML */`<h1>I love ${lang}.</h1>`) }}
</div>
```

(`/* HTML */` comment is used by `vscode-ulka` extension to highlight and format html inside template literal.)
Above code will output:

```html
<div>
  <h1>I love Javascript.</h1>
  <h1>I love Rust.</h1>
  <h1>I love Typescript.</h1>
  <h1>I love C++.</h1>
</div>
```

## Conditionals

```ulka
{{ const ulkaIsAwesome = true }}

{{ ulkaIsAwesome ? /* HTML */`<h1>😍 Thank you.</h1>`: /* HTML */`<h1>💔😥</h1>` }}
```

Above code will output:

```html
<h1>😍 Thank you.</h1>
```

If you wan't to use `if/else` statement then you can use `IIFE`.

```ulka
{{
  (() => {
    if (true){
      return /* HTML */`<h1>😍 Thank you.</h1>`
    } else {
      return /* HTML */`<h1>💔😥</h1>`
    }
  })()
}}
```

## Importing

```ulka
{{ import("./partials/header.ulka") }}

<h1>Hello World</h1>

{{ import("./partials/footer.ulka") }}

<!-- OR -->

{{
  const head = import("./partials/header.ulka")
  const footer = import("./partials/footer.ulka")
}}

{{ head }}

<h1>Hello World</h1>

{{ footer }}
```

## Using require

You can use `require` as you do in normal javascript.

```ulka
{{ require("./package.json").version }}

{{
  const dayjs = require("dayjs")
  dayjs.format()
}}
```

{% endraw %}
