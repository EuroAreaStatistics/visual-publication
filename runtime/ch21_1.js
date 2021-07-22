import { fetchDataSet, downloadDataSet } from "./data/ch21_1.js";
import { getValue } from "./lib/json-stat.js";
import { formatMonthYear } from "./lib/format.js";

window.fetchDataSet = fetchDataSet;
window.downloadDataSet = downloadDataSet;
window.getValue = getValue;
window.formatMonthYear = formatMonthYear;

if (/[?&]simple=simple/.test(window.location.search)) {
  document.querySelector("html").classList.add("simple");
}
