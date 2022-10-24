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

## Affiliations

{%- set orgs = collections.org | getPublic | withPageTense('ongoing') -%}
{% for item in orgs | sortBy('data.date') %}
  {% include 'part/hentry.njk' %}
{% endfor %}
