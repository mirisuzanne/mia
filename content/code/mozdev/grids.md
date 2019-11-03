---
title: Faster Layouts with CSS Grid
sub: with `subgrid` about to launch in Firefox
date: 2019-10-18
hero:
  img: mozdev/grid.png
summary: |
  CSS Grid has been available in most major browsers since early 2017,
  and it makes web layout more powerful than ever before.
  But complex-looking new syntax
  (line-names! grid-areas! `minmax`! `fit-content`! `fr units`!)
  and missing IE11 support can make it scary to many developers.
media:
  - media: https://www.youtube.com/embed/KOvGeFUHAC0
    width: 560
    height: 315
    span: full
  - media: https://www.youtube.com/embed/lLnFtK1LNu4
    width: 560
    height: 315
  - media: https://www.youtube.com/embed/gmQlK3kRft4
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

Don't let that stop you: CSS Grid has made my layout process faster and simpler, with more flexibility. We can get started with a few basics, and the fallbacks don't have to be overwhelming:

{{ content.fig(
  data=media,
  caption='Learn grid and subgrid to write powerful layouts quickly'
) }}

With Subgrid, we can also start to lay out nested elements on a shared grid, great for card layouts, and common form patterns.
