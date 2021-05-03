---
title: Styling Lists in CSS
sub: Powerful New CSS for Styling Bullets, Numbers, and List Markers
date: 2019-10-01
hero:
  img: mozdev/list-markers.png
summary: |
  When you create lists in HTML,
  browsers add bullet-points or numbers we call *list markers*.
  Now CSS gives us the tools to style those list markers,
  and even create our own!
embed:
  - iframe: https://www.youtube.com/embed/2awepiNoaZI
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

I'll also show you how the `::marker` element
is different from `::before` or `::after`.
Watch the video, and go play with the [demo on codepen][pen].

[pen]: https://codepen.io/miriamsuzanne/pen/BaBKowO?editors=0100

{{ content.fig(
  data=embed,
  caption='Style list markers, and add your own counters!'
) }}

- Use the `::marker` pseudo element to style list bullets & numbers
- Use `display: list-item` to add a marker on any element
- Use `counter-reset` and `counter-increment` to create your own counters
- Use `counter()` and `counters()` to control how counter numbers are displayed
