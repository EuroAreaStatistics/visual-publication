import padStart from "core-js-pure/es/string/pad-start";
import { updateTags } from "./bloc-2a1";
// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 1]   latestMonth
// [Date 3]   current year - 10
// [Value 1]  (0)[Date 1]   2 decimlals
// [Value 2]  (1)[Date 1]   2 decimlals
// [Value 3]  (1)[Date 3]   2 decimlals

import { formatNumber, formatMonthYear } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  // interest rate
  {
    code: "BSI.M.U2.N.A.A20T.A.I.U2.2250.Z01.A",
    // one extra month in case this data set has newer data
    lastNObservations: 1 + 1,
  },

  // interest rate
  {
    code: "MIR.M.U2.B.A2C.A.R.A.2250.EUR.N",
    // range from latest month to latest month minus 10 years
    // one extra month in case this data set has newer data
    lastNObservations: 10 * 12 + 1 + 1,
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
      .replace(/\[Date (\d+)\]/g, "<span data-date='$1'>…</span>")
      .replace(/\[Value (\d+)\]/g, "<span data-value='$1'>…</span>")
  );
  updateTags($el);
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    r.sort();
    const latest = r[0];
    const date1 = code2date(latest);
    const date3 = new Date(date1);
    date3.setYear(date3.getFullYear() - 10);
    $el.find("[data-date=1]").html(formatDate(date1));
    $el.find("[data-date=3]").html(formatDate(date3));
    $el
      .find("[data-value=1]")
      .html(formatValue(2, observationAt(results[0], date2code(date1))));
    $el
      .find("[data-value=2]")
      .html(formatValue(2, observationAt(results[1], date2code(date1))));
    $el
      .find("[data-value=3]")
      .html(formatValue(2, observationAt(results[1], date2code(date3))));
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
