'use strict';

const time = require('../../src/filters/time');

module.exports = {
  eleventyComputed: {
    title: (data) => data.title || `Note: ${time.date(data.date)}`,
  },
};
