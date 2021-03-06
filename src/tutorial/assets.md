---
title: 'Using assets'
page: 9
links:
  - title: 'Creating style'
    link: '#creating-style'
  - title: 'Using styles'
    link: '#using-styles'
  - title: 'Assets in css and markdown'
    link: '#assets-in-css-and-markdown'
---

> Directly providing path to the asset while using assets like image, css, js won't work in ulkajs as all the assets are hashed and copied to a single file (\_\_assets\_\_). Let's see how can we use assets in ulka js.

`$assets` function is available in all files. You can pass the path to that function and that function will return the real path to the assets.

Let's use this in our site.

## Creating style

In the src directory (you can create it anywhere) create a new file and name it `style.css` (you can name it anything). Add the following styles to that file.

```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
a {
  color: #000;
  text-decoration: none;
}
.container {
  width: 90%;
  max-width: 700px;
  margin: auto;
}
nav {
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
}
#nav-links,
nav {
  display: flex;
}
nav li {
  list-style: none;
  margin-left: 10px;
}
nav li a {
  font-size: 20px;
}
nav .title {
  font-size: 30px;
  font-weight: 600;
}
main {
  min-height: calc(100vh - 40px);
  padding-bottom: 10px;
}

.blog-item {
  padding: 20px 30px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  border: 1px solid rgba(138, 130, 130, 0.096);
}
.blog-title,
footer,
main {
  color: var(--primary-invert-color);
}
.blog-title {
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 5px;
}
.blog-desc {
  font-size: 16px;
  margin-bottom: 5px;
}
.blog-date {
  font-size: 14px;
  color: var(--heading-color);
}
.blog-body {
  margin-top: 40px;
}
code,
pre,
pre span {
  font-family: Ubuntu Mono, monospace !important;
}
footer {
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

<br />

## Using styles

Now, goto `pages/index.ulka`, `pages/about.ulka`, `pages/blog.ulka` and `templates/blog.ulka` and add the following code inside `<head>` tag.

```html
<link rel="stylesheet" href="\{% $assets('../style.css') %}" />
```

Now, our site should look a bit preetier than before. I agree it's not the best styling that can be done but our focus here is to learn ulka not css. So, let's just move on.

<br />

## Assets in css and markdown

You don't need to use \$assets function inside css and markdown as ulka will handle that behind the scenes.

**css**

```css
background-image: url('../some/image.png');
```

Ulka will transform the above code to the following

```css
background-image: url('/__assets__/somelonghashgenerated.png');
```

<br />

**markdown**

```markdown
![ulka-logo](../some/image.png)
```

Ulka will transform the above code to the following

```markdown
![ulka-logo](/__assets__/somelonghashgenerated.png)
```
