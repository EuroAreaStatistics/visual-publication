/*
 * Download all URLs listed in runtime/data/*.js
 * into folder 'public/data', stripping first 3 components of the URL
 *
 * Author: Alistair Cloete
 */
import { createWriteStream, mkdirSync } from "fs";
import { dirname } from "path";
import fetch from "node-fetch";
import { dataUrls } from "./urls.js";

async function writeToFile(url, filename) {
  const dest = createWriteStream(filename);
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  return new Promise((fulfill) => res.body.pipe(dest).on("finish", fulfill));
}

(async () => {
  const urls = await dataUrls();
  let i = 0;
  for (const url of urls) {
    i++;
    console.log(`${i}/${urls.size}`, url);
    const u = new URL(url);
    const filename =
      "public/data/" + u.pathname.split("/").slice(3).join("/") + u.search;
    mkdirSync(dirname(filename), { recursive: true });
    await writeToFile(url, filename);
  }
  console.log("done");
})();
