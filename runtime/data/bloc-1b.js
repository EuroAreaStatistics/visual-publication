import padStart from "core-js-pure/es/string/pad-start";
// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 1]   latestMonth
// [Date 2]   latestMonth
// [Value 1]  (0)[Date 1]   2 decimlals
// [Value 2]  (0)[Date 2]   2 decimlals

import { formatNumber, formatMonthYear } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  // households
  {
    code: "MIR.M.U2.B.L22.A.R.A.2250.EUR.N",
    lastNObservations: 1,
  },

  // corporations
  {
    code: "MIR.M.U2.B.L22.A.R.A.2240.EUR.N",
    lastNObservations: 1,
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
  padStart((date.getUTCMonth() + 1).toString(), 2, "0");

const code2date = (code) => {
  const time = code.split("-");
  return new Date(Date.UTC(time[0], time[1] - 1));
};

const formatValue = (decimals, v) =>
  v === null
    ? "missingValue".toLocaleString()
    : formatNumber(v.toFixed(decimals));

const formatDate = formatMonthYear;

export const update = ($el, txt) => {
  $el.html(
    txt
      .replace(/\[Date 1\]/g, "…")
      .replace(/\[Date 2\]/g, "…")
      .replace(/\[Value 1\]/g, "…")
      .replace(/\[Value 2\]/g, "…")
  );
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    const date1 = code2date(r[0]);
    const date2 = code2date(r[1]);
    $el.html(
      txt
        .replace(/\[Date 1\]/g, formatDate(date1))
        .replace(/\[Date 2\]/g, formatDate(date2))
        .replace(
          /\[Value 1\]/g,
          formatValue(2, observationAt(results[0], date2code(date1)))
        )
        .replace(
          /\[Value 2\]/g,
          formatValue(2, observationAt(results[1], date2code(date2)))
        )
    );
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
