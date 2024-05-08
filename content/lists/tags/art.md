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
  Here we are,
  stumbling through this wreckage and rubble --
  finding beauty in the world
  and in each other along the way.
---

{% set event_list = collections.art | getEvents | notPast %}

{% if event_list | length > 0 %}
  <section class="events">
    <h2>Current & Upcoming Events</h2>
    {% for item in event_list | sortEvents('future') %}
      {% include 'part/hevent.njk' %}
    {% endfor %}
  </section>
{% endif %}

{%- set hfeed = collections.artifact | intersection(collections.art) | getPublic | filter('data.feature') -%}
{%- if hfeed | length > 0 -%}
<section class="h-feed">
  <h2 class="p-name">(Art)ifacts</h2>
  {%- for item in hfeed | sortBy('data.date') | reverse | slice(3) -%}
    {%- include 'part/hentry.njk' -%}
  {%- endfor -%}
</section>
{%- endif -%}
