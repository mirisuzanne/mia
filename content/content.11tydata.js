'use strict';

module.exports = {
  eleventyComputed: {
    banner: (data) => data.banner || data.title,
    description: (data) =>
      data.description || data.sub || data.summary || data.site.description,
  },
};
