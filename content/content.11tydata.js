'use strict';

const hasEvents = (data) => data.events && data.events.length >= 1;

const endDate = (data) => {
  const needsDate =
    data.end === 'events' ||
    (!data.end && (data.tags || []).includes('performance'));

  if (needsDate && hasEvents(data)) {
    const map = data.events
      .filter((e) => e.date)
      .map((e) => e.end || e.date)
      .sort((a, b) => b - a);

    return map[0];
  }

  return data.end;
};

const startDate = (data) => {
  const needsDate = !data.date;

  if (needsDate && hasEvents(data)) {
    const map = data.events
      .filter((e) => e.date)
      .map((e) => e.date)
      .sort((a, b) => a - b);

    return map[0];
  }

  return data.date;
};

module.exports = {
  eleventyComputed: {
    banner: (data) => data.banner || data.title,
    description: (data) =>
      data.description || data.sub || data.summary || data.site.description,
    end: (data) => endDate(data),
    date: (data) => startDate(data),
  },
};
