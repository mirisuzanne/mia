'use strict';

const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');
const rss = require('@11ty/eleventy-plugin-rss');
const yaml = require('js-yaml');
const _ = require('lodash');

const utils = require('./src/filters/utils');
const events = require('./src/filters/events');
const pages = require('./src/filters/pages');
const tags = require('./src/filters/tags');
const time = require('./src/filters/time');
const type = require('./src/filters/type');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(hljs);
  eleventyConfig.addPlugin(rss);

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'assets/images' });
  eleventyConfig.addPassthroughCopy('content/**/*.txt');
  eleventyConfig.addPassthroughCopy('content/favicon.svg');

  // collections
  eleventyConfig.addCollection('orgs', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.org && item.data.end === 'ongoing')
      .sort((a, b) => events.startDate(a) - events.startDate(b)),
  );
  eleventyConfig.addCollection('all_orgs', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.org)
      .sort((a, b) =>
        a.data.end === b.data.end
          ? events.startDate(a) - events.startDate(b)
          : events.endDate(b) - events.endDate(a),
      ),
  );

  // filters
  eleventyConfig.addFilter('typeCheck', utils.typeCheck);
  eleventyConfig.addFilter('objectKeys', utils.objectKeys);
  eleventyConfig.addFilter('jsonString', utils.jsonString);
  eleventyConfig.addFilter('only', utils.only);
  eleventyConfig.addFilter('domain', utils.domain);

  eleventyConfig.addFilter('getDate', time.getDate);

  eleventyConfig.addFilter('publicTags', tags.publicTags);
  eleventyConfig.addFilter('getTags', tags.getTags);
  eleventyConfig.addFilter('groupTags', tags.groupTags);
  eleventyConfig.addFilter('hasTag', tags.hasTag);
  eleventyConfig.addFilter('withTag', tags.withTag);
  eleventyConfig.addFilter('displayName', tags.displayName);
  eleventyConfig.addFilter('tagLink', tags.tagLink);
  eleventyConfig.addFilter(
    'inTopTagCount',
    (count) => typeof count === 'number' && count <= tags.topCount,
  );

  eleventyConfig.addFilter('getPage', pages.fromCollection);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('seriesNav', pages.seriesNav);
  eleventyConfig.addFilter('titleSort', pages.titleSort);

  eleventyConfig.addFilter('getEvents', events.get);
  eleventyConfig.addFilter('countEvents', events.count);
  eleventyConfig.addFilter('groupName', (group) => events.groupNames[group]);

  eleventyConfig.addFilter('amp', type.amp);
  eleventyConfig.addFilter('typogr', type.set);
  eleventyConfig.addFilter('md', type.render);
  eleventyConfig.addFilter('mdInline', type.inline);

  eleventyConfig.addFilter('concat', _.concat);
  eleventyConfig.addFilter('merge', _.merge);

  // shortcodes
  eleventyConfig.addPairedShortcode('md', type.render);
  eleventyConfig.addPairedShortcode('mdInline', type.inline);
  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${time.getDate(time.now, format)}`,
  );

  // config
  eleventyConfig.setLibrary('md', type.mdown);
  eleventyConfig.addDataExtension('yaml', yaml.safeLoad);
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setDataDeepMerge(true);

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
