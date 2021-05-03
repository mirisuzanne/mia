---
feature: true
title: Container Queries Explainer & Proposal
sub: A path forward, with single-axis containment
url: https://github.com/oddbird/css-sandbox/blob/main/src/rwd/query/explainer.md
date: 2021-05-02
hero:
  img: talks/container-query.jpg
  width: 1279
  height: 696
  position: top
tags:
  - google
summary: |
  Media-queries allow an author
  to make style changes
  based on the overall viewport dimensions --
  but in many cases,
  authors would prefer styling modular components
  based on their context within a layout.
---

[My proposal][issue] builds on
[David Baron's `@container` proposal][dbaron],
which works by applying
size & layout containment to the queried elements.
Any element with both size & layout containment
can be queried using a new `@container` rule,
with similar syntax to existing media-queries.

The approach has been approved
by the CSS Working Group,
to be added in [CSS Containment Level 3][css-contain],
with me as one of the authors.

[issue]: https://github.com/w3c/csswg-drafts/issues/5796
[dbaron]: https://github.com/dbaron/container-queries-implementability
[css-contain]: https://drafts.csswg.org/css-contain-3/

```css
/* Establish containers */
main, aside {
  contain: layout inline-size;
}

/* Change styles according to container size */
@container (min-width: 35em) {
  .media {
    grid-gap: 1rem;
    grid-template: "media content" auto / max-content 1fr;
  }
}
```

## Prototype

Chrome has released a prototype in their nightly build.
To experiment with the feature,
and leave feedback while it is still in development:

1. Download Chrome Canary,
2. Go to `chrome://flags` in the url bar, and
3. Search for “CSS Container Queries” & enable the experimental feature
4. Restart the browser

This is a draft prototype and may not match the final design.

## Demos & Articles

For a quick introduction,
check out:

- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
  by **David Herron**
- [My collection of codepen demos](https://codepen.io/collection/XQrgJo)

Or dig into more resources,
for the full details:

- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
  by **Rachel Andrew**
- [Container Queries are actually coming](https://piccalil.li/blog/container-queries-are-actually-coming)
  by **Andy Bell**
- [Say Hello To CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/)
  by **Ahmad Shadeed** \
  ([Annotated on CSS Tricks](https://css-tricks.com/say-hello-to-css-container-queries/)
   by **Robin Rendle**)
- [CSS Container Queries: A First Look + Demo](https://www.bram.us/2021/03/28/css-container-queries-a-first-look-and-demo/)
  by **Bramus Van Damme**
- [Awesome-Container-Queries](https://github.com/sturobson/Awesome-Container-Queries)
  by **Stuart Robson**
