// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2xlsx } from "../lib/urls";
import { getValue } from "../lib/json-stat.js";

const dataSets = [
  {
    code:
      "ICP.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.000000.4.ANR",
    startPeriod: "2010-01",
    description: "Indices of consumer prices",
    methodology: "Annual percentage changes",
    axisGroup: 1,
  },

  {
    code:
      "ICP.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.FOOD00.4.ANR",
    startPeriod: "2010-01",
    description: "Indices of consumer prices",
    methodology: "Annual percentage changes",
    axisGroup: 1,
  },

  {
    code:
      "ICP.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.NRGY00.4.ANR",
    startPeriod: "2010-01",
    description: "Indices of consumer prices",
    methodology: "Annual percentage changes",
  },

  {
    code:
      "ICP.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.IGXE00.4.ANR",
    startPeriod: "2010-01",
    description: "Indices of consumer prices",
    methodology: "Annual percentage changes",
    axisGroup: 1,
  },

  {
    code:
      "ICP.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.SERV00.4.ANR",
    startPeriod: "2010-01",
    description: "Indices of consumer prices",
    methodology: "Annual percentage changes",
    axisGroup: 1,
  },
];

const load = loadFrom("../../data");

const sdmx2stat = () => (json) => {
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

// calculate extremes
export const getExtremes = (r) => {
  const min = {};
  const max = {};
  const key = {};
  r.forEach((data) => {
    Object.keys(data.dimension.geo.category.index).forEach((g) => {
      key.geo = g;
      let gMin = min[g];
      let gMax = max[g];
      Object.keys(data.dimension.time.category.index).forEach((t) => {
        key.time = t;
        const v = getValue(data, key);
        if (v !== null) {
          if (gMin == null || v < gMin) gMin = v;
          if (gMax == null || v > gMax) gMax = v;
        }
      });
      min[g] = gMin;
      max[g] = gMax;
    });
  });
  return { min, max };
};

// fetch with extremes over charts in axisGroup
export const fetchDataSetWithExtremes = (idx) => {
  return Promise.all(
    dataSets
      .map((d, i) => [d, i])
      .filter(
        ([d, i]) =>
          i === idx ||
          (d.axisGroup != null && d.axisGroup === dataSets[idx].axisGroup)
      )
      .map(([d, i]) =>
        load(d)
          .then(sdmx2stat(i))
          .then((d) => [d, i])
      )
  ).then((r) => {
    const data = r.filter(([, i]) => i === idx)[0][0];
    data.extension.extremes = getExtremes(r.map(([d]) => d));
    return data;
  });
};

export const fetchDataSet = (i) => load(dataSets[i]).then(sdmx2stat(i));
export const downloadDataSet = (i) =>
  load(dataSets[i]).then(sdmx2xlsx(dataSets[i]));
export const dataSetURLs = dataSets.map((d) => path(d));
