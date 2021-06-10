export const getValue = (dataset, key) => {
  const i = dataset.id.reduce(function (acc, dim, j) {
    if (acc != null) {
      acc *= dataset.size[j];
      var k = key[dim];
      if (k == null) {
        console.log("dim missing: " + dim);
        k = 0;
      }
      var idx = dataset.dimension[dim].category.index[k];
      if (idx !== null) {
        acc += idx;
        return acc;
      }
    }
  }, 0);
  return i in dataset.value ? dataset.value[i] : null;
};
