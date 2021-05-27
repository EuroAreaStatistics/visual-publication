import globby from "globby";

export async function dataUrls() {
  const urls = new Set();
  await Promise.all(
    (await globby("runtime/data/*.js")).map((file) =>
      import("../" + file).then((module) => {
        module.dataSetURLs.forEach((d) => {
          urls.add(d);
        });
      })
    )
  );
  return urls;
}
