const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const typogr = require('typogr');
const markdownIt = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
});

// Dates
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

  const m0 = date.getUTCMonth();
  const mm = `${m0 + 1}`.padStart(2, '0');
  const MM = months[m0];
  const M = MM.slice(0, 3);
  const d = date.getUTCDate();
  const dd = `${d}`.padStart(2, '0');
  const D = days[date.getUTCDay()];
  const yyyy = date.getUTCFullYear();
  const now = new Date().getUTCFullYear();
  const md = `${M} ${d}`;
  const since = now === yyyy ? md : yyyy;

  const formats = {
    day: `${D}`,
    date: `${d}`,
    month: `${mm}`,
    'month-name': `${MM}`,
    year: `${yyyy}`,
    numeric: `${mm}/${dd}/${yyyy}`,
    iso: `${yyyy}-${mm}-${dd}`,
    url: `${yyyy}/${mm}/${dd}`,
    short: `${M} ${d}, ${yyyy}`,
    long: `${MM} ${d}, ${yyyy}`,
    md: `${md}`,
    since: `since ${since}`,
  };

  return formats[format];
};

const getDate = (format = null, date = null) => {
  const now = date ? new Date(date) : new Date();
  return format ? formatDate(now, format) : now;
};

// Events
const eventFromData = (page, event) => {
  const start = event.start || page.data.start || page.date;

  // set end explicit or start or far future…
  let end = event.end || page.data.end;
  if (!end) {
    end = end === null ? new Date('3000-01-01') : start;
  }

  // set group…
  const today = new Date();
  let group = formatDate(start, 'year');
  if (end > today) {
    group = start > today ? 'coming' : 'now';
  }

  return { page, event, start, end, group };
};

const eventsFromYaml = page => {
  const events = [];

  page.data.events.forEach(event => {
    events.push(eventFromData(page, event));
  });

  return events;
};

const getEvents = collection => {
  const events = [];
  const pages = collection;

  // events
  collection
    .filter(item => 'events' in item.data && item.data.draft !== true)
    .forEach(page => {
      Array.prototype.push.apply(events, eventsFromYaml(page));
    });

  // pages
  pages
    .filter(item => {
      const isEvent = item.data.tags
        ? item.data.tags.includes('_calendar')
        : false;
      return isEvent && item.data.draft !== true;
    })
    .forEach(page => {
      events.push(eventFromData(page, {}));
    });

  return events.sort((a, b) => a.start - b.start);
};

// Sort Tags
const sortTags = (allTags, count) => {
  const sorted = {};
  const tags = Object.keys(allTags);
  count = count && count > 0 ? count : tags.length + 5;

  tags
    .filter(tag => tag !== 'all' && !tag.startsWith('_'))
    .sort((a, b) => allTags[a].length - allTags[b].length)
    .reverse()
    .slice(0, count)
    .forEach(tag => {
      sorted[tag] = allTags[tag];
    });

  return sorted;
};

// Config
// ------
module.exports = eleventyConfig => {
  // plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // pass-through
  eleventyConfig.addPassthroughCopy('content/assets');

  // layouts
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('contact', 'layouts/contact.njk');
  eleventyConfig.addLayoutAlias('tags', 'layouts/tags.njk');

  // filters
  eleventyConfig.addFilter('typeOf', val => typeof val);

  eleventyConfig.addFilter('amp', val => {
    const newAmp = s => {
      const amp = '<span class="amp">&</span>';
      return s ? s.replace(/&amp;/g, '&').replace(/&/g, amp) : s;
    };

    return val ? newAmp(val) : val;
  });

  eleventyConfig.addFilter('typogr', val => {
    return val ? typogr.typogrify(val) : val;
  });

  eleventyConfig.addFilter('isPublic', val => {
    return val !== 'all' && !val.startsWith('_');
  });

  eleventyConfig.addFilter('sortTags', (allTags, count = 6) => {
    return sortTags(allTags, count);
  });

  eleventyConfig.addFilter('groupTags', (allTags, top = 6) => {
    const all = sortTags(allTags);
    const grouped = {};
    const sorted = [];

    Object.keys(all)
      .filter(tag => tag !== 'all' && !tag.startsWith('_'))
      .forEach((tag, i) => {
        const data = all[tag];
        const count = i < top ? 'top' : data.length;
        tag = { tag, data };
        if (grouped[count]) {
          grouped[count].push(tag);
        } else {
          grouped[count] = [tag];
        }
      });

    Object.keys(grouped)
      .sort((a, b) => a - b)
      .reverse()
      .forEach(count => {
        sorted.push({
          count,
          tags: grouped[count],
        });
      });

    return sorted;
  });

  eleventyConfig.addFilter('getEvents', (pageSet, self = {}) => {
    pageSet = pageSet.filter(item => item.inputPath !== self.inputPath);
    return getEvents(pageSet);
  });

  eleventyConfig.addFilter('getPage', (pageSet, page) => {
    const pagePath = typeof page === 'string' ? page : page.url;

    return pageSet.filter(item => item.url === pagePath);
  });

  eleventyConfig.addFilter('formatDate', (date, format = 'short') => {
    return formatDate(date, format);
  });

  eleventyConfig.addFilter('getDate', (date = null, format = 'short') => {
    return getDate(format, date);
  });

  eleventyConfig.addFilter('md', (content, inline = false) => {
    const html = inline
      ? markdownIt.renderInline(content)
      : markdownIt.render(content);
    return typogr.typogrify(html);
  });

  // shortcodes
  eleventyConfig.addShortcode('getDate', (format = null) => getDate(format));

  eleventyConfig.addPairedShortcode('markdown', (content, inline = null) => {
    const html = inline
      ? markdownIt.renderInline(content)
      : markdownIt.render(content);
    return typogr.typogrify(html);
  });

  // markdown
  eleventyConfig.setLibrary('md', markdownIt);

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'content',
    },
  };
};
