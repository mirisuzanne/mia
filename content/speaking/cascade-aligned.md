---
title: Cascade Aligned Programming
sub: What does it mean to style a universal medium?
author: miriam
date: 2020-07-15
hero:
  img: talks/cascade.jpg
  width: 2500
  height: 1150
tags:
  - code
events:
  - venue: Front Range Front End
    url: https://frontrangefrontend.com/
    date: 2020-08-06
    adr: Online
    slides: https://slides.oddbird.net/cascade-aligned/front-range20/
    video: https://www.youtube.com/watch?v=-wlokRJRepY
    media: &frfe
      iframe: https://www.youtube.com/embed/-wlokRJRepY
media:
  - span: full
    <<: *frfe
summary: |
  From the very start,
  “web design” has posed a nearly impossible paradox.
---

{% import "content.macros.njk" as content %}

What does it mean to style a medium that must adapt universally
across languages, devices, operating systems,
user-preferences, browsers, and interfaces --
from a monochrome terminal to 4k monitors,
watches, braille-readers, and smart speakers?

The result is CSS, a programming language unlike any other --
built around a resilient “cascade”
of hints & suggestions for the browser
to interpret in each context.
Still, as an industry
we rely heavily on “Object Oriented” and “Functional” paradigms
developed for controlled environments.

What might it look like to create a new,
cascade-informed, approach to writing code?

{{ content.figure(
  data=media,
  caption='Conference videos…'
) }}
