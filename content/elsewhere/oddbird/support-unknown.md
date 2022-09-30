---
title: Support (Not) Unknown
sub: Adding Container Query tests to CSS `@support`
url: https://www.oddbird.net/2021/05/14/support-unknown/
date: 2021-05-14
hero:
  img: 2021/support.jpg
  alt: |
    A large, carved, wooden hand
    supporting a tree that has nearly fallen over
  caption: |
    photo by
    [Neil Thomas](https://unsplash.com/@finleydesign)
    on [Unsplash](https://unsplash.com/s/photos/support).
tags:
  - csswg
  - css
summary: |
  Working on a new CSS feature like Container Queries,
  one of the most important considerations is
  to ensure a "migration path" --
  a way for developers to start integrating the new code,
  without breaking their sites on legacy browsers.
---

That looks different depending on the feature,
but can often include new tests
for the `@supports` conditional rule.
So how do these CSS feature queries work,
what happens when we add new syntax to the `@supports` rule,
and anyway: what is the opposite of an unknown?
