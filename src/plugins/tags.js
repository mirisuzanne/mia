'use strict';

const _ = require('lodash');

const nav = require('../utils/nav');

const isPublic = (tag) => {
  if (typeof tag === 'string') {
    const isAll = tag === 'all';
    const isPrivate = tag.startsWith('_');
    return !isAll && !isPrivate;
  }

  return false;
};

const publicTags = (tags) =>
  tags ? tags.filter((tag) => isPublic(tag)) : tags;

const hasTag = (page, tags, any = false) => {
  const pageTags = page.data.tags || [];

  if (typeof tags === 'string') {
    return _.includes(pageTags, tags);
  }

  return any
    ? _.intersection(pageTags, tags).length > 0
    : tags.every((item) => _.includes(pageTags, item));
};

const withTag = (collection, tags, any = false) =>
  collection.filter((page) => hasTag(page, tags, any));

const tagData = (collections) => {
  const tags = Object.keys(collections)
    .filter(isPublic)
    .map((tag) => ({
      name: tag,
      display: nav.displayName(tag),
      url: nav.tagLink(tag, collections),
      pages: collections[tag],
      count: collections[tag].length,
      top: nav.data.tags.includes(tag),
    }));

  return tags;
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('displayName', nav.displayName);
  eleventyConfig.addFilter('tagLink', nav.tagLink);
  eleventyConfig.addFilter('topTags', nav.topTags);

  eleventyConfig.addFilter('publicTags', publicTags);
  eleventyConfig.addFilter('hasTag', hasTag);
  eleventyConfig.addFilter('withTag', withTag);
  eleventyConfig.addFilter('tagData', tagData);
};
