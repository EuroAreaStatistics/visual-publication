// at build time provide URLs

// at runtime load all data from data directory (to find latest month)
// and replace values in translation

// [Date 1]   latestMonth
// [Date 2]   latestMonth-12

import { formatMonthYear } from "../lib/format";
import { path, loadFrom } from "../lib/urls";

const dataSets = [
  // inflation rate
  {
    code: "ICP.M.U2.N.000000.4.ANR",
    lastNObservations: 1 + 1, // can contain estimate for latest value
  },
];

const load = loadFrom("data");

const latestObservation = (data) =>
  data.structure.dimensions.observation[0].values.slice(-1)[0].id;

const code2date = (code) => {
  const time = code.split("-");
  return new Date(Date.UTC(time[0], time[1] - 1));
};

const formatDate = formatMonthYear;

export const update = ($el, txt) => {
  $el.html(txt.replace(/\[Date 1\]/g, "…").replace(/\[Date 2\]/g, "…"));
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(latestObservation);
    r.sort();
    const date1 = code2date(r[0]);
    const date2 = new Date(date1);
    date2.setYear(date2.getFullYear() - 1);
    $el.html(
      txt
        .replace(/\[Date 1\]/g, formatDate(date1))
        .replace(/\[Date 2\]/g, formatDate(date2))
    );
  });
};

export const dataSetURLs = dataSets.map((d) => path(d));
