---
title: Code Patterns
banner: Code Patterns for Pattern Making
slides: https://oddbooksapp.com/book/pattern-making
tags:
  - css
  - sass
  - design systems
events:
  - venue: Refresh Denver
    url: https://www.meetup.com/refreshdenver/events/241230495/?from=ref
    adr: Denver, CO
    date: 2017-09-13
    slides: https://oddbooksapp.com/release/7564d481-b132-4636-be3b-0907452955c7
  - venue: Front Range Front End
    url: https://www.meetup.com/Sass-Hack-Denver/events/239687418/
    adr: Denver, CO
    date: 2017-06-01
    slides: https://oddbooksapp.com/release/06f61771-0205-4cbc-a478-050ac52cfe92
  - venue: Gotham Sass
    url: https://www.meetup.com/gothamsass/events/235946893/
    adr: New York, NY
    date: 2017-01-12
    slides: https://oddbooksapp.com/release/e063d143-df07-4392-a6f3-3ae53e7fa2ca
    tags:
      - resistance tour
  - venue: CSSDay.io
    adr: Chandler, AZ
    date: 2016-12-03
    slides: https://oddbooksapp.com/release/1f08a0cb-198f-4c5f-ac85-93e55daa471d
    embed: &cssday
      iframe: https://www.youtube.com/embed/lK_akjzOUY0
      width: 560
      height: 315
    tags:
      - video
  - venue: CascadiaFest
    url: https://2016.cascadiajs.com/
    date: 2016-08-03
    slides: https://oddbooksapp.com/release/3964dd55-982a-4171-a46b-6dd0354eac27
    embed: &cascadia
      iframe: https://www.youtube.com/embed/cVZreFHgLFw
      width: 560
      height: 315
    tags:
      - video
  - venue: CSS Summit
    url: https://environmentsforhumans.com/2016/css-summit/
    date: 2016-07-26
    slides: https://oddbooksapp.com/release/1f76aa54-df02-4f83-8a7b-c54e1c745fbf
  - venue: DublinCSS
    url: https://www.meetup.com/DublinCSS/events/230011902/
    date: 2016-05-19
    slides: https://oddbooksapp.com/book/sass-patterns
  - venue: Clarity
    url: https://clarityconf.com/
    adr: San Francisco, CA
    date: 2016-03-31
    slides: https://oddbooksapp.com/release/ab1987b6-7d5f-42e4-b0ff-e7312cb345f6
    tags:
      - video
summary: |
  Style Guides & Pattern Libraries are great tools
  for documenting the relationships between code and design,
  but beautiful docs are only half the battle.
media:
  - <<: *cssday
  - <<: *cascadia
---
{% import "content.macros.njk" as content %}

Behind the scenes those patterns have to live in our code,
and make life easier for developers.
Let's talk about how we build patterns in code,
and how we can use them to automate our documentation
keeping everything up-to-date
without extensive maintenance.

- Using pre-processors for pattern-making in CSS and HTML.
- Designing and integrating toolkits that force pattern-making.
- Examples of what we've done, where we've failed, and where we're headed.

------

{{ content.figure(
  data=media,
  caption='Conference videos…'
) }}
