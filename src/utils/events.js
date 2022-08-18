'use strict';

const pages = require('./pages');
const time = require('./time');

const isPublic = (event) => event.draft !== true;

const publicEvents = (events) => (events || []).filter(isPublic);

const eventTense = (event) => {
  const now = time.date(null, 'iso');
  const start = time.date(event.date, 'iso');
  const end = time.date(event.end || event.date, 'iso');

  if (end < now) {
    return 'past';
  }

  if (start >= now) {
    return 'future';
  }

  return 'ongoing';
};

const sortEvents = (events, tense) => {
  if (!(events.length > 0)) {
    return events;
  }
  const sorted = events.sort((a, b) => (b.end || b.date) - (a.end || a.date));
  return tense === 'past' ? sorted : sorted.reverse();
};

const pageEvents = (page) =>
  page.data.events
    .filter((event) => isPublic(event))
    .map((event) => {
      event.page = page;
      event.tense = eventTense(event);
      return event;
    })
    .sort(sortEvents);

const getEvents = (collection) => {
  const events = [];

  collection
    .filter((page) => pages.isPublic(page, false))
    .forEach((page) => {
      if (page.data.events) {
        Array.prototype.push.apply(events, pageEvents(page));
      }
    });

  return events.sort(sortEvents);
};

module.exports = {
  publicEvents,
  eventTense,
  pageEvents,
  getEvents,
  sortEvents,
};
