const fs = require("fs");
const fg = require("fast-glob");
const prettier = require("prettier");

const map = {};
const prettierConfig = { semi: false, tabWidth: 2 };
const tab = " ".repeat(prettierConfig.tabWidth);

const allUlkaFiles = fg.sync("./src/**/**.ulka", {
  absolute: true,
  cwd: process.cwd(),
});

allUlkaFiles.forEach((file) => format(file));

function format(file) {
  const html = fs.readFileSync(file, "utf-8");

  let nojs = html.replace(/{{(.*?)}}/gs, (_, js) => {
    const random = Math.random() * Date.now();

    map[random] = js;

    return `{{${random}}}`;
  });

  nojs = prettier.format(nojs, { parser: "html" });

  const formatted = nojs.replace(/\\?{{(.*?)}}/gs, (...args) => {
    const { allCount, spaceCount } = calculateSpace(args[3], args[2]);

    const random = args[1];
    const data = map[random];
    delete map[random];

    if (args[0][0] === "\\" && nojs[args[2] - 1] !== "\\") {
      return `\\{{${data}}}`;
    }

    const totalSpace = " ".repeat(spaceCount);
    const allSpace = " ".repeat(allCount);

    let js = prettier
      .format(data, { parser: "babel", ...prettierConfig })
      .trim();

    if (!js.includes("\n")) return `{{ ${js} }}`;

    js = js
      .split("\n")
      .map((a) => allSpace + tab + a)
      .join("\n");

    let code = `{{\n${js}\n${totalSpace}}}`;

    return code;
  });

  if (html !== formatted) fs.writeFileSync(file, formatted);
}

function calculateSpace(str, index) {
  let allCount = 0,
    spaceCount = 0;

  while (true) {
    index--;

    if (index < 0) break;

    if (str[index] !== "\n") {
      allCount++;
      if (str[index] === " ") spaceCount++;
    } else {
      break;
    }
  }
  return { allCount, spaceCount };
}
