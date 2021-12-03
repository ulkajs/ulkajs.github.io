const path = require("path");
const { defineConfig } = require("ulka");

module.exports = defineConfig((ulka) => {
  ulka.engines[".md"].md.set({ html: true });
  return {
    input: "src",
    output: "dist",
    layout: path.join("src", "layouts"),
    concurrency: Infinity,
    contents: {
      main: {
        match: ["index.ulka"],
      },
      docs: {
        match: "docs/**.md",
        layout: "docs.ulka",
        sort: (a, b) => a.context.matter.page - b.context.matter.page,
        forEach(temp) {
          const base = `https://github.com/ulkajs/ulkajs.github.io/blob/main/src/`;
          const rel = path.relative(ulka.configs.input, temp.fileinfo.filepath);

          temp.context.githubLink = base + rel;
        },
      },
    },
    copy: ["assets/**"],
  };
});
