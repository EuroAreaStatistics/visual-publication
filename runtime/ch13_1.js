import { fetchDataSetWithExtremes, downloadDataSet } from "./data/ch13_1.js";

window.fetchDataSetWithExtremes = fetchDataSetWithExtremes;
window.downloadDataSet = downloadDataSet;

if (/[?&]simple=simple/.test(window.location.search)) {
  document.querySelector("html").classList.add("simple");
}
