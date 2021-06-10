import padStart from "core-js-pure/es/string/pad-start";
// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 1]   latestMonth
// [Date 2]   latestMonth
// [Date 3]   latestMonth as YYYY-MM
// [Value 1]  (0)[Date 1]   1 decimlals
// [Value 2]  (1)[Date 1]   1 decimlals
// [Value 3]  (2)[Date 1]   1 decimlals
// [Value 4]  (3)[Date 1]   1 decimlals
// [Value 5]  (5)[Date 2]   1 decimlals
// [Value 6]  (6)[Date 2]   1 decimlals

import { formatValue, formatMonthYear } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  // inflation rate
  {
    code: "ICP.M.DE.N.000000.4.ANR",
    lastNObservations: 1 + 1,
  },

  // inflation rate
  {
    code: "ICP.M.FR.N.000000.4.ANR",
    lastNObservations: 1 + 1,
  },

  // inflation rate
  {
    code: "ICP.M.IT.N.000000.4.ANR",
    lastNObservations: 1 + 1,
  },

  // inflation rate
  {
    code: "ICP.M.ES.N.000000.4.ANR",
    lastNObservations: 1 + 1,
  },

  // weight
  {
    code: "ICP.A.U2.N.010000.4.INW",
    lastNObservations: 1 + 1,
  },

  // weight
  {
    code: "ICP.A.U2.N.030000.4.INW",
    lastNObservations: 1 + 1,
  },
];

const load = (baseURL = "") => loadFrom(baseURL + "data");

const latestObservation = (data) =>
  data.structure.dimensions.observation[0].values.slice(-1)[0].id;

const observationAt = (data, id) => {
  const idx = data.structure.dimensions.observation[0].values
    .map((v) => v.id)
    .indexOf(id);
  return idx === -1
    ? null
    : data.dataSets[0].series[Object.keys(data.dataSets[0].series)[0]]
        .observations[idx][0];
};

const date2codeM = (date) =>
  date.getUTCFullYear() +
  "-" +
  padStart((date.getUTCMonth() + 1).toString(), 2, "0");

const date2codeA = (date) => date.getUTCFullYear().toString();

const code2dateM = (code) => {
  const time = code.split("-");
  return new Date(Date.UTC(time[0], time[1] - 1));
};

const code2dateA = (code) => {
  return new Date(Date.UTC(code));
};

const formatDateM = formatMonthYear;
const formatDateA = (date) => date.getUTCFullYear();

export const update = ($el, txt, baseURL) => {
  $el.html(
    txt
      .replace(/\[Date 1\]/g, "…")
      .replace(/\[Date 2\]/g, "…")
      .replace(/\[Date 3\]/g, "…")
      .replace(/\[Value 1\]/g, "…")
      .replace(/\[Value 2\]/g, "…")
      .replace(/\[Value 3\]/g, "…")
      .replace(/\[Value 4\]/g, "…")
      .replace(/\[Value 5\]/g, "…")
      .replace(/\[Value 6\]/g, "…")
  );
  Promise.all(dataSets.map(load(baseURL))).then((results) => {
    const r = results.map(latestObservation);
    const r1 = r.slice(0, 4);
    r1.sort();
    const date1 = code2dateM(r1[0]);
    const r2 = r.slice(4);
    r2.sort();
    const date2 = code2dateA(r2[0]);
    $el.html(
      txt
        .replace(/\[Date 1\]/g, formatDateM(date1))
        .replace(/\[Date 2\]/g, formatDateA(date2))
        .replace(/\[Date 3\]/g, date2codeM(date1))
        .replace(
          /\[Value 1\]/g,
          formatValue(1, observationAt(results[0], date2codeM(date1)), 1)
        )
        .replace(
          /\[Value 2\]/g,
          formatValue(1, observationAt(results[1], date2codeM(date1)), 1)
        )
        .replace(
          /\[Value 3\]/g,
          formatValue(1, observationAt(results[2], date2codeM(date1)), 1)
        )
        .replace(
          /\[Value 4\]/g,
          formatValue(1, observationAt(results[3], date2codeM(date1)), 1)
        )
        .replace(
          /\[Value 5\]/g,
          formatValue(1, observationAt(results[4], date2codeA(date2)), 0.1)
        )
        .replace(
          /\[Value 6\]/g,
          formatValue(1, observationAt(results[5], date2codeA(date2)), 0.1)
        )
    );
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
