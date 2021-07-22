// at build time provide URLs

// at runtime load data from data directory
// and convert to JSON-stat

import { path, loadFrom, sdmx2xlsx } from "../lib/urls";
import hicp from "./hicp.json";

const dataSets = [];
const addDataSets = (pid) => (top) => {
  const children = hicp
    .filter(([parent]) => parent === top)
    .map(([, child]) => child)
    .sort();
  if (children.length) {
    const id = dataSets.length;
    dataSets.push({
      code: `ICP.M.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.${children.join(
        "+"
      )}.4.ANR`,
      lastNObservations: 1 + 1, // may contain estimates
      description: "Indices of consumer prices",
      methodology: "Annual percentage changes",
      drilldown: {},
    });
    if (top !== null) {
      dataSets[pid].drilldown[top] = id;
    }

    dataSets.push({
      code: `ICP.A.AT+BE+CY+DE+EE+ES+FI+FR+GR+IE+IT+LT+LU+LV+MT+NL+PT+SI+SK+U2.N.${children.join(
        "+"
      )}.4.INW`,
      lastNObservations: 1 + 1, // may contain estimates
      description: "Indices of consumer prices",
      methodology: "Percentage shares",
    });

    children.forEach(addDataSets(id));
  }
};
addDataSets(-1)(null);

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
    extension: {
      datasetId: "nama_10_gdp",
      drilldown: dataSets[codeIdx].drilldown,
    },
  };

  return output;
};

export const fetchDataSet = (i) => load(dataSets[i]).then(sdmx2stat(i));
export const downloadDataSet = (i) =>
  load(dataSets[i]).then(sdmx2xlsx(dataSets[i]));
export const dataSetURLs = dataSets.map((d) => path(d));

// convert from CSV of SDW columns:
// tail -n+2 | awk -F, -v v='""' -v OFS=, '$1 != "\"\"" || $2 != "\"\"" || $3 != "\"\"" { v=$3 } $3 == "\"\"" { $3=v } //' | awk -F, -v v='""' -v OFS=, '$1 != "\"\"" || $2 != "\"\"" { v=$2 } $2 == "\"\"" { $2=v } //' | awk -F, -v v='""' -v OFS=, '$1 != "\"\"" { v=$1 } $1 == "\"\"" { $1=v } //' | sed 's/,""//g' | awk -F, '{while (NF >= 2) { print "\"" substr($(NF-1), 12, 6) "\"", "\"" substr($NF, 12, 6) "\""; NF-- }; print "null", "\"" substr($NF, 12, 6) "\"" }' | sort -u

// check for wrong order
// | awk '$1 == "null" {next} { while (substr($1,1,1) == substr($2,1,1)) { $1=substr($1,2); $2=substr($2,2) }} $1 ~ /[^0"]/'

// generate hicp.json
// | awk 'BEGIN {print "["} NR>1 {print ", "} {printf "[" $1 ", " $2 "]"} END { print "]" }' > hicp.json

// extract labels from CSV
// csv2json  |awk -F'"' '{ split($8,a,"[.]"); print "\"product." a[5] ".label\": \"" $6 "\"," } $4 { split($4,a,"[.]"); print "\"product." a[5] ".label\": \"" $2 "\"," }' >> public/vis/chapter21_1/l10n/en.json
