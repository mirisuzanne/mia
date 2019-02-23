'use strict';

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

const typeCheck = (val, is) => {
  const type = typeof val;
  return is ? type === is : type;
};

module.exports = {
  groupBy,
  typeCheck,
};
