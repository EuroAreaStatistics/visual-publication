/*global XLSX*/

// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom } from "../lib/urls";

const dataSets = [
  {
    code: "FM.D.U2.EUR.4F.KR.MLFR+DFR+MRR_FR.LEV",
    startPeriod: "2010-01-01",
    description:
      "Financial market statistics - key ECB interest rates (percentage)",
  },
];

const load = loadFrom("../../data");

// eslint-disable-next-line no-unused-vars
const sdmx2stat = (codeIdx) => (json) => {
  const mapDims = {
    PROVIDER_FM_ID: "geo",
    TIME_PERIOD: "time",
  };
  const mapGeo = {};

  const items = Object.keys(json.dataSets[0].series);
  const changes = json.structure.dimensions.observation[0].values.filter(
    (k, i, a) =>
      !i ||
      i + 1 === a.length ||
      items.some((item) => {
        const o = json.dataSets[0].series[item].observations;
        const prev = (o[i - 1] || [null])[0];
        const cur = (o[i] || [null])[0];
        const next = (o[i + 1] || [null])[0];
        return prev != cur || cur != next;
      })
  );

  const d = json.structure.dimensions.series.concat([
    { ...json.structure.dimensions.observation[0], values: changes },
  ]);

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
  const changeIds = changes.map((x) => x.id);
  Object.keys(json.dataSets[0].series).forEach((k) => {
    const v = json.dataSets[0].series[k];
    let idx = 0;
    k.split(":").forEach((x, i) => {
      idx += parseInt(x);
      idx *= s[i];
    });
    Object.keys(v.observations).forEach((i) => {
      const date = json.structure.dimensions.observation[0].values[i].id;
      const i2 = changeIds.indexOf(date);
      if (i2 >= 0) {
        let x = v.observations[i][0];
        x = parseFloat(x.toFixed(2));
        values[idx + i2] = x;
      }
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

const isDuplicate = (series, idx1, idx2) => {
  for (const key in series) {
    const ser = series[key];
    const v1 = ser.observations[idx1] || [null];
    const v2 = ser.observations[idx2] || [null];
    if (v1[0] !== v2[0]) return false;
  }
  return true;
};

const checkDuplicate = (series) => (o, idx, arr) =>
  !(
    idx > 0 &&
    idx + 1 < arr.length &&
    isDuplicate(series, idx - 1, idx) &&
    isDuplicate(series, idx, idx + 1)
  );
const addIdx = (o, idx) => ({ ...o, idx });

const byName = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

const sdmx2xlsx = (dataSet) => (json) => {
  const url = path(dataSet);
  const description = dataSet.description;
  const flow = json.structure.links[0].href.split("/")[6];
  const filename = "exportedData.xlsx";
  const time = json.structure.dimensions.observation[0].values
    .map(addIdx)
    .sort(byName)
    .filter(checkDuplicate(json.dataSets[0].series));
  const dims = json.structure.dimensions.series;
  const attrs = json.structure.attributes.series;
  let title = "";
  attrs.forEach((a) => {
    if (a.values.length && (a.id === "TITLE_COMPL" || a.id === "COMMENT_TS")) {
      title = a.values[0].name;
    }
  });
  if (title) {
    dims.forEach((d) => {
      if (d.values.length > 1) {
        title = title.replace(d.values[0].name, "");
      }
    });
    title = title.replace(/- *[,-]/g, "-");
    title = title.replace(/, *,/g, ",");
    title = title.replace(/^ *, */g, "");
  }
  const columns = ["Statistical Data Warehouse code"]
    .concat(dims.filter((d) => d.values.length > 1).map((d) => d.name))
    .concat(time.map((x) => x.name));
  const table = [columns];
  for (const key in json.dataSets[0].series) {
    const ser = json.dataSets[0].series[key];
    const k = key.split(":");
    const row = [];
    const codes = [flow];
    dims.forEach((d, i) => {
      const v = d.values[k[i]];
      codes.push(v.id);
      if (d.values.length > 1) {
        row.push(v.name);
      }
    });
    row.unshift(codes.join("."));
    time.forEach((o) => {
      const v = ser.observations[o.idx];
      row.push(typeof v !== "undefined" ? v[0] : null);
    });
    table.push(row);
  }
  const header = [[description], [title], [`URL: ${url}`], []];
  const ws = XLSX.utils.aoa_to_sheet(header.concat(table));
  ws["!merges"] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 10 } },
    { s: { r: 1, c: 0 }, e: { r: 1, c: 10 } },
    { s: { r: 2, c: 0 }, e: { r: 2, c: 10 } },
  ];
  ws["!cols"] = columns.map((h, i) => {
    let m = h.length;
    table.forEach((d) => {
      if (d[i] && d[i].length > m) {
        m = d[i].length;
      }
    });
    return { width: m + 1 };
  });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);
  XLSX.writeFile(wb, filename);
};

export const fetchDataSet = (i) => load(dataSets[i]).then(sdmx2stat(i));
export const downloadDataSet = (i) =>
  load(dataSets[i]).then(sdmx2xlsx(dataSets[i]));
export const dataSetURLs = dataSets.map((d) => path(d));
