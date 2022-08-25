---
index: art
title: Cross-Media Artist
hero:
  img: writing/sidesaddle/neck.jpg
  alt: |
    A face and neck collage
    of black-and-white medical and electrical diagrams,
    with red arrows
    and text that says "a longing"
sub: |
  [writing](/tags/writing/),
  [music](/music/),
  [theater](/theater/),
  [visual art](/tags/visual/),
  and more...
summary: |
  I make music
  with [Teacup Gorilla](/orgs/teacup-gorilla/),
  theater with [Grapefruit Lab](/orgs/grapefruit-lab/),
  and have a variety of other
  artistic projects underway.
---

{%- set hfeed = collections.stuff | intersection(collections.art) | getPublic | filter('data.feature')  -%}
{%- if hfeed | length > 0 -%}
<section class="h-feed">
  <h2 class="p-name">Featured Stuff</h2>
  {%- for item in hfeed | sortBy('data.date') | reverse | slice(5) -%}
    {%- include 'part/hentry.njk' -%}
  {%- endfor -%}
</section>
{%- endif -%}
