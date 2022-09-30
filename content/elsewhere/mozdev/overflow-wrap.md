---
title: Overflow-Wrap in CSS
banner: How do you wrap long words in CSS?
date: 2019-11-06
url: https://www.youtube.com/watch?v=UOKQ6gw21NA
tags:
  - css
hero:
  img: mozdev/overflow_wrap.png
summary: |
  Horizontal text overflow has always been difficult to manage on the web.
  The default visible overflow
  is designed to make sure content remains accessible
  no matter the size of a containing box,
  but it's not our only option.
media:
  - iframe: https://www.youtube.com/embed/UOKQ6gw21NA
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

We can now use `overflow-wrap` to control how words break --
and combine that with hyphens to make wrapped text more readable.
The solutions aren't perfect yet,
but I'll walk you through the options we have,
and how to use them.

{{ content.figure(
  data=media,
  caption='Overflow-Wrap is the proper way to break words in CSS'
) }}

- [MDN Overflow-Wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
- [MDN Hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)
- [CodePen Demo](https://codepen.io/miriamsuzanne/pen/GRKoxXY)
