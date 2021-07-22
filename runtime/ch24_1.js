import { fetchDataSet, downloadDataSet } from "./data/ch24_1.js";

window.fetchDataSet = fetchDataSet;
window.downloadDataSet = downloadDataSet;

if (/[?&]simple=simple/.test(window.location.search)) {
  document.querySelector("html").classList.add("simple");
}
