'use strict';

const isPublic = (page) => {
  const live = page.data.draft !== true;
  const title = page.data && page.data.title;
  return live && title;
};

const getPublic = (collection) => collection.filter((page) => isPublic(page));

const getPage = (collection, page) => {
  const pageURL = typeof page === 'string' ? page : page.url;
  return collection.filter((doc) => doc.url === pageURL);
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
};
