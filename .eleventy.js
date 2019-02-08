const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');

const events = require('./_src/js/events');
const pages = require('./_src/js/pages');
const tags = require('./_src/js/tags');
const time = require('./_src/js/time');
const type = require('./_src/js/type');

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(hljs);

  // pass-through
  eleventyConfig.addPassthroughCopy('content/assets');

  // layouts
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('contact', 'layouts/contact.njk');
  eleventyConfig.addLayoutAlias('tags', 'layouts/tags.njk');

  // filters
  eleventyConfig.addFilter('getDate', time.getDate);
  eleventyConfig.addFilter('sortTags', tags.sortTags);
  eleventyConfig.addFilter('groupTags', tags.groupTags);
  eleventyConfig.addFilter('getPage', pages.fromCollection);
  eleventyConfig.addFilter('seriesNav', pages.seriesNav);
  eleventyConfig.addFilter('getEvents', events.fromCollection);
  eleventyConfig.addFilter('amp', type.amp);
  eleventyConfig.addFilter('typogr', type.set);
  eleventyConfig.addFilter('md', type.render);
  eleventyConfig.addFilter('mdInline', type.inline);

  // shortcodes
  eleventyConfig.addPairedShortcode('md', type.render);
  eleventyConfig.addPairedShortcode('mdInline', type.inline);
  eleventyConfig.addShortcode('getDate', format => {
    return `${time.getDate(time.now, format)}`;
  });

  // markdown
  eleventyConfig.setLibrary('md', type.mdown);

  // settings
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'content',
    },
  };
};
