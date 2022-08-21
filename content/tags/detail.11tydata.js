'use strict';

const nav = require('../../src/utils/nav');

const tagTitle = (tag) => `Every '${nav.displayName(tag)}'`;

module.exports = {
  eleventyComputed: {
    tag_page: (data) =>
      data.collections.all.find((page) => page.data.index === data.tag),
    title: (data) =>
      data.tag_page ? data.tag_page.data.title : tagTitle(data.tag),
    banner: (data) => (data.tag_page ? data.tag_page.data.banner : data.title),
    sub: (data) =>
      data.tag_page ? data.tag_page.data.sub : '[see all tags](/tags/)',
    description: (data) =>
      data.tag_page
        ? data.tag_page.data.description
        : `Content from Miriam Suzanne, tagged as '${data.tag}'`,
    summary: (data) =>
      data.tag_page
        ? `See
        '[${data.tag_page.data.banner}](${data.tag_page.url})'
        for more details.`
        : null,
    index: (data) => data.tag,
  },
};
