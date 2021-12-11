const { createSyncFn } = require('synckit')

const codeToHtml = createSyncFn(require.resolve('./worker'))

const shikiMdPlugin = (markdownit) => {
  markdownit.options.highlight = (code, lang) => {
    return codeToHtml(code, lang || 'text')
  }
}

module.exports = shikiMdPlugin
