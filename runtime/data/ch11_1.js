/*global XLSX*/

// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2ws } from "../lib/urls";

const dataSets = [
  {
    code: "BKN.M.U2.NC10.B..AS.S.Q",
    lastNObservations: 1,
    description:
      "Banknotes statistics - number of banknotes in circulation - all banknote denominations (outstanding, denominated in quantity)",
  },

  {
    code: "BKN.M.U2.NC10.C..AS.S.Q",
    lastNObservations: 1,
    description:
      "Banknotes statistics - number of coins in circulation - all coins denominations (outstanding, denominated in quantity)",
  },
];

const load = loadFrom("../../data");

const sdmx2stat = (json, codeIdx) => {
  const mapDims = {
    BKN_DENOM: "coicop",
    TIME_PERIOD: "time",
  };
  const mapGeo =
    codeIdx == 0
      ? {}
      : {
          ALLD: "ALLC",
        };

  const d = json["structure"]["dimensions"]["series"].concat(
    json["structure"]["dimensions"]["observation"]
  );

  const s = d.map((x) => x.values.length);
  s.shift();

  const dims = d
    .filter((x) => x.values.length != 1 || mapDims[x.id] === "time")
    .map((y) => {
      const id = y.id in mapDims ? mapDims[y.id] : y.id;
      const values =
        id === "coicop"
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
      x = Math.round(x * 1e3);
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
    extension: { datasetId: "nama_10_co3_p3" },
  };

  return output;
};

export const fetchDataSet = () =>
  Promise.all(dataSets.map(load)).then((results) => {
    const r = results.map(sdmx2stat);
    if (
      Object.keys(r[0].dimension.time.category.index)[0] !==
      Object.keys(r[1].dimension.time.category.index)[0]
    )
      throw new Error("time mismatch");
    Object.keys(r[1].dimension.coicop.category.index).forEach((k) => {
      const i1 = r[1].dimension.coicop.category.index[k];
      const i0 = i1 + r[0].size[0];
      r[0].value[i0] = r[1].value[i1];
      r[0].dimension.coicop.category.index[k] = i0;
    });
    r[0].size[0] += r[1].size[0];

    const total =
      r[0].value[r[0].dimension.coicop.category.index.ALLD] +
      r[0].value[r[0].dimension.coicop.category.index.ALLC];
    Object.keys(r[0].value).forEach((k) => {
      r[0].value[parseInt(k) + r[0].size[0] + 1] = parseFloat(
        (r[0].value[k] / 1e6).toFixed(0)
      );
      r[0].value[k] = parseFloat(((r[0].value[k] / total) * 100).toFixed(2));
    });
    r[0].value[r[0].size[0]] = 100;
    r[0].value[r[0].size[0] + r[0].size[0] + 1] = parseFloat(
      (total / 1e6).toFixed(0)
    );
    r[0].dimension.coicop.category.index.TOTAL = r[0].size[0];
    r[0].size[0]++;

    r[0].dimension.geo = { category: { index: { EU28: 0 } } };
    r[0].id.push("geo");
    r[0].size.push(1);

    r[0].dimension.unit = { category: { index: { PC_TOT: 0, PC_GDP: 1 } } };
    r[0].id.unshift("unit");
    r[0].size.unshift(2);

    return r[0];
  });

export const downloadDataSet = () => {
  const filename = "exportedData.xlsx";
  Promise.all(dataSets.map(load)).then((results) => {
    const wb = XLSX.utils.book_new();
    results.forEach((json, i) => {
      XLSX.utils.book_append_sheet(wb, sdmx2ws(dataSets[i])(json));
    });
    XLSX.writeFile(wb, filename);
  });
};
export const dataSetURLs = dataSets.map((d) => path(d));
