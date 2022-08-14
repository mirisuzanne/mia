'use strict';

const _ = require('lodash');

const utils = require('../filters/utils');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('typeCheck', utils.typeCheck);
  eleventyConfig.addFilter('domain', utils.domain);
  eleventyConfig.addFilter('styles', utils.styles);

  eleventyConfig.addFilter('concat', _.concat);
  eleventyConfig.addFilter('merge', _.merge);
  eleventyConfig.addFilter('sortBy', _.sortBy);
  eleventyConfig.addFilter('groupBy', _.groupBy);
  eleventyConfig.addFilter('filter', _.filter);
  eleventyConfig.addFilter('find', _.find);
  eleventyConfig.addFilter('includes', (array, key) =>
    _.includes(array || [], key),
  );

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('slice', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });
};
