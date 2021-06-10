const debug =
  typeof window !== "undefined" && /debug/.test(window.location.hash);

const statusFilter = [
  // Normal value
  "A",
  // Provisional value
  "P",
  // Low reliability
  "U",
];

export const removeEmptyTimeSeries = (json) => {
  const series = json.dataSets[0].series;
  const attrs = json.structure.attributes.observation;
  const timeDim = json.structure.dimensions.observation[0];
  const obsStatus = attrs
    .map((v, idx) => [idx, v])
    .filter(([, v]) => v.id === "OBS_STATUS")[0];

  const obs2status = (obs) =>
    obsStatus
      ? obsStatus[1].values[obs[obsStatus[0] + 1]]
      : { A: "Normal value" };

  const dims = json.structure.dimensions.series;
  const lookup = (key) => {
    const k = key.split(":");
    return dims.map((d, i) => d.values[k[i]]);
  };

  const kept = {};
  Object.keys(series).forEach((k) => {
    const v = series[k];
    Object.keys(v.observations).forEach((i) => {
      const obs = v.observations[i];
      const empty = obs[0] === null;
      const status = obs2status(obs);
      if (empty || statusFilter.indexOf(status.id) === -1) {
        if (!empty && debug) {
          console.log(
            json.structure.links[0].href
              .split("/")
              .slice(-2, -1)
              .concat(lookup(k).map((v) => v.id))
              .join("."),
            `removed ${status.id} (${status.name})`,
            timeDim.values[i].name
          );
        }
        delete v.observations[i];
      } else kept[i] = true;
    });
    if (Object.keys(v.observations).length === 0) delete series[k];
  });

  const time = timeDim.values;
  const time2 = [];
  let reIndex = false;
  for (let i = 0, j = 0; i < time.length; i++) {
    if (kept[i]) {
      time2.push([i, j]);
      if (i !== j) reIndex = true;
      j++;
    }
  }
  timeDim.values = time.filter((t, i) => kept[i]);
  if (reIndex) {
    Object.keys(series).forEach((k) => {
      const v = series[k];
      const obs2 = {};
      time2.forEach(([i, j]) => {
        if (i in v.observations) obs2[j] = v.observations[i];
      });
      v.observations = obs2;
    });
  }
  return json;
};
