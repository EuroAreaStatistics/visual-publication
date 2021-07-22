// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2xlsxMulti } from "../lib/urls";

const dataSets = [
  {
    code: "SUR.Q.I8.N.ECFIN.CNS051_50.TT",
    startPeriod: "2004-01",
    description: "Inflation, perceived inflation",
    methodology:
      "Quantitative inflation perceptions of households, 50% of observations (median), annual percentage changes. HICP",
  },
  {
    code: "ICP.M.I8.N.000000.4.ANR",
    startPeriod: "2004-01",
    description: "Indices of consumer prices",
    methodology:
      "Annual percentage changes, neither seasonally nor working day adjusted",
  },
];

const load = loadFrom("../../data");

// eslint-disable-next-line no-unused-vars
const sdmx2stat = (codeIdx) => (json) => {
  const mapDims = {
    REF_AREA: "geo",
    TIME_PERIOD: "time",
  };
  const mapGeo = {
    I8: "EA",
    GB: "UK",
    GR: "EL",
  };

  const d = json["structure"]["dimensions"]["series"].concat(
    json["structure"]["dimensions"]["observation"]
  );

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
      idx += parseInt(x);
      idx *= s[i];
    });
    Object.keys(v.observations).forEach((i) => {
      let x = v.observations[i][0];
      values[idx + parseInt(i)] = x;
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
export const downloadDataSets = () =>
  Promise.all(dataSets.map(load)).then(sdmx2xlsxMulti(dataSets));
export const dataSetURLs = dataSets.map((d) => path(d));
