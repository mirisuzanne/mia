'use strict';

const now = new Date();

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

const formatDate = (date, format) => {
  const m0 = date.getUTCMonth();
  const mm = `${m0 + 1}`.padStart(2, '0');
  const MM = months[m0];
  const M = MM.slice(0, 3);
  const d = date.getUTCDate();
  const dd = `${d}`.padStart(2, '0');
  const D = days[date.getUTCDay()];
  const yyyy = date.getUTCFullYear();
  const md = `${M} ${d}`;
  const iso = `${yyyy}-${mm}-${dd}`;
  const range = `${M} ${yyyy}`;

  const formats = {
    dd,
    d,
    D,
    mm,
    MM,
    M,
    yyyy,
    md,
    iso,
    range,
    day: D,
    date: d,
    month: MM,
    year: yyyy,
    mmd: `${MM} ${d}`,
    dy: `${d}, ${yyyy}`,
    slash: `${mm}/${dd}/${yyyy}`,
    url: `${yyyy}/${mm}/${dd}`,
    short: `${M} ${d}, ${yyyy}`,
    long: `${MM} ${d}, ${yyyy}`,
    since: `since ${range}`,
    rfc: `${iso}T12:00:00-06:00`,
  };

  return formats[format];
};

const getDate = (date, format) => {
  date = typeof date === 'string' ? new Date(date) : date || now;
  return format ? formatDate(date, format) : date;
};

const rssDate = (page) => {
  const date = page.data ? page.data.start || page.date : page.date;
  return getDate(date, 'rfc');
};

const rssLatest = (collection) => {
  collection.sort((a, b) => rssDate(a) - rssDate(b));
  return rssDate(collection[0]);
};

module.exports = {
  now,
  getDate,
  rssDate,
  rssLatest,
};
