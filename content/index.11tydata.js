'use strict';

const tags = require('../src/filters/tags');

module.exports = {
  eleventyComputed: {
    banner: (data) => tags.navTags(data.collections, 'html'),
    description: (data) => tags.navTags(data.collections, 'text'),
  },
};
