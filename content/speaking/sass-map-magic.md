---
title: Sass Map Magic
slides: https://www.oddbooksapp.com/book/sass-map-magic
tags:
  - speaking
  - code
events:
  - venue: CSSConf 2016
    url: https://2016.cssconf.com/
    adr: Boston, MA
    start: 2016-09-26
    slides: https://oddbooksapp.com/release/b71e6e5d-e956-42ff-a4dd-b70bf3b13a2a
    embed: &cssconf
      iframe: https://www.youtube.com/embed/MdwtoFt2LOI
      width: 560
      height: 315
  - venue: CSS Summit
    url: http://environmentsforhumans.com/2015/css-summit/
    adr: Online
    start: 2015-07-07
  - venue: Future Insights Live
    adr: Las Vegas, NV
    start: 2015-06-02
  - venue: SassConf 2014
    adr: New York, NY
    url: http://sassconf.com
    start: 2014-10-02
  - venue: BlendConf
    adr: Charlotte, NC
    url: http://www.blendconf.com/
    start: 2014-09-12
    video: http://teamtreehouse.com/library/sass-map-magic
summary: |
  **Maps are a powerful data type in Sass** —
  perfect for managing color and scale palettes,
  framework configuration, data storage, and more.
media:
  - span: full
    <<: *cssconf
---
{% import "content.macros.njk" as content %}

We'll find ways to integrate maps into any project
before we push them to their limits.

- What are Sass Maps, and how do I use them?
- Organizing variables with maps.
- Manipulating maps programmatically.
- The main problems with maps, and how we work around them.
- Automating pattern libraries and style guides based on maps.
- Fun with maps for data-storage, and natural-language syntax.

------

{{ content.fig(
  data=media,
  caption='Conference videos…'
) }}
