'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        corejs: '3',
        useBuiltIns: 'usage',
      },
    ],
  ],
  exclude: [/node_modules\/(?!cascading-color-systems)/],
};
