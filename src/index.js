/*global global, process*/

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import prettier from "prettier";
import { writeFileSync } from "fs";
import { IntlProvider } from "react-intl";
import { JSDOM } from "jsdom";
import Header from "./Header";
import manifest from "../manifest.json";

global.DOMParser = new JSDOM().window.DOMParser;

function renderToFile(Component, file) {
  console.log(`generating ${file}`);
  const helmetContext = {};
  const element = (
    <HelmetProvider context={helmetContext}>
      <IntlProvider locale="en">
        <Header />
        <Component />
      </IntlProvider>
    </HelmetProvider>
  );
  const app = renderToStaticMarkup(element);
  const { helmet } = helmetContext;
  const html = `
    <!doctype html>
<html lang="en" dir="ltr" ${helmet.htmlAttributes.toString()}>
<head>
    <meta charset="utf-8" />
    ${helmet.title.toString()}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${helmet.meta.toString()}
    <link rel="icon" href="data:,">
    <link rel="stylesheet" href="css/foundation.min.css" />
    <link rel="stylesheet" href="css/${manifest["app.css"]}" />
    <link rel="stylesheet" href="css/animsition.min.css" />
    ${helmet.link.toString()}
    <script src="js/vendor/promise-polyfill.min.js"></script>
    ${helmet.script.toString()}
</head>

        <body>
          ${app}
        </body>
    </html>
`;

  writeFileSync(
    file,
    prettier.format(
      html.replace(/\u00a0/g, "&nbsp;").replace(/data-rh="true"/g, ""),
      { parser: "html" }
    )
  );
}

async function loadSections(page, level) {
  page = { ...page, level };
  try {
    const children = (await import("./pages/" + page.path + "/sections"))
      .default;
    let pages = [{ ...page, children: children.map((c) => c.route) }];
    for (let i = 0; i < children.length; i++) {
      pages = pages.concat(
        await loadSections(children[i], level.concat([i + 1]))
      );
    }
    return pages;
  } catch {
    return [page];
  }
}

async function renderAll(page) {
  const pages = await loadSections(page, []);
  for (const page of pages) {
    const component = (await import("./pages/" + page.path)).default;
    renderToFile(component, "public/" + page.route);
  }
}

process.on("unhandledRejection", (e) => {
  throw e;
});

renderAll({ path: "Index", route: "index.html" });
