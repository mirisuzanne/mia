---
title: Scroll Snap in CSS
sub: without any JavaScript "scrolljacking"
date: 2019-10-31
tags:
  - css
  - layout
hero:
  img: mozdev/scroll-snap.png
summary: |
  When we're scrolling down a page,
  or through a gallery of images,
  snap-targets can help guide us from one section or image to the next.
  In the past, developers have used JavaScript to hijack scrolling,
  but now we can manage scroll alignment directly in CSS
  with only a few lines of code.
media:
  - iframe: https://www.youtube.com/embed/pohyK8iz-SQ
    width: 560
    height: 315
---

{% import "content.macros.njk" as content %}

{{ content.figure(
  data=media,
  caption="The fallback even works well in old browsers!"
) }}

{{ content.codepen(
  'bXRebo',
  'Image Gallery Demo'
) }}

{{ content.codepen(
  'vomNBg',
  'Page Sections Demo'
) }}

[More about Scroll-Snap on MDN »](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts)
