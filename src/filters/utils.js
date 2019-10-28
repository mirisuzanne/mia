'use strict';

const groupBy = (objectArray, property) =>
  objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

const typeCheck = (val, is) => {
  const type = typeof val;
  return is ? type === is : type;
};

const objectKeys = (obj) => Object.keys(obj);

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
const unique = (array) =>
  array.filter((value, index, self) => self.indexOf(value) === index);

const jsonString = (item) => JSON.stringify(item);

const only = (list, start, end) => list.slice(start, end);

module.exports = {
  groupBy,
  typeCheck,
  objectKeys,
  slugify,
  unique,
  jsonString,
  only,
};
