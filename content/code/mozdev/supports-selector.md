---
title: Selector Support Queries
banner: Use new selectors responsibly with selector queries
sub: Just in time for [Selectors Level 4](https://www.w3.org/TR/selectors-4/)!
date: 2019-11-20
hero:
  img: mozdev/supports_selector.png
summary: |
  Firefox 69 was the first to implement selector feature queries,
  but other browsers are following suit.
  I'll show you how it works,
  and how to start using this new feature query right away.
media:
  - iframe: https://www.youtube.com/embed/WjvJheGhHIQ
    width: 560
    height: 315
---
{% import "content.macros.njk" as content %}

There are many ways to start using a new feature in CSS
without waiting for full cross-browser support,
but "feature queries" are the most clear and explicit.
We can use them to test for browser support,
and provide targeted styles only where they are supported.
Now we can do the same with new selectors,
like `::marker` or `:focus-visible`!

{{ content.fig(
  data=media,
  caption='Selector queries allow us to finesse browser-support in new ways'
) }}

- [Firefox 69 Release Notes](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/69)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports#Testing_for_the_support_of_a_selector)
- [Caniuse](https://caniuse.com/#feat=mdn-css_at-rules_supports_selector)
- [Demos](https://mozdemos.netlify.com/support-selector/)
