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
  const since = now.getUTCFullYear() === yyyy ? md : yyyy;

  const formats = {
    dd,
    d,
    D,
    mm,
    MM,
    M,
    md,
    yyyy,
    day: D,
    date: d,
    month: MM,
    year: yyyy,
    slash: `${mm}/${dd}/${yyyy}`,
    iso: `${yyyy}-${mm}-${dd}`,
    url: `${yyyy}/${mm}/${dd}`,
    short: `${M} ${d}, ${yyyy}`,
    long: `${MM} ${d}, ${yyyy}`,
    since: `since ${since}`,
  };

  return formats[format];
};

const getDate = (date, format) => {
  date = typeof date === 'string' ? new Date(date) : date || now;
  return format ? formatDate(date, format) : date;
};

module.exports = { now, getDate };
