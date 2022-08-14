'use strict';

const time = require('./time');

const isPublic = (page, page_list = true) => {
  const nav_only = page_list ? page.data.nav_only : false;
  const live = !page.data.draft && !nav_only;
  const title = page.data && page.data.title;
  return title ? live : false;
};

const getPublic = (collection) =>
  (collection || []).filter((item) => isPublic(item));

const pageTense = (page) => {
  const now = time.date(null, 'iso');
  const start = time.date(page.data.date, 'iso');
  const end = time.date(page.data.end || page.data.date, 'iso');

  if (end < now) {
    return 'past';
  }

  if (start >= now) {
    return 'future';
  }

  return 'ongoing';
};

const withPageTense = (collection, only = 'ongoing') =>
  collection.filter((page) => pageTense(page) === only);

const getPage = (collection, page) => {
  const pageURL = typeof page === 'string' ? page : page.url;
  return collection.find((doc) => doc.url === pageURL);
};

const seriesNav = (page, collection) => {
  collection = collection || [];
  const pageIndex = collection.findIndex((item) => item.url === page.url);

  if (pageIndex !== -1) {
    return {
      prev: collection[pageIndex - 1] || null,
      next: collection[pageIndex + 1] || null,
    };
  }
  return null;
};

const byDate = (collection) => collection.sort((a, b) => b.date - a.date);

module.exports = {
  isPublic,
  getPublic,
  getPage,
  seriesNav,
  byDate,
  withPageTense,
};
