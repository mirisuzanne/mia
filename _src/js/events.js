'use strict';

const pages = require('./pages');
const time = require('./time');

const isPublic = event => event.draft !== true;

const hasEvents = page => page.data.events;
const isEvent = page =>
  page.data.tags ? page.data.tags.includes('_calendar') : false;

const buildEvent = (page, event = {}) => {
  const start = event.start || page.data.start || page.date;

  // set end explicit or start or far future…
  let end = event.end || page.data.end;
  if (!end) {
    end = end === null ? new Date('3000-01-01') : start;
  }

  // set group…
  let group = time.getDate(start, 'year');
  if (end > time.now) {
    group = start > time.now ? 'coming' : 'now';
  }

  return { page, event, start, end, group };
};

const fromYAML = page => {
  const events = [];

  page.data.events
    .filter(event => isPublic(event))
    .forEach(event => {
      events.push(buildEvent(page, event));
    });

  return events;
};

const fromCollection = collection => {
  const events = [];

  collection
    .filter(page => pages.isPublic(page))
    .forEach(page => {
      if (hasEvents(page)) {
        Array.prototype.push.apply(events, fromYAML(page));
      }

      if (isEvent(page)) {
        events.push(buildEvent(page));
      }
    });

  return events.sort((a, b) => a.start - b.start);
};

module.exports = {
  isPublic,
  isEvent,
  hasEvents,
  fromCollection,
};
