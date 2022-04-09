'use strict';

const path = require('path');

const eleventyImg = require('@11ty/eleventy-img');
const _ = require('lodash');

/* @docs
label: Responsive Images
category: File
*/

const imgOptions = {
  widths: [480, 960, 1600],
  formats: ['avif', 'jpeg'],
  filenameFormat: (id, imgSrc, width, format) => {
    const extension = path.extname(imgSrc);
    const name = path.basename(imgSrc, extension);
    return `${name}-${width}w.${format}`;
  },
};
const IMG_SRC = './content/images/';

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
    const dir = path.dirname(fullSrc.slice(IMG_SRC.length));
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

  // generate images; this is async but we don’t wait
  eleventyImg(fullSrc, opts);

  // eslint-disable-next-line no-sync
  const metadata = eleventyImg.statsSync(fullSrc, opts);

  if (getUrl) {
    const data = metadata.jpeg[metadata.jpeg.length - 1];
    return data.url;
  }

  const defaultSizes = {
    default: '(min-width: 65em) 60vw, 95vw',
    hero: '(min-width: 75em) 75vw, 95vw',
    gallery: '(min-width: 65em) 30vw, (min-width: 30em) 45vw, 95vw',
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
