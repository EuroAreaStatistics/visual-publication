module.exports = {
  map: false,
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("cssnano"),
    require("postcss-hash"),
  ],
};
