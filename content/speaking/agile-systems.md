---
title: Agile Design Systems
sub: with meaningful code and automation
slides: https://talks.oddbird.net/agile-systems/
tags:
  - code
  - agile
  - design systems
  - sass
events:
  - venue: Agile Alliance
    url: https://www.agilealliance.org/agile2019/program/
    adr: Washington, DC
    date: 2019-08-06
  - venue: Agile Denver
    url: https://www.meetup.com/Agile-Denver2/events/251897187/
    adr: Denver, CO
    slides: https://talks.oddbird.net/agile-systems/agiledenver18/
    date: 2018-10-22
  - venue: Front-End Front Range
    url: https://www.meetup.com/front-range-front-end/events/zwjmwlyxgbhb/
    adr: Denver, CO
    slides: https://oddbooksapp.com/book/agile-design-vue
    date: 2018-04-05
  - venue: VueConf US
    url: http://vueconf.us/
    adr: New Orleans, LA
    slides: https://oddbooksapp.com/release/9edb34c9-8789-4201-9f14-64bf5ab11b0a
    date: 2018-03-26
    video: https://www.vuemastery.com/conferences/vueconf-2018/agile-design-systems-in-vue-miriam-suzanne/
    tags:
      - code video
    embed: &vue
      - iframe: https://player.vimeo.com/video/264296381
        width: 640
        height: 360
  - venue: Tech Confluence
    url: https://www.meetup.com/TechConfluence/events/nxcfhlyxfbcc/
    adr: Denver, CO
    slides: https://www.oddbooksapp.com/book/design-systems-10m
    date: 2018-03-21
press:
  - text: |
      Every time I hear Miriam talk, I learn a ton and laugh a ton…
      Watch this talk when it’s published!
    credit: Sarah Drasner
    title: Microsoft Sr. Developer Advocate & Vue Core Team member
    url: https://twitter.com/sarah_edo/status/979023728611905536
summary: |
  Style Guides & Pattern Libraries are great tools
  for documenting the relationships between code and design,
  but beautiful docs are only half the battle.
media:
  - span: full
    <<: *vue
---

{% import "content.macros.njk" as content %}

We don’t all have dedicated teams and budgets
to build a centralized system.
How can we build patterns into our code,
using templates and pre-processors to iterate and automate
living design systems in an agile and integrated process?

- Using templates and pre-processors for pattern-making in CSS and HTML.
- Designing and integrating toolkits that force pattern-making.
- Examples of what we've done, where we've failed, and where we're headed.

------

{% import "macros/quote.njk" as quote %}
{{ quote.list(press) }}

------

{{ content.figure(
  data=media,
  caption='Conference videos…'
) }}
