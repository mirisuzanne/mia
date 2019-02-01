---
layout: base
banner:
  sub: and nothing else...
  tags: see all
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
renderData:
  title: "Just {{ tag }}"
  calendar: '{{ tag }}'
---
