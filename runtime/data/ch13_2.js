// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2xlsx } from "../lib/urls";

const dataSets = [
  {
    code:
      "BSI.M.U2.Y.V.L10+L21+L22+L23+L24A+L30+L40+M10+M20+M30.X+A+L+D.I.U2.2300.Z01.A",
    lastNObservations: 10 * 12,
    description:
      "Balance sheet statistics - monetary aggregates (annual growth rates) ",
  },

  {
    code:
      "BSI.M.U2.Y.V.L10+L21+L22+L23+L24A+L30+L40+M10+M20+M30.X+A+L+D.1.U2.2300.Z01.E",
    lastNObservations: 10 * 12,
    description:
      "Balance sheet statistics - monetary aggregates (outstandings, volumes, denominated in euro)",
  },

  {
    code:
      "BSI.M.U2.Y.V.L10+L21+L22+L23+L24A+L30+L40+M10+M20+M30.X+A+L+D.4.U2.2300.Z01.E",
    lastNObservations: 10 * 12,
    description:
      "Balance sheet statistics - monetary aggregates (transactions, denominated in euro)",
  },
];

const load = loadFrom("../../data");

const sdmx2stat = (codeIdx) => (json) => {
  const mapDims = {
    BS_ITEM: "geo",
    TIME_PERIOD: "time",
  };
  const mapGeo = {};
  const flatten = ["MATURITY_ORIG"];

  const d = json["structure"]["dimensions"]["series"]
    .concat(json["structure"]["dimensions"]["observation"])
    .map((x) => {
      const values = flatten.indexOf(x.id) < 0 ? x.values : [x.values[0]];
      return { ...x, values };
    });

  const s = d.map((x) => x.values.length);
  s.shift();

  const dims = d
    .filter((x) => x.values.length != 1)
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
      if (codeIdx) {
        x = x / 1000;
        x = parseFloat(x.toFixed(0));
      } else {
        x = parseFloat(x.toFixed(2));
      }
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
