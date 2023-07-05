import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/components/index.ts", // Update with your entry file
  output: {
    file: "dist/index.js", // Update with your desired output file
    format: "es",
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel(),
    uglify(), // Add Uglify plugin
    postcss(), // Add PostCSS plugin
    typescript(), // Add TypeScript2 plugin
  ],
  external: ["react", "react-dom"], // Add any external dependencies
};
