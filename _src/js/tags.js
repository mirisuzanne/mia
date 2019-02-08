'use strict';

const topTags = 6;
const isPublic = tag => tag !== 'all' && !tag.startsWith('_');

const sortTags = (collecions, count = topTags) => {
  const sorted = {};
  const tags = Object.keys(collecions);

  count = count && count > 0 ? count + 1 : tags.length + 1;

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

const groupTags = (collecions, top = topTags) => {
  const tags = sortTags(collecions);
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

module.exports = {
  isPublic,
  sortTags,
  groupTags,
};
