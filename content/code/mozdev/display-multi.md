---
title: Inner & Outer Values of the Display Property
sub: allow us to be more explicit and expressive about layouts
date: 2019-10-28
hero:
  img: mozdev/multi-display.png
summary: |
  The `display` property has been in CSS from the beginning,
  handling everything from `block` and `inline` boxes
  to `list-items` and full layout systems like `flexbox` or `grid`.
  Now the `display` syntax is getting an upgrade
  to match it's multiple uses.
media:
  - media: https://www.youtube.com/embed/4Clyc38U-MA
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

{{ content.fig(
  data=media,
  caption="Learn what's new in the CSS `display` property"
) }}

The new `display` spec adds flow and flow-root values,
and allows for setting inner layout (`grid`, `flex`, etc)
as well as outer box type (`inline`, `block`), and more.

It might not be something we use much right away --
but it still helps me understand all the power inside this one property.
