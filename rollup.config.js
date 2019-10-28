'use strict';

const rollupBabel = require('rollup-plugin-babel');
const rollupResolve = require('rollup-plugin-node-resolve');
const rollupCommonjs = require('rollup-plugin-commonjs');

module.exports = {
  input: 'src/js/index.js',
  plugins: [rollupResolve(), rollupBabel(), rollupCommonjs()],
  output: {
    file: '_built/js/scripts.js',
    format: 'iife',
  },
};
