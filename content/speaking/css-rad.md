---
title: CSS is Rad
sub: resilient design on an infinite canvas
hero:
  img: talks/rad.jpg
  alt: |
    Slide of "CSS is Awesome" overflow meme,
    but "CSS is Rad"
    (which fits the box just fine)
  caption: CSS is better than "awesome"
tags:
  - code
events:
  - venue: Design 4 Drupal Webinar Series
    url: https://design4drupal.org/webinar-series
    date: 2020-09-09
    adr: Online
    slides: https://slides.oddbird.net/rad/design4drupal/
    video: https://youtu.be/JTzYGWYjQdg
    media: &d4d
      iframe: https://www.youtube.com/embed/JTzYGWYjQdg
  - venue: SmashingConf Live
    url: https://smashingconf.com/live/
    date: 2020-08-20
    end: 2020-08-21
    adr: Online
  - venue: Front Range Front End
    url: https://www.meetup.com/front-range-front-end/events/bxrfwqyzpbkb/
    date: 2019-11-07
    adr: Denver, CO
    video: https://youtu.be/bSITeqDKkb8
    tags:
      - code video
    embed: &frfe
      - iframe: https://www.youtube.com/embed/bSITeqDKkb8
        width: 560
        height: 315
  - venue: Smashing Conf NY
    feature: true
    url: https://smashingconf.com/ny-2019/
    start: 2019-10-15
    end: 2019-10-16
    adr: New York, NY
    video: https://vimeo.com/367890815
    tags:
      - code video
    embed: &smashing
      - iframe: https://player.vimeo.com/video/367890815
        width: 640
        height: 360
summary: |
  The web is designed to work across platforms,
  devices, languages, and interfaces --
  but how can we possibly design for that
  unknown and always-changing canvas?
media:
  - <<: *d4d
    span: full
  - <<: *smashing
  - <<: *frfe
---
{% import "content.macros.njk" as content %}

CSS is designed to be resilient, declarative, accessible, and contextual --
with progressive enhancement and graceful degradation built in.
We’ll look at practical ways to leverage those aspects of the language
in our everyday work.
We don’t have to wait years for support in every browser
before we use the new features,
and we don’t have to duplicate our work for every browser we support.
From layouts to variables, support queries, and duplicated properties --
we can write resilient and modern CSS
that works across the entire web,
now and into the future.

- Use new features before they are universally supported
- Support more browsers with less work
- Use different fallback methods depending on the circumstances
- Understanding caniuse.com as a guide, rather than a gatekeeper
- Understand the radical vision that makes design on the web so unique…
  and weird

------

{{ content.fig(
  data=media,
  caption='Conference videos…'
) }}
