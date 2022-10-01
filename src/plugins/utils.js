'use strict';

const _ = require('lodash');

const typeCheck = (val, is) => {
  const type = typeof val;
  return is ? type === is : type;
};

const styles = (dict) =>
  _(dict)
    .map((val, prop) => (val ? `${prop}:${val};` : ''))
    .reduce((all, one) => `${all}${one}`, '');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('typeCheck', typeCheck);
  eleventyConfig.addFilter('styles', styles);

  eleventyConfig.addFilter('concat', _.concat);
  eleventyConfig.addFilter('merge', _.merge);
  eleventyConfig.addFilter('sortBy', _.sortBy);
  eleventyConfig.addFilter('groupBy', _.groupBy);
  eleventyConfig.addFilter('filter', _.filter);
  eleventyConfig.addFilter('find', _.find);

  eleventyConfig.addFilter('includes', (array, find, all = false) => {
    if (typeof find === 'string') {
      return _.includes(array || [], find);
    }

    return all
      ? find.every((item) => _.includes(array || [], item))
      : _.intersection(array || [], find).length > 0;
  });

  eleventyConfig.addFilter('intersection', (array, compare) =>
    _.intersection(array || [], compare),
  );

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('slice', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter(
    'getDomain',
    (url) => new URL(url).origin.split('://')[1],
  );
};
