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
      ("general.month." + (date.getUTCMonth() + 1)).toLocaleString()
    : String.locale === "lt"
    ? "" +
      date.getUTCFullYear() +
      " " +
      ("general.month." + (date.getUTCMonth() + 1)).toLocaleString()
    : ("general.month." + (date.getUTCMonth() + 1)).toLocaleString() +
      " " +
      date.getUTCFullYear();

export const formatValue = (decimals, v, scale) =>
  v === null
    ? "missingValue".toLocaleString()
    : formatNumber((v * (scale || 1)).toFixed(decimals));
