---
title: User Unfriendly
sub: designing software for humans, with other humans
slides: https://www.oddbooksapp.com/book/software-for-humans
hero:
  img: talks/user-unfriendly.png
tags:
  - speaking
  - code
  - art
  - design
  - process
  - collaboration
events:
  - venue: Agnes Scott College
    url: https://calendar.agnesscott.edu/event/user_unfriendlynotes_toward_a_queer_web
    adr: Atlanta, GA
    start: 2019-09-17
  - venue: Design 4 Drupal [keynote]
    url: https://design4drupal.org/
    adr: Boston, MA
    start: 2019-06-26
    slides: https://talks.oddbird.net/user-unfriendly/design4drupal19
    video: https://drupal.tv/external-video/2019-06-28/user-unfriendly-practical-guide-losing-control
    embed: &drupal
      iframe: https://www.youtube.com/embed/2MkQBQb43gE
      width: 560
      height: 315
  - venue: Open Source Conference
    url: https://www.comcastlabsconnect.com/open-source-2019
    adr: Denver, CO
    start: 2019-06-20
    slides: https://talks.oddbird.net/user-unfriendly/opensource19
  - venue: Agile Denver
    url: https://www.meetup.com/Agile-Denver2/events/258957862/
    adr: Denver, CO
    start: 2019-03-18
    slides: https://talks.oddbird.net/user-unfriendly/agiledenver19
  - venue: AIGA Colorado
    url: https://colorado.aiga.org/event/04-26-18-rethinking-ux-design/
    adr: Denver, CO
    start: 2018-04-26
    slides: https://oddbooksapp.com/release/e5bd52de-a9db-4e59-a2af-ffa8a68f9100
  - venue: Creative Connections
    url: https://www.meetup.com/Creative-Connections/events/dcwhhpyxgbjb/
    adr: Denver, CO
    start: 2018-04-16
    slides: https://oddbooksapp.com/release/650ad542-a9c9-4036-8f91-af34ae449d3c
  - venue: Metro State Mobile Prototyping
    adr: Denver, CO
    start: 2018-04-05
    slides: https://www.oddbooksapp.com/book/mobile-prototype
  - venue: SassConf 2015
    url: http://sassconf.com
    adr: Austin, TX
    start: 2015-11-11
    slides: https://www.oddbooksapp.com/book/user-unfriendly
press:
  - text: |
      Thought provoking talk on rethinking who the user is
      and who we are writing for as developers.
      Wow! Made me think.
    credit: Nithya Ruff
    title: Leader of Comcast Open Source Office
    url: https://twitter.com/nithyaruff/status/1141803102376550402
summary: |
  A project-manager’s reflections on human-centered problem-solving,
  client communication,
  and user feedback in agile web development.
media:
  - span: full
    <<: *drupal
---
{% import "content.macros.njk" as content %}

The web is more than a technology platform,
it was created with a mission statement.
Design, code, and process trends also come with attached philosophies --
and they aren’t always friendly to the user.
We’ll talk about our human-centered approach to product-design,
transparent client communication,
learning to understand user-feedback,
and designing for edge-cases with integrated teams.

- An overview of the philosophy behind the web
- How the medium influences what we make, and how we work
- Understanding “open” and “opinionated” philosophies
- Understanding (and seeking-out) user-feedback, without sacrificing vision
- How we integrate developers and designers in tight feedback cycles
- How we talk to clients about design choices

------

{{ content.quotes(press) }}

------

{{ content.fig(
  data=media,
  caption='Conference videos…'
) }}
