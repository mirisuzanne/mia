---
feature: true
title: CSS Cascade 6 (Scope)
sub: Specification for Scoped Styles
url: https://www.w3.org/TR/css-cascade-6/
date: 2020-09-15
index: css scope
tags:
  - csswg
  - css scope
events:
  - venue: Working Draft
    url: https://www.w3.org/TR/css-cascade-6/
    date: 2021-12-21
  - venue: Editor's Draft
    url: https://drafts.csswg.org/css-cascade-5/
    date: 2021-07-26
  - venue: Proposal & Explainer
    url: https://css.oddbird.net/scope/explainer/
    date: 2020-12-15
  - venue: Public Notes
    url: https://css.oddbird.net/scope/
    date: 2020-11-10
summary: |
  Cascade & Inheritance Level 6
  defines scoped styles --
  allowing authors to provide bounded ranges
  for selector-matching,
  and give priority to
  more 'proximate' scope origins.
---
{% import "content.macros.njk" as content %}
{% import "utility.macros.njk" as utility %}

There are many overlapping
and sometimes contradictory features
that can live under the concept of "scope" in CSS --
but they divide roughly into two approaches:

1. Total isolation of a component DOM subtree/fragment from the host page,
   so that no selectors get in or out
   unless explicitly requested.
2. Lighter-touch, style-driven namespacing,
   and prioritization of "proximity"
   when resolving the cascade.

That has lead to a wide range of proposals over the years,
including an old [scope specification][initial-spec]
that was never implemented.
Focus moved to Shadow-DOM,
which is mainly concerned with approach #1 --
full isolation.
Meanwhile authors have attempted to handle approach #2
through convoluted naming conventions (like [BEM][])
and JS tooling
(such as [CSS Modules][], [Styled Components][], & [Vue Scoped Styles][]).

In Cascade Level 6
we are developing a new native CSS approach to scope.

[initial-spec]: https://www.w3.org/TR/css-scoping-1/
[BEM]: https://getbem.com/
[CSS Modules]: https://github.com/css-modules/css-modules
[Styled Components]: https://styled-components.com/
[Vue Scoped Styles]: https://vue-loader.vuejs.org/guide/scoped-css.html

## Timeline & Documents

{% for event in events | sortBy('date') | reverse -%}
- {{ utility.link_if(event.venue, event.url) }} ({{ event.date | date }})
{% endfor %}

## Browser Support

A prototype of `@scope`
is available in Chrome Canary
with the _Experimental Web Platform Features_ flag enabled.
