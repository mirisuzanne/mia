---
title: 'Request for Comments: Sass Color Spaces'
venue: Sass Blog
date: 2022-09-21
url: https://sass-lang.com/blog/request-for-comments-color-spaces
tags:
  - sass
  - code
  - color
  - open source
hero:
  img: 2022/sass-color.jpg
  alt: |
    The Sass logo in black,
    or a bright oklch gradient.
summary: |
  Browsers are starting to roll out
  support for new color spaces in CSS
  as part of [Interop 2022](https://web.dev/interop-2022/#color-spaces-and-css-color-functions),
  and Sass will be ready --
  with full support, and some extra features.
  [My proposal] was published today,
  and is ready for public feedback.

  [My proposal]: https://sass-lang.com/blog/request-for-comments-color-spaces
---

I'm very excited about this.
It will allow us to:

- Define colors in new color spaces like `oklch` & `display-p3`
- Convert colors between spaces
- Mix & manipulate colors in any space
- Gamut-map colors for a target space as needed

Safari is the farthest along
in terms of [browser support for the new color spaces][browser support],
but this is all part of
[Interop 2022][] --
which means every browser is
[trying to get it done this year][].
I recommend installing the latest
[Safari Technology Preview][],
and playing around with
all the new colors!

[browser support]: https://caniuse.com/css-color-function,css-lch-lab,mdn-css_types_color_oklch,mdn-css_types_color_oklab,mdn-css_types_color_color-mix
[Safari Technology Preview]: https://developer.apple.com/safari/technology-preview/
[trying to get it done this year]: https://wpt.fyi/results/css/css-color?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-color
[Interop 2022]: https://web.dev/interop-2022/#color-spaces-and-css-color-functions
