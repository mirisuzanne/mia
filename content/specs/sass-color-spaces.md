---
draft: true
title: Sass Color Spaces [WIP]
sub: Support for wide-gamut color spaces in Sass
venue: Sass
date: 2022-06-12
tags:
  - sass
  - color spaces
---

Historically CSS has been limited
to a single color model (`RGB`) and gamut (`sRGB`).
Authors have various formats to describe colors in that gamut --
using cubic `hex` notation (`#rgb`/`#rrggbb`/`#rrggbbaa`)
and functions `rgb()`/`rgba()``,
or cylindrical/polar-angle functions `hsl()`/`hwb()`.

Unfortunately, `sRGB` is a relatively narrow color gamut,
and `RGB` isn’t a perceptually uniform color-model.
Many monitors (and some browsers) now support wider color gamuts
(such as the popular `display-p3`),
and there has also been significant progress
in developing more perceptually uniform color spaces
such as `CIE LAB` and `okLAB`.

The [CSS Colors level 4 specification](https://www.w3.org/TR/css-color-4/)
describes how CSS authors can access these newer gamuts & formats --
with `okLAB` as the default space for color-mixing.
We want to provide support for this in Sass:
with server-side tools to manage colors across spaces,
and convert colors between spaces where appropriate.

That includes support for all the new CSS functions,
along with some additional Sass functions
for inspecting and adjusting colors
before they reach the browser.
This requires rethinking the Sass color module
from the ground up.
