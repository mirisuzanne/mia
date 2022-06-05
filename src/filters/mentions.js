'use strict';
const sanitizeHTML = require('sanitize-html');

// sort webmentions by published timestamp chronologically.
// swap a.published and b.published to reverse order.
const orderByDate = (a, b) => new Date(b.published) - new Date(a.published);

const likesForUrl = (webmentions, url) =>
  webmentions
    .filter((entry) => entry['wm-target'] === url)
    .filter((entry) => entry['wm-private'] === false)
    .filter((entry) => entry['wm-property'] === 'like-of')
    .sort(orderByDate);

const forUrl = (webmentions, url) => {
  // define which types of webmentions should be included per URL.
  // possible values listed here:
  // https://github.com/aaronpk/webmention.io#find-links-of-a-specific-type-to-a-specific-page
  const allowedTypes = ['mention-of', 'in-reply-to'];

  // define which HTML tags you want to allow in the webmention body content
  // https://github.com/apostrophecms/sanitize-html#what-are-the-default-options
  const allowedHTML = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
    allowedAttributes: {
      a: ['href'],
    },
  };

  // clean webmention content for output
  const clean = (entry) => {
    const { html, text } = entry.content;

    if (html) {
      // really long html mentions, usually newsletters or compilations
      entry.content.value =
        html.length > 2000
          ? `mentioned this in <a href="${entry['wm-source']}">${entry['wm-source']}</a>`
          : sanitizeHTML(html, allowedHTML);
    } else {
      entry.content.value = sanitizeHTML(text, allowedHTML);
    }

    return entry;
  };

  // only allow webmentions that have an author name and a timestamp
  const checkRequiredFields = (entry) => {
    const { author, published } = entry;
    return Boolean(author) && Boolean(author.name) && Boolean(published);
  };

  // run all of the above for each webmention that targets the current URL
  return webmentions
    .filter((entry) => entry['wm-target'] === url)
    .filter((entry) => entry['wm-private'] === false)
    .filter((entry) => allowedTypes.includes(entry['wm-property']))
    .filter(checkRequiredFields)
    .sort(orderByDate)
    .map(clean);
};

module.exports = {
  forUrl,
  likesForUrl,
};
