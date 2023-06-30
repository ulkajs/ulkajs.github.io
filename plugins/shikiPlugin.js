const shiki = require('shiki')
const path = require('path')

const langs = shiki.BUNDLED_LANGUAGES.map((a) => ({
  ...a,
  path: path.join('languages', a.path),
}))

langs.push({
  id: 'ulka',
  scopeName: 'source.ulka',
  path: path.join(__dirname, 'ulka.json'),
  embeddedLanguages: {
    'meta.embedded.block.javascript': 'javascript',
  },
})

/**
 * @type {import("ulka").Plugin}
 */
const plugin = () => {
  const theme = 'material-theme-palenight'
  return {
    async beforeBuild({ ulka }) {
      const md = ulka.engines['.md'].md
      const highlighter = await shiki.getHighlighter({
        langs,
        themes: [theme],
      })

      md.options.highlight = (code, lang) => {
        return highlighter.codeToHtml(code, {
          lang: lang || 'text',
          theme,
        })
      }
    },
  }
}

module.exports = plugin
