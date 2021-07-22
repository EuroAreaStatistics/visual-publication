// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2xlsx } from "../lib/urls";

const dataSets = [
  {
    code: "SUR.Q.I8.N.ECFIN.CNS051_MN.R1+R2+R3+R4",
    lastNObservations: 1 + 1,
    description:
      "Business and consumer surveys - qualitative and quantitative inflation perceptions",
    methodology: "Annual percentage changes",
  },

  {
    code: "SUR.Q.I8.N.ECFIN.CNS051_MN.E1+E2+E3",
    lastNObservations: 1 + 1,
    description:
      "Business and consumer surveys - qualitative and quantitative inflation perceptions",
    methodology: "Annual percentage changes",
  },

  {
    code: "SUR.Q.I8.N.ECFIN.CNS051_MN.SM+SF",
    lastNObservations: 1 + 1,
    description:
      "Business and consumer surveys - qualitative and quantitative inflation perceptions",
    methodology: "Annual percentage changes",
  },

  {
    code: "SUR.Q.I8.N.ECFIN.CNS051_MN.A1+A2+A3+A4",
    lastNObservations: 1 + 1,
    description:
      "Business and consumer surveys - qualitative and quantitative inflation perceptions",
    methodology: "Annual percentage changes",
  },
];

const load = loadFrom("../../data");

const sdmx2stat = () => (json) => {
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
    .filter((x) => x.values.length != 1 || x.id in mapDims)
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
      let key = v.id;
      if (x.id === "time") {
        const parts = key.split("-Q");
        key = parts[0] + "-" + ("0" + (parts[1] * 3 - 2)).slice(-2);
      }
      dimension[x.id].category.index[key] = i;
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
