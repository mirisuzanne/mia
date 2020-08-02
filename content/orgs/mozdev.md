---
title: Mozilla Developer
sub: Videos, articles, & tools from Mozilla (and OddBird)
org: DevRel Contractor
url: https://www.youtube.com/MozillaDeveloper
start: 2019-07-01
end: 2020-01-01
hero:
  img: mozdev/mozilla-youtube.jpg
index: mozilla developer
tags:
  - writing
  - code
  - code video
  - speaking
  - mozilla developer
summary: |
  I've been working with Mozilla
  to help create a new resource
  for web professionals --
  with a mix of videos,
  articles, demos, and open source tools.
---
{% import "content.macros.njk" as content %}

No matter your experience level or job description,
we’re all working together towards the future health of the web,
and Mozilla is here to help.

{% set weird = collections.all | getPage('/2019/10/03/css-is-weird/') | first %}

{{ content.fig(
  data=weird.data.media,
  caption='Featured Video: Why Is CSS So Weird?'
) }}
