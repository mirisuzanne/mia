'use strict';

const fs = require('fs');

const yaml = require('js-yaml');
const _ = require('lodash');

const nav = yaml.safeLoad(
  // eslint-disable-next-line no-sync
  fs.readFileSync('./content/_data/nav.yaml', 'utf8'),
);

const fromNav = (type, find, get) => {
  const found = _.find(nav[type], find);
  return found && get ? found[get] : found;
};

module.exports = {
  nav,
  fromNav,
};
