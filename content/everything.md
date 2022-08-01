---
title: Everything
index: all
eleventyExcludeFromCollections: true
eleventyComputed:
  sub: |
    {{ collections | navTags('html') | safe }}
summary: |
  A very long list
  of everything on this site...
---
