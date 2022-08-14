'use strict';

const _ = require('lodash');

const typeCheck = (val, is) => {
  const type = typeof val;
  return is ? type === is : type;
};

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

const styles = (dict) =>
  _(dict)
    .map((val, prop) => (val ? `${prop}:${val};` : ''))
    .reduce((all, one) => `${all}${one}`, '');

module.exports = {
  typeCheck,
  slugify,
  styles,
};
