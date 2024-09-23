---
title: Aggregating my distributed self
sub: Where does all this content belong?
date: 2024-09-22
series: redesign 2022
summary: |
  Most of the content on this site
  is an aggregate view
  of my work in other venues.
  How do I want to manage that process
  going forward?
---

It's 2024,
and I'm including this post
in a series called `redesign 2022`.
That's when I ripped out all the styles on my site,
and declared [my intent to renovate](/2022/08/07/minimal/)
_with a light touch_.

> How much can I change,
> _without moving any of the walls_?
>
> ---Me, 2022

But the walls got in my way.
Instead of minimal renovation,
I got just far enough to _live with it_
and then started a brand new [Eleventy](https://www.11ty.dev/) repo.

The plan was to prototype over there,
and bring back well-formed solutions.
To [echo Dave Rupert](https://daverupert.com/tag/prototyping),
prototyping is useful.
It's easier to play with new ideas
when you're not carrying a decade of content
and old code along with you.

But _prototyping_ evolved into
what I would call _tinkering_ (complimentary).
Maybe I mean _procrastinating_ (also complimentary),
but it's a wandering process
that also helps me better understand
what I _want_ from a website.
I might not make visible progress over two years,
but I start to form a _point of view_:

1. I want _minimal site furniture_,
  and a focus on only what's essential (usually text).
  What is the least navigation required,
  and can I move it out of the way?
  How simple can I keep the layout?
1. I want _maximum style customization_.
  Not just a theme picker,
  but as many user controls
  and interactions as possible --
  from useful to playful to absurd.
1. I want content maintenance to _feel easy_.
   Right now it feels _redundant_.

Keeping things easy is
always where things get complicated.
And it brings me back to where my redesign started --
a desire to
[clarify the information architecture](/2022/08/07/minimal/#clarify-the-information-architecture).
Not only for visitors,
but for myself.

## The objects of my web desire (again)

I'm still thinking about roughly the same
[content types I've discussed before](/2022/08/25/content/),
though maybe the boundaries have become
slightly more clear.

First, there are _posts_.
Short or long,
posts always have a date & time attached.
They are active,
part of a _feed_,
and might appear in an RSS reader.

Then there are _projects_, maybe --
the things I'm doing.
But that's too broad.
Let's break it down:

- Sometimes I do _events_
  where I speak, or teach a workshop,
  or perform.
  Events happen at a time and place.
- Sometimes I create _artifacts_
  like a book or an album, a website, or specification.
  Artifacts often have a home URL.
  They might have a launch date,
  but they are not date-specific.
- Some of my projects are _other channels_
  with their own feeds,
  their own events and artifacts.
- Those channels are often maintained by
  an _organization_ that I work with long-term.
  A band, a web agency, a performance company, etc.

These boundaries aren't always clean.
A post that remains relevant
could be considered an artifact.
Events can generate artifacts, and vice versa.
An entire organization might exist to
curate a single channel.

But all these projects tend to exist _elsewhere_.
Adding them to my website, even in advance,
is an _archival_ act --
documenting that the event,
artifact, channel, or organization exists off-site.

## What belongs in the feed?

Posts are simple enough to simplify.
The web is littered with _what's on your mind_ text-areas.
Hit _publish_, and the date becomes
not just a sorting mechanism,
but an ID, a URL slug, and a placeholder title.
My layout should allow for more,
but not rely on anything beyond a bit of text.

As part of my desire to prioritize
page content over site furniture,
I'm also leaning into my 'cold open' design --
with a small content block
that comes before the title & credits roll.
For a short post,
would I put the entire contents up-front?
I think so.

Right now,
I'm re-purposing
a `summary` field in my YAML front-matter
to split out that pre-title content.
But that doesn't feel accurate to the purpose.
Maybe I can use
an HTML comment as the divider?
Then it all goes cleanly into an RSS feed,
but I can splice a header in
for my own purposes.

I also want to think
about what happens to posts over time.
Some remain relevant,
becoming a sort of artifact.
Do I need a way to promote them?
Other posts becomes less relevant, even obsolete.
Maybe they can be _unlisted_,
so the URL remains (cooly) in place
but not linked from anywhere.

## What belongs in the archive?

It's possible to have artifacts
that originate here,
but most of the 'archive' is aggregated from off-site activity --
often with a more 'canonical' online home.
Conference talks are announced on the conference website,
theater productions on the Grapefruit Lab site,
albums on the Teacup Gorilla site,
specs live on the W3C servers,
even my novel has it's own URL.

At their most basic,
these things can all be represented
by a name and URL --
with dates that are more or less essential
depending on the type of project.

So the eternal question is:
how much do I duplicate in my own archive?

- At one extreme,
  I can re-post the entire contents --
  articles, videos, music embeds, event details --
  with `canonical` metadata pointing to the original.
  Each archival item gets a document in my repo,
  and a URL on here in the archive,
  in addition to any off-site links.
  That's where things start to feel like busy work,
  redundant.
- On the other extreme,
  the archives can be simple data structures
  slotted into the Eleventy 'data cascade'
  wherever I see fit.

In either case,
there's a question of detail.
Do I link to channels and organizations as a whole
and leave it at that,
or do I link to each article I post
on the OddBird blog,
each _Winging It_ live stream,
each spec and explainer for the CSS Working Group,
each album, conference, and production?

All those things can be found
on other websites.
The purpose of having them here
is only to aggregate my sprawling work
in a single location.

Is that useful?
For me or for you?
Is it interesting, apart from any utility?

## A first pass

At a high level, I'm thinking:

- List all the items in yaml data, with links off site
- Group the items onto index pages by channel when useful
- Don't duplicate the details, that's what links are for

In practice, that means:

- Organizations and channels get their own pages
- Those pages act as tag-list pages for related posts,
  and home for relevant offsite links
- Artifacts & events start as data/links,
  and only get promoted to page status
  if a tag page would be useful
  to group multiple related items
