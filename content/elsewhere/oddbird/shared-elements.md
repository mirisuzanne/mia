---
title: Every Transition is a Page Transition?
sub: Experimenting with the shared element transitions API
url: https://www.oddbird.net/2022/06/29/shared-elements/
date: 2022-06-29
hero:
  img: 2022/starwars-wipe.jpg
  alt: |
    A scene wipe transition in Star Wars,
    as Luke and C-3PO in a speeder
    wipe across a close-up
    of Luke and Obi-Wan talking.
    Over top, a dotted line shows the transition edge,
    and a red arrow shows the transition movement
    in front of the speeder.
tags:
  - csswg
  - js
  - css
summary: |
  There’s a new web API proposal
  for transitioning shared-elements across pages.
  It’s great for making smooth page transitions,
  but what if we apply it to individual elements
  with changing styles on a single page?
---

> Since [Single Page App] transitions are supported,
> and SPA navigation happens entirely in-page,
> a ‘page’ in this case is just _any given state of the document_.
> We can capture the state of things at one moment,
> define that as the starting page,
> make any changes we want,
> and define the results as our ending page –-
> then animate between them.
