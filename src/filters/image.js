'use strict';

const path = require('path');
const fs = require('fs');

const eleventyImg = require('@11ty/eleventy-img');
const _ = require('lodash');

/* @docs
label: Responsive Images
category: File
*/

const imgOptions = {
  // widths: [480, 960, 1600],
  widths: [960, 1600],
  formats: ['avif', 'jpeg'],
};
const IMG_SRC = './content/images/';
const imageTransformIndex = [];

/* @docs
label: image
category: responsive images
note: Generate responsive image using eleventy img plugin
example: |
  {%- image src, "alt text", {"class":"my-image"}, "media" -%}
params:
  src:
    type: string
  alt:
    type: string | none
    default: none
  sizes:
    type: string | none
    default: none
    note: |
      Only required for small images, since the default is 100vw.
      See taxonomy data for named sizes
      like "card", "media", and "gallery".
  attrs:
    type: object
    default: '{}'
  getUrl:
    type: boolean | none
    default: none
    note: |
      Returns url to largest jpeg image instead of full HTML
*/
const image = (
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
    sharpJpegOptions: {
      quality: 80, // default
      progressive: true,
    },
    sharpAvifOptions: {
      quality: 80,
    },
  };

  // eslint-disable-next-line no-sync
  const metadata = eleventyImg.statsSync(fullSrc, opts);

  // We need to know what the resultant files for each format
  // and size will be called. Let's take a peep.
  for (const [format] of Object.entries(metadata)) {
    // for each format, let's look at each file size and get its outputPath
    metadata[format].forEach((thisSize) => {
      // If the file has already been added to the build directory,
      // or this image has been requested for processing already,
      // let's not duplicate effort.
      if (
        // eslint-disable-next-line no-sync
        !fs.existsSync(thisSize.outputPath) &&
        !imageTransformIndex.includes(thisSize.filename)
      ) {
        // eslint-disable-next-line no-console
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

  const defaultSizes = {
    default: '(min-width: 65em) 60vw, 95vw',
    hero: '(min-width: 75em) 75vw, 95vw',
    gallery: '(min-width: 65em) 30vw, (min-width: 30em) 45vw, 95vw',
    media: '(min-width: 65em) 15vw, (min-width: 30em) 30vw, 50vw',
  };

  const imgSizes =
    sizes && defaultSizes[sizes]
      ? defaultSizes[sizes]
      : sizes || defaultSizes.default;

  const imageAttributes = _.merge(
    {
      alt,
      sizes: imgSizes,
      loading: 'lazy',
      decoding: 'async',
    },
    attrs || {},
  );

  return eleventyImg.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
};

module.exports = {
  image,
};
