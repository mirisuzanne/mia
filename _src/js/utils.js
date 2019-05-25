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

const objectKeys = obj => Object.keys(obj);

const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

const unique = array => {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

const squash = text => {
  var content = new String(text);

  // all lower case, please
  var content = content.toLowerCase();

  // remove all html elements and new lines
  var re = /(&lt;.*?&gt;)/gi;
  var plain = unescape(content.replace(re, ''));

  // remove duplicated words
  var words = plain.split(' ');
  var deduped = [...new Set(words)];
  var dedupedStr = deduped.join(' ');

  // remove short and less meaningful words
  var result = dedupedStr.replace(
    /\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi,
    '',
  );
  //remove newlines, and punctuation
  result = result.replace(/\.|\,|\?|-|—|\n/g, '');
  //remove repeated spaces
  result = result.replace(/[ ]{2,}/g, ' ');

  return result;
};

module.exports = {
  groupBy,
  typeCheck,
  objectKeys,
  slugify,
  unique,
  squash,
};
