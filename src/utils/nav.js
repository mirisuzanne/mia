'use strict';

const { readFileSync } = require('fs');

const { safeLoad } = require('js-yaml');
const slugify = require('@sindresorhus/slugify');

const tagSlug = (tag) => slugify(tag, { decamelize: false, lower: true });

const data = safeLoad(
  // eslint-disable-next-line no-sync
  readFileSync('./content/_data/nav.yaml', 'utf8'),
);

const displayName = (tag) => {
  if (tag) {
    return tag.startsWith('_') ? tag.slice(1) : tag;
  }

  return null;
};

const tagLink = (tag, collections) => {
  const fallback = collections[tag] ? `/tags/${tagSlug(tag)}/` : null;
  const page = collections.all
    ? collections.all.find((item) => item.data.index === tag)
    : null;

  return page ? page.url : fallback;
};

const topTags = (collections, as) => {
  const top = data.tags.map((tag) => {
    const display = displayName(tag);
    const url = tag === data.more ? '/tags/' : tagLink(tag, collections);
    const attr = tag === data.more ? '' : 'class="p-category"';

    return {
      name: tag,
      display,
      url,
      link: `<a href="${url}" ${attr}>${display}</a>`,
    };
  });

  if (as === 'html') {
    return top.map((tag) => tag.link).join(' & ');
  }

  if (as === 'text') {
    return top.map((tag) => tag.display).join(' & ');
  }

  return top;
};

module.exports = {
  data,
  displayName,
  tagLink,
  topTags,
};
