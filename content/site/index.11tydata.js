'use strict';

const nav = require('../../src/utils/nav');

module.exports = {
  eleventyComputed: {
    sub: (data) => nav.topTags(data.collections, 'html'),
    description: (data) => nav.topTags(data.collections, 'text'),
  },
};
