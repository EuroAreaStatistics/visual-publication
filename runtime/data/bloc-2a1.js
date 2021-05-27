// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 4]   latestYear
// [Date 5]   latestYear - 10 years
// [Value 4]  (0)[Date 3]   1 decimlals
// [Value 5]  (0)[Date 4]   1 decimlals

import { formatNumber } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  {
    code: "QSA.A.N.I8.W0.S1M.S1.N.L.LE.F4.T._Z.XDC_R_B6G_CY._T.S.V.N._T",
    // last 10 years
    lastNObservations: 10 + 1,
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

const date2code = (date) => date.getUTCFullYear().toString();

const code2date = (code) => new Date(Date.UTC(code, 0));

const formatDate = (date) => date.getUTCFullYear();

const formatValue = (decimals, v) =>
  v === null
    ? "missingValue".toLocaleString()
    : formatNumber(v.toFixed(decimals));

export const updateTags = ($el) => {
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    r.sort();
    const latest = r[0];
    const date3 = code2date(latest);
    const date4 = new Date(date3);
    date4.setYear(date4.getFullYear() - 10);
    $el.find("[data-date=4]").html(formatDate(date3));
    $el.find("[data-date=5]").html(formatDate(date4));
    $el
      .find("[data-value=4]")
      .html(formatValue(1, observationAt(results[0], date2code(date3))));
    $el
      .find("[data-value=5]")
      .html(formatValue(1, observationAt(results[0], date2code(date4))));
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
