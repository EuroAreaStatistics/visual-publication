// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 5]   latestYear
// [Value 5]  (0)[Date 5]   1 decimlals

import { formatNumber, formatMonthYear } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  {
    code: "QSA.Q.N.I8.W0.S11.S1.N.L.LE.FPT.T._Z.XDC_R_B1GQ_CY._T.S.V.N._T",
    // last 10 years
    lastNObservations: 10 * 4 + 1,
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
  "-Q" +
  Math.floor(date.getUTCMonth() / 3 + 1).toString();

const code2date = (code) => {
  const time = code.split("-Q");
  // use last month of quarter
  return new Date(Date.UTC(time[0], time[1] * 3 - 1));
};

const formatDate = formatMonthYear;

const formatValue = (decimals, v) =>
  v === null
    ? "missingValue".toLocaleString()
    : formatNumber(v.toFixed(decimals));

export const updateTags = ($el) => {
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    r.sort();
    const latest = r[0];
    const date5 = code2date(latest);
    $el.find("[data-date=5]").html(formatDate(date5));
    $el
      .find("[data-value=5]")
      .html(formatValue(1, observationAt(results[0], date2code(date5))));
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
