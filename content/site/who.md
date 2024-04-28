---
type: index
layout: format/h-card
title: About
banner: Miriam Eric Suzanne
date: 1982-07-24
sub: |
  a.k.a [Mia]{.p-nickname} --
  [Author, Artist, and Web Developer]{.p-role}
description: Author, Artist, and Web Developer
eleventyComputed:
  headshots:
    - img: headshots/selfie-direct.jpg
      url: |
        {{ 'headshots/selfie-direct.jpg' | imgSrc }}
      attrs:
        class: u-photo
      alt: |
        Miriam selfie in black coveralls
        and neon pink lightning-bolt earrings,
        with a lock of orange hair on one side.
    - img: headshots/mia-speaking.jpg
      url: |
        {{ 'headshots/mia-speaking.jpg' | imgSrc }}
      attrs:
        class: u-photo
      alt: |
        Miriam close up at a mic, smiling,
        in a brown flannel,
        in front of a blue screen.
    - img: headshots/syntax.jpg
      url: |
        {{ 'headshots/syntax.jpg' | imgSrc }}
      attrs:
        class: u-photo
      alt: |
        Miriam on stage with a bass under red lights,
        singing into a mic,
        with Dan on his knees playing guitar,
        and a drum set behind them.
    - img: headshots/pity-reaching.jpg
      url: |
        {{ 'headshots/pity-reaching.jpg' | imgSrc }}
      attrs:
        class: u-photo
      alt: |
        Miriam in yellow short-sleeve overalls and theater lighting
        reaches dramatically out across her body.
  cssday:
    - img: headshots/cssday-2023.webp
      alt: >
        Miriam on stage at CSS Day 2023,
        wearing various black and white patterns
      attrs:
        class: u-photo
      url: |
        {{ 'headshots/cssday-2023.webp' | imgSrc }}
  smashing:
    - img: headshots/mia-smashing.jpg
      span: full
      url: |
        {{ 'headshots/mia-smashing.jpg' | imgSrc }}
      attrs:
        class: u-photo
      alt: |
        Miriam with a laptop and water bottle,
        wearing a bright yellow leather jacket,
        trans lightning earrings,
        and a headset mic
        while speaking at a conference.
  narrators:
    - img: headshots/from-the-hip.jpg
      span: full
      url: |
        {{ 'headshots/from-the-hip.jpg' | imgSrc }}
      attrs:
        class: u-photo
      alt: |
        Miriam in a spotlight,
        standing at a mic and holding papers,
        in front of a large blank screen.
        From The Hip Photo watermark logo.
summary: |
  I hope to create art & software
  that [celebrate the queerness](/why/)
  of human experience.
---

{% import 'contact.macros.njk' as contact %}

<div class="p-note">
  {{ bios.intro | md | safe }}
</div>

{% for detail in ['art', 'code'] %}
<details id="{{ detail }}-bio">
  <summary>detailed {{ detail }} bio</summary>
  <div class="p-note">
    {{ bios[detail] | md | safe }}
  </div>
</details>
{% endfor %}

## Where to find me

{{ contact.links(social) }}

## Photos

{% import 'content.macros.njk' as content %}

{{ content.figure(headshots) }}
{{ content.figure(
  cssday,
  caption='photo by [Wiebrig Krakau](https://wiebrig.nl/)'
) }}
{{ content.figure(
  narrators,
  caption="photo by [From the Hip Photo](https://fromthehipphoto.com)"
) }}
{{ content.figure(
  smashing,
  caption='photo by Drew McLellan'
) }}

## Affiliations

{%- set orgs = collections.org | getPublic | withPageTense('ongoing') -%}
{% for item in orgs | sortBy('data.date') %}
  {% include 'part/hentry.njk' %}
{% endfor %}
