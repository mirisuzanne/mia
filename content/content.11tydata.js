'use strict';

const tags = require('../src/filters/tags');

const link = (text, url, category = true) => {
  const attrs = category ? `class="p-category"` : '';
  return `<a href="${url}" ${attrs}>${text}</a>`;
};

const replaceTags = async (source, data, text = false) => {
  if (source !== 'show_tags') {
    return source;
  }

  const topTags = await tags.getTags(data.collections, true);

  const tagsHTML = topTags
    .map((tag) => {
      const name = tags.displayName(tag);
      const url = tags.tagLink(tag, data.collections);
      return text ? name : link(name, url);
    })
    .join(' & ');

  const more = text ? 'more' : link('more', '/tags/', false);

  return `${tagsHTML} & ${more}`;
};

module.exports = {
  eleventyComputed: {
    banner: (data) => replaceTags(data.banner || data.title, data),
    sub: (data) => replaceTags(data.sub, data),
    description: (data) =>
      replaceTags(
        data.description || data.sub || data.summary || data.site.description,
        data,
        true,
      ),
  },
};
