'use strict';

const fs = require('fs');

const yaml = require('js-yaml');
const _ = require('lodash');

const taxonomy = yaml.safeLoad(
  // eslint-disable-next-line no-sync
  fs.readFileSync('./content/_data/taxonomy.yaml', 'utf8'),
);

/* @docs
label: fromTaxonomy
category: general
note: |
  Access the taxonomy directly.
  This can also be done in nunjucks,
  using the `taxonomy` global variable,
  but a filter makes that available
  from inside macros,
  without passing it in as an argument.
params:
  type:
    type: string
    note: Any taxonomy defined in the `taxonomy.yaml` data file
  find:
    type: any
    note: Find an object in the taxonomy, using lodash `_.find()`
  get:
    type: string
    default: undefined
    note: Optionally return a single attribute of the found object
*/
const fromTaxonomy = (type, find, get) => {
  const found = _.find(taxonomy[type], find);
  return found && get ? found[get] : found;
};

module.exports = {
  taxonomy,
  fromTaxonomy,
};
