---
title: CSS Cascade 5 (Layers)
sub: Specification for Cascade Layers
url: https://www.w3.org/TR/css-cascade-5/
date: 2020-09-15
type: css spec
index: cascade layers
tags:
  - csswg
  - cascade layers
events:
  - venue: PostCSS Polyfill
    url: https://github.com/csstools/postcss-plugins
    date: 2022-05-12
  - venue: Released in Browsers
    url: https://caniuse.com/css-cascade-layers
    date: 2022-02-08
    feature: true
  - venue: Working Draft
    url: https://www.w3.org/TR/css-cascade-5/
    date: 2021-01-19
  - venue: Explainer
    url: https://css.oddbird.net/layers/explainer/
    date: 2021-01-08
  - venue: Public Notes
    url: https://css.oddbird.net/layers/
    date: 2020-11-12
  - venue: Editor's Draft
    url: https://drafts.csswg.org/css-cascade-5/
    date: 2020-09-15
  - venue: Initial Proposal
    url: https://github.com/w3c/csswg-drafts/issues/4470
    date: 2019-10-29
resources:
  - title: MDN documentation
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/@layer
  - title: 'The Future of CSS: Cascade Layers'
    url: https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/
    credit: Bramus Van Damme
  - title: Getting Started With CSS Cascade Layers
    url: https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/
    credit: Stephanie Eckles
    venue: Smashing Magazine
  - title: A Complete Guide to CSS Cascade Layers
    venue: CSS-Tricks
    url: https://css-tricks.com/css-cascade-layers/
summary: |
  Cascade & Inheritance Level 5
  defines Cascade Layers --
  allowing authors to define
  explicit contained layers of specificity.
---
{% import "content.macros.njk" as content %}
{% import "utility.macros.njk" as utility %}

The CSS Cascade is designed to balance concerns,
and give some styles priority over others.
That starts with a balance of power
between three "origins" --
users, authors, and user agents (aka browsers).

By default, author styles override user styles,
which override user-agent styles.
However, the order is reversed
for any styles that are marked as `!important` --
so that browsers can define what is _out of bounds_,
and users can insist on their most essential _preferences_.

Site authors are often able to write styles
without much consideration for the other origins involved.
But as site styles have become more complex --
relying on larger teams and third-party code --
there are also many 'concerns' represented
within the single origin.
In order to balance those concerns,
authors have been limited in their control of the cascade:

- The binary `!important` flag
  can be applied to individual style declarations,
  with important declarations
  overriding non-important declarations.
- The 'selector specificity' heuristic
  gives more narrowly targeted (specific) selectors
  priority over more broadly applied selectors.
- Later declarations override earlier declarations.

Over the years
authors have developed a number of different 'conventions'
to help manage styles,
especially in order to 'tame' or control the cascade.
In many cases,
these conventions rely on balancing concerns
between defaults, basic typography,
design systems, component libraries, themes,
and third-party tools.

At the end of 2019
I suggested that authors should be able to define 'custom origins'
within the existing cascade origins.
The goal was to:

- provide a more explicit tool
  for balancing concerns
  and resolving issues often seen as "specificity problems"
- help teach the powerful concepts already built into the core of the language
- make it more clear how `!important` is designed to work

## Resources

{% for item in resources | sortBy('date') | reverse -%}
- {{ utility.link_if(item.title, item.url) }}{% if item.credit %} by _{{ item.credit }}_{% endif %}{% if item.venue %} at **{{ item.venue }}**{% endif %}
{% endfor %}

## Timeline & Documents

{% for event in events | sortBy('date') | reverse -%}
- {{ utility.link_if(event.venue, event.url) }} ({{ event.date | date }})
{% endfor %}

## Browser Support

{{ content.caniuse('css-cascade-layers') }}
