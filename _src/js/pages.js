'use strict';

const isPublic = page => page.data.draft !== true;

const getPublic = collection => {
  return collection.filter(page => isPublic(page));
};

const fromCollection = (collection, page) => {
  const pageURL = typeof page === 'string' ? page : page.url;
  return collection.filter(page => page.url === pageURL);
};

const seriesNav = (page, collection) => {
  collection = collection || [];
  const pageIndex = collection.findIndex(item => item.url === page.url);

  if (pageIndex !== -1) {
    return {
      prev: collection[pageIndex - 1] || null,
      next: collection[pageIndex + 1] || null,
    };
  } else {
    return null;
  }
};

module.exports = {
  isPublic,
  getPublic,
  fromCollection,
  seriesNav,
};
