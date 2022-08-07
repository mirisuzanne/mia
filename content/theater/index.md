---
layout: format/h-feed
title: Theater
banner: Live Theater
sub: Artistic Director, Playwright, & Lighting Design
index: theater
override:tags: []
hero:
  img: /art/theater/jane/DSC_0362.jpg
summary: |
  I've worked in professional theater for over 20 years,
  taking on every role available --
  from writing and directing,
  to acting, design, live soundscapes, and electrical work.
---

After studying theater at
[Goshen College](/education/goshen/)
and interning at the
[Oregon Shakespeare Festival](/education/osf/),
I became the Artistic Director
of [New World Arts](/orgs/new-world-arts/)
from 2001--2006.
Since moving to Denver,
I've worked with a number of ensemble companies,
and started one of my own:
[Grapefruit Lab](/orgs/grapefruit-lab/).

{% set event_groups = collections.speaking | getEvents | groupBy('tense') %}

{% if event_groups.ongoing | length > 0 %}
  <h2>Happening Now</h2>
  {% for item in event_groups.ongoing %}
    {% include 'part/hevent.njk' %}
  {% endfor %}
{% endif %}

{% if event_groups.future | length > 0 %}
  <h2>Happening Now</h2>
  {% for item in event_groups.future %}
    {% include 'part/hevent.njk' %}
  {% endfor %}
{% endif %}

