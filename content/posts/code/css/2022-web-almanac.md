---
draft: true
title: The tools that limit us
sub: Reflecting on the 2022 Web Almanac
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
with expert analysis of current trends.

There are more than 20 chapters on different topics,
so I haven't read them all.
At this point I've read the
[chapter on CSS](https://almanac.httparchive.org/en/2022/css)
(by Rachel Andrew)
and the
[chapter on webfonts](https://almanac.httparchive.org/en/2022/fonts)
(by Bram Stein).
In both chapters
you can see a pattern develop
(which both authors comment on) --
**the most common patterns
that refuse to change from year to year
can be explained by popular tools**.

I've been noticing that pattern elsewhere,
and I want to dig into it a bit:
the various ways our tooling
can change the web features we use.

## Input vs output

{% import "demos/colors.njk" as colors %}

According to the Almanac data,
the most common color formats on the web
are hex ({{ colors.swatch('#808080') }}),
short-form hex ({{ colors.swatch('#888') }}),
and then old-school `rgba`
({{ colors.swatch('rgba(199, 21, 133, 0.8)') }}).

But why?
If we like hex so much,
why not use the alpha-hex syntax
({{ colors.swatch('#C7158599') }})?
That's been well supported in browsers
for several years now.
And there are other
(arguably 'better')
formats available as well --
`hsl` is more human-readable than hex,
and `rgb` can handle alpha transparency
without switching to `rgba()`.
Why aren't these options as popular?

It's hard to say for sure,
but I have a multi-part guess.

First, colors are _design tokens_,
and often get set as variables or custom properties
at the start of a project.
Once those tokens are established,
we don't spend much time looking at
the original color value.
Instead, we're just interacting with a variable name.
That leads us to worry more about naming conventions,
rather than color syntax,
which is hidden from view.

But I think there's also a tooling component here.
Design tools often provide colors as either hex
or individual RGB channel values.
If we're exporting colors from those tools,
we're likely to end up with those two formats.
Putting our colors into a more human-friendly syntax
would be an extra step,
and may not be worth the effort.

Also,
tools that understand CSS colors
(like Sass),
allow you to convert colors smoothly
from one space to another _on demand_.
It doesn't matter what syntax we use to _define colors_,
if we can access them (and manipulate them)
in any format we want:

```scss
@use 'sass:color';

$rgb: rgb(199 21 133);

// convert the color into hsl, and adjust hue
$hsl: color.adjust($color, $hue: 180deg);
```

Even more important for the Web Almanac data,
Sass currently will
_always output colors in the widest-supported format available_.
Since all web colors have historically been
part of the same `sRGB` gamut,
there's no harm converting the output to hex
(using the short version where possible)
or `rgba`
(the oldest format with an alpha channel).

That will [change going forward](/2022/09/21/sass-color-draft/),
in order to support non-sRGB color spaces.
But it might point to a discrepancy
in the Web Almanac data.
It's possible that authors are primarily working in `hsl`,
and tools are converting to hex/`rgb` in a build step.

In cases like this,
the Almanac may give us misleading info
about _what syntax authors like_, but --
so long as the output really does
provide the same _meaning_ as the input --
it hasn't been a barrier
for authors using the new CSS colors.

## How design tools intervene

But that might change with all the
[new color spaces & gamuts](/2022/09/21/sass-color-draft/)
that are coming to CSS.
If design tools only support `sRGB` color formats,
then designers are somewhat restricted
to those `sRGB` colors --
ignoring the extended-gamut colors
that are actually available on most monitors,
and the more perceptually uniform spaces
for color manipulation/mixing.

To an extent,
graphic design tools are a step removed
from the web platform.
While some do try to export HTML/CSS,
very few consider that
the core goal of the tool.
In fact, by now there's a long-term disconnect
between a web that's responsive,
and our almost completely-static design tools.

A few of them have started to provide
_flexbox-like_ responsive layouts,
but I haven't seen anything _grid-like_,
or even basic support for relative & fluid units.
Rachel notes in the Almanac
that most lengths on the web
are defined in `px`.
Is that because authors intentionally avoid `em`/`rem`,
or because the mockups that we receive from designers
are all limited to `px` by design tools?

I'm not sure if we have much hope
of new color spaces gaining traction in this space?

## How CSS language tools intervene

In Sass,
we have a strict policy
that _valid CSS is always valid Sass_.
If authors use syntax that we don't recognize,
we simply pass that along to CSS.
While we plan to provide _extra support_
for new color spaces/formats,
authors don't need to wait --
they can start using the new formats today,
and Sass will leave those colors untouched.
The tool should never stand between
authors and the underlying language.

But these days
there are many popular CSS tools
that are based on entirely non-CSS syntax.
With both utility frameworks
like Tailwind
and most CSS-in-JS solutions,
the tool intervenes completely
between authors and their CSS.

I spoke at
[An Event Apart Denver](https://aneventapart.com/event/denver-2022)
this week,
showing how to use
[Cascade Layers](https://css-tricks.com/css-cascade-layers/) --
a new at-rule that can be used to wrap style blocks,
and can also be used with CSS imports:

```css
@import url(normalize.css) layer(reset);

@layer components {
  button { border: 0; /* etc */ }
}
```

During the Q&A session after my talk,
someone asked
_how can I use this with CSS-in-JS tools_?

And… I don't know.
It depends on the tool.
Single-file components in Svelte & Vue
are _technically_ CSS-in-JS,
but allow writing arbitrary CSS.
They provide some 'scoping' interventions,
but authors should generally be able
to use any CSS they want inside components.

But most CSS-in-JS tools
(and utility frameworks)
are more invasive.
There's no general way to write
our own at-rules or selectors.
The tool stands directly between us
and basic CSS functionality.
_We can't use new CSS features
until these tools add explicit support_
(or we find new tools \*cough\*).

## Other tools that intervene

In regard to web fonts,
Bram points out
that authors are not taking full advantage
of variable fonts --
we're mostly changing the font weights,
and selecting from standard values.
As someone who has spent hours
searching through lists of variable fonts,
that doesn't surprise me at all.
Most variable fonts are either experimental display fonts,
without a lot of practical use,
or they only provide the weight axis.
While I love having all my weights in a single file,
and smoothly transitioning from one weight to another,
_specialty weights_ are not a high priority for me.
I'll start using more powerful font variables
once there are more fonts available
with interesting variables.

Most of us are also using
the over-complicated `font-feature-settings` property,
instead of the simpler `font-variant`.
Is that because the popular font tool
[Wakamai Fondue](https://wakamaifondue.com/)
provides generated `font-feature-settings`?
It's a great tool,
and a great way to inspect font features,
but I wonder how the stats would change
if they updated their output?

Maybe even more common,
much of the web is built using CSS libraries
like Bootstrap,
or third-party themes
provided by a site-builder or CMS.
The influence of both
WordPress and Bootstrap is clear
throughout the Almanac data.
When Rachel notes the popularity of
flexbox (very popular) vs grid (not so much),
I wonder how much of that
can be traced back to
Bootstrap 'grids'
[being built in flexbox](https://getbootstrap.com/docs/5.2/layout/grid/).

## Tools update faster? Right?

I've heard many times
that

@@@

https://speaking.adactio.com/87IIn1#sAjxNbO
