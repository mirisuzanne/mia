---
title: CSS State Toggles [WIP]
sub: Declarative controls for presentational state
url: https://tabatkins.github.io/css-toggle/
date: 2022-06-12
type: unofficial draft spec
tags:
  - w3c
  - state toggles
index: state toggles
events:
  - venue: Proposal & Explainer
    url: https://css.oddbird.net/toggles/explainer/
    date: 2022-03-02
  - venue: Unofficial Draft
    url: https://tabatkins.github.io/css-toggle/
    date: 2021-06-04
---

There are many use-cases where an interaction
(keyboard, mouse, or gesture) on one element
toggles a ‘state’ that can be shared with other elements.
This can range from switching light/dark mode,
to activating slide-in navigation,
opening and closing menus,
or interacting with sectioned content
such as tabs, accordions, or carousels.

These cases currently require custom Javascript,
or form-element hacks,
which add a barrier for authors
otherwise capable of implementing the visual design --
and often result in less performant,
less accessible solutions.

We propose generalizing the
ability to declaratively toggle and share
presentational state,
so that it can be applied to any element
using a declarative syntax in CSS,
with built-in accessibility and performance.
For example:

```css
html {
  /* establish a color-mode toggle on the html element */
  /* with light, dark, and (default) auto states */
  toggle-root: color-mode [auto light dark] at auto;
}

button[toggle-colors] {
  /* on activation, increment color-mode to next state */
  toggle-trigger: color-mode;
}
```

Both the syntax and functionality
are still likely to change,
as we work out the details.
There are a number of major issues to resolve still,
especially when it comes to accessibility.

The OddBird team has built a
rough [JS polyfill](https://github.com/oddbird/css-toggles)
of the proposed syntax,
to help understand those remaining issues.
Hopefully these are all solvable problems,
and we can move this work into the official CSSWG
standards track before long.
