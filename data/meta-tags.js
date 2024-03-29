const description =
  'A fast, pluggable and lightweight static site generator written in javascript.'
const title = 'Ulka Js'
const domain = 'https://ulka.js.org'
const image = domain + '/assets/images/screenshot.png'

const tags = [
  { name: 'title', content: title },
  { name: 'description', content: description },
  { name: 'robots', content: 'index, follow' },

  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: domain },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: image },

  { property: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:creator', content: '@coderosh' },
  { property: 'twitter:url', content: domain },
  { property: 'twitter:title', content: title },
  { property: 'twitter:description', content: description },
  { property: 'twitter:image', content: image },
]

module.exports = { tags, title, description, domain, image }
