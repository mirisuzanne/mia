'use strict';

const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const rollupCommonjs = require('@rollup/plugin-commonjs');

module.exports = [
  {
    input: 'src/js/index.js',
    plugins: [
      nodeResolve(),
      babel({ babelHelpers: 'bundled' }),
      rollupCommonjs(),
    ],
    output: {
      file: '_site/assets/js/scripts.js',
      format: 'iife',
    },
  },
];
