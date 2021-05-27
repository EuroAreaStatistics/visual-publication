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
    });
  }
  return cache[url];
};
