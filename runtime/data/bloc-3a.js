import padStart from "core-js-pure/es/string/pad-start";
// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 1]   latestDay
// [Value 1]  (0)[Date 1]   2 decimlals
// [Value 2]  (1)[Date 1]   2 decimlals
// [Value 3]  (2)[Date 1]   2 decimals

import { formatNumber } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  // MROs
  {
    code: "FM.D.U2.EUR.4F.KR.MRR_FR.LEV",
    // one extra month in case this data set has newer data
    lastNObservations: 31 + 1,
  },

  // dposit
  {
    code: "FM.D.U2.EUR.4F.KR.DFR.LEV",
    // one extra month in case this data set has newer data
    lastNObservations: 31 + 1,
  },

  // marginal lending
  {
    code: "FM.D.U2.EUR.4F.KR.MLFR.LEV",
    // one extra month in case this data set has newer data
    lastNObservations: 31 + 1,
  },
];

const load = loadFrom("data");

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

const date2code = (date) =>
  date.getUTCFullYear() +
  "-" +
  padStart((date.getUTCMonth() + 1).toString(), 2, "0") +
  "-" +
  padStart(date.getUTCDate().toString(), 2, "0");

const code2date = (code) => {
  const time = code.split("-");
  return new Date(Date.UTC(time[0], time[1] - 1, time[2]));
};

const formatDate = (date) =>
  ("fullDate." + (date.getUTCMonth() + 1))
    .toLocaleString()
    .replace(/18|2019/g, (match) =>
      match === "18" ? date.getUTCDate() : date.getUTCFullYear()
    );

const formatValue = (decimals, v) =>
  v === null
    ? "missingValue".toLocaleString()
    : formatNumber(v.toFixed(decimals));

export const update = ($el, txt) => {
  $el.html(
    txt
      .replace(/\[Date 1\]/g, "…")
      .replace(/\[Value 1\]/g, "…")
      .replace(/\[Value 2\]/g, "…")
      .replace(/\[Value 3\]/g, "…")
  );
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    r.sort();
    const date1 = code2date(r[0]);
    $el.html(
      txt
        .replace(/\[Date 1\]/g, formatDate(date1))
        .replace(
          /\[Value 1\]/g,
          formatValue(2, observationAt(results[0], date2code(date1)))
        )
        .replace(
          /\[Value 2\]/g,
          formatValue(2, observationAt(results[1], date2code(date1)))
        )
        .replace(
          /\[Value 3\]/g,
          formatValue(2, observationAt(results[2], date2code(date1)))
        )
    );
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
