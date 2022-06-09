'use strict';

const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');
const rss = require('@11ty/eleventy-plugin-rss');
const yaml = require('js-yaml');
const _ = require('lodash');
const sanitizeHTML = require('sanitize-html');

const utils = require('./src/filters/utils');
const events = require('./src/filters/events');
const image = require('./src/filters/image');
const mentions = require('./src/filters/mentions');
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
  eleventyConfig.addPassthroughCopy('./content/css');
  eleventyConfig.addPassthroughCopy('./content/fonts');
  eleventyConfig.addPassthroughCopy('content/**/*.txt');
  eleventyConfig.addPassthroughCopy('content/favicon.svg');
  eleventyConfig.addPassthroughCopy({ 'content/_includes/icons': 'icons' });

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
  eleventyConfig.addFilter('styles', utils.styles);

  eleventyConfig.addFilter('date', time.date);

  eleventyConfig.addFilter('img', image.image);

  eleventyConfig.addFilter('mentionsForUrl', mentions.forUrl);
  eleventyConfig.addFilter('webLikes', mentions.likes);
  eleventyConfig.addFilter('webAuthors', mentions.authors);
  eleventyConfig.addFilter('webMentions', mentions.webMentions);

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
  eleventyConfig.addFilter('byDate', pages.byDate);
  eleventyConfig.addFilter('titleSort', pages.titleSort);

  eleventyConfig.addFilter('getEvents', events.get);
  eleventyConfig.addFilter('countEvents', events.count);
  eleventyConfig.addFilter('recentEvents', events.recentEvents);
  eleventyConfig.addFilter('groupName', (group) => events.groupNames[group]);

  eleventyConfig.addFilter('amp', type.amp);
  eleventyConfig.addFilter('typogr', type.set);
  eleventyConfig.addFilter('md', type.render);
  eleventyConfig.addFilter('mdInline', type.inline);

  eleventyConfig.addFilter('sanitizeHTML', sanitizeHTML);

  eleventyConfig.addFilter('concat', _.concat);
  eleventyConfig.addFilter('merge', _.merge);
  eleventyConfig.addFilter('loSlice', _.slice);
  eleventyConfig.addFilter('sortBy', _.sortBy);
  eleventyConfig.addFilter('filter', _.filter);
  eleventyConfig.addFilter('includes', (array, key) =>
    _.includes(array || [], key),
  );

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('onlyShow', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // shortcodes
  eleventyConfig.addShortcode('img', image.image);
  eleventyConfig.addPairedShortcode('md', type.render);
  eleventyConfig.addPairedShortcode('mdInline', type.inline);
  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${time.date(null, format)}`,
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
