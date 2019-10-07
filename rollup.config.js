// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import legacy from 'rollup-plugin-legacy';
import visualizer from 'rollup-plugin-visualizer';

export default {
  input: 'src/js/init.js',
  output: {
    file: 'tests/pages/snowplow.js',
    format: 'umd',
    name: 'snowplowJavascriptTracker',
    sourceMap: true
  },
  moduleContext: {
    [require.resolve('browser-cookie-lite')]: 'var cookie = ' // nope
  },
  plugins: [
    legacy({
      'node_modules/browser-cookie-lite/browser-cookie.js': 'cookie'
    }),
    resolve({
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    visualizer(),
   // compiler()
  ]
};
