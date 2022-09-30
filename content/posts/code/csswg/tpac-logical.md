---
title: A long-term plan for logical properties?
date: 2022-09-16
url: https://adactio.com/journal/19457
venue: Jeremy Keith
rel: reply
summary: |
  The CSS Working Group is discussing
  'logical properties' today
  with the Internationalization Working Group --
  and there's a great new article on the topic
  this week from Jeremy Keith.
---

CSS has historically revolved around
physical directions:
`width`, `height`,
`top`, `right`, `bottom`, and `left`.
Those make sense
in a world where
_what you see is what you get_ --
but that's fundamentally
not how the web works.

Over time,
new layout methods
like flexbox and grid
have started to introduce
'flow-relative' or 'logical' directions:
`inline-size`, `block-size`,
`inline-start`, `inline-end`,
`block-start`, and `block-end`.

That allows more meaningful
and resilient design
in the face of translation --
both for multi-lingual sites,
and for a web that supports
more and more automatic translation.

It's not _bad_ to use the physical properties sometimes,
when they best express the design intent,
but they shouldn't be encouraged as the default choice.

So the goal in my mind
is that it should be simple
to write an entire site
without reference to physical coordinates.
And doing that should be
_encouraged by the language_.

For example,
we currently have a `margin`
shorthand that defines physical margin properties.
We could add a `margin-logical` shorthand,
but it feels like
a second-class citizen of the language.
If the physical property feels like the 'default',
then the language is encouraging
authors to stick with physical dimensions.

Yesterday,
Jeremy Keith
wrote a great article --
[Let's get logical](https://adactio.com/journal/19457) --
about his attempts to refactor a site
using only flow-relative properties,
and the limitations he ran intro
with existing CSS.
It's a great run down of what works already,
and what's still missing.

We're not there yet.
_So how do we get there?_

Well,
I don't know for sure --
but articles like this
are very helpful
as we try to work it out!

[Fantasai](https://fantasai.inkedblade.net/) and I
did spend some time working on this last year,
and came up with a multi-year
and multi-step
[proposal](https://github.com/w3c/csswg-drafts/issues/1282#issuecomment-952428897).
Maybe there are other approaches
we should consider as well?

We're discussing all of that today
at [W3C's annual TPAC conference](https://www.w3.org/2022/09/TPAC/Overview.html),
in a joint meeting
between the CSS Working Group
and the Internationalization Working Group.
Maybe we'll have something new to report
later today?

If you have ideas,
or additional issues
that we should have in mind --
let us know!
