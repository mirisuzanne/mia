'use strict';

const pages = require('./pages');
const time = require('./time');
const utils = require('./utils');

const isPublic = event => event.draft !== true;
const hasEvents = page => page.data.events;

const groupNames = {
  4000: 'now',
  now: 4000,
  3000: 'soon',
  soon: 3000,
};

const isEvent = page => {
  return page.data.tags ? page.data.tags.includes('_calendar') : false;
};

const buildEvent = (page, event) => {
  const eventStart = event ? event.start || event.date : null;
  const start = eventStart || page.data.start || page.date;
  let end = eventStart ? event.end : page.data.end;

  // set end explicit or start or far future…
  if (!end) {
    end = end === null ? new Date('3000-01-01') : start;
  }

  // set group…
  const end_iso = time.getDate(end, 'iso');
  const start_iso = time.getDate(start, 'iso');
  const now_iso = time.getDate(time.now, 'iso');
  let date = start;
  let group = time.getDate(date, 'year');

  if (end_iso >= now_iso) {
    group = start_iso > now_iso ? 3000 : 4000;
  }

  // concat tags
  const pageTags = page.data.tags || [];
  const eventTags = event ? event.tags || [] : [];
  const tags = pageTags.concat(eventTags);

  // feature
  const feature = event ? event.feature : page.data.feature;

  return { page, event, start, end, date, group, tags, feature };
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
  let events = [];

  collection
    .filter(page => pages.isPublic(page))
    .forEach(page => {
      if (hasEvents(page)) {
        Array.prototype.push.apply(events, fromYAML(page));
      }

      if (isEvent(page) && pages.isPublic(page)) {
        events.push(buildEvent(page));
      }
    });

  return events;
};

const byGroup = events => {
  const groups = utils.groupBy(events, 'group');
  const sorted = [];

  Object.keys(groups)
    .sort((a, b) => a - b)
    .forEach(group => {
      const data = groups[group].sort((a, b) => a.date - b.date);
      group = groupNames[group] || group;
      sorted.push({ group, data });
    });

  return sorted.reverse();
};

const get = (collection, only, group = true) => {
  let events = fromCollection(collection);

  if (only) {
    events = events.filter(event => event.tags.includes(only));
  }

  if (group) {
    events = byGroup(events);
  }

  return events;
};

module.exports = {
  isPublic,
  isEvent,
  hasEvents,
  fromCollection,
  byGroup,
  get,
  groupNames,
};
