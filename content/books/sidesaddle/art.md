---
title: SideSaddle Art Show
date: 2015-10-10
hero:
  img: huck.jpg
  caption: Riding SideSaddle* art installation
tags:
  - writing
  - art
  - riding sidesaddle
  - visual
  - shop
events:
  - venue: Buntport Theater
    adr: Denver, CO
    url: http://buntport.com/
    start: 2016-03-04
    end: 2016-03-26
  - venue: Huckleberry Roasters
    adr: 2500 Larimer St, Denver
    url: http://huckleberryroasters.com/
    start: 2015-10-10
    end: 2015-11-13
    feature: true
gallery:
  caption: |
    Art from the novel
    ([available as prints](http://art.miriamsuzanne.com/))
  images:
    - img: writing/sidesaddle/neck.jpg
      url: http://art.miriamsuzanne.com/item/a-longing-print
      span: full
    - img: writing/sidesaddle/dancers.jpg
      url: http://art.miriamsuzanne.com/item/carcass-print
    - img: writing/sidesaddle/divers.jpg
      url: http://art.miriamsuzanne.com/item/when-we-walked-print
    - img: writing/sidesaddle/house.jpg
      url: http://art.miriamsuzanne.com/item/deformed-print
    - img: writing/sidesaddle/moths.jpg
      url: http://art.miriamsuzanne.com/item/sunset-burns-print
    - img: writing/sidesaddle/denver.svg
      url: http://art.miriamsuzanne.com/item/cities-rise-sweaty-print
    - img: writing/sidesaddle/reeds.jpg
      url: http://art.miriamsuzanne.com/item/dangly-bits-print
    - img: writing/sidesaddle/boxer.jpg
      url: http://art.miriamsuzanne.com/item/into-your-heart-print
    - img: writing/sidesaddle/herm.jpg
      url: http://art.miriamsuzanne.com/item/a-body-print
    - img: writing/sidesaddle/volvo.jpg
      url: http://art.miriamsuzanne.com/item/high-heels-print
    - img: writing/sidesaddle/mascara.jpg
      url: http://art.miriamsuzanne.com/item/boy-on-the-tv-print
summary: |
  [Riding SideSaddle*](../) has gone vertical --
  all 250 cards displayed in a gallery show.
---

{% import "content.macros.njk" as content %}

{{ content.intro(summary) }}

{{ content.fig(gallery.images, gallery.caption) }}
