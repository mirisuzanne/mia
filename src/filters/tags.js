'use strict';

const utils = require('./utils');
const { nav } = require('./nav');

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

const displayName = (tag) => {
  if (tag) {
    return tag.startsWith('_') ? tag.slice(1) : tag;
  }

  return null;
};

const tagLink = (tag, collections) => {
  const fallback = collections[tag] ? `/tags/${utils.slugify(tag)}/` : null;
  const page = collections.all
    ? collections.all.find((item) => item.data.index === tag)
    : null;

  return page ? page.url : fallback;
};

const navTags = (collections, as) => {
  const topTags = nav.tags.map((tag) => {
    const display = displayName(tag);
    const url = tag === nav.more ? '/tags/' : tagLink(tag, collections);
    const attr = tag === nav.more ? '' : 'class="p-category"';

    return {
      name: tag,
      display,
      url,
      link: `<a href="${url}" ${attr}>${display}</a>`,
    };
  });

  if (as === 'html') {
    return topTags.map((tag) => tag.link).join(' & ');
  }

  if (as === 'text') {
    return topTags.map((tag) => tag.display).join(' & ');
  }

  return topTags;
};

const tagData = (collections) => {
  const tags = Object.keys(collections)
    .filter(isPublic)
    .map((tag) => ({
      name: tag,
      display: displayName(tag),
      url: tagLink(tag, collections),
      pages: collections[tag],
      count: collections[tag].length,
      top: nav.tags.includes(tag),
    }));

  return tags;
};

module.exports = {
  isPublic,
  publicTags,
  hasTag,
  withTag,
  displayName,
  tagLink,
  navTags,
  tagData,
};
