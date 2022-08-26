---
title: Cascading Layers of !mportance
date: 2022-08-10T17:02:10-06:00
events:
  - venue: An Event Apart
    url: https://aneventapart.com/event/denver-2022
    adr: Denver, CO
    date: 2022-10-10
    end: 2022-10-12
    slug: 2022-aea-denver
tags:
  - css
  - csswg
  - cascade
  - cascade layers
summary: |
  Earlier this year,
  all the major browsers released Cascade Layers,
  with the potential to fundamentally change
  how we write styles --
  especially in an age of design systems,
  component libraries,
  and third-party tools.
  But fundamental changes
  require us to re-think
  how all the pieces fit together.
---

The Cascade is the underlying algorithm
that drives our entire language,
and the main target of frustration
when our styles go bad.
But why is it there,
how is it changing,
and why should we care?

In this deep-dive,
we’ll look at the overall cascade,
and where Cascade Layers fit.
Along the way we’ll need to rethink our CSS conventions,
the purpose of `!important`,
and how we build or use third-party libraries.
And we’ll take a look at what else is coming
over the next few years with `@scope` and proximity.
