'use strict';

const tags = require('../src/filters/tags');
const { taxonomy } = require('../src/filters/taxonomy');

const linkHtml = (text, url, category = true) => {
  const attrs = category ? `class="p-category"` : '';
  return `<a href="${url}" ${attrs}>${text}</a>`;
};

let memo = null;

const tagLinks = async (data) => {
  if (memo) {
    return memo;
  }

  const linked = await taxonomy.tags.map((name) => {
    const url = tags.tagLink(name, data.collections);
    const link = linkHtml(name, url);
    return { name, url, link };
  });

  linked.push({
    name: 'more',
    url: '/tags/',
    link: linkHtml('more', '/tags/', false),
  });

  memo = [...linked];
  return linked;
};

const replaceTags = async (source, data, text = false) => {
  if (source === 'show_tags_text') {
    source = 'show_tags';
    text = true;
  }

  if (source !== 'show_tags') {
    return source;
  }

  const links = await tagLinks(data);
  return links.map((tag) => (text ? tag.name : tag.link)).join(' & ');
};

module.exports = {
  eleventyComputed: {
    top_tags: (data) => tagLinks(data),
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
