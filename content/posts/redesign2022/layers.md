---
title: A Whole Cascade of Layers
sub: the path to SBRDFLT
date: 2022-09-06
tags:
  - css
  - cascade layers
rel:
  reply-to: https://daverupert.com/2022/08/modern-alternatives-to-bem/
summary: |
  I really enjoyed Dave Rupert's
  [Modern alternatives to BEM](https://daverupert.com/2022/08/modern-alternatives-to-bem/),
  which concludes with a link to my redesign.
  So let's talk about my
  seven-layer burrito of styles --
  what he calls _SBRDFLT_.
  What's that all about?
---

{% import "demos/colors.njk" as colors %}

TL;DR _I don't know yet._

Some day I hope to write a longer post
about my overall approach to CSS.
My _methodology_?
Sadly, I don't have an acronym for it yet.
The rough summary is
_use the tools provided to write meaningful code_.
I think that's also what Dave is getting at
with his post:

> While SBRDFLT doesn’t exactly roll off the tongue (”S-Bird Felt”?),
> maybe it’s time we break out of catchy three letter acronyms
> and focus on finding good scalable architecture patterns instead.

Setting aside the bigger questions,
Dave's 'SBRDFLT' acronym is based on the 'layers'
I expose in the
[layer-selection settings](#settings)
below.
Roughly, they imply:

```css
/* SBRDFLT */
@layer spec, browser, reset, default, features, layout, theme;
```

But you won't find that 'SBRDFLT' layer list
anywhere in my code.
The first two 'layers' are
fundamental aspects of the web itself,
and I have an additional sub-layer
that I've been keeping secret.
Still, let's take that list
supposed-layer-by-supposed-layer.
What have I actually implemented,
and what's the thinking
(if any) behind
this particular organization?

{% callout %}
[Cascade Layers](/specs/cascade-5/)
allow you to specify
exactly which CSS selectors should take priority
in any given situation.
Later layers will override earlier layers,
regardless of the specificity used
within each layer.
For more info,
check out my
[Complete Guide to Cascade Layers](https://css-tricks.com/css-cascade-layers/)
on CSS Tricks.
{% endcallout %}

## The first two (implicit) layers

The first two layers --
'spec' and 'browser' --
represent styles that exist on every site,
before we even get started.
These aren't technically 'cascade layers'
as defined by the new `@layer` syntax,
but they work in a similar way,
and so I've exposed them using similar language.

The CSS specification defines
an [initial value](https://www.w3.org/TR/css-cascade/#initial-values)
for every property in CSS.
The initial `display` is `inline`,
The initial `color` is `CanvasText`,
and so on.
Initial values are only applied
when no other value is specified
through cascade or inheritance.
We can think of them as an
_initial layer_
that all other styles will override.

You might be thinking
_that doesn't sound right --
`div`s default to `block` display,
and links default to a `blue` color_.
And you're right!
The browser provides a
second layer of defaults
called [user agent style sheets][ua].
This is where paragraphs get their spacing,
headings get bigger and bolder text,
and [an 8px margin is added to the body](/2022/07/04/body-margin-8px/).

[ua]: https://html.spec.whatwg.org/multipage/rendering.html#the-css-user-agent-style-sheet-and-presentational-hints

- Initial (_spec_) values are defined per-property,
  the same across all elements.
- User Agent (_browser_) styles are defined per-element,
  to provide differentiation and readability.

The spec styles aren't
part of any actual style sheet
in the cascade,
but the
[browser styles](https://meiert.com/en/blog/user-agent-style-sheets/)
live in a
[Cascade Origin](https://www.w3.org/TR/css-cascade/#cascading-origins)
below our 'author' styles.
Since cascade layers were
designed to work like origins-within-origins,
it's fair to flip that around.
We can think of _user agent styles_ as
another 'layer' below all our layers.

Both _initial values_
and _user agent styles_ are always there,
on every website in the world.
But in order to see what they look like,
we have to turn off
all the styles that normally go over top.
If you click the 'browser' option
in the [layer-selection settings](#settings),
I use JavaScript to turn off all my site styles,
and let you see the '[naked](https://indieweb.org/CSS_Naked_Day)' HTML,
as styled by the browser.

Initial 'spec' values
are a bit harder to see,
since we have to turn off browser defaults as well.
I do that by applying the
[Most Normalest Ultimate Reset](/2019/11/02/most-normal/):

```css
/* add an !important flag if you also need to override your own styles */
*, *::after, *::before {
  all: initial;
}
```

The result is so extreme
that it's nearly impossible
to find your way back to the settings.
So I also include a few styles
that draw attention
back to the layer-selection buttons,
and give them basic button styling.
I don't want people getting lost around here.

I haven't technically
created Cascade Layers
for either the 'spec' or 'browser'
style options --
I only expose them in the UX.

I also get some some default dark-mode support,
and theme colors before ever applying CSS --
directly from `meta` tags in the `head` of my documents:

```html
<meta name="color-scheme" content="dark light">
<meta name="theme-color" media="(prefers-color-scheme: light)" content="hotpink">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="mediumvioletred">
```

## Actual layers, with styles I actually wrote

This is where I start making
suspiciously vague distinctions between layers.
I'm trying to balance
two slightly different goals here.
One is to define a layer structure
that works well for me
as I redesign the site.
The other goal is to make an interesting
layer-selection widget,
such that each layer option 'reveals'
a step in the process.

In order to achieve the second goal,
I'm thinking through layers
a bit differently than I might otherwise.
This is still very much a work-in-progress,
likely to change over time.

### Reset layer

The `reset` layer
represents minor cleanup
of legacy browser styles.

In addition to
[CSS Remedy](https://github.com/jensimmons/cssremedy),
I've also made tables fluid-by-default,
and replaced the `40px` indentation
used on lists, figures, blockquotes, etc
with a more reasonable `1em`.
Buttons and inputs inherit the global font,
`[aria-pressed]` gets basic styling,
replaced elements work how I expect,
the root font size is a bit larger,
and there's a readable max line-length on the body.
Also, that `8px` body margin is replaced
by a full `1em` margin.
I'm wild like that.

At this point,
I'm roughly still following the CSS Remedy approach:

> CSS Remedy sets CSS properties or values
> to what they would be if the CSSWG were creating the CSS today,
> from scratch, and didn't have to worry about backwards compatibility.

It's possible that I was overzealous here.
Maybe adjusting the font size
is not something the CSSWG would do if we could.
Maybe some of these styles should
move into the `default` layer instead.
I don't know.

I was tempted to stop here.
I really want to keep the styles pretty basic
until I've made further progress
on the [content architecture](/2022/08/25/content/)
and other
[goals of the redesign](/2022/08/07/minimal/).

### Default layer

_Reader, I didn't stop there._

For the `default` layer,
I gave myself slightly wider parameters.
_What default styles would I design for myself?_
I'm still trying to think generically
about built-in HTML elements & attributes,
but I get to make more opinionated choices.
These are defaults that _I like_,
even if I don't think they belong _in the browser_.

- Even larger fonts, and more whitespace
- Lists that 'outdent' when there's space for bullets in the margins
- Basic styling for links, buttons, form inputs, and horizontal rules
- Styling for focus-rings, a skip-to-content link,
  and a `.visually-hidden` utility class.

### Default config secret sub-layer 🤫

Along the way,
I realized my ideal default stylesheet
would come with custom properties
in two forms:

1. A few pre-defined color, font, and sizing variables.
2. Some 'free' variables that can be defined later.

For the first part,
I considered something like
Adam Argyle's
[Open Props](https://open-props.style/),
but decided I don't need anything quite so
_fleshed out_.
Instead I used some browser defaults as a guide.

There are three font variables --
`--ui-sans`, `--ui-serif`, and `--ui-mono`.
Operating system UI fonts
are generally nicer than
browser defaults,
while still being a good 'unbranded' option.

For colors,
I used the
[CSS System Colors](https://www.w3.org/TR/css-color-4/#css-system-colors)
as a guide.
I considered using them directly,
but found there are some inconsistencies
and a11y issues involved with that.
Instead, I created custom properties
with similar names
(`--Canvas`, `--CanvasText`, `--Link`, `--VisitedText`, etc)
and filled them in
using the Firefox default values.
I didn't want to think about it too much --
just get a set of useful colors
with useful semantics behind them.

For sizing,
I used a variation
on the defaults that we often start with
at OddBird.
First a `--gap` (we've often called it `--gutter`),
and then divisions of that
which I called
`--half-gap`, `--shim`, and `--half-shim`.
I also like having a larger `--spacer`
for section-breaks.

All of those spacing variable
are relative to typography.
That starts with a `--root` font size,
and then a `--line-height` ratio,
a calculated `--line` height,
a `--measure` for readable line-lengths,
and a `--smaller` font size
mostly for inline monospace fonts.

I also started using a number of
_undefined variables_
throughout.
For example,
setting a main font-family:

```css
html {
  font-family: var(--font-body, var(--var-serif, var(--ui-serif)));
}
```

At this point in the code,
`--font-body` and `--var-serif`
are still undefined,
so the result is
my `--ui-serif` font stack
defined earlier.
In future layers
I can choose to add a variable serif,
or override the body font entirely,
just by setting those variables.

All of this
is part of the hidden
`default.config` sub-layer.
there's not much use
exposing the config to users
without also exposing the styles
that apply those configurations.

I would appreciate
if you don't tell anyone.

### Features layer

Over the years,
there are a few code patterns
that I've come to rely on:

- Call-out boxes, like the 'note' above
- Image galleries
- [Exclusive button groups](https://lea.verou.me/2022/07/button-group/)
- A way of creating 'erasure' texts from certain articles/pages

I also added a new one as I was working,
which allows me to show inline
color-swatches next to a given color value.
Here's {{ colors.swatch('rebeccapurple') }}
for example.

These patterns are specific to
markup conventions on this site,
and require CSS in order to function properly.
They're not quite defaults,
but they're a bit more foundational
than the themes I might apply
in future layers.

Turn off the features layer,
and the swatch will disappear,
image galleries will go single-column,
etc.

### Layout & theme layers

I don't have much to say about these
final two layers.
I wish I wasn't so eager
to give my site an aesthetic,
but here we are.
I sometimes get carried away.

My new favorite web resource --
[The Public Domain Review](https://publicdomainreview.org/) --
inspired me to go find
[Alegreya Variable](https://fontsource.org/fonts/alegreya),
and I came up with a quick
color palette
based around my favorite CSS colors:
{{ colors.swatch('mediumvioletred') }}
and {{ colors.swatch('teal') }}.

These layers are by far
the most incomplete
and half-assed.
Just enough style to make me
enjoy the site
while I continue working on it.

### Reflecting on all those layers

For a personal site,
this is probably overkill.
It's absolutely clear
that I'm writing more CSS
than I need.
I could combine my reset
with my defaults
for a more focused baseline,
and streamline the stack in general.
But I'm intentionally
approaching each layer
as a complete 'design' --
even where I plan to override
those styles later.

This is an exercise
in thinking through
what _different concerns_
go into building a site design.
I'm trying to give each viewpoint
the stand-alone attention that it deserves,
to see what I learn from the process.
And then I'm _layering_
all those viewpoints,
to see how they _cascade_ together.

It's also an experiment in
exposing those layers to users.

None of that is strictly necessary,
but it's enjoyable,
and I'm learning as I go.
I believe this layered thinking
is useful,
even if we don't always
need all the layers split out this way.

And it's a mindset
that translates especially well
to situations where different teams
are contributing to a single product --
stacking a design system
on top of an external CSS library,
and then building a site
on top of those.
That's why we designed
Cascade Layers in the first place.

Useful or not --
I'm having fun
playing with my new toys,
to see what I discover
along the way.
