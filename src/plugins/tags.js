'use strict';

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

const hasTag = (page, tag) =>
  page.data && page.data.tags ? page.data.tags.includes(tag) : false;

const withTag = (collection, tag) =>
  collection.filter((page) => hasTag(page, tag));

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
