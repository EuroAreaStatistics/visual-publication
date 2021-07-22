import { fetchDataSet, downloadDataSets } from "./data/ch32_1.js";
import { getValue } from "./lib/json-stat.js";

window.fetchDataSet = fetchDataSet;
window.downloadDataSets = downloadDataSets;
window.getValue = getValue;

if (/[?&]simple=simple/.test(window.location.search)) {
  document.querySelector("html").classList.add("simple");
}
