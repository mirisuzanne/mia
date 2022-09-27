'use strict';

const time = require('../utils/time');

const mdIt = require('markdown-it')({
  html: true,
  breaks: false,
  typographer: true,
})
  .disable('code')
  .use(require('markdown-it-anchor'))
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-bracketed-spans'))
  .use(require('markdown-it-attrs'));

const block = (content) => (content ? mdIt.render(content.trim()) : '');
const inline = (content) => (content ? mdIt.renderInline(content.trim()) : '');

const callout = (content, type = 'note', date = null) => {
  const labels = {
    warn: 'warning',
  };

  const labelBase = labels[type] || type;
  const labelText = date ? `${labelBase} [${time.date(date)}]` : labelBase;

  return `<div data-callout="${type}">
            <strong>${inline(labelText)}:</strong>
            <div>${block(content.trim())}</div>
          </div>`;
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('md', block);
  eleventyConfig.addFilter('mdInline', inline);
  eleventyConfig.addFilter('trim', (string) => (string || '').trim());

  eleventyConfig.addPairedShortcode('md', block);
  eleventyConfig.addPairedShortcode('mdInline', inline);
  eleventyConfig.addPairedShortcode('callout', callout);

  eleventyConfig.setLibrary('md', mdIt);
};
