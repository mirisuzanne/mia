---
nav_only: true
layout: format/h-card
title: About
banner: Miriam Eric Suzanne
date: 1982-07-24
sub: |
  a.k.a [Mia]{.p-nickname} --
  [Author, Artist, and Web Developer]{.p-role}
description: Author, Artist, and Web Developer
hero:
  img: headshots/mia-smashing.jpg
  alt: |
    Miriam with a laptop and water bottle,
    wearing a bright yellow leather jacket,
    trans lightning earrings,
    and a headset mic
    while speaking at a conference.
eleventyComputed:
  headshots:
    - img: headshots/mia-smashing.jpg
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
    - img: headshots/from-the-hip.jpg
      url: |
        {{ 'headshots/from-the-hip.jpg' | imgSrc }}
      attrs:
        class: u-photo
      alt: |
        Miriam in a spotlight,
        standing at a mic and holding papers,
        in front of a large blank screen.
        From The Hip Photo watermark logo.
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
summary: |
  As a co-founder of
  <a class="h-card p-org" href="/orgs/oddbird/">OddBird</a>,
  <a class="h-card p-org" href="/orgs/teacup-gorilla/">Teacup Gorilla</a>,
  and
  <a class="h-card p-org" href="/orgs/grapefruit-lab/">Grapefruit Lab</a>
  I hope to create art & software
  that [celebrate the queerness](/why/)
  of human experience.
---

Over the last 15 years
I've published novels & albums & technical manuals;
created award-winning theater & open-source tools;
cleaned my bedroom more than once;
and presented at conferences around the world --
but I've never been promoted at a job,
done a whiteboard interview,
or graduated from college.
{.p-note}

{% import 'contact.macros.njk' as contact %}

{{ contact.links(social) }}

## Bios & Photos for Publication

{% for name, bio in bios %}
{% if name != 'intro' %}
### {{ name | capitalize }} Bio

<div class="p-note">
{{ bio | md | safe }}
</div>
{% endif %}
{% endfor %}

### Photos

{% import 'content.macros.njk' as content %}

{{ content.figure(
  headshots
) }}
