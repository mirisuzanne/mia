'use strict';

const { DateTime } = require('luxon');

const getDateObj = (date) => {
  if (!date) {
    return DateTime.now();
  }

  return typeof date === 'string'
    ? DateTime.fromISO(date)
    : DateTime.fromJSDate(date);
};

const date = (dateObj, format) => {
  const obj = getDateObj(dateObj).setZone('UTC');

  const formats = {
    short: DateTime.DATE_MED,
    long: DateTime.DATE_FULL,
    range: { month: 'short', year: 'numeric' },
    month: { month: 'long' },
    mon: { month: 'short' },
    year: { year: 'numeric' },
    day: { day: 'numeric' },
    'no-month': { day: 'numeric', year: 'numeric' },
    'no-year': { month: 'short', day: 'numeric' },
  };

  const knownFormat = formats[format] || DateTime[format];

  if (format === 'rss') {
    return obj.toRFC2822();
  } else if (format === 'iso') {
    return obj.toISODate();
  } else if (format && !knownFormat) {
    const custom = {
      url: "yyyy'/'MM'/'dd",
    };
    return obj.toFormat(custom[format] || format);
  }

  return obj.toLocaleString(knownFormat || DateTime.DATE_MED);
};

module.exports = {
  date,
};
