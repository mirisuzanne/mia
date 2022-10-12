---
draft: true
title: The Web, Limited by Our Tools
sub: Reflecting on the 2022 Web Almanac
venue: 2022 Web Almanac
url: https://almanac.httparchive.org/en/2022/
rel: reply
date: 2022-10-11
tags:
  - sass
  - colors
  - fonts
---

The
[2022 Web Almanac](https://almanac.httparchive.org/en/2022/)
is here,
and (as always)
an interesting read.
The Almanac is HTTP Archive's
annual _state of the web_ report,
combining raw stats from live websites
with expert analysis
to understand current trends.
There are more than 20 chapters on different topics,
and I haven't read them all --
but it's always interesting to
see the numbers on different CSS features.

So far this year
I've read the
[chapter on CSS](https://almanac.httparchive.org/en/2022/css)
(by Rachel Andrew)
and the
[chapter on webfonts](https://almanac.httparchive.org/en/2022/fonts)
(by Bram Stein).
In both chapters
you can see a pattern develop
(and the authors comment on it):
**The most common patterns
that refuse to change from year to year
can be explained by popular tools**.

## Input vs output

The most popular color formats
are hex, short-form hex,
and then old-school `rgba()`.
There are better formats available,
and they've been well-supported for years --
`hsl` is more human-readable than hex,
and `rgb` can handle alpha transparency
without switching to `rgba()`.
So why is hex still so popular?

It's hard to say for sure,
but I have a multi-part guess.

1. Colors are some of the most common _design tokens_,
  and often get put into variables at the start of a project,
  either using pre-processors or custom properties.
  Once our tokens are established,
  we don't spend much time looking at the values
  behind the variable names.
  Most of our attention goes into proper naming conventions,
  and we don't worry as much about the value itself being _human-readable_.

2. Build tools like Sass often don't care
  what syntax we use to _define colors_.
  Internally, a color is just a color,
  and the tools allow us to manipulate those colors
  in any format we want.
  We can establish a variable using rgb output from design tools,
  and then manipulate those colors using `hsl` channels,
  and Sass can output the result as… anything really.
  As long as all the spaces in question are in the same gamut,
  the output format doesn't matter.

  In fact,
  [currently](https://www.miriamsuzanne.com/2022/09/21/sass-color-draft/),
  Sass will output the format
  that has the longest history of browser support --
  hex for opaque colors, and `rgba()` for transparent colors --
  no matter what format we use in our code.

Are we really seeing the results
of _how authors define color on the web_,
or are we just looking at
_what our build tools output by default_?

## Web feature support in tools

I spoke at
[An Event Apart Denver](https://aneventapart.com/event/denver-2022)
this week,
showing how to use
[Cascade Layers](https://css-tricks.com/css-cascade-layers/).
During the Q&A session after my talk,
someone asked
_how can I use this with CSS-in-JS tools_?

And… I don't know.
Some of the tools we use
are _invasive_ --
they stand between us and basic CSS functionality.
Sass has made it a priority
that _valid css is always valid Sass_.
I wish all the tools would take that approach,
but it's not a common design choice
for CSS-in-JS,
where the goal is often _a whole new syntax_.
Sometimes _we can't use new features
until our tools add support_
(or we find new tools \*cough\*).

Rachel also notes
that most lengths use the `px` unit
(the only unit supported in many design tools),
and flexbox layout
(popular in tools like Bootstrap)
is more common that grid layout.

Similarly Bram points out
that authors using variable fonts
are mostly adjusting font size and weight
(the most common axis provided in fonts)
and are using the over-complicated `font-feature-settings`
(which is recommended by tools like
[Wakamai Fondue](https://wakamaifondue.com/))
instead of the simpler `font-variant`.

Again,
it feels like
_the tools we use
have a big impact on
what new features we adopt broadly_.

## Tools update faster? Right?

I've heard many times
that
