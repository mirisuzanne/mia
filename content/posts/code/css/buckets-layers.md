---
title: Eleventy Buckets & Cascade Layers
sub: Solving a problem I created
date: 2024-07-06
tags:
- cascade layers
- webc
- eleventy
---

I'm re-working this site from scratch --
sticking with [Eleventy](https://www.11ty.dev/),
but moving from
[Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/) templates/macros
to [WebC](https://www.11ty.dev/docs/languages/webc/)
and web components.
Outside of static-site templates,
one goal of this refresh
is to keep things as 'vanilla' as possible.

This isn't some purist stance on my part.
There are a lot of great tools
that we recommend to clients every day.
But this is my personal site,
and a place to experiment.
_What happens when I let go
of all the tools that I'm used to,
and rely entirely on the web platform?_

Along the way,
I'm trying to find the best pattern
for organizing my CSS into Cascade Layers.
Layering can be done within a file,
using the `@layer <name> { … }` rule block,
or it can be done with a `layer(<name>)` function
on-import.
I prefer the latter
for my top-level layers, because:

- The layering can happen in one central place
- Renaming and reordering is more more flexible
- There's less nesting in the CSS files

A few other rough criteria
for how I write CSS:

- Component-specific styles
  can be embedded in
  'single file components' (WebC handles this well),
  but _most of my CSS_ will be global
- I like the global styles split into 'partials',
  so it's not all one long document[^css-edit]
- Each partial will be assigned
  to a cascade layer

[^css-edit]: Back in the late _aughts_
and early 2010s,
I was a big fan of CSSEdit
(now part of [Espresso](https://espressoapp.com), I believe).
One of the best features was viewing
a single massive CSS file
_as though it contained many smaller folders_.
Maybe I should go back to that approach,
or even back to that specific app?

Without any build steps,
I get an HTML `<head>`
that contains something like:

```html
<style webc:keep>
  @layer reset, config, default, layout, component, utility;

  @import url('/css/reset.css') layer(reset);

  @import url('/css/config/colors.css') layer(config);
  @import url('/css/config/sizes.css') layer(config);

  @import url('/css/default/type.css') layer(default);
  @import url('/css/default/links.css') layer(default);
  @import url('/css/default/buttons.css') layer(default);
  @import url('/css/default/forms.css') layer(default);
  @import url('/css/default/media.css') layer(default);
  @import url('/css/default/blocks.css') layer(default);

  @import url('/css/layout/page.css') layer(layout);
  @import url('/css/layout/nav.css') layer(layout);
  @import url('/css/layout/header.css') layer(layout);
  @import url('/css/layout/main.css') layer(layout);
  @import url('/css/layout/footer.css') layer(layout);

  @import url('/css/utility/a11y.css') layer(utility);
</style>
```

The component styles are missing from that global list.
CSS is designed to be global,
and the best way to write minimal CSS
(in my experience)
is to focus more on _reusable patterns_
over _individual components_.
So I don't expect much to end up
in our component layer,
but there's always something.
We can access those styles
as a [WebC asset bundle](https://www.11ty.dev/docs/languages/webc/#asset-bundling):

```html
<style webc:keep
  @raw="`@import url(${getBundleFileUrl('css')}) layer(component);`"
></style>
```

I love that there's
very little build-time _magic_ involved!
Still, that's a whole wall of imports,
and I have a decades-old flinch reflex
when I see that.
Should I be worried?

## Am I creating performance issues?

I'm not a performance expert,
so I [asked mastodon](https://front-end.social/@mia/112741641485635928),
and got a generally
[positive but mixed](https://gomakethings.com/modular-css-and-different-ways-to-structure-your-stylesheets/)
response.

It might not be _the best_ performance,
but (with HTTP 2/3) it shouldn't be bad.
My personal site doesn't need
_eXtreme optimization_,
so that might be good enough for me?
I'll probably ship it,
and find out.

Still,
I know
[the first step in optimizing CSS](https://csswizardry.com/2023/10/the-three-c-concatenate-compress-cache/)
is to _concatenate_ --
so I did explore a few approaches
along the way,
which could work if I need them.

## Sass can `load-css` into layers

In the past, I've used [Sass](https://sass-lang.com).
I like Sass a lot.
In Sass,
I concatenate and layer the partials
using `meta.load-css()`
in my primary Sass file:

```scss
@use 'sass:meta';

@layer reset {
  @meta.load-css('reset');
}

@layer config {
  @meta.load-css('config/colors');
  @meta.load-css('config/sizes');
}

// etc.
```

That works pretty well.
It's what I've been doing on this site
ever since I originally added layers.

But if I'm not using Sass for anything else,
maybe I can avoid the dependency altogether?

## When in Eleventy, do as the Eleventies do

(Eleventines? Eleventonians?)

I'm already using WebC,
which provides _asset bundling_.
I've already used that feature (above)
to concatenate individual component styles.
That compiles all the CSS
into one bundle,
and all the JS into another
(unless you opt-out with `webc:keep`).
Those bundles are available
as either raw output
or external files:

```html
<!-- direct output -->
<style @raw="getBundle('css')" webc:keep></style>
<script @raw="getBundle('js')" webc:keep></script>

<!-- external files output -->
<link :href="getBundleFileUrl('css')" rel="stylesheet" webc:keep></style>
<script :src="getBundleFileUrl('js')" webc:keep></script>
```

But you can take that even further
with _asset bucketing_ --
assigning `<style>`, `<link>`, or `<script>` tags
to individually named CSS or JS buckets:

```html
<style webc:bucket="good">/* … */</style>
<link webc:bucket="bad" href="terrible.css" rel="stylesheet" >
<style webc:bucket="bad">/* … */</style>
<style webc:bucket="ugly">/* … */</style>
```

And each bucket will get bundled up individually:

```html
<!-- just the bad styles -->
<style @raw="getBundle('css', 'bad')" webc:keep></style>
```

Are you thinking what I'm thinking?
Probably. It's the title of the post.

**Bundles let you concatenate CSS partials,
and buckets let you group them as needed.
That's what I'm trying to do.**

My CSS partials are external stylesheets,
not attached to any particular WebC component,
so first I have to pull them into buckets.
I can do that with `<link>` tags in the header:

```html
<link rel="stylesheet" href="../../_css/reset.css" webc:bucket="reset">
<link rel="stylesheet" href="../../_css/config/colors.css" webc:bucket="config">
<link rel="stylesheet" href="../../_css/config/sizes.css" webc:bucket="config">
<link rel="stylesheet" href="../../_css/config/fonts.css" webc:bucket="config">
<!-- etc -->
```

Since I'm using `webc:bucket` and not `webc:keep`,
these `<link>` tags won't appear in the HTML output.
But now I have my buckets.

Since I'm interested in layering the buckets 'on import',
I'll need to generate external stylesheets.
And since layering is
[not yet possible with the `<link>` tag](https://css.oddbird.net/layers/link-layer/),
I'll need to use `@import` rules instead.
WebC makes that simple enough,
using JS template tags.
These, I'll keep around:

```html
<style
  webc:keep
  @raw="`@import url(${getBundleFileUrl('css', 'reset')}) layer(reset);`"
></style>
<style
  webc:keep
  @raw="`@import url(${getBundleFileUrl('css', 'config')}) layer(config);`"
></style>
<!-- etc -->
```

We can simplify that even more,
using [`webc:for` loops](https://www.11ty.dev/docs/languages/webc/#webcfor-loops).
I don't know if there's a way
to access the list of buckets in WebC,
so (for now) I've just added some front-matter data.
While I'm at it,
I'll use that data to define my layer order up-front:

```html
<!-- <style>@layer reset, config, default, etc;</style> -->
<style
  webc:keep
  @raw="`@layer ${($data.layers).join(', ')};`"
></style>

<!-- <style>@import url('bucket-name.css') layer(bucket-name);</style> -->
<style
  webc:keep
  webc:for="layer of ($data.layers)"
  @raw="`@import url(${getBundleFileUrl('css', layer)}) layer(${layer});`"
></style>
```

That's it!
Not quite as compact
as the other two approaches,
but it's close --
and it works great,
without any extra dependencies.

I might be able to simplify that even further
with [`webc:type='js'`](https://www.11ty.dev/docs/languages/webc/#using-javascript-to-generate-content),
but I'll cross that bridge
if I decide that concatenation is
worth the effort.
