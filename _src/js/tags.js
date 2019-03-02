'use strict';

const topCount = 6;
const isPublic = tag => tag !== 'all' && !tag.startsWith('_');
const publicTags = tags => tags.filter(tag => isPublic(tag));

const matchTags = (allTags, findTags) => {
  const match = {};
  findTags = findTags || [];

  Object.keys(allTags).forEach((tag, i) => {
    match[tag] = findTags.includes(tag);
  });

  return match;
};

const sortTags = (collecions, count = topCount) => {
  const sorted = {};
  const tags = Object.keys(collecions);

  count = count || tags.length + 1;

  tags
    .filter(tag => isPublic(tag))
    .sort((a, b) => collecions[a].length - collecions[b].length)
    .reverse()
    .slice(0, count)
    .forEach(tag => {
      sorted[tag] = collecions[tag];
    });

  return sorted;
};

const groupTags = (collecions, top = topCount) => {
  const tags = sortTags(collecions, null);
  const grouped = {};
  const sorted = [];

  // group by popularity
  Object.keys(tags).forEach((tag, i) => {
    const data = tags[tag];
    const count = i < top ? 'top' : data.length;
    tag = { tag, data };
    if (grouped[count]) {
      grouped[count].push(tag);
    } else {
      grouped[count] = [tag];
    }
  });

  // sort the groups
  Object.keys(grouped)
    .sort((a, b) => a - b)
    .reverse()
    .forEach(count => {
      sorted.push({
        count,
        tags: grouped[count],
      });
    });

  return sorted;
};

const displayName = tag => {
  return tag.startsWith('_') ? tag.slice(1) : tag;
};

module.exports = {
  topCount,
  isPublic,
  publicTags,
  sortTags,
  groupTags,
  matchTags,
  displayName,
};
