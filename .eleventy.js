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
      .filter((item) => item.data.org)
      .sort(
        (a, b) => (b.data.end || b.data.date) - (a.data.end || a.data.date),
      ),
  );

  eleventyConfig.addCollection('feeds', (collection) =>
    collection
      .getAll()
      .filter(
        (item) =>
          _.intersection(item.data.tags || [], ['_post', '_note', '_feed'])
            .length,
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
  eleventyConfig.addFilter('imgSrc', image.imgSrc);
  eleventyConfig.addNunjucksAsyncShortcode('face', image.face);

  eleventyConfig.addFilter('mentionsForUrl', mentions.forUrl);
  eleventyConfig.addFilter('webLikes', mentions.likes);
  eleventyConfig.addFilter('webReposts', mentions.reposts);
  eleventyConfig.addFilter('webAuthors', mentions.authors);
  eleventyConfig.addFilter('webMentions', mentions.webMentions);

  eleventyConfig.addFilter('publicTags', tags.publicTags);
  eleventyConfig.addFilter('hasTag', tags.hasTag);
  eleventyConfig.addFilter('withTag', tags.withTag);
  eleventyConfig.addFilter('displayName', tags.displayName);
  eleventyConfig.addFilter('tagLink', tags.tagLink);
  eleventyConfig.addFilter('navTags', tags.navTags);
  eleventyConfig.addFilter('tagData', tags.tagData);

  eleventyConfig.addFilter('getPage', pages.getPage);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('seriesNav', pages.seriesNav);
  eleventyConfig.addFilter('byDate', pages.byDate);
  eleventyConfig.addFilter('withPageTense', pages.withPageTense);

  eleventyConfig.addFilter('publicEvents', events.publicEvents);
  eleventyConfig.addFilter('eventTense', events.eventTense);
  eleventyConfig.addFilter('pageEvents', events.pageEvents);
  eleventyConfig.addFilter('getEvents', events.getEvents);
  eleventyConfig.addFilter('sortEvents', events.sortEvents);

  eleventyConfig.addFilter('amp', type.amp);
  eleventyConfig.addFilter('typogr', type.set);
  eleventyConfig.addFilter('md', type.render);
  eleventyConfig.addFilter('mdInline', type.inline);

  eleventyConfig.addFilter('sanitizeHTML', sanitizeHTML);

  eleventyConfig.addFilter('concat', _.concat);
  eleventyConfig.addFilter('merge', _.merge);
  eleventyConfig.addFilter('sortBy', _.sortBy);
  eleventyConfig.addFilter('groupBy', _.groupBy);
  eleventyConfig.addFilter('filter', _.filter);
  eleventyConfig.addFilter('find', _.find);
  eleventyConfig.addFilter('includes', (array, key) =>
    _.includes(array || [], key),
  );

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('slice', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter('compactObject', (obj) => {
    const filtered = {};

    Object.keys(obj).forEach((key) => {
      const val = obj[key];

      if (val) {
        filtered[key] = val;
      }
    });

    return Object.entries(filtered).length < 1 ? null : filtered;
  });

  // shortcodes
  eleventyConfig.addShortcode('img', image.image);
  eleventyConfig.addPairedShortcode('md', type.render);
  eleventyConfig.addPairedShortcode('mdInline', type.inline);

  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${time.date(null, format)}`,
  );

  // From https://github.com/11ty/eleventy/issues/813#issuecomment-1037805869
  // Create a "semi-global" `$pages` array (which will be populated later via a custom "shadow" collection).
  let $pages = [];

  eleventyConfig.addShortcode('page_url', (slug = '') => {
    // Try and find the specified page slug in our `$pages[]` array by matching the
    // template's `filePathStem`.
    const page = $pages.find((item) => item.filePathStem.includes(slug));
    // No match found, hard error (again, no idea how Jekyll works, but I liked the idea
    // of failing fast-and-furious if we have bad links.
    if (!page) {
      throw new Error(`Unknown page slug: "${slug}"`);
    }
    // We had a match, so return the page's `url`.
    return page.url;
  });

  // Create a custom "__pages" collection with all pages.
  // Seems silly, but we really are just using this to copy the collection into our semi-global
  // `$pages[]` array for lookup by our custom shortcode.
  eleventyConfig.addCollection('__pages', (collectionApi) => {
    $pages = [...collectionApi.getAll()];
    return $pages;
  });

  // config
  eleventyConfig.setLibrary('md', type.mdown);
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
