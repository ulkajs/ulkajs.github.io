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
  return {
    async afterSetup({ ulka }) {
      console.log('AfterSetup')
      const md = ulka.engines['.md'].md
      const highlighter = await shiki.getHighlighter({
        langs,
        themes: ['nord'],
      })

      md.options.highlight = (code, lang) => {
        return highlighter.codeToHtml(code, {
          lang: lang || 'text',
          theme: 'nord',
        })
      }
    },
  }
}

module.exports = plugin
