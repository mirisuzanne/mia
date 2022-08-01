'use strict';

const eventDateStart = (data) => {
  if (!data.events || data.events.length < 1) {
    return null;
  }

  const map = data.events
    .filter((e) => e.date)
    .map((e) => e.date)
    .sort((a, b) => a - b);

  return map[0];
};

const eventDateEnd = (data) => {
  if (!data.events || data.events.length < 1) {
    return null;
  }

  const map = data.events
    .filter((e) => e.date)
    .map((e) => e.end || e.date)
    .sort((a, b) => b - a);

  return map[0];
};

module.exports = {
  eleventyComputed: {
    banner: (data) => data.banner || data.title,
    description: (data) =>
      data.description || data.sub || data.summary || data.site.description,
    date: (data) => data.date || eventDateStart(data),
    end: (data) => data.end || eventDateEnd(data),
  },
};
