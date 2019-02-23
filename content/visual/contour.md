---
title: Cover Art for The Posture of Contour
venue: SpringGun Press
url: http://www.springgunpress.com/posture/
date: 2013-01-22
feature: true
tags:
  - _calendar
  - book design
  - art
  - visual
---
{% import "content.macros.njk" as content %}

The editors at
[SpringGun Press][springgun] asked me
to design cover art
for *The Posture of Contour*,
a new book by
[James Belflower][james].
I used the opportunity to get my mind out of an all-digital space,
and spent most of my time with pen, paper, and oil pastel.

[springgun]: http://www.springgunpress.com/
[james]: http://www.pw.org/content/james_belflower


## Sketches

My favorite experiments involved
[blind contours][blind contours] with a capped pen
over homemade (oil-pastel) carbon paper,
then arrows traced on a third layer
using my iPad as a light table.

[blind contours]: http://en.wikipedia.org/wiki/Blind_contour_drawing

{% set caption %}
Exploring levels of distance from object to abstraction,
using blind contour, layering, tracing, negative space, etc.
{% endset %}

{% call content.fig(caption=caption) %}
  <img src="{{ site.images }}contour/contours-coal.jpg" alt="Partial charcoal contours traced from a map">
  <img src="{{ site.images }}contour/contours.png" alt="Red arrow contours of map negative space">
  <img src="{{ site.images }}contour/circles.png" alt="Red arrow negative-space contours of a coffee stain">
  <img src="{{ site.images }}contour/jaw.png" alt="Overlaid charcoal and arrow contours of a jaw bone">
  <img src="{{ site.images }}contour/mouth-blind.png" alt="Blind contour of a mouth and nose">
  <img src="{{ site.images }}contour/colors.png" alt="Bright color contour fills from a map">
  <img src="{{ site.images }}contour/face-blind.jpg" alt="Charcoal blind contour of Belflower's face">
  <img src="{{ site.images }}contour/face-arrows.jpg" alt="Red arrow negative contour of Belflower's face">
  <img src="{{ site.images }}contour/layers.jpg" alt="Abstract red arrows">
  <img src="{{ site.images }}contour/rays.jpg" alt="Unrecognizable red arrow negative based on initial jaw-bone">
{% endcall %}


## Final(ish) Design

In the end,
James decided on the abstract jawbone pattern in red arrows.

{% call content.fig(
  caption='What was once a diagram of the tongue, teeth, and bottom jaw.'
) %}
  <img src="{{ site.images }}contour/final.png" alt="">
{% endcall %}
