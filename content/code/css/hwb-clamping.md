---
title: The Gray Areas of HWB Color
sub: The channels are clamped before they are scaled
date: 2022-06-29
summary: |
  Working on Sass
  [support for color spaces](https://css.oddbird.net/sass/color-spaces/proposal/),
  I ran into a question
  about the proper handling of `hwb()` colors.
  That lead me down a rabbit hole,
  exploring the edges of hwb
  (and powerless color channels) in CSS.
---

{% import "content.macros.njk" as content %}
{% import 'demos/colors.njk' as colors %}

## Intro to HWB colors

The HWB format has been around in design tools
for a long time,
but it is fairly recent on the web.
It works by taking a fully-saturated `hue`,
and then mixing in `whiteness` and `blackness`
to achieve less-saturated
lighter and darker variants.
For any given hue,
you can visualize a triangle
with a fully saturated color in one corner,
and then white and black in the other corners.
This is how the old Chrome color picker
used to show HWB color:

{{ '2022/hwb-picker.png' | img('color picker with an outer wheel for selecting hue, and an inner triangle for selecting relative amounts of white and black') | safe }}

The side of the triangle
across from our saturated-hue corner
is entirely grayscale --
the line at which
`blackness` and `whiteness` together
reach `100%`,
and wash out any contribution from the `hue`.

I think it's a pretty good model
for adjusting colors.
Mixing with white or black
is often the best way to 'lighten' or 'darken'
a color.
Under the hood,
HWB still relies on RGB color math
(which is not perceptually uniform)
and the sRGB color space
(which is fairly limited) --
but that's also true of the more popular HSL format.

## HWB in CSS

The `hwb()` function in CSS
expects a hue angle (usually in degrees)
and two percentages representing
the amount of 'whiteness' and 'blackness'
to mix in:

```css
/* a bright cyan with only slight whiteness & blackness */
html { background: hwb(180deg 5% 10%); }
```

Because we're using numbers here
instead of a triangle,
it's possible for the combined `whiteness` and `blackness`
to overshoot `100%`.
If you lay the results out in a table,
the triangle is still visible --
where the combined `whiteness` & `blackness`
are less than or equal to `100%` --
but we also see a reflected grayscale triangle
where the combined values are greater than `100%`:

{{ content.figure(
  content=colors.hwb(),
  caption='An HWB table of colors using 180deg `hue`, incrementing `whiteness` and `blackness` from `0` to `100%`.'
) }}

That extended grayscale triangle
is useless.
There's nothing meaningful to find out there
in the wilderness beyond `100%` grayness --
so CSS just scales `whiteness` and `blackness` down
until they fit the triangle again.
The rendered color `hwb(0deg 50% 50%)`
is identical to `hwb(0deg 60% 60%)`
and `hwb(0deg 100% 100%)` --
because all of them have the same
relative mix of white and black
washing out the hue.

## 'Powerless' & 'missing' channels

It may be a bit strange
that we have access to
so many duplicate grays in HWB,
but there tends to be some duplication
in any color format using hue angles.
In HSL colors, for example,
a `lightness` of either `0%` or `100%`
will wash out both `hue` and `saturation`.
The rendered color `hsl(0deg 20% 100%)`
is identical to `hsl(0deg 60% 100%)`
and `hsl(0deg 100% 100%)`.
Still, that's a much smaller portion of the table:

{{ content.figure(
  content=colors.hsl(),
  caption='An HSL table of colors using 180deg `hue`, incrementing `lightness` and `saturation` from `0` to `100%`.'
) }}

In both HWB & HSL colors,
we can describe `white` and `black`
and a full scale of grays
using any `hue` we want.
It doesn't matter what `hue` we provide
in either table --
the grayscale cells will remain the same.
In those cells, `hue` has become _'powerless'_.

[CSS Color Module Level 4](https://drafts.csswg.org/css-color/)
defines a number of situations
that might result in
[powerless color components](https://drafts.csswg.org/css-color/#powerless):

- `hsl`:
  - If the `saturation` value is `0%`, then the `hue` channel is powerless.
  - If the `lightness` value is either `0%` or `100%`, then both the `hue` and
    `saturation` values are powerless.
- `hwb`:
  - If the combined `whiteness` and `blackness` values (after normalization)
    are equal to `100%`, then the `hue` channel is powerless.
- `lab`/`oklab`:
  - If the `lightness` value is `0%`, then both the `a` and `b` channels are
    powerless.
  - The current spec has an open issue to determine if high values of
    `lightness` (whites) should make the `a` and `b` values powerless,
    but there is no clear upper boundary to rely on.
- `lch`/`oklch`:
  - If the `chroma` value is 0%, then the `hue` channel is powerless.
  - If the `lightness` value is `0%`, then both the `hue` and `chroma` channels
    are powerless.
  - The current spec has an open issue to determine if high values of
    `lightness` (whites) should make the `hue` and `chroma` values powerless,
    but there is no clear upper boundary to rely on.

For the most part,
powerless channels are a harmless result
of representing colors through math.
But sometimes, when we want to mix or adjust colors,
a powerless component can show up suddenly
and cause issues.
Imagine a gradient from `hsl(0deg 100% 0%)`
(black, with a powerless red hue)
through `hsl(180deg 100% 50%)` (a bright cyan).
If we do naive math to get from one to the other --
adjusting each channel along the way --
we have to go through a full range of hues
just to get from black to cyan:

{{ colors.gradient(
  stops=[
    'hsl(0deg 100% 0%)',
    'hsl(45deg 100% 12.5%)',
    'hsl(90deg 100% 25%)',
    'hsl(135deg 100% 37.5%)',
    'hsl(180deg 100% 50%)'
  ],
  alt='A gradient from black to cyan, passing through several other hues on the way.'
) }}

Lucky for us,
browsers don't generally render gradients
using naive HSL math:

{{ colors.gradient(
  stops=[
    'hsl(0deg 100% 0%)',
    'hsl(180deg 100% 50%)'
  ],
  alt='A smooth gradient from black to cyan.'
) }}

Currently browsers convert everything to `sRGB` before mixing.
Gradients in RGB can still get muddy at times,
but there are no 'powerless' components --
gray scales involve an equal mix of all three channels --
so that's a separate issue.

The new spec provides a more explicit way
to 'leave out' a powerless channel,
so that it can't cause issues like this.
We can use the `none` keyword
in place of a value
to notate a [_'missing'_ channel](https://drafts.csswg.org/css-color/#missing):

```css
/* full black, the hue and saturation are powerless */
html { background: hsl(none none 0%); }
```

Browsers are instructed
to use `none` when they are converting
from one format to another,
if the conversion results in a powerless channel.
Rather than converting `#000` to `hsl(0deg 0% 0%)`,
we convert it to `hsl(none none 0%)`
with a missing `hue` and `saturation`.

There's a lot more we can do with missing channels,
even using 'impossible' colors in interesting ways,
but I'll leave that for a different article sometime.

## Clamping vs scaling

So HWB is doing something _familiar_,
but it's also doing something unique.
I don't know of any other hue-angle system
that generates a table
like the HWB example above --
where only half the cells contain
a useful color.

Other color formats will _clamp_ a channel
when it goes outside the meaningful range.
These HSL colors are the same,
because percentages below `0%` or above `100%`
are clamped to the boundaries of that range:

```css
html {
  --red: hsl(0deg 100% 50%);
  --same-red-clamped: hsl(0deg 2530% 50%);
}
```

HWB works the same way --
`whiteness` and `blackness`
outside the `0%-100%` range are clamped.
But HWB has to go one step farther.
If _the sum of whiteness and blackness_ is above `100%`,
they both have to get scaled down
while maintaining their relative ratio.
That means these colors are also the same:

```css
html {
  --gray: hwb(0deg 80% 20%);
  --same-gray-scaled: hwb(0deg 100% 25%);
  --same-gray-clamped-scaled: hwb(0deg 2530% 25%);
}
```

## Wait, what's the order of operations?

That final clamped-and-scaled color
is what caught my attention.
At first I wasn't sure about
the order of those two operations,
and we get a different result
depending on which happens first.
Does `2530% 25%` first get clamped to `100% 25%`
and then further scaled down to `80% 20%` --
or will it get scaled first to roughly `99% 1%`,
at which point it no longer needs clamping?

The answer is in the spec,
though it's a bit subtle
and I missed it at first (emphasis added):

> Values outside of these ranges are not invalid,
> but are clamped to the ranges defined here at computed-value time.
> If the sum of these two arguments is greater than 100%,
> then at computed-value time they are
> **further normalized** to add up to 100%,
> with the same relative ratio.

At first that seemed like a mistake --
why not maintain the ratio where we can? --
but in practice it makes sense.
We have to clamp the lower boundary,
since negative values have no meaning,
so it's reasonable to start by treating the upper boundary
in the same way.

Out-of-range percentages are meaningless,
and corrected like a typo,
but redundant grays
are a natural outcome of the math --
still meaningful,
even if they aren't that useful.

## The answer to my question

All of that,
just to show you this light gray box.
It's a 'gradient' of the three HWB colors above,
showing that they are actually the same color --
one defined appropriately,
one needing to be scaled,
and a final version that needs
both clamping and scaling:

{{ colors.gradient(
  stops=[
    'hwb(0deg 80% 20%)',
    'hwb(0deg 100% 25%)',
    'hwb(0deg 2530% 25%)'
  ],
  alt='A gradient that is actually just the same gray all the way along'
) }}

Sass will soon be adding support
for all these new color features,
and a few more.
_If only I would stop documenting the rabbit holes,
and get back to work on the proposal._
