'use strict';

const mdIt = require('markdown-it')({
  html: true,
  breaks: false,
  typographer: true,
})
  .disable('code')
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-bracketed-spans'))
  .use(require('markdown-it-attrs'));

const block = (content) => (content ? mdIt.render(content) : '');
const inline = (content) => (content ? mdIt.renderInline(content) : '');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('md', block);
  eleventyConfig.addFilter('mdInline', inline);

  eleventyConfig.addPairedShortcode('md', block);
  eleventyConfig.addPairedShortcode('mdInline', inline);

  eleventyConfig.setLibrary('md', mdIt);
};
