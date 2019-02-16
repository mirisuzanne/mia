'use strict';

const pages = require('./pages');
const time = require('./time');
const utils = require('./utils');

const isPublic = event => event.draft !== true;

const hasEvents = page => page.data.events;
const isEvent = page =>
  page.data.tags ? page.data.tags.includes('_calendar') : false;

const buildEvent = (page, event = {}) => {
  const eventStart = event.start || event.date;
  const start = eventStart || page.data.start || page.date;

  // set end explicit or start or far future…
  let end = eventStart ? event.end : page.data.end;
  if (!end) {
    end = end === null ? new Date('3000-01-01') : start;
  }

  // set group…
  let group = time.getDate(start, 'year');
  const end_iso = time.getDate(end, 'iso');
  const start_iso = time.getDate(start, 'iso');
  const now_iso = time.getDate(time.now, 'iso');

  if (end_iso >= now_iso) {
    group = start_iso > now_iso ? 'coming' : 'now';
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

  const groups = utils.groupBy(events, 'group');
  const sorted = [];

  Object.keys(groups)
    .sort((a, b) => a - b)
    .forEach(group => {
      const data = groups[group].sort((a, b) => a.start - b.start);
      sorted.push({ group, data });
    });

  return sorted.reverse();
};

module.exports = {
  isPublic,
  isEvent,
  hasEvents,
  fromCollection,
};
