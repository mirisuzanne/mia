'use strict';

const nav = require('../../src/utils/nav');

module.exports = {
  eleventyComputed: {
    sub: (data) => nav.topTags(data.collections, 'html'),
    description: (data) => nav.topTags(data.collections, 'text'),
    summary: (data) =>
      data.welcome[Math.floor(Math.random() * data.welcome.length)],
  },
};
