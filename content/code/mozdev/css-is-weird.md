---
feature: true
title: Why is CSS so Weird?
sub: How can we design for an unknown & infinite canvas?
date: 2019-10-03
hero:
  img: mozdev/css-is-weird.png
summary: |
  Love it or hate it, CSS is weird:
  not quite markup,
  not quite programming in the imperative sense,
  and nothing like the design programs we use for print.
  How did we get here?
media:
  - iframe: https://www.youtube.com/embed/aHUtMbJw8iA
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

{{ content.fig(
  data=media,
  caption='CSS is for documents, and also for apps, on a universally accessible web.'
) }}

CSS is the design language of the web --
one of three core web languages --
but it also seems to be the most contentious and often perplexing.
It’s too easy and too hard,
too fragile and too resilient.

This is a young platform, and all the core languages are growing fast,
with CSS advancing leaps and bounds over the last few years,
but there's a real problem we can't ignore --
the web is *display-agnostic*:

  This implies no device-specific markup,
  *or anything which requires control over fonts or colors.*

  ---The [first website][cern] from CERN

Here we are,
putting fonts and colors on the web.
But it's worth taking a step back and asking:
what does it even mean to *design* on an unknown and infinite canvas?
This problem isn't new, it's not going away, and there are no simple answers.
Design on the web will always be weird --
but CSS is a [living document][living],
and we have the power to [keep making it better][better].

[cern]: http://info.cern.ch/hypertext/WWW/MarkUp/HTMLConstraints.html
[living]: https://www.w3.org/Style/CSS/specs.en.html
[better]: https://github.com/w3c/csswg-drafts/
