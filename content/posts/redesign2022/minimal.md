---
title: No Demo [Website] Reno
sub: A slow remodel of my HTML & CSS
date: 2022-08-05
series: redesign 2022
summary: |
  I want to re-think the front-end of my site,
  without too much change to
  the (Eleventy/Markdown) content that drives it.
  And I want to do it slowly.
---
{% import "utility.macros.njk" as utility %}

Erin & I had a lovely vacation last month,
driving around southwest Colorado --
Bishop Castle, the Great Sand Dunes,
Chimney Rock, the Durango-Silverton Railroad,
the (terrifying) Million Dollar Highway,
the Black Canyon of the Gunnison,
and so on.
It was absolutely beautiful.

Every night we would end up in a hotel room,
where we turn on the Food Network
(back-to-back _Diners, Drive-Ins, and Dives_)
or whatever is showing on HGTV.
Nested between extensive house remodels,
_No Demo Reno_ starts with the premise
that all the walls of a house
will stay exactly where they started.

This post isn't about HGTV or home renovations.
I've seen a total of two or three episodes
while knitting, winding down,
and getting ready for bed.
But that's my goal with this site redesign.

## Some background, and some goals

I first built this site in 2015
using [rstBlog](https://github.com/mitsuhiko/rstblog) --
a small Python static-site generator
without any documentation.

Since 2015
there's been one single major re-design.
In early 2019,
I migrated from rstBlog
onto my current [Eleventy](https://www.11ty.dev/) setup --
a complete overhaul of the site,
inside and out.
The demolition was extensive,
and I likely
[broke a few promises]({% page_url 'posts/hit-publish' %}).

<details>
<summary>
Before that...
</summary>

My name changed on several occasions,
and so did my URL & tech stack:

- **<span data-font="tnum">2002--2006</span>**
  » static HTML _[url missing]_
  <!-- goshen college student page -->
- **<span data-font="tnum">2006--2010</span>**
  » Wordpress _[url changed]_
  <!-- meyerbros.org -->
- **<span data-font="tnum">2008--2011</span>**
  » static HTML _[url changed]_
  <!-- eric.dirtcircle.com -->
- **<span data-font="tnum">2011--2012</span>**
  » Tumblr _[url changed]_
  <!-- eric.andmeyer.com -->
- **<span data-font="tnum">2012--2014</span>**
  » rstBlog _[same url, new site]_
  <!-- eric.andmeyer.com -->
- **<span data-font="tnum">2014--2015</span>**
  » rstBlog _[same site, name & url changed]_
  <!-- ericsuzanne.com -->
- **<span data-font="tnum">2015--2019</span>**
  » rstBlog _[miriamsuzanne.com]_
- **<span data-font="tnum">since 2019</span>**
  » Eleventy _[you are here]_

</details>

This time
I plan to leave all the
content and infrastructure
_basically_ intact.
Here are the goals:

### Clarify the information architecture

I decided a while back
not to try separating
my 'personal' & 'work' personas online.
It's not how my mind works,
or the way I've structured my life.

I've always found it hard
to sort my activities
into the usual website categories,
so I've been treating basically everything
as an _event_
with basically the same data, look, and feel.
Something happens --
a presentation, performance, album release, novel, article, spec --
on a particular date,
with any number of relevant tags.

I like some things about that --
embracing the mess of my ADHD life --
but I haven't yet found a solution I like
for navigating & displaying it.

The previous design relied heavily
on extra-long 'calendars' of content
at the bottom of every page.
But that solution felt very bulky to me --
both in terms of page-load,
and user scrolling.
It may have been
technically [Finite](https://humanebydesign.com/principles/finite/),
but it didn't always _feel_
as finite
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
- Improve my use of [Microformats](microformats.org/)
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

My first websites
(back in the early 00s)
all had multiple
'[alternate stylesheets](https://alistapart.com/article/alternate/)'
to choose from,
and I would love to do that again.

For now, WebMentions are hidden
while I figure out what to do with them.
But they're still _happening_ behind the scenes,
and I'll figure out how I want to display them again soon.

### Make RSS a first class part of the site

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

I was inspired by Håkon Lie's
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
of making the site design itself interactive,
but I don't want to keep relying on
unreliable HSL colors
to make it happen.
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

This idea is absolutely
inspired by the personal site of
[Nils Binder](https://ichimnetz.com/) --
which provides a slider from 0 to 865 lines of CSS.
I recommend checking it out.

## The order of things

My instinct was to strip out all CSS,
and then work on getting the HTML cleaned up.
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
while I focus on:

- Minimal, accessible HTML
- Better information architecture & navigation
- Reliable microformats
- Styled RSS page

From there,
I can start thinking about
more complex layouts & themes & features --
more user customizations,
navigation,
WebMentions,
etc.

We'll see where it goes.

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
  (Léonie did a lovely simple redesign recently, with tags for navigation)
- [IndieWebify.Me](https://indiewebify.me/)
- [Microformats](https://microformats.org/wiki/microformats2)
- [Humane by Design](https://humanebydesign.com/)
- [Sorted Colors](https://enes.in/sorted-colors/)
  (I'm starting with named colors for everything,
  except that I had to darken `darkslategray` for the sake of contrast)
