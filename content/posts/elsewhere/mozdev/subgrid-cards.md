---
title: Subgrid for Better Card Layouts
sub: and fallbacks for legacy browsers
date: 2019-10-15
tags:
  - css
  - layout
hero:
  img: mozdev/subgrid_cards.png
summary: |
  Card layouts are popular on the web,
  rows and columns of boxes with similar content.
  CSS grids can help align those cards,
  but it's still be hard to line-up content inside the cards --
  headers and footers that might need more or less room.
media:
  - iframe: https://www.youtube.com/embed/lLnFtK1LNu4
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

That's why we need "subgrid" --
coming in Firefox 71 (Dec 3)
and available now in Firefox Nightly.
This is a great opportunity to
quickly enhance our designs for modern browsers,
without losing anything in the browsers without subgrid support.

{{ content.figure(
  data=media,
  caption='Dont wait for full browser support to start using subgrids'
) }}
