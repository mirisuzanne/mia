---
feature: true
title: 'Susy: layout toolkit'
sub: |
  Popular CSS layout framework
  used by **Virgin America**,
  **The Smithsonian**,
  and others
venue: OddBird
url: https://oddbird.net/susy/
date: 2009-07-13
hero:
  img: projects/susy.png
series: open source
index: susy
tags:
  - _calendar
  - code
  - susy
  - open source
  - oddbird
  - sass
events:
  - title: Book -- Learning Susy
    venue: Zell Liew
    url: https://learnsusy.zellwk.com/
    date: 2014-11-19
    tags:
      - inspiration
press:
  - text: I like the idea of grids-on-demand, rather than a strict framework.
    credit: Chris Coyier
    venue: CSS Tricks
    url: http://css-tricks.com/build-web-layouts-easily-susy/
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
    credit: Hugo Giraudel
    venue: SitePoint
    url: http://www.sitepoint.com/my-favorite-sass-tools/
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
  Susy is a lightweight grid-layout engine for Sass,
  designed to simplify and clarify responsive grid layouts
  without ever getting in your way.
  Originally released in 2009,
  Susy has become one of the
  most popular layout frameworks on the web.
---
{% import "content.macros.njk" as content %}

------

{{ content.quotes(press) }}

------

## [Learning Susy](https://learnsusy.zellwk.com/), by Zell Liew

![](/assets/images/projects/learning-susy.png)

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
