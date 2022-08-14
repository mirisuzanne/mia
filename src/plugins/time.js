'use strict';

const time = require('../filters/time');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('date', time.date);
  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${time.date(null, format)}`,
  );
};
