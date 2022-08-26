'use strict';

const { intersection } = require('lodash');

const xmlTags = ['post', 'micro', '_feed'];

module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection('_xml', (collection) =>
    collection
      .getAll()
      .filter((item) => intersection(item.data.tags || [], xmlTags).length)
      .sort((a, b) => a.date - b.date),
  );

  eleventyConfig.addCollection('__feed_pages', (collection) =>
    collection.getAll().filter((item) => item.data.feed),
  );
};
