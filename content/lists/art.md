---
index: art
title: Everything 'Art'
hero:
  img: writing/sidesaddle/neck.jpg
  alt: |
    A face and neck collage
    of black-and-white medical and electrical diagrams,
    with red arrows
    and text that says "a longing"
sub: |
  Often with [Teacup Gorilla](/orgs/teacup-gorilla/)
  & [Grapefruit Lab](/orgs/grapefruit-lab/)
summary: |
  My dad always said
  that it's good to make art,
  but bad to _be an artist_.
  Emotionally unhealthy, or whatever.
  That's ok,
  I like my therapist.
---

{%- set hfeed = collections.artifact | intersection(collections.art) | getPublic | filter('data.feature') -%}
{%- if hfeed | length > 0 -%}
<section class="h-feed">
  <h2 class="p-name">(Art)ifacts</h2>
  {%- for item in hfeed | sortBy('data.date') | reverse | slice(3) -%}
    {%- include 'part/hentry.njk' -%}
  {%- endfor -%}
</section>
{%- endif -%}
