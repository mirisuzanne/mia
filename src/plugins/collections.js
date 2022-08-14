'use strict';

const { intersection } = require('lodash');

const xmlTags = ['_post', '_note', '_feed'];

module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection('orgs', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.org)
      .sort(
        (a, b) => (b.data.end || b.data.date) - (a.data.end || a.data.date),
      ),
  );

  eleventyConfig.addCollection('xml', (collection) =>
    collection
      .getAll()
      .filter((item) => intersection(item.data.tags || [], xmlTags).length)
      .sort((a, b) => a.date - b.date),
  );
};
