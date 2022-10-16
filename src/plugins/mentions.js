'use strict';

const sanitizeHTML = require('sanitize-html');
const truncate = require('truncate-html');

// define which types of webmentions are included by default
// possible values listed here:
// https://github.com/aaronpk/webmention.io#find-links-of-a-specific-type-to-a-specific-page
const defaultTypes = ['mention-of', 'in-reply-to'];

// sort webmentions by published timestamp chronologically.
// swap a.published and b.published to reverse order.
const orderByDate = (a, b) => new Date(a.published) - new Date(b.published);

const normalizeURL = (input) => {
  const url = new URL(input);
  url.search = url.hash = '';
  const output = url.toString();
  if (!output.endsWith('/')) {
    return `${output}/`;
  }
  return output;
};

// clean webmention content for output
const clean = (entry) => {
  const { html, text } = entry.content;

  if (html) {
    let truncated = truncate(html, 50, { byWords: true, ellipsis: '…' });
    // Strip non-alphanumeric trailing chars (e.g. commas, periods):
    if (
      truncated.endsWith('…') &&
      truncated.slice(-2, -1).match(/[^A-Z|a-z|0-9]/) !== null
    ) {
      truncated = `${truncated.slice(0, -2)}…`;
    }
    entry.content.value = sanitizeHTML(truncated);
  } else {
    entry.content.value = sanitizeHTML(text);
  }

  return entry;
};

const getTypes = (mentions, allow) =>
  // run all of the above for each webmention that targets the current URL
  mentions
    .filter((entry) => (allow || defaultTypes).includes(entry['wm-property']))
    .sort(orderByDate)
    .map(clean);

const forUrl = (mentions, url, allow) =>
  getTypes(
    mentions.children.filter(
      (entry) =>
        normalizeURL(entry['wm-target']) === normalizeURL(url) &&
        !entry['wm-private'],
    ),
    allow,
  );

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('mentionsForUrl', forUrl);
};
