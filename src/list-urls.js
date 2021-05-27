import { dataUrls } from "./urls.js";

(async () => {
  Array.from(await dataUrls())
    .sort()
    .forEach((url) => console.log(url));
})();
