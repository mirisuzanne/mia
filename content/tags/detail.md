---
layout: base
sub: '[see all tags](/tags/)'
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
renderData:
  title: 'Just {{ tag }}'
  banner: 'Just {{ tag }} and Nothing Else'
  calendar: '{{ tag }}'
eleventyExcludeFromCollections: true
---

<!-- This is required, and I don't know why -->
