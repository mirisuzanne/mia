---
title: Styling the Intrinsic Web
sub: With Cascade Layers & Container Queries
hero:
  img: talks/aea-fall-21.png
  alt: 'Online Together Fall Summit 2021, October 11-13'
tags:
  - code
  - w3c
events:
  - venue: Smashing Conf
    url: https://smashingconf.com/sf-2022/
    date: 2022-06-21
    end: 2022-06-22
    adr: San Francisco, CA
  - venue: An Event Apart Fall Summit
    url: https://aneventapart.com/event/fall-summit-2021
    date: 2021-10-11
    end: 2021-10-13
    adr: Online
    slides: https://slides.oddbird.net/css-next/aea/
  - venue: TPAC 6-Minute Summary
    url: https://www.w3.org/2021/10/TPAC/group-updates.html#css-wg
    date: 2021-10-01
    adr: Online
    slides: https://slides.oddbird.net/csswg/tpac2021/
    video_link: https://watch.videodelivery.net/e886b064fc34148ad6bad80fbf1c34b1
    media: &tpac
      iframe: https://watch.videodelivery.net/e886b064fc34148ad6bad80fbf1c34b1
summary: |
  Over the last decade,
  Responsive Web Design and Object Oriented CSS
  have grown from exciting new trends
  into the foundations of modern, component-driven web design.
  But our medium is not done evolving.
media:
  - span: full
    <<: *tpac
---

In 2018,
Jen Simmons coined this the era of "Intrinsic Web Design" --
with powerful new tools
that allow us to build entire layouts
based on the intrinsic needs of each component.

This evolution of the responsive web
is becoming more clear with several new features in CSS.
We'll look at a number of these developments,
with a special focus on Cascade Layers
(giving you control over your own cascade),
and Container Queries
(allowing components to respond to their immediate context).
Not only do these features build on
what we love most about responsive components,
but they they're designed to address
some of the biggest challenges in CSS today.

------

{% import "content.macros.njk" as content %}

{{ content.fig(
  data=media,
  caption='Conference videos...'
) }}
