'use strict';

/* eslint-disable no-sync */
/* eslint-disable no-console */

const path = require('path');
const fs = require('fs');

const eleventyImg = require('@11ty/eleventy-img');
const _ = require('lodash');

const imgAttrs = {
  loading: 'lazy',
  decoding: 'async',
};

const imgOptions = {
  widths: [640, 960, 1600],
  formats: ['avif', 'jpeg'],
  sharpJpegOptions: {
    quality: 80, // default
    progressive: true,
  },
  sharpAvifOptions: {
    quality: 80,
  },
};
const IMG_SRC = './content/images/';
const imageTransformIndex = [];

const getSizes = (sizes) => {
  const defaultSizes = {
    default: '(min-width: 65em) 60vw, 95vw',
    hero: '(min-width: 75em) 75vw, 95vw',
    gallery: '(min-width: 65em) 30vw, (min-width: 30em) 45vw, 95vw',
    media: '(min-width: 65em) 15vw, (min-width: 30em) 30vw, 50vw',
    face: '250w',
  };

  return sizes && defaultSizes[sizes]
    ? defaultSizes[sizes]
    : sizes || defaultSizes.default;
};

const getImage = (
  src,
  alt = '',
  sizes = 'default',
  attrs = {},
  getUrl = false,
) => {
  const fullSrc = `${IMG_SRC}${src}`;
  let outputDir = './_site/images/';
  let urlPath = '/images/';

  if (fullSrc.startsWith(IMG_SRC)) {
    const dir = path.dirname(src);
    outputDir = `${outputDir}${dir}`;
    urlPath = `${urlPath}${dir}`;
  } else {
    // eslint-disable-next-line no-console
    console.warn(`Unexpected image source path: "${src}"`);
  }

  const opts = {
    ...imgOptions,
    outputDir,
    urlPath,
  };

  // eslint-disable-next-line no-sync
  const metadata = eleventyImg.statsSync(fullSrc, opts);

  // We need to know what the resultant files for each format
  // and size will be called. Let's take a peep.
  // eslint-disable-next-line no-unused-vars
  for (const [format, options] of Object.entries(metadata)) {
    // for each format, let's look at each file size and get its outputPath
    metadata[format].forEach((thisSize) => {
      // If the file has already been added to the build directory,
      // we won't repeat that effort
      // eslint-disable-next-line no-sync
      if (
        !fs.existsSync(thisSize.outputPath) &&
        !imageTransformIndex.includes(thisSize.filename)
      ) {
        console.log(`Processing image: ${src} (${thisSize.filename})`);
        // Make a note that we're generating this image to avoid dupes
        imageTransformIndex.push(thisSize.filename);
        eleventyImg(fullSrc, opts);
      }
    });
  }

  if (getUrl) {
    const data = metadata.jpeg[metadata.jpeg.length - 1];
    return data.url;
  }

  const imageAttributes = _.merge(
    {
      ...imgAttrs,
      alt,
      sizes: getSizes(sizes),
    },
    attrs || {},
  );

  return eleventyImg.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
};

const face = async (src, alt, className = null) => {
  const outputDir = './_site/images/_ext/';
  const urlPath = '/images/_ext/';

  const opts = {
    ...imgOptions,
    outputDir,
    urlPath,
  };

  const metadata = await eleventyImg(src, opts);

  const imageAttributes = {
    ...imgAttrs,
    alt,
    class: className,
    sizes: getSizes('face'),
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return eleventyImg.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
};

const image = (src, alt = '', sizes = 'default', attrs = {}) =>
  getImage(src, alt, sizes, attrs);

const imgSrc = (src) => getImage(src, null, null, {}, true);

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('img', image);
  eleventyConfig.addFilter('imgSrc', imgSrc);

  eleventyConfig.addShortcode('img', image);
  eleventyConfig.addNunjucksAsyncShortcode('face', face);
};
