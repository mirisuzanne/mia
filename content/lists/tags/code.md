---
index: code
title: All The 'Code'
sub: |
  with [OddBird](/orgs/oddbird/)
  & [CSS Working Group](/orgs/csswg/)
  & [Sass core team](/orgs/sass/)
  &c.
summary: |
  It is required that HTML
  be a common language
  between all platforms.
  This implies no device-specific markup,
  _or anything which requires control
  over fonts or colors_, for example.

  ---[HTML Design Constraints](http://info.cern.ch/hypertext/WWW/MarkUp/HTMLConstraints.html)
---

{%- set hfeed = collections.artifact | intersection(collections.code) | getPublic | filter('data.feature') -%}
{%- if hfeed | length > 0 -%}
<section class="h-feed">
  <h2 class="p-name">Featured Code Artifacts</h2>
  {%- for item in hfeed | sortBy('data.date') | reverse | slice(3) -%}
    {%- include 'part/hentry.njk' -%}
  {%- endfor -%}
</section>
{%- endif -%}
