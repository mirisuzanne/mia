const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
});

const formatDate = (date, format) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const m0 = date.getMonth();
  const mm = `${m0 + 1}`.padStart(2, '0');
  const MM = months[m0];
  const M = MM.slice(0, 3);
  const d = date.getDate();
  const dd = `${d}`.padStart(2, '0');
  const D = days[date.getDay()];
  const yyyy = date.getFullYear();

  const formats = {
    day: `${D}`,
    date: `${d}`,
    month: `${mm}`,
    'month-name': `${MM}`,
    year: `${yyyy}`,
    numeric: `${mm}/${dd}/${yyyy}`,
    url: `${yyyy}/${mm}/${dd}`,
    short: `${M} ${d}, ${yyyy}`,
    long: `${MM} ${d}, ${yyyy}`,
  };

  return formats[format];
};

const getDate = (format = null, date = null) => {
  const now = date ? new Date(date) : new Date();
  return format ? formatDate(now, format) : now;
};

const newAmp = s => {
  const amp = '<span class="amp">&</span>';
  return s ? s.replace(/&amp;/g, '&').replace(/&/g, amp) : s;
};

module.exports = eleventyConfig => {
  // plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // pass-through
  eleventyConfig.addPassthroughCopy('assets');

  // layouts
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('contact', 'layouts/contact.njk');

  // collections
  eleventyConfig.addCollection('_nav', collection => {
    return collection
      .getAll()
      .filter(item => {
        return 'nav' in item.data;
      })
      .sort((a, b) => {
        return a.data.nav.order > b.data.nav.order;
      });
  });

  eleventyConfig.addCollection('_all_events', collection => {
    const events = [];

    collection
      .getAll()
      .filter(page => {
        return 'events' in page.data;
      })
      .forEach(page => {
        page.data.events.forEach(event => {
          event['data'] = page.data;
          events.push(event);
        });
      });

    return events.sort((a, b) => a.date > b.date);
  });

  // filters
  eleventyConfig.addFilter('typeOf', val => typeof val);
  eleventyConfig.addFilter('amp', val => (val ? newAmp(val) : val));

  eleventyConfig.addFilter('isPublic', val => {
    return val !== 'all' && !val.startsWith('_');
  });

  eleventyConfig.addFilter('formatDate', (date, format = 'short') => {
    return formatDate(date, format);
  });

  eleventyConfig.addFilter('getDate', (date = null, format = 'short') => {
    return getDate(format, date);
  });

  eleventyConfig.addFilter('md', (content, inline = false) => {
    content = newAmp(content);
    const html = inline
      ? markdownIt.renderInline(content)
      : markdownIt.render(content);
    return html;
  });

  // shortcodes
  eleventyConfig.addShortcode('getDate', (format = null) => getDate(format));

  eleventyConfig.addPairedShortcode('markdown', (content, inline = null) => {
    content = newAmp(content);
    return inline
      ? markdownIt.renderInline(content)
      : markdownIt.render(content);
  });

  // markdown
  eleventyConfig.setLibrary('md', markdownIt);

  return {
    markdownTemplateEngine: 'njk',
  };
};
