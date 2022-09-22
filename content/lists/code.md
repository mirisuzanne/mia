---
index: code
title: All The 'Code'
sub: |
  with [OddBird](https://oddbird.net/)
  & [CSS Working Group](/orgs/csswg/)
  & [Sass core team](/orgs/sass/)
  &c.
summary: |
  I made a website once,
  and then another one,
  and then another one.
  I don't know why
  I keep making all these websites.
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