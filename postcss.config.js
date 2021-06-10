module.exports = {
  "map": false,
  plugins: [
    require('cssnano')(),
    require('postcss-hash')(),
  ],
}
