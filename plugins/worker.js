const shiki = require('shiki')
const path = require('path')
const { runAsWorker } = require('synckit')

const langs = shiki.BUNDLED_LANGUAGES.map((a) => ({
  ...a,
  path: path.join('languages', a.path),
}))

langs.push({
  id: 'ulka',
  scopeName: 'source.ulka',
  path: path.join(process.cwd(), 'syntaxes', 'ulka.json'),
  embeddedLanguages: {
    'meta.embedded.block.javascript': 'javascript',
  },
})

let highlighter
async function main(code, lang) {
  if (!highlighter)
    highlighter = await shiki.getHighlighter({
      themes: ['nord'],
      langs,
    })

  return highlighter.codeToHtml(code, { lang })
}

runAsWorker(main)
