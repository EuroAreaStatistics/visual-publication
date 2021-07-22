// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2xlsx } from "../lib/urls";

const dataSets = [
  {
    code:
      "ICP.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N..4.ANR",
    lastNObservations: 1 + 1, // possibly contains estimates
    description: "Indices of consumer prices",
    methodology:
      "Annual percentage changes, neither seasonally nor working day adjusted",
    singleTimePeriod: true,
  },
];

const load = loadFrom("../../data");

// eslint-disable-next-line no-unused-vars
const sdmx2stat = (codeIdx) => (json) => {
  const mapDims = {
    REF_AREA: "geo",
    TIME_PERIOD: "time",
    ICP_ITEM: "coicop",
  };
  const mapGeo = {
    U2: "EA",
    GB: "UK",
    GR: "EL",
  };
  const flatten = [];

  const d = json["structure"]["dimensions"]["series"]
    .concat(json["structure"]["dimensions"]["observation"])
    .map((x) => {
      const values = flatten.indexOf(x.id) < 0 ? x.values : [x.values[0]];
      return { ...x, values };
    });

  const s = d.map((x) => x.values.length);
  s.shift();

  const dims = d
    .filter((x) => x.id in mapDims || x.values.length != 1)
    .map((y) => {
      const id = y.id in mapDims ? mapDims[y.id] : y.id;
      const values =
        id === "geo"
          ? y.values.map((z) => {
              const id = z.id in mapGeo ? mapGeo[z.id] : z.id;
              return { ...z, id };
            })
          : y.values;
      return { ...y, id, values };
    });

  const values = {};
  Object.keys(json.dataSets[0].series).forEach((k) => {
    const v = json.dataSets[0].series[k];
    let idx = 0;
    k.split(":").forEach((x, i) => {
      if (flatten.indexOf(d[i].id) < 0) idx += parseInt(x);
      idx *= s[i];
    });
    Object.keys(v.observations).forEach((i) => {
      let x = v.observations[i][0];
      x = x * 10;
      x = parseFloat(x.toFixed(2));
      const k = idx + parseInt(i);
      if (k in values) {
        console.error(`duplicate value in position: ${k}`);
      }
      values[k] = x;
    });
  });

  const dimension = {};
  dims.forEach((x) => {
    dimension[x.id] = { category: { index: {} } };
    x.values.forEach((v, i) => {
      dimension[x.id].category.index[v.id] = i;
    });
  });

  const output = {
    class: "dataset",
    value: values,
    dimension: dimension,
    id: dims.map((x) => x.id),
    size: dims.map((x) => x.values.length),
    extension: { datasetId: "nama_10_gdp" },
  };

  return output;
};

export const fetchDataSet = (i) => load(dataSets[i]).then(sdmx2stat(i));
export const downloadDataSet = (i) =>
  load(dataSets[i]).then(sdmx2xlsx(dataSets[i]));
export const dataSetURLs = dataSets.map((d) => path(d));

// sed 's/,,/,"",/g' ~/Downloads/ch31_1.csv |awk -F'"' '{ split($4,a,"[.]"); print "\"product." a[5] ".label\": \"" $2 "\"," }' >> public/vis/chapter31_1/l10n/en.json
