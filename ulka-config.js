const path = require('path')
const { defineConfig, slugify } = require('ulka')
const anchor = require('markdown-it-anchor')
const shikiPlugin = require('./plugins/shikiPlugin')

module.exports = defineConfig(async (ulka) => {
  const md = ulka.engines['.md'].md
  md.set({ html: true }).use(anchor, { slugify })

  return {
    input: 'src',
    output: 'dist',
    layout: path.join('src', 'layouts'),
    concurrency: Infinity,
    plugins: [shikiPlugin],
    contents: {
      main: {
        match: ['index.ulka'],
      },
      docs: content(ulka, 'docs/**.md'),
      tutorial: content(ulka, 'tutorial/**.md'),
    },
    copy: {
      match: ['static/{**,.**}/**', 'assets/**'],
      output: (p) => {
        if (p.startsWith(path.join(ulka.configs.output, 'assets'))) return p

        const pth = path.relative(path.join(ulka.configs.output, 'static'), p)
        return path.join(ulka.configs.output, pth)
      },
    },
  }
})

const content = (ulka, match) => {
  return {
    match,
    layout: 'docs.ulka',
    sort: (a, b) => a.context.matter.page - b.context.matter.page,
    forEach(temp) {
      const base = `https://github.com/ulkajs/ulkajs.github.io/blob/main/src/`
      const rel = path.relative(ulka.configs.input, temp.fileinfo.filepath)

      temp.context.githubLink = base + rel
    },
  }
}
