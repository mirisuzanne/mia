'use strict';

const yaml = require('js-yaml');
const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');
const rss = require('@11ty/eleventy-plugin-rss');
const { EleventyEdgePlugin } = require('@11ty/eleventy');

const configCollections = require('./src/plugins/collections');
const configType = require('./src/plugins/type');
const configUtils = require('./src/plugins/utils');
const configImage = require('./src/plugins/image');
const configMentions = require('./src/plugins/mentions');
const configTime = require('./src/plugins/time');
const events = require('./src/filters/events');
const pages = require('./src/filters/pages');
const tags = require('./src/filters/tags');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);

  // third-party plugins
  eleventyConfig.addPlugin(hljs);
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPlugin(EleventyEdgePlugin);

  // config plugins
  eleventyConfig.addPlugin(configCollections);
  eleventyConfig.addPlugin(configType);
  eleventyConfig.addPlugin(configUtils);
  eleventyConfig.addPlugin(configImage);
  eleventyConfig.addPlugin(configMentions);
  eleventyConfig.addPlugin(configTime);

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy('./content/css');
  eleventyConfig.addPassthroughCopy('./content/fonts');
  eleventyConfig.addPassthroughCopy('content/**/*.txt');
  eleventyConfig.addPassthroughCopy('content/favicon.svg');
  eleventyConfig.addPassthroughCopy({ 'content/_includes/icons': 'icons' });

  // filters
  eleventyConfig.addFilter('publicTags', tags.publicTags);
  eleventyConfig.addFilter('hasTag', tags.hasTag);
  eleventyConfig.addFilter('withTag', tags.withTag);
  eleventyConfig.addFilter('displayName', tags.displayName);
  eleventyConfig.addFilter('tagLink', tags.tagLink);
  eleventyConfig.addFilter('navTags', tags.navTags);
  eleventyConfig.addFilter('tagData', tags.tagData);

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
