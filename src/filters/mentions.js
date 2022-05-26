/* eslint-disable strict */
const sanitizeHTML = require('sanitize-html');

const forUrl = (webmentions, url) => {
  const allowedTypes = ['mention-of', 'in-reply-to'];

  const hasRequiredFields = (entry) => {
    const { author, published, content } = entry;
    return author.name && published && content;
  };

  const sanitize = (entry) => {
    const { content } = entry;
    if (content['content-type'] === 'text/html') {
      content.value = sanitizeHTML(content.value);
    }
    return entry;
  };

  return webmentions
    .filter((entry) => entry['wm-target'] === url)
    .filter((entry) => allowedTypes.includes(entry['wm-property']))
    .filter(hasRequiredFields)
    .map(sanitize);
};

module.exports = {
  forUrl,
};
