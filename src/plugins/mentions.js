'use strict';
const sanitizeHTML = require('sanitize-html');

// define which types of webmentions are included by default
// possible values listed here:
// https://github.com/aaronpk/webmention.io#find-links-of-a-specific-type-to-a-specific-page
const defaultTypes = ['mention-of', 'in-reply-to'];

// sort webmentions by published timestamp chronologically.
// swap a.published and b.published to reverse order.
const orderByDate = (a, b) => new Date(b.published) - new Date(a.published);

const forUrl = (webMentions, url) =>
  webMentions.children
    .filter((entry) => entry['wm-target'] === url)
    .filter((entry) => entry['wm-private'] === false)
    .sort(orderByDate);

const getTypes = (mentions, allow) => {
  // clean webmention content for output
  const clean = (entry) => {
    const { html, text } = entry.content;
    // really long html mentions, usually newsletters or compilations
    const isLong = html && html.length > 2000;

    entry.content.value = isLong
      ? `${text.substring(0, 250)}…`
      : sanitizeHTML(html || text);

    return entry;
  };

  // only allow webmentions that have an author name and a timestamp
  const checkRequiredFields = (entry) => {
    const { author, published, content } = entry;
    return (
      Boolean(author) &&
      Boolean(author.name) &&
      Boolean(published) &&
      Boolean(content)
    );
  };

  // run all of the above for each webmention that targets the current URL
  return mentions
    .filter((entry) => (allow || defaultTypes).includes(entry['wm-property']))
    .filter(checkRequiredFields)
    .sort(orderByDate)
    .map(clean);
};

module.exports = {
  forUrl,
  getTypes,
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('mentionsForUrl', forUrl);
  eleventyConfig.addFilter('mentionTypes', getTypes);
};
