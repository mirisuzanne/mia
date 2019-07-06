---
feature: true
title: Not Clear To Me, an Installation
sub: art and words @ Bardo Coffee House
venue: Bardo Coffee House
url: https://www.bardocoffee.com/
date: 2019-07-05
end: 2019-08-01
hero:
  img: art/shows/bardo.jpg
  alt: Art on the walls of Bardo Coffee
tags:
  - _calendar
  - art
  - riding sidesaddle
  - visual
  - shop
gallery:
  caption: Diptych commisioned by Kelcie Glick...
  art:
    - img: art/parents/parents1.jpg
      alt: digital collage with skeleton of a tadpole, bees, and orchids
    - img: art/parents/parents2.jpg
      alt: digital collage with tail of a tadpole, bees, and orchids
summary: |
  An art installation
  at my local cafe --
  featuring a mix of
  [pieces from Riding SideSaddle*](/books/sidesaddle/art/),
  [PROPHETIA VETITUM MUNDI](/2019/07/05/screwtooth/),
  [Gods on the Lam](/2017/06/02/gods-on-the-lam/),
  and elsewhere.
  I also put together
  an original diptych
  for this show.
---
{% import "content.macros.njk" as content %}

{{ content.intro(summary) }}

{{ content.fig(
  data=gallery.art,
  caption=gallery.caption
) }}

[buy prints from the show »][buy]

[buy]: https://art.miriamsuzanne.com
