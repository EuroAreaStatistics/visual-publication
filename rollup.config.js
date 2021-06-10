import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import json from '@rollup/plugin-json';
import glob from "glob";
import { basename } from "path";

const plugins = [
  resolve({ browser: true }),
  commonjs(),
  json(),
  babel({
    exclude: "node_modules/**",
    babelrc: false,
    babelHelpers: "bundled",
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: "> 0.5%, ie >= 11"
          },
          spec: false,
          forceAllTransforms: true,
          modules: false,
          useBuiltIns: false
          //        "corejs": { "version": 3 }
        }
      ]
    ]
  }),
  uglify()
];

const files = glob.sync("runtime/*.js");

const config = files.map((file) => 
  ({
    input: file,
    output: { file: "public/js/"+basename(file), format: "iife" },
    plugins: plugins
  }));

export default config;
