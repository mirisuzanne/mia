---
index: code
title: All The 'Code'
sub: |
  with [OddBird](/orgs/oddbird/)
  & [CSS Working Group](/orgs/csswg/)
  & [Sass core team](/orgs/sass/)
  &c.
summary: |
  We value what is good in [code];
  but we believe in the existence of other,
  and more vivid kinds of goodness.

  ---Charlotte Brontë, maybe
  {.cite}
---

{% set event_list = collections.code | getEvents | notPast %}

{% if event_list | length > 0 %}
  <section class="events">
    <h2>Current & Upcoming Events</h2>
    {% for item in event_list | sortEvents('future') %}
      {% include 'part/hevent.njk' %}
    {% endfor %}
  </section>
{% endif %}

{%- set hfeed = collections.artifact | intersection(collections.code) | getPublic | filter('data.feature') -%}
{%- if hfeed | length > 0 -%}
<section class="h-feed">
  <h2 class="p-name">Featured Code Artifacts</h2>
  {%- for item in hfeed | sortBy('data.date') | reverse | slice(3) -%}
    {%- include 'part/hentry.njk' -%}
  {%- endfor -%}
</section>
{%- endif -%}
