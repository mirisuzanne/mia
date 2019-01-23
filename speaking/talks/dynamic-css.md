---
title: Dynamic CSS
layout: 'layouts/base'
events:
  - name: JSConf US
    date: 2018-08-22
  - name: CSSConf AR
    date: 2018-08-16
  - name: FullStackFest
    date: 2018-08-28
tags:
  - _talks
  - _talk_dynamic-css
summary: |
  Don't let the declarative syntax fool you,
  CSS is a dynamic language,
  **designed for the web**
templateEngineOverride: njk
---

{% import 'event.macros.njk' as event %}

{% markdown %}
# I can write *markdown* in this paired shortcode?
{% endmarkdown %}

{{ event.list(events, 'Page Events:') }}

{{ event.list(collections._all_events, 'All Events:') }}
