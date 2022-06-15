---
title: Complex vs Compound Selectors
sub: I have to look it up every time.
date: 2022-06-15
summary: |
  In CSS,
  there are _compound selectors_
  and also _complex selectors_,
  and I never remember which is which.
  Do you need to learn the difference?
  Probably not.
  But I'm tired of looking it up.
---

From the specification:

> A [compound selector](https://drafts.csswg.org/selectors/#compound)
> is a sequence of simple selectors
> that are not separated by a combinator,
> and represents a set of simultaneous conditions on a single element.

Simple selectors are all the little bits --
a class, a tag, an ID, etc.
Those can be combined in various ways.

These are _compound_ selectors:

```css
img#hero { … }
a:focus { … }
.only.with.all.of.these.classes { … }
```

> A [complex selector](https://drafts.csswg.org/selectors/#complex)
> is a sequence of one or more compound selectors
> separated by combinators.

Those compound selectors weren't complex enough for you?
Try combining them!
These selectors are _complex_:

```css
#hero img { … }
a:focus > .icon { … }
.only.with ~ .all.of ~ .these.siblings { … }
```

Now ~~you~~ I know.
Now ~~you~~ I can forget again,
and know exactly where to look.
