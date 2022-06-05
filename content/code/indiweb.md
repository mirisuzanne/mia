---
title: Am I on the IndieWeb Yet?
subtitle: I haven't signed to any major web labels
date: 2022-06-04
tags:
  - indieweb
summary: |
  I'm really into the [IndieWeb](https://indieweb.org/),
  or the ideas behind it.
  I like to own my data,
  I like a space to play and experiment,
  I like the idea of syndicating content
  to be read/experienced in a variety of formats.
  I love [microformats](https://microformats.org/wiki/microformats2),
  and [RSS feeds](https://en.wikipedia.org/wiki/RSS),
  and… wait… how do [webmentions](https://indieweb.org/Webmention) work?
---

## Slow Social

A few weeks back
there was another round of social-media panic
(which is reasonable),
and the ever-present reminders
to Use A Personal Site on the indieweb.

I agree!
But also,
I have a lot of issues with that reply,
and I posted about it on Twitter:

> Personal sites are wonderful.
> But they can be a lot of work to set up & maintain.
> Also: personal solutions don't solve
> the problem of building networks
> & public digital spaces.
>
> If we want 'personal sites' to be an answer to social platforms,
> we have a lot of work to do.
>
> ---[Me, on Twitter](https://twitter.com/TerribleMia/status/1519404061711224833)

Chris Coyier
made a point of
<a href="https://chriscoyier.net/2022/04/29/rss-3/" class="u-in-reply-to">
replying on his personal site
</a> --
a lovely little post
about how cool RSS is,
and the benefits of "slow social" web interactions.

Again, I agree!
_[insert requisite mourning for Reader]_

But then I look at my site --
this site, here --
and it's a struggle to get all the pieces working
the way that I want.

I do have [a feed that you can subscribe to](/feed.xml),
but I've struggled to categorize
what on my site is a "post" vs a "page" vs ???.
And I'm not always sure I have it set up right?
Validators flag the `style` attribute
(setting custom props in some content),
or embedded `iframe`s (for audio/video),
or `script`s (usually for embedding content).
How much should I worry about these issues?
I often have similar questions
when setting up microformats,
and trying to match the needs of the format
to the needs of my content.

These are very solvable problems
with testing and research --
but they start to add up.


## WebMentions

Since making that post,
I've also started to explore WebMentions,
following instructions from
[Matthias Ott](https://matthiasott.com/articles/into-the-personal-website-verse),
[Keith Grant](https://keithjgrant.com/posts/2019/02/adding-webmention-support-to-a-static-site),
and [Max Böck](https://mxb.dev/blog/using-webmentions-on-static-sites/).
And let me tell you --
while all of them are great coders,
writers, and teachers --
it hasn't been a simple
or straight-forward process.

The first round required several online services
along with HTML & JS changes to my static site,
just to verify my indieweb identity.
Then more changes to the site
and more online services to help fetch any mentions
(so far, nothing to see, but that's probably expected).
Every time I think I have the basics in place,
I find some other set of instructions
suggesting there's another step to take.
I haven't even attempted to display a 'backfeed' yet,
let alone update it client-side.


## A Proof Of Concept (for developers only)

I'm an experienced web developer,
and I can figure it out.
But the steps aren't simple,
and most of my friends _are not web developers_.
So, to me,
this all feels like the prototype of an idea --
a proof of concept.

Yes, we have the technology
to implement a slow social network
of personal sites.
I'm excited to keep playing
with that tech.
But proving the concept is not the same
as actually making it easy & accessible
in a way that can replace platforms.

My conclusion remains:

> Personal sites are wonderful. But…
> If we want 'personal sites' to be an answer to social platforms,
> we have a lot of work to do.
