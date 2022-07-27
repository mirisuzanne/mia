---
title: No Demo Reno, Website Edition
sub: A slow remodel of my HTML & CSS
date: 2022-07-24
series: redesign 2022
summary: |
  I want to re-think the front-end of my site,
  without too much change to
  the (Eleventy/Markdown) content that drives it.
  And I want to do it slowly.
---
{% import "utility.macros.njk" as utility %}

Erin & I had a lovely vacation this month,
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
Most of the shows involve massive home renovation,
but one (_No Demo Reno_) comes with the premise
that all the walls of a house
will stay exactly where they started.

This post isn't about the HGTV show.
I've seen a total of two or three episodes
while knitting, winding down,
and getting ready for bed.
But that's my goal with this site redesign.

## Some background, and some goals

I first built this site in 2015 using rstBlog --
a small Python static-site generator
without any documentation.

Since 2015
there's been one single major re-design.
In early 2019,
I migrated from rstBlog
onto my current [Eleventy](https://www.11ty.dev/) setup --
a complete overhaul of the site.
At that point,
I likely broke a [few promises]({% page_url 'posts/hit-publish' %}).

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

I find it very hard to sort my life into clear
and meaningfully distinct 'categories',
so I rely heavily on dates and tags.
An event
(talk, performance, album release, article)
happened (or was-published) a particular date,
and has any number of relevant tags.

I like that as a way of approaching my content --
embracing the mess of my ADHD life --
but I haven't yet found a solution I like
for navigating that content.

The previous design relied heavily
on long 'calendars' of
somewhat-related content
at the bottom of every page.
But that solution felt very bulky to me --
both in terms of page-load,
and in terms of scrolling.
It may have been
technically [Finite](https://humanebydesign.com/principles/finite/),
but it didn't always _feel_ finite.

### Clean up the HTML (& Nunjucks)

Technical debt often builds up in HTML over time --
extra wrapping divs, stray classes,
and complexity that was tied to style.
It's just nice to start fresh on occasion.
But I specifically want to:

- Simplify complex Nunjucks templates
- Strip out any HTML that is not absolutely essential
- Improve my use of [Microformats](microformats.org/)
- Rethink how [WebMentions]({% page_url 'indieweb/indiweb' %}) are displayed
- Rethink how user design customization is handled
- Always improve accessibility where I can

I hope to end up with an HTML architecture
that feels like a minimal blank canvas,
where I can treat it a bit like a
[Zen Garden](http://www.csszengarden.com/)
or
[Style Stage](https://stylestage.dev/).
My first websites all had multiple themes to choose from,
and I would love to take that approach
on my next redesign.

For now, WebMentions are hidden
while I figure out what to do with them.
But they're still _happening_ behind the scenes,
and I'll figure out how I want to display them again soon.

### Make RSS a first class part of the site

While I was working on WebMentions last month,
I also made major updates to my RSS feed --
and then added an RSS link to my main navigation.
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
_designing_ new CSS features
[with the CSSWG]({% page_url 'orgs/w3c' %}),
but now that those features
(and more)
are starting to roll out in browsers
_I want to play with them_.

Some of those new toys
are available already,
or even a few years old.
Things like
`is()` & `:where()`,
`min()`/`max()` & `clamp()`,
variable fonts,
`color-scheme`/`accent-color`
& [system colors](https://drafts.csswg.org/css-color/#css-system-colors),
and [Cascade Layers]({% page_url 'css-tricks/layers-guide' %}).
Some of those were already
being used in the old design,
but this time I get to design around them from the start.

Over the next months and years
I also hope to start playing with
Container Queries & query units,
Scope,
subgrid,
[new color formats](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
(`okLCH`) & spaces (`display-P3`),
and more.

I want to take this slow --
start simple,
and build in these new features
as they arrive.
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

I was inspired by Håkon Lie's original
[1994 CSS proposal](https://www.w3.org/People/howcome/p/cascade.html),
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
but I don't want to keep relying on HSL colors
to make it happen.
For now, I've removed Cascading Colors,
while I rethink the approach.

I'd also like to expose the way a CSS design is _layered_ --
specified initial values,
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
inspired by
(or directly ripping off?)
[Nils Binder](https://ichimnetz.com/),
who has a lovely personal site.
I recommend checking it out.

The only difference here
is that I want to tie this idea
more directly to _how the cascade works_.

## The order of things

My instinct was to strip out all CSS,
and then work on getting the HTML cleaned up.
I didn't quite do that,
but I'm aiming for something close --
while keeping a bit more _style_ along the way.

Here's what I've done so far:

- Remove the old CSS (done)
- Cleanup the site-header/nav HTML
- `@layer reset` » work in progress,
  starting from [CSS Remedy](https://github.com/jensimmons/cssremedy)
- `@layer default` » work in progress, basic typography
- `@layer theme` » work in progress, minimal fonts & colors
- `@layer layout` » just enough for the nav to feel usable

The goal is to leave the `theme` and `layout` layers
as minimal as possible,
while I focus on the basics:

- Style the RSS page
- Cleanup the site footer HTML
- Cleanup the page header HTML
- Cleanup the page content HTML
- Cleanup the information architecture & related HTML

Along the way,
I'll keep tweaking the `reset` and `default` styles
to improve readability in broad strokes
(more tags than classes).

Once that's done,
I'll slowly start bringing back features --
user customizations,
WebMentions,
additional layout & theming,
more component details
(like grids for images),
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
- [Humane by Design](https://humanebydesign.com/)
- [Sorted Colors](https://enes.in/sorted-colors/)
  (I'm starting with named colors for everything,
  except that I had to darken `darkslategray` for the sake of contrast)
