---
type: video
title: Getting Started with CSS Grid
url: https://css-tricks.com/video-screencasts/153-getting-started-with-css-grid/
date: 2017-02-20
hero:
  svg: css-tricks.svg
tags:
  - interview
  - video
  - layout
video:
  caption: |
    Exploring CSS Grids with Geoff Graham
  src:
    - iframe: https://www.youtube.com/embed/5fkC6AG3XWU
      title: youtube video
      width: 560
      height: 315
summary: |
  It feels like CSS Grid has been coming for a long time now,
  but it just now seems to be reaching a point
  where folks are talking more and more about it
  and that it's becoming something we should learning.
---
{% import "content.macros.njk" as content %}

{{ content.figure(
  video.src,
  video.caption
) }}
