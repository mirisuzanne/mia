---
layout: base
sub: and nothing else... ([see all tags](/tags/))
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
renderData:
  title: 'Just {{ tag }}'
  calendar: '{{ tag }}'
eleventyExcludeFromCollections: true
hide_content: true
---

<!-- This is required, and I don't know why -->
