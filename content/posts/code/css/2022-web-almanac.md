---
draft: true
title: Are the tools we use holding us back?
sub: What happens when the 'pace layers' of the web get out of sync?
date: 2022-10-11
adactio:
  caption: |
    Described by [Jeremy Kieth](https://adactio.com/)
    in his [Building talk](https://speaking.adactio.com/87IIn1)
    a few years back.
  data:
    - img: 2022/pace-layers.jpg
      url: https://speaking.adactio.com/87IIn1#sAjxNbO
      alt: |
        Nested semicircles,
        from innermost and slowest
        to outermost and fastest-moving:
        nature, culture,
        governance, infrastructure,
        commerce, fashion
    - img: 2022/layers-web.jpg
      url: https://speaking.adactio.com/87IIn1#sn3gBTn
      alt: |
        Same nested semicircles,
        now labeled:
        TCP/IP, HTTP, URLs,
        HTML, CSS, JS+
    - iframe: https://player.vimeo.com/video/340877191
      span: full
tags:
  - sass
  - colors
  - fonts
  - design
summary: |
  Ask not-just: _How well does it work_?
  But also: _How well does it fail_?
  What happens when something goes wrong?

  ---Jeremy Kieth, [Building](https://speaking.adactio.com/87IIn1)
  {.cite}
---

{% import "content.macros.njk" as content %}
{% import "demos/colors.njk" as colors %}

The
[2022 Web Almanac](https://almanac.httparchive.org/en/2022/)
has been out for a while,
and (as always)
it's an interesting read.

There are more than 20 chapters this year,
and I haven't read them all.
But I did enjoy the chapters on
[CSS](https://almanac.httparchive.org/en/2022/css)
(by Rachel Andrew)
and [webfonts](https://almanac.httparchive.org/en/2022/fonts)
(by Bram Stein).
Both authors note a similar trend --
**many usage patterns
that refuse to change from year to year
can be explained by popular tools**.

I've noticed that same effect elsewhere,
and I want to dig into it a bit --
the various ways our tooling
can change (and limit)
the web platform features we use.

## The worst color formats

According to the Almanac data,
the most common color formats on the web
are HEX ({{ colors.swatch('#C71585') }}),
short-form HEX ({{ colors.swatch('#c18') }}),
and then old-school `rgba`
({{ colors.swatch('rgba(199, 21, 133, 0.8)') }}).

But why are we still using
the oldest and least legible
color formats,
when better formats are well-supported?
The `hsl` format is more human-readable than HEX,
and `rgb` can handle alpha transparency
without switching to `rgba()`.
Alternately, if we like HEX so much,
why not use the alpha-HEX syntax
({{ colors.swatch('#C7158599') }})
that's been well supported
for several years.
Why aren't these options gaining popularity?

It's hard to say for sure,
but I have a multi-part guess.

First, colors are _design tokens_,
and often get set as custom properties
or build-tool variables
at the start of a project.
Once the tokens are established,
we don't spend much time looking at
the actual color syntax value.
The underlying {{ colors.swatch('#C71585') }}
becomes {{ colors.swatch('var(--accent-dark)') }} --
so we focus our attention on the naming conventions
rather than the underlying color syntax,
which is hidden from view.

But I think there's also a tooling component here.

## How design tools intervene

Many graphic design tools are a step removed
from the web platform.
While some do try to export HTML/CSS,
only a few consider that
the core goal of the tool.
Even then, there's been a long-term disconnect
between a web that's responsive,
and our almost completely-static design tools.

A few tools have started to provide
_flexbox-like_ 'responsive' layouts,
but I haven't seen anything _CSS-grid-like_.
Most don't even have
basic support for relative or fluid units.
Rachel notes in the Almanac
that most lengths on the web
are defined in `px`.
Is that because authors intentionally avoid `em`/`rem`,
or because the mockups that we receive from designers
are all limited to `px` by our design tools?

I've [commented on this before](https://twitter.com/TerribleMia/status/1446262147772682260):

> The least responsive part
> of Responsive Web Design
> is the design tools.
> This needs to change.

When it comes to color spaces/gamuts,
design tools vary in support.
Looking at some of the big players:

- **Adobe XD**
  supports HEX, RGB, and HSB.
  **Illustrator** adds CMYK and a grayscale option,
  while **Photoshop** also supports extended gamuts
  such as Display P3,
  and perceptually-uniform LAB.
- **Figma**
  (now also owned by Adobe)
  provides HEX, RGB,
  'CSS' (which is `rgba()`),
  HSL, and HSB.
- **Sketch**
  shows HSB, HEX, and RGB(a).

I don't know of any popular design tools
that provide LCH,
or the newer okLAB/okLCH variants,
let alone _relative_ colors
defined as a function of mixing or adjusting
other underlying colors.

And when it comes to copying our colors
out of a design tool,
the options are generally 6-digit HEX,
or copying individual channel values,
one at a time.
Either way,
converting our colors
into a more human-friendly syntax
would often be an extra step,
and may not be worth the effort.

Since all legacy colors on the web
rely on a single color model (RGB)
and gamut (sRGB),
there is little _meaningful_ difference
between formats.
Once we've used a graphic interface
to pick the color we want,
it maybe doesn't matter
what format we use
to transfer our results
into a variable somewhere.

Given all that,
is there any hope
for the new color spaces in CSS?
Can they gaining traction on the web
without first finding support in our design tools?
I'm not sure.

## How CSS language tools intervene

Code tools also play a role in this.

Sass, for example,
relies on the same
_interchangeability_ of legacy web formats.
No matter what syntax an author chooses,
Sass will store the value as RGB,
and then allow manipulation
in any other CSS format.
But at the end of the day,
_CSS output is always generated
in whatever format has the widest browser support_.

It doesn't matter to Sass
what syntax authors use
for their _input value_,
the _output value_ is always
either HEX or a color-name when opaque,
with `rgba()` for handling transparency.
Very few people need that level
of legacy browser support,
but it's not hurting anything either.

Not yet, at least.
This will all [change going forward](/2022/09/21/sass-color-draft/),
as we add Sass support for more color spaces and gamuts.

In this case,
the Almanac may give us misleading info
about what syntax authors _prefer_.
For all we know,
authors might be _working primarily in `hsl`_,
and we wouldn't see that
in the production code at all.
In fact,
one of the most popular complaints
on the Sass issue tracker is
a request for HSL output.

But this is a distinction
with very little at stake.
So long as authors can you their favorite format,
and the output really does
provide the same _meaning_ as the input --
it's not a barrier for authors
using the latest color formats.
We're just making that harder to see.

## Extending vs replacing a language

In Sass,
we have a strict policy
that _valid CSS is always valid Sass_.
If authors use syntax that we don't recognize,
we pass that along to CSS.
We can check for obvious parsing errors,
but only the browser can determine
if it's a supported feature.
While we provide _extra_ Sass support
for colors that we understand,
authors can use new CSS color formats in Sass
without us releasing any new features.
Sass may not understand those colors for a time,
but it will leave them untouched in the CSS output.

Similarly,
Sass hasn't added support
for either `@layer` or `@container` --
and there may not be any reason to.
I'm already using both in my Sass,
without any issue.

There have been unfortunate exceptions on occasion
(see `min()` and `max()` for example),
but we've worked very hard to remove those limitations
when they crop up.
The tool should never stand between
authors and the underlying language.

Last month,
I spoke about `@layer` for
[An Event Apart Denver](https://aneventapart.com/event/denver-2022).
During the Q&A session after my talk,
someone asked
_how can I use this with CSS-in-JS tools_?
And the truth is…
_I don't know_.
It depends entirely on the tool.

Single-file components in tools like Svelte & Vue
are _technically_ CSS-in-JS,
but allow writing arbitrary/plain CSS.
I would expect (hope?) that
(similar to using Sass)
`@layer` should _just work_ in that context.

But many CSS-in-JS tools
and utility frameworks
are more invasive --
replacing some or most CSS with a proprietary syntax.
They don't provide _additions_ to the language,
but a whole new language
that stands directly between us
and the basic CSS functionality we need.
There's no option to write CSS directly,
we have to rely on the tool to do it for us.
_If the tool can't do something,
neither can the authors using it.
All we can do is wait_.

I even ran into this issue
by simply hosting my personal site
on Netlify,
which provides minification
for deployed assets like CSS.
That seems like a great feature!
But the specific CSS minifier that they use
is somewhat over-eager,
and began stripping out all my new
[`@layer`](https://css-tricks.com/css-cascade-layers/) rules.
I had to turn off the minification step
in order to publish my entirely-valid CSS.

That shouldn't be the case.
Minifiers shouldn't need to understand
all the new features that land in CSS
in order to strip out extra white-space.
That tool had one job,
and it failed
by trying to be too clever.

## Other tools that might intervene

In regard to web fonts,
Bram points out
that authors are not taking full advantage
of variable fonts --
we're mostly changing the font weights,
and selecting from standard values.

As someone who has spent hours
searching through lists of variable fonts,
that doesn't surprise me much.
Most variable fonts are either experimental display fonts
without a lot of practical use,
or they only provide a single weight axis.
While I love having all my weights in a single file,
and smoothly transitioning from one weight to another,
_specialty weights_ are not a high priority for me.
I'll start using more powerful font variables
once there are more fonts available
with more interesting variables to manipulate.

Most of us are also using
the over-complicated `font-feature-settings` property,
instead of the simpler `font-variant`.
I've been doing that on my site as well!

Why did I think that was the best approach?
Likely because that's the generated output
recommended by
[Wakamai Fondue](https://wakamaifondue.com/) --
a popular tool for inspecting font capabilities.
It's a great tool,
filling a much-needed gap,
but I wonder how the usage stats would change
if they updated their output CSS?

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

I don't think that's the only factor.
It's possible authors have settled on flexbox as _good-enough_,
and they don't think it's worth their time
learning another technique.
I can understand that,
but it's unfortunate.
I think people are missing out
on one of the coolest features
added to CSS _ever_.
Oh well.

## Tools update faster? Right?

When we talk about web trends,
I often here people refer back to
the idea of 'pace layers' on the web:

{{ content.figure(
  data=adactio.data,
  caption=adactio.caption
) }}

In context,
Jeremy is not just referring to
the web languages themselves --
JS isn't necessarily changing faster than CSS --
but also the _ecosystems_ of these languages.
The closer we get to the core functionality of the web,
the slower each language/ecosystem is likely to change.
Even within a given language,
we expect our tools and conventions (_fashion_)
to move faster than the languages themselves.

But that can only happen
if the tools are designed to
sit on top of their underlying languages.
Once the tools stand _between_ us and the language,
we become entirely reliant on tool-builders
to determine what features are available.

When our primary tools
intervene so strongly
between us and our 'materials' --
the core web languages --
we can accidentally flip the pace layers of the web
on their head.
Suddenly CSS is able to move faster than the ecosystem,
and we're stuck waiting on our tools to catch up
with well-supported platform features.

That's not how a healthy ecosystem should behave.

## Choosing our tools

I am asked quite often
what I think about CSS-in-JS
or utility-first frameworks,
or even CSS libraries & conventions
more generally.
And I try to stay out of any spicy flame wars,
or gate-keeping nonsense.

For myself?
I don't find many of these tools useful.
They don't solve a problem that I have.
But different projects and different teams
have different needs,
and might find different tools useful.
There's no single 'correct' approach
for writing all CSS everywhere.

As long as it results in an
accessible, resilient,
and performant experience for users:
_use whatever tools work best for you_.

(Anyone marketing their product
as _The Only Solution™️_ to some
_Essential Problem with CSS™️_
is selling you a religion,
not a tool.)

------

It's not my job to judge
what tools are useful for other web developers.
But it is my job to
help people think about the CSS choice they make.
So in that spirit, please consider:

⚠️🚨⚠️
**Proceed with caution.**
Ask not-only: _How well does it work?_
But also: _How well does it fail?_
Not-only: _What features do they provide?_
But also: _What features do they hide?_
⚠️🚨⚠️
