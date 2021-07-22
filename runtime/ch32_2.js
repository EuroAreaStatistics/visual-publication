import { fetchDataSet, downloadDataSet } from "./data/ch32_2.js";
import { getValue } from "./lib/json-stat.js";

window.fetchDataSet = fetchDataSet;
window.downloadDataSet = downloadDataSet;
window.getValue = getValue;

if (/[?&]simple=simple/.test(window.location.search)) {
  document.querySelector("html").classList.add("simple");
}
