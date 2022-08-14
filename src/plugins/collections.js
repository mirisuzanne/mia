'use strict';

const _ = require('lodash');

module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection('orgs', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.org)
      .sort(
        (a, b) => (b.data.end || b.data.date) - (a.data.end || a.data.date),
      ),
  );

  eleventyConfig.addCollection('feeds', (collection) =>
    collection
      .getAll()
      .filter(
        (item) =>
          _.intersection(item.data.tags || [], ['_post', '_note', '_feed'])
            .length,
      )
      .sort((a, b) => a.date - b.date),
  );
};
