import padStart from "core-js-pure/es/string/pad-start";

// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 1]   (0) latestMonth
// [Value 1]  (0)[Date 1]   1 decimlals
// [Date 2]   (1) latestMonth
// [Value 2]  (1)[Date 2]   1 decimlals
// [Date 3]   (2) latestMonth
// [Value 3]  (2)[Date 3]   1 decimals
// [Date 4]   (3) latestMonth
// [Value 4]  (3)[Date 4]   1 decimals

import { formatNumber, formatMonthYear } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  // M3
  {
    code: "BSI.M.U2.Y.V.M30.X.I.U2.2300.Z01.A",
    lastNObservations: 1,
  },

  // M1
  {
    code: "BSI.M.U2.Y.V.M10.X.I.U2.2300.Z01.A",
    lastNObservations: 1,
  },

  // M2-M1
  {
    code: "BSI.M.U2.Y.V.L2A.M.I.U2.2300.Z01.A",
    lastNObservations: 1,
  },

  // M3-M2
  {
    code: "BSI.M.U2.Y.V.LT3.L.I.U2.2300.Z01.A",
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

const formatDate = formatMonthYear;

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
      .replace(/\[Value 4\]/g, "…")
  );
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    const date1 = code2date(r[0]);
    const date2 = code2date(r[1]);
    const date3 = code2date(r[2]);
    const date4 = code2date(r[3]);
    $el.html(
      txt
        .replace(/\[Date 1\]/g, formatDate(date1))
        .replace(
          /\[Value 1\]/g,
          formatValue(1, observationAt(results[0], date2code(date1)))
        )
        .replace(
          /\[Value 2\]/g,
          formatValue(1, observationAt(results[1], date2code(date2)))
        )
        .replace(
          /\[Value 3\]/g,
          formatValue(1, observationAt(results[2], date2code(date3)))
        )
        .replace(
          /\[Value 4\]/g,
          formatValue(1, observationAt(results[3], date2code(date4)))
        )
    );
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
