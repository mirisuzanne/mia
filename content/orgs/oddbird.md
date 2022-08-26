---
title: OddBird
sub: Custom web applications, developer tools, and training
org: Co-Founder
type: web agency
date: 2008-04-15
end: ongoing
hero:
  svg: oddbird.svg
index: oddbird
tags:
  - code
  - speaking
press:
  - text: |
      Working with OddBird
      was the best outsourcing experience I’ve ever had.
      OddBird became an extension of our team.
    credit: Jason Lantz
    venue: Salesforce.org (MetaDeploy)
  - text: |
      Other developers build exactly what you say,
      or they don’t understand,
      and develop the wrong thing.
      OddBird always thinks about the project goals.
      I defer to the team expertise now,
      which makes a better result.
    credit: Rohit Puranik
    venue: Lab06 (MedCurbside)
  - text: |
      OddBird is high-caliber and nimble.
      Innovative at heart.
      Together, we fundamentally transformed
      the Chicago public school system.
    credit: Furman Brown
    venue: Sensible Innovation (TegyTime)
  - text: |
      Since OddBird thinks about handoff from the beginning,
      maintenance has been super easy.
      For example, 100% unit test coverage was a given.
      I never had to ask for it.
    credit: Sara Taillon
    venue: ORCAS (CoachHub)
summary: |
  I co-founded [OddBird](https://oddbird.net)
  with my brothers in 2008
  to create scalable,
  accessible,
  and performant web applications
  with a human-centered design.
---

Over the years, we’ve become industry leaders --
creating and contributing to
the languages and open source tools
that millions of developers rely on.
We provide enterprise-level expertise,
with the focus and personal attention
of a boutique.

## CSS, HTML, & Sass

Since early 2020
a large part of our work
has been developing new
specifications
for the CSS, HTML, and Sass
programming languages --
along with tools & polyfills
to help authors use the latest features.
Check out our [public notebook](https://css.oddbird.net)
to follow that work as it develops.

{% for spec in collections.spec -%}
- [{{ (spec.data.banner or spec.data.title) | mdInline | safe }}]({{ spec.url }})
{% endfor %}

---

{% import "macros/quote.njk" as quote %}
{{ quote.list(press) }}
