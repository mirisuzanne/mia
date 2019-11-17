---
title: Laying out Forms using Subgrid
sub: and fallbacks for legacy browsers
date: 2019-10-16
hero:
  img: mozdev/subgrid_forms.png
summary: |
  It's a common pattern to align form labels and inputs in grid-like layout.
  I'll show you how to do it quickly using CSS subgrid,
  with several quick fallbacks.
media:
  - iframe: https://www.youtube.com/embed/gmQlK3kRft4
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

Subgrid will be available in Firefox 71 (Dec 3),
and you can use it already in Firefox Nightly --
but there's no need to wait.
Subgrid works great as a quick enhancement on top of you existing layouts!

{{ content.fig(
  data=media,
  caption='Dont wait for full browser support to start using subgrids'
) }}
