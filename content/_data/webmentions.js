/* eslint-disable no-sync */
/* eslint-disable strict */
const fs = require('fs');

const fetch = require('node-fetch');
const unionBy = require('lodash/unionBy');
const domain = 'www.miriamsuzanne.com';

// Load .env variables with dotenv
require('dotenv').config();

// Define Cache Location and API Endpoint
const CACHE_DIR = '.cache';
const API = 'https://webmention.io/api';
// eslint-disable-next-line no-process-env
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

const fetchWebmentions = async (since, perPage = 10000) => {
  if (!domain) {
    // If we dont have a domain name, abort
    console.warn(
      '>>> unable to fetch webmentions: no domain name specified in site.json',
    );
    return false;
  }

  if (!TOKEN) {
    // If we dont have a domain access token, abort
    console.warn(
      '>>> unable to fetch webmentions: no access token specified in env.',
    );
    return false;
  }

  const urlBase = `${API}/mentions.jf2`;
  let url = `${urlBase}?domain=${domain}&token=${TOKEN}&per-page=${perPage}`;

  if (since) {
    url = `${url}&since=${since}`;
  }

  const response = await fetch(url);
  if (response.ok) {
    const feed = await response.json();
    console.log(
      `>>> ${feed.children.length} new webmentions fetched from ${API}`,
    );
    return feed;
  }

  return null;
};

// Merge fresh webmentions with cached entries, unique per id
const mergeWebmentions = (a, b) => {
  const all = unionBy(a.children, b.children, 'wm-id');
  const syns = all.reduce(
    (prev, current) => [...prev, ...(current.syndication || [])],
    [],
  );

  return all.filter((entry) => !syns.includes(entry.url));
};

// save combined webmentions in cache file
const writeToCache = (data) => {
  const filePath = `${CACHE_DIR}/webmentions.json`;
  const fileContent = JSON.stringify(data, null, 2);
  // create cache folder if it doesnt exist already
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }
  // write data to cache json file
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      throw err;
    }
    console.log(`>>> webmentions saved to ${filePath}`);
  });
};

// get cache contents from json file
const readFromCache = () => {
  const filePath = `${CACHE_DIR}/webmentions.json`;

  if (fs.existsSync(filePath)) {
    const cacheFile = fs.readFileSync(filePath);
    return JSON.parse(cacheFile);
  }

  // no cache found.
  return {
    lastFetched: null,
    children: [],
  };
};

module.exports = async () => {
  const cache = readFromCache();

  if (cache.children.length) {
    console.log(`>>> ${cache.children.length} webmentions loaded from cache`);
  }

  const feed = await fetchWebmentions(cache.lastFetched);
  if (feed) {
    const webmentions = {
      lastFetched: new Date().toISOString(),
      children: mergeWebmentions(cache, feed),
    };

    writeToCache(webmentions);
    return webmentions;
  }

  return cache;
};
