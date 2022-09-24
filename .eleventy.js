'use strict';

const yaml = require('js-yaml');
const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');
const rss = require('@11ty/eleventy-plugin-rss');
const pluginTOC = require('eleventy-plugin-toc', { wrapper: '' });

const configCollections = require('./src/plugins/collections');
const configType = require('./src/plugins/type');
const configUtils = require('./src/plugins/utils');
const configImage = require('./src/plugins/image');
const configMentions = require('./src/plugins/mentions');
const configTime = require('./src/plugins/time');
const configTags = require('./src/plugins/tags');
const events = require('./src/utils/events');
const pages = require('./src/utils/pages');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);

  // third-party plugins
  eleventyConfig.addPlugin(hljs);
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPlugin(pluginTOC);

  // config plugins
  eleventyConfig.addPlugin(configCollections);
  eleventyConfig.addPlugin(configType);
  eleventyConfig.addPlugin(configUtils);
  eleventyConfig.addPlugin(configImage);
  eleventyConfig.addPlugin(configMentions);
  eleventyConfig.addPlugin(configTime);
  eleventyConfig.addPlugin(configTags);

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy({ './content/_assets/fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy({ './content/_includes/icons': 'icons' });
  eleventyConfig.addPassthroughCopy('content/favicon.svg');
  eleventyConfig.addPassthroughCopy('content/**/*.txt');

  // filters
  eleventyConfig.addFilter('getPage', pages.getPage);
  eleventyConfig.addFilter('isPublic', pages.isPublic);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('seriesNav', pages.seriesNav);
  eleventyConfig.addFilter('byDate', pages.byDate);
  eleventyConfig.addFilter('withPageTense', pages.withPageTense);

  eleventyConfig.addFilter('publicEvents', events.publicEvents);
  eleventyConfig.addFilter('eventTense', events.eventTense);
  eleventyConfig.addFilter('pageEvents', events.pageEvents);
  eleventyConfig.addFilter('getEvents', events.getEvents);
  eleventyConfig.addFilter('sortEvents', events.sortEvents);
  eleventyConfig.addFilter('notPast', (all) =>
    all.filter((item) => item.tense !== 'past'),
  );

  // config
  eleventyConfig.addDataExtension('yaml', yaml.safeLoad);
  eleventyConfig.setQuietMode(true);

  // settings
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'content',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
