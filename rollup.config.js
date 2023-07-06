import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/components/index.ts", // Update with your entry file
    output: [
      {
        file: "dist/index.js", // Update according to package.json main key
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js", // Update according to package.json module key
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel(),
      commonjs(),
      uglify(), // Add Uglify plugin
      postcss(), // Add PostCSS plugin
      typescript(), // Add TypeScript2 plugin
    ],
    external: ["react", "react-dom"], // Add any external dependencies
  },
  {
    input: "dist/components/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
