---
title: Why isn't this CSS doing anything?
sub: Have ever set a width in CSS, and... nothing happens?
date: 2019-10-21
hero:
  img: mozdev/inactive-css.png
summary: |
  There are a number of property & value combinations
  that can lead to CSS being inactive,
  and now Firefox will tell you why.
  Open the developer tools,
  and look for the greyed-out property with an info-box on hover.
media:
  - iframe: https://www.youtube.com/embed/O3DAm82vIvU
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

{{ content.fig(
  data=media,
  caption='Handy new developer tools in Firefox!'
) }}
