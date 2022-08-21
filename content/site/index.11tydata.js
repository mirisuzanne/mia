'use strict';

const nav = require('../../src/utils/nav');

module.exports = {
  eleventyComputed: {
    banner: (data) => nav.topTags(data.collections, 'html'),
    description: (data) => nav.topTags(data.collections, 'text'),
  },
};
