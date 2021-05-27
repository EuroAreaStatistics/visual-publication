import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import glob from "glob";
import { basename } from "path";

const plugins = [
  resolve({ browser: true }),
  commonjs(),
  babel({
    exclude: "node_modules/**",
    babelrc: false,
    babelHelpers: "bundled",
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: "> 0.5%, ie >= 11",
          },
          spec: false,
          forceAllTransforms: true,
          modules: false,
          useBuiltIns: false,
        },
      ],
    ],
  }),
  terser(),
];

const files = glob.sync("runtime/*.js");

const config = files.map((file) => ({
  input: file,
  output: { file: "public/js/" + basename(file), format: "iife" },
  plugins: plugins,
}));

export default config;
