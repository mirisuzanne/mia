---
title: Winging It, with CSS Cascade Layers
sub: episode 1
date: 2023-07-20
tags:
  - css
  - cascade layers
media:
  - iframe: https://www.youtube.com/embed/FwICaSE8iuY
summary: |
  If you've ever found yourself in a specificity war, you'll understand how
  important having control over style priority can be. During our conversation,
  we discussed what CSS Layers are and how you can use them in your project.
---

{% import 'content.macros.njk' as content %}

{{ content.figure(
  data=media
) }}

[Subscribe to the Winging It Channel »](http://www.youtube.com/channel/UCUkHxN78y9On9YH1zd-aTGw?sub_confirmation=1)

## What we cover:

- What is the cascade, and why is it important in CSS?
- How we historically dealt with cascade/specificity problems (before layers)
- What CSS Layers are and how they work
- Why unlayered styles are prioritized
- How to start using Layers within a project
- Additional best practices when using Layers

We also chat about what's new in CSS, including new color tools, `:has`, scope,
nesting, and more.

## Links:

- [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers/)
- [Cascade Layers – There's a Polyfill for That!](https://oddbird.net/2022/06/21/cascade-layers-polyfill/)
- [CSS Cascade Layers Polyfill Demo](https://layers-polyfill-example.netlify.app/)
- [PostCSS Cascade Layers](https://www.npmjs.com/package/@csstools/postcss-cascade-layers)
