'use strict';
const sanitizeHTML = require('sanitize-html');
const _ = require('lodash');

// sort webmentions by published timestamp chronologically.
// swap a.published and b.published to reverse order.
const orderByDate = (a, b) => new Date(b.published) - new Date(a.published);

const forUrl = (webMentions, url) =>
  webMentions.children
    .filter((entry) => entry['wm-target'] === url)
    .filter((entry) => entry['wm-private'] === false)
    .sort(orderByDate);

const authors = (mentions) => {
  const photos = mentions
    .map((entry) => {
      entry.author.property = entry['wm-property'];
      return entry.author;
    })
    .filter((author) => author.photo);

  return _.uniqBy(photos, 'photo').map((a) => {
    a.property = _.uniq(
      _.filter(photos, ['photo', a.photo]).map((i) => i.property),
    );
    return a;
  });
};

const likes = (mentions) =>
  mentions.filter((entry) => entry['wm-property'] === 'like-of');

const reposts = (mentions) =>
  mentions.filter((entry) => entry['wm-property'] === 'repost-of');

const webMentions = (mentions) => {
  // define which types of webmentions should be included per URL.
  // possible values listed here:
  // https://github.com/aaronpk/webmention.io#find-links-of-a-specific-type-to-a-specific-page
  const allowedTypes = ['mention-of', 'in-reply-to', 'bookmark-of'];

  // clean webmention content for output
  const clean = (entry) => {
    const { html, text } = entry.content;

    if (html) {
      // really long html mentions, usually newsletters or compilations
      entry.content.value = sanitizeHTML(
        html.length > 2000
          ? `
            <p>${html.substring(0, 250)}…</p>
            <p>
              Read more:
              <a href="${entry['wm-source']}">${entry['wm-source']}</a>
            </p>
          `
          : html,
      );
    } else {
      entry.content.value = sanitizeHTML(text);
    }

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
    .filter((entry) => allowedTypes.includes(entry['wm-property']))
    .filter(checkRequiredFields)
    .sort(orderByDate)
    .map(clean);
};

module.exports = {
  forUrl,
  authors,
  likes,
  reposts,
  webMentions,
};
