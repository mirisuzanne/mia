'use strict';

/* eslint-disable no-sync */

const fs = require('fs');

const fetch = require('node-fetch');
const unionBy = require('lodash/unionBy');

const { blocklist } = require('../../src/mentions/blocklist');
const domain = 'www.miriamsuzanne.com';

// Load .env variables with dotenv
require('dotenv').config();

// Define Cache Location and API Endpoint
const CACHE_DIR = 'src/mentions';
const CACHE_FILE = `${CACHE_DIR}/webmentions.json`;
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

const getDomain = (entry) => new URL(entry['wm-source']).origin.split('://')[1];

// Merge fresh webmentions with cached entries, unique per id
const mergeWebmentions = (a, b) => {
  const all = unionBy(a.children, b.children, 'wm-id');
  const syns = all.reduce(
    (prev, current) => [...prev, ...(current.syndication || [])],
    [],
  );

  return all
    .filter((entry) => !syns.includes(entry.url))
    .filter((entry) => !blocklist.includes(getDomain(entry)));
};

// save combined webmentions in cache file
const writeToCache = (data) => {
  const fileContent = JSON.stringify(data, null, 2);
  // create cache folder if it doesnt exist already
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }
  // write data to cache json file
  fs.writeFile(CACHE_FILE, fileContent, (err) => {
    if (err) {
      throw err;
    }
    console.log(`>>> webmentions saved to ${CACHE_FILE}`);
  });
};

// get cache contents from json file
const readFromCache = () => {
  if (fs.existsSync(CACHE_FILE)) {
    const cacheFile = fs.readFileSync(CACHE_FILE);
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
