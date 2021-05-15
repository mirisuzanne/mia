---
title: Container Queries & The Future of CSS
sub: Modernizing the cascade for responsive design systems
author: miriam
hero:
  img: talks/container-query.jpg
  width: 1279
  height: 696
  position: top
tags:
  - code
  - w3c
events:
  - venue: Modern Web Conference
    url: https://modernwebconference.com/
    date: 2021-08-09
    end: 2021-08-20
    adr: Online
  - venue: Front-end Development South Africa
    url: https://www.meetup.com/fedsa-community/events/276328093/
    date: 2021-05-05
    adr: Online
    slides: https://slides.oddbird.net/css-next/fedsa/
    video: https://youtu.be/lh1_zKk1qAk
    media: &fedsa
      iframe: https://www.youtube.com/embed/lh1_zKk1qAk
  - venue: Web Directions, Hover
    url: https://webdirections.org/hover/
    date: 2021-04-23
    end: 2021-04-30
    adr: Online
media:
  - <<: *fedsa
summary: |
  New CSS proposals like Container Queries,
  Cascade Layers, Scoped Styles, and Nesting
  are all aimed at improving the way we write
  responsive components and design systems.
---

{% import 'content.macros.njk' as content %}

Over the last decade
Object-Oriented & Responsive design
have become the norm --
with tools like Flexbox, Grid,
intrinsic sizing, and `aspect-ratio`
giving us even more layout control.
CSS has always been designed for a responsive web,
but that goalpost can shift over time.
Join Miriam to explore how these new features
help us write more modern, encapsulated,
and responsive CSS.

------

{{ content.fig(
  data=media,
  caption='Conference videos...'
) }}
