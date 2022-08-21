---
title: Am I on the IndieWeb Yet?
sub: I haven't signed to any major web labels.
date: 2022-06-04
tags:
  - webmentions
  - code
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
to Use A Personal Site.

Personal sites are great!
But I have some issues with that reply,
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

At the core,
I'm skeptical about
treating "public space" issues
as a matter of personal responsibility.

Chris Coyier
made a point of
<a href="https://chriscoyier.net/2022/04/29/rss-3/" class="u-in-reply-to">
replying on his personal site
</a> --
a lovely little post
about how cool RSS is,
and the benefits of "slow social" web interactions.

And I agree completely!
_[insert requisite mourning for Reader]_

But then I look at my site --
this site, here --
and it's a struggle to get all the pieces working
the way that I want,
especially when it comes to syndication.

I do have [a feed that you can subscribe to](/feed.xml),
but I've struggled to categorize
what on my site is a "post" worth syndicating
vs a "page" vs ???.

And I'm not always sure I have it set up right?
Validators flag the `style` attribute
(setting custom props in some content),
or embedded `iframe`s (for audio/video),
or `script`s (usually for embedding content).
How much should I worry about these issues?
Do I need to run my content through
a tool like `sanitize-html`,
and if so,
how strict should it be?
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
I recommend all three articles,
but the first thing that becomes clear
is that this requires multiple steps,
and is not a simple
or straight-forward process.

The first round required several online services
along with HTML & JS changes to my static site,
just to verify my indieweb identity.
Then more changes to the site
and more online services to help fetch any mentions
~~(so far, nothing to see, but that's probably expected)~~.
It seems the only way to test the setup
is to launch all those changes publicly,
and then ask for other devs to send you mentions.

(That's partly the goal of this post.)

Every time I think I have the basics in place,
I find some other set of instructions
suggesting there's another step to take.

**Update:**
I seem to have things working here now,
but I'm still not entirely clear
on how it works.
In the end
I've added some metadata to the site `head`,
a number of microformats to the markup,
several third-party services,
and an API call to download the data from one of them.
I'm not convinced I have all the details right,
and I'm not sure which validators to test against.

If I want live updates
(this is a static site)
there's still more to learn.


## A Proof Of Concept (for developers only)

I'm an experienced web developer,
and I can figure it out.
But the steps aren't simple,
and most of my friends _are not web developers_.
So, to me,
this all feels like the prototype of an idea --
a proof of concept.

We have the technology
to implement a slow social network
of personal sites.
I'm excited to keep playing
with that code.
But proving the concept is not the same
as actually making it easy & accessible
in a way that can replace platforms.


## What's Next?

I know there are plugins
for WordPress and other blogging software
to help make the setup simpler.
That's great!

What I would like to see
is a tool that helps bring
the entire system together
in one place.
Somewhere that non-technical people can:

- build their own site, with support for feeds/mentions
- see what feeds are available on other sites, and subscribe to them
- easily respond to other sites, and see the resulting threads

That's _a large feature set_, I know.
In my mind, it would make the most sense
for those features to live
[in a browser](https://twitter.com/TerribleMia/status/1488582497382408197),
but it might be possible
to build as a web service with browser plugins?

Whatever it looks like,
_it will take a lot of work to get there_.
