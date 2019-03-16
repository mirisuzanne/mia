'use strict';

const utils = require('./utils');
const events = require('./events');

const topCount = 6;
const isPublic = tag => tag !== 'all' && !tag.startsWith('_');
const publicTags = tags => (tags ? tags.filter(tag => isPublic(tag)) : tags);

const matchTags = (allTags, findTags) => {
  const match = {};
  findTags = findTags || [];

  Object.keys(allTags).forEach((tag, i) => {
    match[tag] = findTags.includes(tag);
  });

  return match;
};

const tagData = collections => {
  const tags = Object.keys(collections);

  return tags
    .filter(tag => isPublic(tag))
    .map(tag => {
      const tagEvents = events.get(collections.all, tag, false);
      return {
        tag,
        data: collections[tag],
        events: tagEvents,
        count: tagEvents.length,
      };
    })
    .filter(item => item.count !== 0)
    .sort((a, b) => b.count - a.count);
};

const sortTags = (collections, top = topCount) => {
  return tagData(collections)
    .slice(0, top || collections.length)
    .map(item => item.tag);
};

const groupTags = (collections, top = topCount) => {
  const grouped = {};
  const sorted = [];

  // group by popularity
  tagData(collections).forEach((item, i) => {
    const group = i < top ? 'top' : Math.ceil(item.count / 5) * 5;
    if (grouped[group]) {
      grouped[group].push(item);
    } else {
      grouped[group] = [item];
    }
  });

  // sort the groups
  Object.keys(grouped).forEach(group => {
    sorted.push({
      group,
      tags: grouped[group],
    });
  });

  return sorted.reverse();
};

const displayName = tag => {
  return tag.startsWith('_') ? tag.slice(1) : tag;
};

const tagLink = (tag, collection) => {
  const index = collection.filter(page => page.data.index === tag);
  const slug = utils.slugify(tag);
  return index[0] ? index[0].url : `/tags/${slug}/`;
};

module.exports = {
  topCount,
  isPublic,
  publicTags,
  sortTags,
  groupTags,
  matchTags,
  displayName,
  tagLink,
};
