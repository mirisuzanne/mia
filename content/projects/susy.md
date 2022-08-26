---
type: open source
title: Susy
sub: |
  Popular CSS layout framework
  used (at one point) by **Virgin America**,
  **The Smithsonian**,
  and others.
venue: OddBird
url: https://oddbird.net/susy/
date: 2009-07-13
hero:
  img: projects/susy.png
index: susy
tags:
  - oddbird
  - code
  - open source
  - sass
press:
  - text: |
      My constant search for a better grid system
      ended when I discovered Susy.
      It is very likely that Susy
      is what you’re looking for as well.
    credit: Zell Liew
    venue: Learning Susy [book]
    url: https://learnsusy.zellwk.com/
    date: 2014-11-19
  - text: I like the idea of grids-on-demand, rather than a strict framework.
    credit: Chris Coyier
    venue: CSS Tricks
    url: https://css-tricks.com/build-web-layouts-easily-susy/
  - text: |
      My experiments have left me impressed.
      The current state of CSS layout
      means that unless you like to spend a lot of time doing calculations
      something like Susy is really useful.
      The output CSS is pretty much what I'd come up with myself,
      which to me is the acid test for tool use.
    credit: Rachel Andrew
    venue: Invited Expert to the CSS Working Group
    url: https://rachelandrew.co.uk/archives/2015/02/04/css-grid-layout-creating-complex-grids/
  - text: |
      If you're interested in reading Sass poetry,
      be sure to look at Susy's source code!
    credit: Kitty Giraudel
    venue: SitePoint
    url: https://www.sitepoint.com/my-favorite-sass-tools/
  - text: |
      Susy & Zendesk have been getting along magically…
      It's precisely what you need and nothing more.
    credit: Stephany Varga
    venue: Zendesk Creative Collection
    url: https://medium.com/zendesk-creative-blog/responsive-a-harrowing-meditation-on-the-brutal-realities-of-web-content-organization-in-5-acts-1d33ce25f062
  - text: |
      My constant search for a better grid system
      ended when I discovered Susy.
      It is very likely that Susy is what you’re looking for as well.
    venue: Learning Susy
    credit: Zell Liew
    url: https://learnsusy.zellwk.com/
summary: |
  Susy was a lightweight grid-layout engine for Sass,
  originally released in 2009.
  Over time, it became one of the
  most popular layout frameworks on the web,
  before retiring in 2020.
---

{% import "macros/quote.njk" as quote %}
{{ quote.list(press) }}

------

## [Learning Susy](https://learnsusy.zellwk.com/), by Zell Liew

{{ 'projects/learning-susy.png' | img('cover art') | safe }}

[Zell Liew][zell] wrote a great book to get you started with Susy.
Here are some of the things that you'll learn:

- How to use the **Span Mixin**
- How to output the **Background Grid**
- How to configure the **Global Settings** to your needs
- How to do **mobile-first responsive coding** with Susy and Breakpoint
- How different **gutter-positions** affect your layout
- How to build **asymmetric layouts** without breaking a sweat
- How to use the **isolation to prevent subpixel rounding** errors

[zell]: https://zellwk.com/
