---
feature: true
title: Sass Color Spaces
sub: Support for new CSS color spaces in Sass
venue: Sass
date: 2022-09-21
tags:
  - sass
  - color
events:
  - venue: Request for Comments
    url: https://sass-lang.com/blog/request-for-comments-color-spaces
    date: 2022-09-21
    end: 2022-10-21
callout:
  - date: 2022-09-21
    note: |
      A first draft of the proposal is complete,
      and posted for
      [public feedback](https://sass-lang.com/blog/request-for-comments-color-spaces).
summary: |
  There’s been a lot of exciting work
  in the
  [CSS color specifications](https://www.w3.org/TR/css-color-4/)
  lately,
  and the new features are starting to land in browsers --
  so we’ve been preparing to add
  [support in Sass](https://sass-lang.com/blog/request-for-comments-color-spaces)
  as well.
---

I'm very excited about this.
It will allow us to:

- Define colors in new color spaces like `oklch` & `display-p3`
- Convert colors between spaces
- Mix & manipulate colors in any space
- Gamut-map colors for a target space as needed

[Read the proposal & request for comment »][request]

[request]: https://sass-lang.com/blog/request-for-comments-color-spaces

## Some CSS Background

Historically CSS has been limited
to a single color model (`RGB`) and gamut (`sRGB`).
Authors have various formats to describe colors in that gamut --
using cubic `hex` notation (`#rgb`/`#rrggbb`/`#rrggbbaa`)
and functions (`rgb()`/`rgba()`),
or cylindrical functions (`hsl()`/`hwb()`)
that give us a handy polar-axis `hue`.

Unfortunately, `sRGB` is a relatively narrow color gamut,
and `RGB` isn’t a perceptually uniform color-model.
Many monitors (and some browsers) now support wider color gamuts
(such as the popular `display-p3`),
and there has also been significant progress
in developing more perceptually uniform color spaces
such as `CIE LAB` and `okLAB`.

[CSS Colors level 4][] & [level 5][]
define CSS access to these newer gamuts & formats,
along with tools for mixing and adjusting colors.
We plan to support all the new CSS functions in Sass,
along with some additional functions
for inspecting and manipulating colors
before they reach the browser.
This required rethinking the
[Sass color module](https://sass-lang.com/documentation/modules/color)
from the ground up.

[CSS Colors level 4]: https://www.w3.org/TR/css-color-4/
[level 5]: https://www.w3.org/TR/css-color-5/

## Standard CSS Color Functions

### `oklab()` and `oklch()`

The `oklab()` (cubic) and `oklch()` (cylindrical) functions provide access to an
unbounded gamut of colors in a perceptually uniform space. Authors can use these
functions to define reliably uniform colors. For example, the following colors
are perceptually similar in lightness and saturation:

```scss
$pink: oklch(64% 0.196 353); // hsl(329.8 70.29% 58.75%)
$blue: oklch(64% 0.196 253); // hsl(207.4 99.22% 50.69%)
```

The `oklch()` format uses consistent "lightness" and "chroma" values, while the
`hsl()` format shows dramatic changes in both "lightness" and "saturation". As
such, `oklch` is often the best space for consistent transforms.

### `lab()` and `lch()`

The `lab()` and `lch()` functions provide access to an unbounded gamut of colors
in a space that's less perpetually-uniform but more widely-adopted than OKLab
and OKLCH.

### `hwb()`

Sass now supports a top-level `hwb()` function that uses the same syntax as
CSS's built-in `hwb()` syntax.

### `color()`

The new `color()` function provides access to a number of specialty spaces. Most
notably, `display-p3` is a common space for wide-gamut monitors, making it
likely one of the more popular options for authors who simply want access to a
wider range of colors. For example, P3 greens are significantly 'brighter' and
more saturated than the greens available in sRGB:

```scss
$fallback-green: rgb(0% 100% 0%);
$brighter-green: color(display-p3 0 1 0);
```

Sass will natively support all predefined color spaces declared in the Colors
Level 4 specification. It will also support unknown color spaces, although these
can't be converted to and from any other color space.

## New Sass Color Functions

### `color.channel()`

This function returns the value of a single channel in a color. By default, it
only supports channels that are available in the color's own space, but you can
pass the `$space` parameter to return the value of the channel after converting
to the given space.

```scss
$brand: hsl(0 100% 25.1%);

// result: 25.1%
$hsl-lightness: color.channel($brand, "lightness");

// result: 37.67%
$oklch-lightness: color.channel($brand, "lightness", $space: oklch);
```

### `color.space()`

This function returns the name of the color's space.

```scss
// result: hsl
$hsl-space: color.space(hsl(0 100% 25.1%));

// result: oklch
$oklch-space: color.space(oklch(37.7% 38.75% 29.23deg));
```

### `color.is-in-gamut()`, `color.is-legacy()`

These functions return various facts about the color. `color.is-in-gamut()`
returns whether the color is in-gamut for its color space (as opposed to having
one or more of its channels out of bounds, like `rgb(300 0 0)`).
`color.is-legacy()` returns whether the color is a legacy color in the `rgb`,
`hsl`, or `hwb` color space.

### `color.is-powerless()`

This function returns whether a given channel is "powerless" in the given color.
This is a special state that's defined for individual color spaces, which
indicates that a channel's value won't affect how a color is displayed.

```scss
$grey: hsl(0 0% 60%);

// result: true, because saturation is 0
$hue-powerless: color.is-powerless($grey, "hue");

// result: false
$hue-powerless: color.is-powerless($grey, "lightness");
```

### `color.same()`

This function returns whether two colors will be displayed the same way, even if
this requires converting between spaces. This is unlike the `==` operator, which
always considers colors in different non-legacy spaces to be inequal.

```scss
$orange-rgb: #ff5f00;
$orange-oklch: oklch(68.72% 20.966858279% 41.4189852913deg);

// result: false
$equal: $orange-rgb == $orange-oklch;

// result: true
$same: color.same($orange-rb, $orange-oklch);
```

## Existing Sass Color Functions

### `color.scale()`, `color.adjust()`, and `color.change()`

By default, all Sass color transformations are handled and returned in the color
space of the original color parameter. However, all relevant functions now allow
specifying an explicit color space for transformations. For example, lightness &
darkness adjustments are most reliable in `oklch`:

```scss
$brand: hsl(0 100% 25.1%);

// result: hsl(0 100% 43.8%)
$hsl-lightness: color.scale($brand, $lightness: 25%);

// result: hsl(5.76 56% 45.4%)
$oklch-lightness: color.scale($brand, $lightness: 25%, $space: oklch);
```

Note that the returned color is still emitted in the original color space, even
when the adjustment is performed in a different space.

### `color.mix()`

The `color.mix()` function will retain its existing behavior for legacy color
spaces, but for new color spaces it will match CSS's "color interpolation"
specification. This is how CSS computes which color to use in between two colors
in a gradient or an animation.

### Deprecations

A number of existing functions only make sense for legacy colors, and so are
being deprecated in favor of color-space-friendly functions like
`color.channel()` and `color.adjust()`:

* `color.red()`
* `color.green()`
* `color.blue()`
* `color.hue()`
* `color.saturation()`
* `color.lightness()`
* `color.whiteness()`
* `color.blackness()`
* `adjust-hue()`
* `saturate()`
* `desaturate()`
* `transparentize()`/`fade-out()`
* `opacify()`/`fade-in()`
* `lighten()`/`darken()`
