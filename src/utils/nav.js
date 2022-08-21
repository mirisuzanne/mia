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
    const url = tagLink(tag, collections);
    const attr = 'class="p-category"';

    return {
      name: tag,
      display,
      url,
      link: `<a href="${url}" ${attr}>${display}</a>`,
    };
  });

  const more = {
    name: data.more,
    display: data.more,
    url: '/tags/',
    link: `<a href="/tags/">${data.more}</a>`,
  };

  const all = [...top, more];

  if (as === 'html') {
    return all.map((tag) => tag.link).join(' & ');
  }

  if (as === 'text') {
    return all.map((tag) => tag.display).join(' & ');
  }

  return all;
};

module.exports = {
  data,
  displayName,
  tagLink,
  topTags,
};
