/*global XLSX*/
import { removeEmptyTimeSeries } from "../lib/sdmx";

export const path = (d, dir) => {
  const params = ["lastNObservations", "startPeriod"].filter((v) => v in d);
  if (!dir) {
    return (
      "https://sdw-wsrest.ecb.europa.eu/service/data/" +
      d.code.replace(".", "/") +
      (params.length ? "?" : "") +
      params.map((k) => `${k}=${encodeURIComponent(d[k])}`).join("&")
    );
  } else {
    return (
      dir +
      "/" +
      d.code.replace(".", "/") +
      encodeURIComponent(
        (params.length ? "?" : "") + params.map((k) => `${k}=${d[k]}`).join("&")
      )
    );
  }
};

export const sdmx2ws = (dataSet) => (json) => {
  const url = path(dataSet);
  const description = dataSet.description;
  const flow = json.structure.links[0].href.split("/")[6];
  const time = json.structure.dimensions.observation[0].values;
  const dims = json.structure.dimensions.series;
  const attrs = json.structure.attributes.series;
  const latest = time
    .map((x) => x.name)
    .sort()
    .reverse()[0];
  const timeFilter = (t) => !dataSet.singleTimePeriod || t.name === latest;

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
  if (dataSet.methodology) {
    title = dataSet.methodology;
  }
  const columns = ["Statistical Data Warehouse code"]
    .concat(dims.filter((d) => d.values.length > 1).map((d) => d.name))
    .concat(time.filter(timeFilter).map((x) => x.name));
  const table = [columns];
  for (const key in json.dataSets[0].series) {
    const series = json.dataSets[0].series[key];
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
    let hasData = false;
    time.forEach((o, idx) => {
      if (timeFilter(o)) {
        const v = series.observations[idx];
        const w = typeof v !== "undefined" ? v[0] : null;
        if (w !== null) hasData = true;
        row.push(w);
      }
    });
    if (hasData) {
      table.push(row);
    }
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
  return ws;
};

export const sdmx2xlsx = (dataSet) => (json) => {
  const filename = "exportedData.xlsx";
  const ws = sdmx2ws(dataSet)(json);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws);
  XLSX.writeFile(wb, filename);
};

export const sdmx2xlsxMulti = (dataSets) => (jsons) => {
  const filename = "exportedData.xlsx";
  const wb = XLSX.utils.book_new();
  dataSets.forEach((dataSet, i) => {
    const ws = sdmx2ws(dataSet)(jsons[i]);
    XLSX.utils.book_append_sheet(wb, ws, dataSet.description);
  });
  XLSX.writeFile(wb, filename);
};

const cache = {};
export const loadFrom = (dir) => (d) => {
  const url = path(d, dir);
  if (!(url in cache)) {
    cache[url] = new Promise(function (resolve, reject) {
      const req = new XMLHttpRequest();
      req.addEventListener("load", onLoad);
      req.open("GET", url);
      req.setRequestHeader("Accept", "application/json");
      req.send();

      function onLoad() {
        if (this.status >= 200 && this.status < 400) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(this.status + " " + this.statusText);
        }
      }
    }).then((json) => removeEmptyTimeSeries(json));
  }
  return cache[url];
};
