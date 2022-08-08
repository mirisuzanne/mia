---
title: No Demo [Website] Reno
sub: A slow remodel of my HTML & CSS
date: 2022-08-07T14:57:46-06:00
series: redesign 2022
summary: |
  I want to re-think the front-end of my site,
  without too much change to
  the (Eleventy/Markdown) content that drives it.
  And I want to do it slowly.
---
{% import "utility.macros.njk" as utility %}
{% import "demos/colors.njk" as colors %}

Erin & I had a lovely vacation last month,
driving around southwest Colorado --
Bishop Castle, the Great Sand Dunes,
Chimney Rock, the Durango-Silverton Railroad,
the (terrifying) Million Dollar Highway,
the Black Canyon of the Gunnison,
and so on.
It was absolutely beautiful.

This post isn't about our vacation,
or any of the amazing places we visited.

Every night we would end up in a hotel room,
where we turn on the Food Network
(back-to-back _Diners, Drive-Ins, and Dives_)
or whatever is showing on HGTV.
Nested between extensive house remodeling shows,
_No Demo Reno_ starts with the premise
that you can make big upgrades to a home
without moving a single wall.

This post isn't about HGTV or home renovations, either.
I've seen a total of two or three episodes
while knitting, winding down,
and getting ready for bed.

But that's my goal with this site redesign.
How much can I change,
_without moving any of the walls_?

## Some background, and goals

