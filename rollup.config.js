// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import visualizer from 'rollup-plugin-visualizer';

export default {
  input: 'src/js/init.js',
  output: {
    file: 'tests/pages/snowplow.js',
    format: 'umd',
    name: 'snowplowJavascriptTracker',
    sourceMap: true
  },
  plugins: [
    resolve({
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    visualizer(),
    compiler()
  ]
};
