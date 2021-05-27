export const formatNumber = (t) => {
  const e = t.toString().split(".");
  e[0] = e[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "thousands_separator".toLocaleString()
  );
  return e.join("decimal_separator".toLocaleString());
};

export const formatMonthYear = (date) =>
  String.locale === "lv"
    ? "" +
      date.getUTCFullYear() +
      ". " +
      ("month." + (date.getUTCMonth() + 1)).toLocaleString()
    : String.locale === "lt"
    ? "" +
      date.getUTCFullYear() +
      " " +
      ("month." + (date.getUTCMonth() + 1)).toLocaleString()
    : ("month." + (date.getUTCMonth() + 1)).toLocaleString() +
      " " +
      date.getUTCFullYear();
