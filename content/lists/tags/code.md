---
index: code
title: All The 'Code'
sub: |
  with [OddBird](/orgs/oddbird/)
  & [CSS Working Group](/orgs/csswg/)
  & [Sass core team](/orgs/sass/)
  &c.
summary: |
  At it's heart,
  the web
  is a collective anti-capitalist
  art experiment.
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
