---
title: Videos, Articles, & Tools
sub: a gift from Mozilla (and OddBird)
date: 2019-10-01
hero:
  img: mozdev/mozilla-youtube.png
summary: |
  Over the summer,
  I've been working with Mozilla
  to help create a new resource
  for web professionals --
  with a mix of videos,
  articles, demos, and open source tools.
  Today,
  we're excited to launch [the video channel][mozdev]!

  [mozdev]: https://www.youtube.com/MozillaDeveloper
deja:
  - iframe: https://www.youtube.com/embed/jmepqJ5UbuM
    width: 560
    height: 315
jen:
  - iframe: https://www.youtube.com/embed/N6aMLUZ-v3w
    width: 560
    height: 315
mia:
  - iframe: https://www.youtube.com/embed/2awepiNoaZI
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

The project will include short videos, articles, demos,
and tools that teach web technologies and standards,
browser tools, compatibility, and more.
No matter your experience level or job description,
we’re all working together towards the future health of the web,
and Mozilla is here to help.

Today we’re launching a [new video channel][dev],
with a selection of shorts to kick things off.
There are two in our “about\:web” series on web technologies,
and one in our “Firefox” series on browser tools for web professionals.

[dev]: https://www.youtube.com/MozillaDeveloper

Get started with an intro to Dark Mode on the web, by Deja Hodge —
and check out her [dark mode demo][dark].

[dark]: https://empathic-dev.github.io/HelloDarkness/

{{ content.fig(
  data=deja,
  caption='Dark mode is all the rage…'
) }}

Jen Simmons shows us how to
access a handy third-panel
in the Firefox Developer Tools,
and toggle print preview mode.

{{ content.fig(
  data=jen,
  caption='Grid or Flexbox Inspectors, the Font Editor, the Animations Tools, Tracked Changes, and more.'
) }}

If you’ve ever struggled to style lists
with customized bullets and numbers,
Miriam Suzanne has a video all about the
``::marker`` pseudo-element and list counters.
Watch the video, and go play with the [demo on codepen][pen].

[pen]: https://codepen.io/mirisuzanne/pen/BaBKowO?editors=0100

{{ content.fig(
  data=mia,
  caption='Style list markers, and add your own counters!'
) }}

To celebrate the launch,
we’ll be releasing new videos every day this week!
Check back to learn about several more Firefox tools
like Screenshots and the CSS Track Changes panel,
and a reflection on what makes CSS so weird.
Over the next few months we’ll have new videos weekly
([subscribe to the channel][dev]!),
along with more articles, demos,
and some exciting new open source tools.
