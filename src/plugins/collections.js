'use strict';

const { intersection } = require('lodash');

const nav = require('../utils/nav');

const xmlTags = [...nav.data.xml, ...nav.data.feed];

module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection('the_feed', (collection) =>
    collection
      .getAll()
      .filter(
        (item) => intersection(item.data.tags || [], nav.data.feed).length,
      )
      .sort((a, b) => a.date - b.date),
  );

  eleventyConfig.addCollection('the_rss', (collection) =>
    collection
      .getAll()
      .filter((item) => intersection(item.data.tags || [], xmlTags).length)
      .sort((a, b) => a.date - b.date),
  );

  eleventyConfig.addCollection('__xml_feeds', (collection) =>
    collection.getAll().filter((item) => item.data.feed),
  );
};
