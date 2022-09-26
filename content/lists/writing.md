---
index: writing
title: Always 'Writing'
sub: |
  [books](/tags/book/)
  & [scripts](/tags/script/)
  & [articles](/tags/post/)
summary: |
  All the wrong words,
  and I put them in the wrong order, too.
---

{%- set hfeed = collections.artifact | intersection(collections.writing) | getPublic | filter('data.feature') -%}
{%- if hfeed | length > 0 -%}
<section class="h-feed">
  <h2 class="p-name">Writing Artifacts</h2>
  {%- for item in hfeed | sortBy('data.date') | reverse | slice(5) -%}
    {%- include 'part/hentry.njk' -%}
  {%- endfor -%}
</section>
{%- endif -%}
