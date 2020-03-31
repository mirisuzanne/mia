'use strict';

const pages = require('./pages');
const time = require('./time');
const utils = require('./utils');

const isPublic = (event) => event.draft !== true;
const hasEvents = (page) => page.data.events;

const groupNames = {
  5000: 'now',
  now: 5000,
  4000: 'ongoing',
  ongoing: 4000,
  3000: 'soon',
  soon: 3000,
};

const groupDate = (date) =>
  typeof date === 'string' ? new Date(`${groupNames[date]}-01-01`) : date;

const isEvent = (page) =>
  page.data.tags ? page.data.tags.includes('_calendar') : false;

const eventStart = (event) => event.start || event.date;
const pageStart = (page) => page.data.start || page.date;
const startDate = (page, event) =>
  event ? eventStart(event) || pageStart(page) : pageStart(page);
const endDate = (page, event) => {
  const end =
    event && eventStart(event)
      ? event.end || startDate(page, event)
      : page.data.end || startDate(page, event);
  return groupDate(end);
};

const buildEvent = (page, event, index) => {
  index = index || 0;
  const feature = event ? event.feature : page.data.feature;

  // start and end
  const start = startDate(page, event);
  const end = endDate(page, event);
  const date = feature === 'pin' ? groupDate('now') : start;

  // set group…
  const end_iso = time.getDate(end, 'iso');
  const start_iso = time.getDate(start, 'iso');
  const now_iso = time.getDate(time.now, 'iso');
  let group = time.getDate(date, 'year');

  if (end_iso >= now_iso) {
    const endYear = `${time.getDate(end, 'year')}`;
    if (groupNames[endYear]) {
      group = endYear;
    } else {
      group = start_iso > now_iso ? groupNames.soon : groupNames.now;
    }
  }

  // concat tags
  const pageTags = page.data.tags || [];
  const eventTags = event ? event.tags || [] : [];
  const tags = utils.unique([...pageTags, ...eventTags]);

  return { page, event, start, end, date, group, tags, feature, index };
};

const fromYAML = (page) => {
  const events = [];

  page.data.events
    .filter((event) => isPublic(event))
    .sort((a, b) => eventStart(b) - eventStart(a))
    .forEach((event, index) => {
      events.push(buildEvent(page, event, index));
    });

  return events;
};

const fromCollection = (collection) => {
  const events = [];

  collection
    .filter((page) => pages.isPublic(page))
    .forEach((page) => {
      if (hasEvents(page)) {
        Array.prototype.push.apply(events, fromYAML(page));
      }

      if (isEvent(page) && pages.isPublic(page)) {
        events.push(buildEvent(page));
      }
    });

  return events;
};

const count = (groups) => {
  const eventsPer = groups.map((g) => g.data.length);
  return eventsPer.reduce((all, group) => all + group, 0);
};

const byGroup = (events) => {
  const groups = utils.groupBy(events, 'group');
  const sorted = [];

  Object.keys(groups)
    .sort((a, b) => a - b)
    .forEach((group) => {
      const data = groups[group].sort((a, b) => a.date - b.date);
      group = groupNames[group] || group;
      sorted.push({ group, data });
    });

  return sorted.reverse();
};

const get = (collection, only, group = true) => {
  let events = fromCollection(collection);

  if (only) {
    events = events.filter((event) => event.tags.includes(only));
  }

  if (group) {
    events = byGroup(events);
  }

  return events;
};

const recentEvents = (collection, group = true) => {
  const year = time.getDate(time.now, 'yyyy') - 1;
  const cutOff = time.getDate(
    `${year}-${time.getDate(time.now, 'mm')}-${time.getDate(time.now, 'dd')}`,
  );

  const recent = fromCollection(collection)
    .filter((event) => event.date > cutOff)
    .slice(-25);

  return group ? byGroup(recent) : recent;
};

module.exports = {
  isPublic,
  isEvent,
  hasEvents,
  fromCollection,
  byGroup,
  get,
  count,
  groupNames,
  groupDate,
  startDate,
  endDate,
  recentEvents,
};
