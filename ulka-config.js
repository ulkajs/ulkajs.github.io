const path = require("path");
const slugify = require("@sindresorhus/slugify");
const prism = require("markdown-it-prism");
const anchor = require("markdown-it-anchor");
const { defineConfig } = require("ulka");

module.exports = defineConfig((ulka) => {
  ulka.engines[".md"].md
    .set({ html: true })
    .use(prism)
    .use(anchor, { slugify });

  return {
    input: "src",
    output: "dist",
    layout: path.join("src", "layouts"),
    concurrency: Infinity,
    contents: {
      main: {
        match: ["index.ulka"],
      },
      docs: content(ulka, "docs/**.md"),
      tutorial: content(ulka, "tutorial/**.md"),
    },
    copy: ["assets/**"],
  };
});

const content = (ulka, match) => {
  return {
    match,
    layout: "docs.ulka",
    sort: (a, b) => a.context.matter.page - b.context.matter.page,
    forEach(temp) {
      const base = `https://github.com/ulkajs/ulkajs.github.io/blob/main/src/`;
      const rel = path.relative(ulka.configs.input, temp.fileinfo.filepath);

      temp.context.githubLink = base + rel;
    },
  };
};
