---
layout: base
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
renderData:
  title: 'Tag: {{ tag }}'
  calendar: '{{ tag }}'
---
