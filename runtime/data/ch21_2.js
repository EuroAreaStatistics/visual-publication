// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2xlsx } from "../lib/urls";

const dataSets = [
  {
    code:
      "BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.A22.A.1.U2.2250.Z01.E",
    startPeriod: "2010-01",
    description:
      "Balance sheet statistics - Bank loans to households - volumes of loans for house purchase (outstandings, denominated in euro)",
  },

  {
    code:
      "BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.A21.A.1.U2.2250.Z01.E",
    startPeriod: "2010-01",
    description:
      "Balance sheet statistics - Bank loans to households - volumes of loans for consumption (outstandings, denominated in euro)",
  },

  {
    code:
      "BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.A2Z1.A.1.U2.2250.EUR.E",
    startPeriod: "2010-01",
    description:
      "Balance sheet statistics - Bank loans to households - volumes of loans for revolving loans and overdrafts (outstandings, denominated in euro)",
  },

  {
    code:
      "BSI.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.A.A23.A.1.U2.2250.Z01.E",
    startPeriod: "2010-01",
    description:
      "Balance sheet statistics - Bank loans to households - volumes of loans for other purposes (outstandings, denominated in euro)",
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
    U2: "EA",
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
      x = x / 1000;
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
export const downloadDataSet = (i) =>
  load(dataSets[i]).then(sdmx2xlsx(dataSets[i]));
export const dataSetURLs = dataSets.map((d) => path(d));