I've had a number of 'personal' sites over the years,
but landed on this URL in 2015.
The first version of this site
used [rstBlog](https://github.com/mitsuhiko/rstblog) --
a small Python static-site generator
without any documentation.

<!--
2002-2006 » goshen college student page?
2006-2010 » [Wordpress] meyerbros.org
2008-2011 » [static] eric.dirtcircle.com
2011-2012 » [tumblr] eric.andmeyer.com
2012-2014 » [rstBlog] eric.andmeyer.com
2014-2015 » [rstBlog] ericsuzanne.com
2015-2019 » [rstBlog] miriamsuzanne.com
2019-.... » [Eleventy] miriamsuzanne.com
-->

In early 2019,
I migrated from rstBlog
onto my current [Eleventy](https://www.11ty.dev/) setup --
a complete overhaul of the site,
inside and out.
The demolition was extensive,
and I likely
[broke a few promises]({% page_url 'posts/hit-publish' %}).

This time
I plan to leave all the
content and Eleventy infrastructure
_basically_ intact.
Here are the goals:

### Clarify the information architecture

I've always found it hard
to sort my activities
into organized 'categories',
so I've been treating basically everything
as an _event_
with the same data, look, and feel.
Something happens --
a presentation, performance, album release, novel, article, spec --
on a particular date,
with any number of relevant tags.

I like some things about that --
embracing the mess of my ADHD life --
but I haven't yet found a great solution
for navigating & displaying it.
Part of the problem is simply that
everything looks the same.
It would help if site visitors
can more easily see the different types of content
reflected in the design and navigation of the site.

The previous design also relied heavily
on extra-long 'calendars' of content
at the bottom of every page.
That solution felt very bulky to me --
both in terms of page-load,
and user scrolling.
It may have been
technically [Finite](https://humanebydesign.com/principles/finite/),
but it didn't always _feel_ as finite
(or as easy to navigate)
as I'd like.

### Clean up the HTML (& Nunjucks)

Technical debt often builds up in HTML over time --
extra wrapping divs, stray classes,
and other complexities
that originate more from style than _content_.
It feels good to clean that out and start fresh.
Specifically, I want to:

- Simplify complex Nunjucks templates
- Strip out any HTML that is not absolutely essential
- Improve my use of [microformats](https://microformats.org/)
- Rethink how [WebMentions]({% page_url 'indieweb/indiweb' %}) are displayed
- Rethink how user design customizations are provided
- Always improve accessibility where I can

I hope to end up with an HTML architecture
that feels more minimal --
a blank canvas,
that I can treat more like a
[Zen Garden](http://www.csszengarden.com/)
or
[Style Stage](https://stylestage.dev/)
for my CSS.
My early websites
(back in the 00s)
all had multiple
'[alternate stylesheets](https://alistapart.com/article/alternate/)'
to choose from,
and I would love to do that again.

### Make RSS a first-class part of the site

While I was working on WebMentions last month,
I also made major updates to my RSS feed.
But I don't love the way browsers
display a raw xml file.
Developers may be my biggest audience,
but they aren't my only audience,
and I want that link to _make sense_
and feel like part of the site.

So I looked into it,
and it seems like I can
[use XSL and CSS](https://jonchristopher.us/blog/beginning-to-style-your-rss-feed/)
to better design and integrate that page
as a part of the site.

### Try out new CSS features (slowly)

It's been fun
working on new CSS features
[with the CSSWG](/orgs/w3c),
but now that those features
(and more)
are starting to roll out in browsers
I want to use them on my site.

Some of features
are available already,
or even a few years old.
Things like
`is()` & `:where()`,
`min()`/`max()` & `clamp()`,
variable fonts,
`color-scheme`/`accent-color`,
and [Cascade Layers]({% page_url 'css-tricks/layers-guide' %}).
Some of those were already
being used in the old design,
but this time I get to design around them from the start.

Over the next months and years
I also hope to start playing with
size-based container queries & query units,
scope,
subgrid,
[new color spaces](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
(`okLCH`/`display-P3`),
and more.

I want to take this slow.
Start simple,
and build more interesting themes
as the various features arrive.
That means keeping things simple
for as long as possible,
so it's easy to integrate new ideas
without major rewrites.

### Highlight user customizations

As part of the previous design,
I launched
[Cascading Color Systems](https://www.oddbird.net/cascading-colors/) --
a tool for giving users
total control over the colors on the site.
That was inspired by Håkon Lie's
[original 1994 CSS proposal](https://www.w3.org/People/howcome/p/cascade.html),
which includes the following
text-art diagram:

```
        User            Author
 Font   o-----x--------------o 64%
 Color  o-x------------------o 90%
 Margin o-------------x------o 37%
 Volume o---------x----------o 50%
```

I still want to explore that idea
of making the site design interactive,
but I don't want to keep relying on
HSL colors to make it happen.
For now, I've removed Cascading Colors,
while I rethink the approach.

I'd also like to expose the ways
a CSS design is _layered_ --
from specified initial values,
[user agent defaults]({% page_url 'css/body-margin-8px' %}),
resets, global typography,
layouts, components, etc.
_It's a cascade!_
What if users could turn on and off
the various Cascade _origins_,
and _layers_
to see how the site looks
at different steps of the process?
Check out the [Theme Settings](#settings) below,
for a first-draft of the idea.

<figure>
<section data-options="css" aria-label="style layers">
  {%- include "settings/css-buttons.njk" -%}
</section>
<figcaption>
  Try turning CSS layers on and off...
  These settings are also saved in `localStorage`,
  so they persist across visits.
</figcaption>
</figure>

This idea is absolutely
inspired by the personal site of
[Nils Binder](https://ichimnetz.com/).
Nils provides a slider from 0 to 865 lines of CSS,
with animated transitions between the styles.
It's a lot of fun,
and I recommend checking it out.

## The order of things

My instinct was to strip out all CSS,
and then work on getting the HTML cleaned up
while my site remains 'naked' of style.
I didn't quite do that,
but I'm aiming for something close.
Here's what I've done so far:

- Remove the old CSS (done)
- Begin re-arranging the HTML & Nunjucks templates
- `@layer reset` »
  just the bare minimum needed
  for HTML tags and attributes to work the way I expect,
  starting from [CSS Remedy](https://github.com/jensimmons/cssremedy).
- `@layer default` »
  just enough colors & typography
  to make the site feel usable to me,
  without making decisions about
  how I'm going to theme it long-term.
- `@layer theme` »
  adds a few site-specific features and opinions
  on top of the typographic defaults.

The distinction between layers is still fluid,
as I try to figure out what I'm doing.
I'll keep adjusting the `reset` and `default` styles as I go,
but hope to leave the `theme` layer
as minimal as possible,
while I focus on the architectural issues.

For now,
the `default` layer has colors based roughly on Firefox
[CSS System Colors](https://www.w3.org/TR/css-color-4/#css-system-colors).
I experimented briefly with using
the System Colors directly,
but support seems a bit inconsistent,
and there are additional accessibility considerations
with that approach.
I might revisit in the future.

The `theme` layer colors
are based on [Named Colors](https://www.w3.org/TR/css-color-4/#named-colors),
with some minor adjustments for accessible contrast.
While {{ colors.swatch('darkslategray') }}
works fine as a text `color`
over {{ colors.swatch('azure') }}
in `light` mode,
I used Sass to darken it
as a `background-color` in `dark` mode,
providing enough contrast for my accent colors as well.
The result is {{ colors.swatch('hsl(180deg 25% 6%)') }}.

There's a lot more to do.
WebMentions are temporarily hidden,
RSS isn't highlighted in the nav or styled,
and all content still looks the same in a list --
but I have to start somewhere.
We'll see where it goes (slowly).

## Some links I've been keeping open while I work

Articles:

- [The Smallest CSS](https://www.robinrendle.com/notes/the-smallest-css/)
  by **Robin Rendle**
- [Style with Stateful, Semantic Selectors](https://benmyers.dev/blog/semantic-selectors/)
  by **Ben Myers** (with links to several others)
- [Beginning to Style Your RSS Feed](https://jonchristopher.us/blog/beginning-to-style-your-rss-feed/)
  by **Jon Christopher**

Sites:

- [tink](https://tink.uk/)
  (Léonie did a lovely redesign recently, with tags for navigation)
- [IndieWebify.Me](https://indiewebify.me/)
- [microformats](https://microformats.org/wiki/microformats2)
- [Humane by Design](https://humanebydesign.com/)
- [Sorted Colors](https://enes.in/sorted-colors/)
- [Contrast Ratio](https://contrast-ratio.com/)
