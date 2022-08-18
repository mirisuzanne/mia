'use strict';

const time = require('../../src/utils/time');

module.exports = {
  eleventyComputed: {
    title: (data) => data.title || `Note: ${time.date(data.date)}`,
  },
};
