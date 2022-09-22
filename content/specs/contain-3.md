---
feature: true
title: CSS Containment 3 (Container Queries)
sub: Specification for Container Queries & Units
url: https://www.w3.org/TR/css-contain-3/
date: 2020-09-15
index: container queries
tags:
  - csswg
  - container queries
events:
  - venue: Released in Browsers
    url: /2022/09/14/cq-browsers/
    date: 2022-08-30
  - venue: Working Draft
    url: https://www.w3.org/TR/css-contain-3/
    date: 2021-12-21
  - venue: Editor's Draft
    url: https://drafts.csswg.org/css-contain-3/
    date: 2021-02-26
  - venue: Proposal & Explainer
    url: https://css.oddbird.net/rwd/query/explainer/
    date: 2020-12-15
  - venue: Public Notes
    url: https://css.oddbird.net/rwd/query/
    date: 2020-11-14
resources:
  - title: MDN documentation
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries
  - title: Use the Right Container Query Syntax
    url: https://www.oddbird.net/2022/08/18/cq-syntax/
    credit: Miriam Suzanne
  - title: 'Container Queries: a Quick Start Guide'
    url: https://www.oddbird.net/2021/04/05/containerqueries/
    credit: David Herron
  - title: A Primer On CSS Container Queries
    url: https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/
    credit: Stephanie Eckles
    venue: Smashing Magazine
  - title: Say Hello To CSS Container Queries
    url: https://ishadeed.com/article/say-hello-to-css-container-queries/
    credit: Ahmad Shadeed
  - title: CSS Container Queries For Designers
    url: https://ishadeed.com/article/container-queries-for-designers/
    credit: Ahmad Shadeed
  - title: Container Queries in Web Components
    url: https://mxb.dev/blog/container-queries-web-components/
    credit: Max Böck
  - title: Container Queries are actually coming
    url: https://piccalil.li/blog/container-queries-are-actually-coming
    credit: Andy Bell
  - title: 'CSS Container Queries: A First Look + Demo'
    url: https://www.bram.us/2021/03/28/css-container-queries-a-first-look-and-demo/
    credit: Bramus Van Damme
  - title: 'Next Gen CSS: @container'
    url: https://css-tricks.com/next-gen-css-container/
    credit: Una Kravets
  - title: 'CSS Container Queries: Use-Cases And Migration Strategies'
    url: https://www.smashingmagazine.com/2021/05/css-container-queries-use-cases-migration-strategies/
    credit: Adrian Bece
    venue: Smashing Magazine
  - title: Twitch live-stream highlights
    url: https://www.twitch.tv/collections/8k9OzUpxdxb9VA
    credit: Stephanie Eckles
  - title: CSS Container Query Units
    url: https://ishadeed.com/article/container-query-units/
    credit: Ahmad Shadeed
  - title: Container Units Should Be Pretty Handy
    url: https://css-tricks.com/container-units-should-be-pretty-handy/
    credit: Chris Coyier
    venue: CSS-Tricks
summary: |
  CSS Containment Level 3
  defines Container Queries
  and container-relative units --
  allowing authors to build more intrinsic
  responsive components
  without knowledge of the overall layout.
---
{% import "content.macros.njk" as content %}
{% import "utility.macros.njk" as utility %}

Media-queries allow an author to make style changes
based on the overall viewport dimensions --
but in many cases,
authors would prefer styling modular components
based on their context and available space within a layout.
Earlier this year,
David Baron & Brian Kardell
proposed two complementary approaches to explore:
a [`@container` rule][dbaron-cq],
and a [`switch()`][switch] function.
Both could be useful in different cases.

[dbaron-cq]: https://github.com/dbaron/container-queries-implementability
[switch]: https://bkardell.com/blog/AllThemSwitches.html

This specification builds on David Baron's `@container` approach,
with a syntax that is similar to media queries.
We also define 'container-relative units' (`cq*`)
that match the existing 'viewport-relative units' (`v*`).

## Resources {id=resources}

{% for item in resources -%}
- {{ utility.link_if(item.title, item.url) }}{% if item.credit %} by _{{ item.credit }}_{% endif %}{% if item.venue %} at **{{ item.venue }}**{% endif %}
{% endfor %}

## Browser Support

{{ content.caniuse('css-container-queries') }}
{{ content.caniuse('css-container-query-units') }}
