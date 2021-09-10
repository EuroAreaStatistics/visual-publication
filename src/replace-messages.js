import glob from "glob";
import { readFileSync, writeFileSync } from "fs";
import en from "../public/l10n/en.json";

const encode = (txt) => {
  txt = JSON.stringify(txt);
  const quotes = txt.slice(1, -1).match(/["']/g);
  if (quotes !== null) {
    const dquotes = quotes.filter((s) => s === '"').length;
    const squotes = quotes.length - dquotes;
    if (dquotes > squotes) {
      txt = `'${txt.slice(1, -1).replace(/'/g, "\\'").replace(/\\"/g, '"')}'`;
    }
  }
  txt = txt.replace(
    /[^\x00-\x7F\xA0]/g, // eslint-disable-line no-control-regex
    (match) => "\\u" + match.charCodeAt(0).toString(16).padStart(4, "0")
  );
  return txt;
};

const replaceOnce = (id, txt, f, t) => {
  const r = txt.replace(f, t);
  if (r === txt) throw new Error(`'${id}' not fouund:\n${f}`);
  return r;
};

const replaceMessage = (msg) => {
  if (!(msg.id in en)) throw new Error(`id '${msg.id}' not defined`);
  let f = msg.defaultMessage;
  let t = en[msg.id];
  if ("start" in msg) {
    t = t.replace(/\r\n/g, "\n");
  }
  if (f !== t) {
    if (!("start" in msg)) {
      f = encode(f);
      t = encode(t);
    }
    if (f === t) throw new Error(`'${msg.id}' encodes to same text`);
    writeFileSync(
      msg.file,
      replaceOnce(msg.id, readFileSync(msg.file, "utf8"), f, t),
      "utf8"
    );
    console.log(`updated '${msg.id}'`);
  }
};

glob("messages/**/*.json", (er, files) => {
  Promise.all(
    files.map((file) =>
      import("../" + file).then((module) => {
        module.default.forEach(replaceMessage);
      })
    )
  );
});
