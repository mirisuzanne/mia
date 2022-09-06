---
title: Theater
banner: Too Much 'Theater'
sub: mostly with [Grapefruit Lab](/orgs/grapefruit-lab/) these days
index: theater
hero:
  img: /art/theater/jane/DSC_0362.jpg
  alt: |
    Helen, played by Meghan Frank,
    dies in the arms of Jane Eyre
    (Lindsey Pierce).
summary: |
  So Thespis invents tragedy,
  the one-man show.
  And then Aeschylus introduced dialogue,
  a second actor --
  and it's been [all down hill from there](/tags/script/).
  Shakespeare will start you off with
  _thunder, lightning, and three witches,_
  but then it's a show about some Scottish asshole.
---

{% set event_groups = collections.theater | getEvents | groupBy('tense') %}

{% if event_groups.ongoing | length > 0 %}
  <h2>Happening Now</h2>
  {% for item in event_groups.ongoing | sortEvents %}
    {% include 'part/hevent.njk' %}
  {% endfor %}
{% endif %}

{% if event_groups.future | length > 0 %}
  <h2>{{ hevent.titles.future }}</h2>
  {% for item in event_groups.future | sortEvents %}
    {% include 'part/hevent.njk' %}
  {% endfor %}
{% endif %}
