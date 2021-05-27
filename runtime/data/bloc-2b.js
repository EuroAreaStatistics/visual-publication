import padStart from "core-js-pure/es/string/pad-start";
import { updateTags } from "./bloc-2b1";
// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 1]   latestMonth
// [Value 1]  (0)[Date 1]   1 decimals
// [Value 2]  (1)[Date 1]   0 decimals billions
// [Value 3]  (2)[Date 1]   2 decimals

import { formatNumber, formatMonthYear } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  // average growth rate
  {
    code: "BSI.M.U2.N.A.A20T.A.I.U2.2240.Z01.A",

    // one extra month in case this data set has newer data
    lastNObservations: 1 + 1,
  },

  // volume
  {
    code: "BSI.M.U2.N.A.A20T.A.1.U2.2240.Z01.E",
    // one extra month in case this data set has newer data
    lastNObservations: 1 + 1,
  },

  // interest rate
  {
    code: "MIR.M.U2.B.A2I.AM.R.A.2240.EUR.N",
    // one extra month in case this data set has newer data
    lastNObservations: 1 + 1,
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

const formatValue = (decimals, scale, v) =>
  v === null
    ? "missingValue".toLocaleString()
    : formatNumber((v * scale).toFixed(decimals));

export const update = ($el, txt) => {
  $el.html(
    txt
      .replace(/\[Date (\d+)\]/g, "<span data-date='$1'>…</span>")
      .replace(/\[Value (\d+)\]/g, "<span data-value='$1'>…</span>")
  );
  updateTags($el);
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    r.sort();
    const latest = r[0];
    const date1 = code2date(latest);
    $el.find("[data-date=1]").html(formatDate(date1));
    $el
      .find("[data-value=1]")
      .html(formatValue(1, 1, observationAt(results[0], date2code(date1))));
    $el
      .find("[data-value=2]")
      .html(formatValue(0, 1e-3, observationAt(results[1], date2code(date1))));
    $el
      .find("[data-value=3]")
      .html(formatValue(2, 1, observationAt(results[2], date2code(date1))));
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
